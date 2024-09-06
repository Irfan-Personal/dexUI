import React from 'react';
import { render } from '@testing-library/react';
import WalletVisual from './index';
import { mockWallets } from '__mock__';

describe('WalletVisual', () => {
  it('should create account visual of an address', () => {
    const wrapper = render(<WalletVisual address={mockWallets.genesis.summary.address} />);

    // should render an svg element
    expect(wrapper.getAllByTestId('svg')).toHaveLength(1);
    expect(wrapper.getByTestId('svg').getAttribute('height')).toEqual('40');
    expect(wrapper.getByTestId('svg').getAttribute('width')).toEqual('40');

    // with 3 circles and 1 polygon
    expect(wrapper.getAllByTestId('circle')).toHaveLength(2);
    expect(wrapper.getAllByTestId('polygon')).toHaveLength(2);

    // and a circle of full width and height of the svg
    expect(wrapper.getAllByTestId('circle')[0].getAttribute('cx')).toEqual('20');
    expect(wrapper.getAllByTestId('circle')[0].getAttribute('cy')).toEqual('20');
    expect(wrapper.getAllByTestId('circle')[0].getAttribute('r')).toEqual('20');

    // and another big circle on a side
    expect(wrapper.getAllByTestId('circle')[1].getAttribute('cx')).toEqual('16.32');
    expect(wrapper.getAllByTestId('circle')[1].getAttribute('cy')).toEqual('15.32');
    expect(wrapper.getAllByTestId('circle')[1].getAttribute('r')).toEqual('4.32');
  });

  it('test placeholder property', () => {
    const wrapper = render(<WalletVisual address={mockWallets.genesis.summary.address} placeholder='address' />);
    expect(wrapper.getByTestId('wallet-visual-placeholder')).toBeInTheDocument();
  });
});
