import { ProposalTypes } from '@walletconnect/types';

import {
  DEFAULT_CHAINS,
  DEFAULT_LISK_EVENTS,
  DEFAULT_LISK_METHODS,
} from 'consts';


export const getNamespacesFromChains = (chains: string[]) => {
  const supportedNamespaces: string[] = [];
  chains.forEach(chainId => {
    const [namespace] = chainId.split(':');
    if (!supportedNamespaces.includes(namespace)) {
      supportedNamespaces.push(namespace);
    }
  });

  return supportedNamespaces;
};

export const getSupportedMethodsByNamespace = (namespace: string) => {
  switch (namespace) {
  case 'lisk':
    return Object.values(DEFAULT_LISK_METHODS);
  default:
    throw new Error(`No default methods for namespace: ${namespace}`);
  }
};

export const getSupportedEventsByNamespace = (namespace: string) => {
  switch (namespace) {
  case 'lisk':
    return Object.values(DEFAULT_LISK_EVENTS);
  default:
    throw new Error(`No default events for namespace: ${namespace}`);
  }
};

export const getRequiredNamespaces = (chains: string[]): ProposalTypes.RequiredNamespaces => {
  const selectedNamespaces = getNamespacesFromChains(chains);
  console.log('selected namespaces:', selectedNamespaces);

  return Object.fromEntries(
    selectedNamespaces.map(namespace => [
      namespace,
      {
        methods: getSupportedMethodsByNamespace(namespace),
        chains: chains.filter(chain => chain.startsWith(namespace)),
        events: getSupportedEventsByNamespace(namespace) as any[],
      },
    ]),
  );
};

export const getAllChainNamespaces = () => {
  const namespaces: string[] = [];
  DEFAULT_CHAINS.forEach(chainId => {
    const [namespace] = chainId.split(':');
    if (!namespaces.includes(namespace)) {
      namespaces.push(namespace);
    }
  });
  return namespaces;
};
