import { createContext, ReactNode, useContext, useState } from 'react';
import bs58 from 'bs58';

import { getLocalStorageTestnetFlag } from 'utils';
import { useWalletConnectClient } from './ClientContext';
import {
  DEFAULT_LISK_METHODS,
} from 'consts';
import { codec } from '@liskhq/lisk-codec';

const baseTransactionSchema = {
  $id: '/lisk/baseTransaction',
  type: 'object',
  required: ['module', 'command', 'nonce', 'fee', 'senderPublicKey', 'params'],
  properties: {
    module: {
      dataType: 'string',
      fieldNumber: 1,
    },
    command: {
      dataType: 'string',
      fieldNumber: 2,
    },
    nonce: {
      dataType: 'uint64',
      fieldNumber: 3,
    },
    fee: {
      dataType: 'uint64',
      fieldNumber: 4,
    },
    senderPublicKey: {
      dataType: 'bytes',
      fieldNumber: 5,
    },
    params: {
      dataType: 'bytes',
      fieldNumber: 6,
    },
    signatures: {
      type: 'array',
      items: {
        dataType: 'bytes',
      },
      fieldNumber: 7,
    },
  },
};

const encodeTransaction = async (tx: any, paramsSchema: any) => {
  let encodedParams;
  if (!Buffer.isBuffer(tx.params)) {
    encodedParams = paramsSchema ? codec.encode(paramsSchema, tx.params) : Buffer.alloc(0);
  } else {
    encodedParams = tx.params;
  }

  const encodedTransaction = codec.encode(baseTransactionSchema, {
    ...tx,
    params: encodedParams,
  });

  return encodedTransaction;
};

const fromTransactionJSON = async (rawTx: any, paramsSchema: any) => {
  const tx = codec.fromJSON(baseTransactionSchema, {
    ...rawTx,
    params: '',
  });

  let params;
  if (typeof rawTx.params === 'string') {
    params = paramsSchema ? codec.decode(paramsSchema, Buffer.from(rawTx.params, 'hex')) : {};
  } else {
    params = paramsSchema ? codec.fromJSON(paramsSchema, rawTx.params) : {};
  }

  return {
    ...tx,
    id: rawTx.id ? Buffer.from(rawTx.id, 'hex') : Buffer.alloc(0),
    params,
  };
};

/**
 * Types
 */
interface IFormattedRpcResponse {
  method?: string;
  address?: string;
  valid: boolean;
  result: string;
}

type TRpcRequestCallback = (chainId: string, address: string, schema: any, rawTx: any) => Promise<void>;

interface IContext {
  ping: () => Promise<void>;
  liskRpc: {
    testSignMessage: TRpcRequestCallback;
    signTransaction: TRpcRequestCallback;
  };
  rpcResult?: IFormattedRpcResponse | null;
  isRpcRequestPending: boolean;
  isTestnet: boolean;
  setIsTestnet: (isTestnet: boolean) => void;
}

/**
 * Context
 */
export const JsonRpcContext = createContext<IContext>({} as IContext);

/**
 * Provider
 */
export function JsonRpcContextProvider({ children }: { children: ReactNode | ReactNode[] }) {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<IFormattedRpcResponse | null>();
  const [isTestnet, setIsTestnet] = useState(getLocalStorageTestnetFlag());

  const { client, session } = useWalletConnectClient();

  // const { chainData } = useChainData();

  const _createJsonRpcRequestHandler =
    (rpcRequest: (chainId: string, address: string, schema: any, rawTx: any) => Promise<IFormattedRpcResponse>) =>
      async (chainId: string, address: string, schema: any, rawTx: any) => {
        if (typeof client === 'undefined') {
          throw new Error('WalletConnect is not initialized');
        }
        if (typeof session === 'undefined') {
          throw new Error('Session is not connected');
        }

        try {
          setPending(true);
          const result = await rpcRequest(chainId, address, schema, rawTx);
          setResult(result);
        } catch (err: any) {
          console.error('RPC request failed: ', err);
          setResult({
            address,
            valid: false,
            result: err?.message ?? err,
          });
          throw new Error(err);
        } finally {
          setPending(false);
        }
      };

  // const _verifyEip155MessageSignature = (message: string, signature: string, address: string) =>
  //   utils.verifyMessage(message, signature).toLowerCase() === address.toLowerCase();

  const ping = async () => {
    if (typeof client === 'undefined') {
      throw new Error('WalletConnect is not initialized');
    }
    if (typeof session === 'undefined') {
      throw new Error('Session is not connected');
    }

    try {
      setPending(true);

      let valid = false;

      try {
        await client.ping({ topic: session.topic });
        valid = true;
      } catch (e) {
        valid = false;
      }

      // display result
      setResult({
        method: 'ping',
        valid,
        result: valid ? 'Ping succeeded' : 'Ping failed',
      });
    } catch (e) {
      setResult(null);
    } finally {
      setPending(false);
    }
  };

  // -------- LISK RPC METHODS --------

  const liskRpc = {
    signTransaction: _createJsonRpcRequestHandler(
      async (chainId: string, address: string, schema: any, rawTx: any): Promise<IFormattedRpcResponse> => {
        const tx = await fromTransactionJSON(rawTx, schema);
        const binary = await encodeTransaction(tx, schema);
        const payload = binary.toString('hex');

        try {
          console.log('client: ', client);
          //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const result = await client!.request<string>({
            chainId,
            //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            topic: session!.topic,
            request: {
              method: DEFAULT_LISK_METHODS.LSK_SIGN_TRANSACTION,
              params: {
                payload,
                schema,
                recipientChainID: '01000011',
              },
            },
          });

          console.log('before valid true');

          // @todo verify the signatures
          const valid = true;

          rawTx.signatures = [...JSON.parse(result).signatures];

          const _tx = await fromTransactionJSON(rawTx, schema);
          const _binary = await encodeTransaction(_tx, schema);
          const _signedTransaction = _binary.toString('hex');

          return {
            method: DEFAULT_LISK_METHODS.LSK_SIGN_TRANSACTION,
            address,
            valid,
            result: _signedTransaction,
          };
        } catch (error: any) {
          console.log('error', error);
          throw new Error(error);
        }
      },
    ),
    testSignMessage: _createJsonRpcRequestHandler(
      async (chainId: string, address: string): Promise<IFormattedRpcResponse> => {
        // Encode message to `UInt8Array` first via `TextEncoder` so we can pass it to `bs58.encode`.
        const message = bs58.encode(
          new TextEncoder().encode(`This is an example message to be signed - ${Date.now()}`),
        );

        try {
          //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          const result = await client!.request<{ signature: string }>({
            chainId,
            //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            topic: session!.topic,
            request: {
              method: DEFAULT_LISK_METHODS.LSK_SIGN_MESSAGE,
              params: {
                address: address,
                message,
              },
            },
          });

          const valid = true; // @todo fix the validator

          return {
            method: DEFAULT_LISK_METHODS.LSK_SIGN_MESSAGE,
            address,
            valid,
            result: result.signature,
          };
        } catch (error: any) {
          throw new Error(error);
        }
      },
    ),
  };

  return (
    <JsonRpcContext.Provider
      value={{
        ping,
        liskRpc,
        rpcResult: result,
        isRpcRequestPending: pending,
        isTestnet,
        setIsTestnet,
      }}
    >
      {children}
    </JsonRpcContext.Provider>
  );
}

export function useJsonRpc() {
  const context = useContext(JsonRpcContext);
  if (context === undefined) {
    throw new Error('useJsonRpc must be used within a JsonRpcContextProvider');
  }
  return context;
}
