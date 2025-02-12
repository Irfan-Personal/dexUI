import Client from '@walletconnect/sign-client';
import { PairingTypes, SessionTypes } from '@walletconnect/types';
import QRCodeModal from '@walletconnect/qrcode-modal';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { PublicKey } from '@solana/web3.js';
import { AccountBalances, IAccount } from 'models';
import { DEFAULT_APP_METADATA, DEFAULT_LOGGER, DEFAULT_PROJECT_ID, DEFAULT_RELAY_URL } from 'consts';
import { getAppMetadata, getSdkError } from '@walletconnect/utils';
import { getAccountsFromNamespaces, getRequiredNamespaces } from 'utils';
import { address as addressFunctions } from '@liskhq/lisk-cryptography';

const getLisk32AddressFromPublicKey = (publicKey: string) => addressFunctions.getLisk32AddressFromPublicKey(Buffer.from(publicKey, 'hex'));

/**
 * Types
**/
interface IContext {
  client: Client | undefined;
  session: SessionTypes.Struct | undefined;
  connect: (pairing?: { topic: string }, callback?: (uri: string) => void) => Promise<void>;
  disconnect: () => Promise<void>;
  isInitializing: boolean;
  chains: string[];
  pairings: PairingTypes.Struct[];
  accounts: IAccount[];
  liskPublicKeys?: Record<string, PublicKey>;
  balances: AccountBalances;
  isFetchingBalances: boolean;
  setChains: any;
}

/**
 * Context
 */
export const ClientContext = createContext<IContext>({} as IContext);

/**
 * Provider
 */
export function ClientContextProvider({ children }: { children: ReactNode | ReactNode[] }) {
  const [client, setClient] = useState<Client>();
  const [pairings, setPairings] = useState<PairingTypes.Struct[]>([]);
  const [session, setSession] = useState<SessionTypes.Struct>();

  const [isFetchingBalances, setIsFetchingBalances] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);

  const [balances, setBalances] = useState<AccountBalances>({});
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [chains, setChains] = useState<string[]>([]);

  const reset = () => {
    setSession(undefined);
    setBalances({});
    setAccounts([]);
    setChains([]);
  };

  const getAccountsAddresses = async (_accounts: string[]) => {
    setIsFetchingBalances(true);
    try {
      const arr = await Promise.all(
        _accounts.map(async account => {
          const [namespace, reference, publicKey] = account.split(':');
          const address = getLisk32AddressFromPublicKey(publicKey);
          return {
            chainId: `${namespace}:${reference}`,
            publicKey,
            address
          };
        }),
      );

      setAccounts(arr);
    } catch (e) {
      console.error(e);
    } finally {
      setIsFetchingBalances(false);
    }
  };

  const onSessionConnected = useCallback(async (_session: SessionTypes.Struct) => {
    const allNamespaceAccounts = Object.values(_session.namespaces)
      .map(namespace => namespace.accounts)
      .flat();
    const allNamespaceChains = Object.keys(_session.namespaces);

    setSession(_session);
    setChains(allNamespaceChains);
    setAccounts(getAccountsFromNamespaces(allNamespaceAccounts));
    await getAccountsAddresses(allNamespaceAccounts);
  }, []);

  const connect = useCallback(
    async (pairing: any, callback?: any) => {
      if (typeof client === 'undefined') {
        throw new Error('WalletConnect is not initialized');
      }
      console.log('connect, pairing topic is:', pairing?.topic);
      try {
        const requiredNamespaces = getRequiredNamespaces(chains);
        console.log('requiredNamespaces config for connect:', requiredNamespaces);

        const { uri, approval } = await client.connect({
          pairingTopic: pairing?.topic,
          requiredNamespaces,
        });

        if (uri) {
          callback(uri);
        }

        const session = await approval();
        console.log('Established session:', session);
        await onSessionConnected(session);
        // Update known pairings after session is connected.
        setPairings(client.pairing.getAll({ active: true }));
      } catch (e) {
        console.error(e);
        // ignore rejection
      } finally {
        // close modal in case it was open
        QRCodeModal.close();
      }
    },
    [chains, client, onSessionConnected],
  );

  const disconnect = useCallback(async () => {
    if (typeof client === 'undefined') {
      throw new Error('WalletConnect is not initialized');
    }
    if (typeof session === 'undefined') {
      throw new Error('Session is not connected');
    }
    await client.disconnect({
      topic: session.topic,
      reason: getSdkError('USER_DISCONNECTED'),
    });
    // Reset app state after disconnect.
    reset();
  }, [client, session]);

  const _subscribeToEvents = useCallback(
    async (_client: Client) => {
      if (typeof _client === 'undefined') {
        throw new Error('WalletConnect is not initialized');
      }

      _client.on('session_ping', args => {
        console.log('EVENT', 'session_ping', args);
      });

      _client.on('session_event', args => {
        console.log('EVENT', 'session_event', args);
      });

      _client.on('session_update', ({ topic, params }) => {
        console.log('EVENT', 'session_update', { topic, params });
        const { namespaces } = params;
        const _session = _client.session.get(topic);
        const updatedSession = { ..._session, namespaces };
        onSessionConnected(updatedSession);
      });

      _client.on('session_delete', () => {
        console.log('EVENT', 'session_delete');
        reset();
      });
    },
    [onSessionConnected],
  );

  const _checkPersistedState = useCallback(
    async (_client: Client) => {
      if (typeof _client === 'undefined') {
        throw new Error('WalletConnect is not initialized');
      }
      // populates existing pairings to state
      setPairings(_client.pairing.getAll({ active: true }));
      console.log('RESTORED PAIRINGS: ', _client.pairing.getAll({ active: true }));

      if (typeof session !== 'undefined') return;
      // populates (the last) existing session to state
      if (_client.session.length) {
        const lastKeyIndex = _client.session.keys.length - 1;
        const _session = _client.session.get(_client.session.keys[lastKeyIndex]);
        console.log('RESTORED SESSION:', _session);
        await onSessionConnected(_session);
        return _session;
      }
    },
    [session, onSessionConnected],
  );

  const createClient = useCallback(async () => {
    try {
      setIsInitializing(true);

      const _client = await Client.init({
        logger: DEFAULT_LOGGER,
        relayUrl: DEFAULT_RELAY_URL,
        projectId: DEFAULT_PROJECT_ID,
        metadata: getAppMetadata() || DEFAULT_APP_METADATA,
      });

      console.log('CREATED CLIENT: ', _client);
      setClient(_client);
      await _subscribeToEvents(_client);
      await _checkPersistedState(_client);
    } finally {
      setIsInitializing(false);
    }
  }, [_checkPersistedState, _subscribeToEvents]);

  useEffect(() => {
    if (!client) {
      createClient();
    }
  }, [client, createClient]);

  const value = useMemo(
    () => ({
      pairings,
      isInitializing,
      balances,
      isFetchingBalances,
      accounts,
      chains,
      client,
      session,
      connect,
      disconnect,
      setChains,
    }),
    [
      pairings,
      isInitializing,
      balances,
      isFetchingBalances,
      accounts,
      chains,
      client,
      session,
      connect,
      disconnect,
      setChains,
    ],
  );

  return (
    <ClientContext.Provider
      value={{
        ...value,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}

export function useWalletConnectClient() {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useWalletConnectClient must be used within a ClientContextProvider');
  }
  return context;
}
