import { DEFAULT_LISK_EVENTS, DEFAULT_LISK_METHODS } from 'consts';
import { getNamespacesFromChains, getSupportedMethodsByNamespace, getSupportedEventsByNamespace, getRequiredNamespaces, getAllChainNamespaces } from './index';

describe('test namespaces functions', () => {
  it('getNamespacesFromChains', () => {
    expect(getNamespacesFromChains(['lisk:04000011'])).toEqual(['lisk']);
  });

  it('getSupportedMethodsByNamespace', () => {
    expect(getSupportedMethodsByNamespace('lisk')).toEqual(Object.values(DEFAULT_LISK_METHODS));
  });

  it('getSupportedMethodsByNamespace error case', () => {
    expect(() => getSupportedMethodsByNamespace('default')).toThrow(Error('No default methods for namespace: default'));
  });

  it('getSupportedEventsByNamespace', () => {
    expect(getSupportedEventsByNamespace('lisk')).toEqual(Object.values(DEFAULT_LISK_EVENTS));
  });

  it('getSupportedEventsByNamespace error case', () => {
    expect(() => getSupportedEventsByNamespace('default')).toThrow(Error('No default events for namespace: default'));
  });

  it('getRequiredNamespaces', () => {
    expect(getRequiredNamespaces(['lisk:04000011'])).toEqual({ 'lisk': { 'chains': ['lisk:04000011'], 'events': [], 'methods': ['sign_transaction', 'sign_message'] } });
  });

  it('getAllChainNamespaces', () => {
    expect(getAllChainNamespaces()).toEqual(['lisk']);
  });
});
