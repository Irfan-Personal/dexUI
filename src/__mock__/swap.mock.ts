import { IToken, ITokenDetail } from 'models';

export const mockTokens: IToken[] = [
  {
    'chainID': '04000011',
    'chainName': 'Dex',
    'tokenID': '0400001100000000',
    'tokenName': 'Dex',
    'networkType': 'devnet',
    'description': 'Native Utility Token',
    'logo': {
      'png': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/devnet/Dex/images/tokens/dex.png',
      'svg': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/devnet/Dex/images/tokens/dex.svg'
    },
    'symbol': 'DEX',
    'displayDenom': 'dex',
    'baseDenom': 'dex',
    'denomUnits': [
      {
        'denom': 'dex',
        'decimals': 0,
        'aliases': []
      }
    ]
  },
  {
    'chainID': '04000001',
    'chainName': 'enevti',
    'tokenID': '0400000100000000',
    'tokenName': 'Enevti',
    'networkType': 'devnet',
    'description': 'Native Utility Token',
    'logo': {
      'png': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/devnet/Enevti/images/tokens/enevti.png',
      'svg': ''
    },
    'symbol': 'ENVT',
    'displayDenom': 'envt',
    'baseDenom': 'ventti',
    'denomUnits': [
      {
        'denom': 'ventti',
        'decimals': 0,
        'aliases': []
      },
      {
        'denom': 'envt',
        'decimals': 8,
        'aliases': []
      }
    ]
  },
  {
    'chainID': '00000000',
    'chainName': 'lisk_mainchain',
    'tokenID': '0000000000000000',
    'tokenName': 'Lisk',
    'networkType': 'mainnet',
    'description': 'Default token for the entire Lisk ecosystem',
    'logo': {
      'png': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/mainnet/Lisk/images/tokens/lisk.png',
      'svg': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/mainnet/Lisk/images/tokens/lisk.svg'
    },
    'symbol': 'LSK',
    'displayDenom': 'lsk',
    'baseDenom': 'beddows',
    'denomUnits': [
      {
        'denom': 'beddows',
        'decimals': 0,
        'aliases': [
          'Beddows'
        ]
      },
      {
        'denom': 'lsk',
        'decimals': 8,
        'aliases': [
          'Lisk'
        ]
      }
    ]
  },
  {
    'chainID': '01000000',
    'chainName': 'lisk_mainchain',
    'tokenID': '0100000000000000',
    'tokenName': 'Lisk',
    'networkType': 'testnet',
    'description': 'Default token for the entire Lisk ecosystem',
    'logo': {
      'png': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/testnet/Lisk/images/tokens/lisk.png',
      'svg': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/testnet/Lisk/images/tokens/lisk.svg'
    },
    'symbol': 'LSK',
    'displayDenom': 'lsk',
    'baseDenom': 'beddows',
    'denomUnits': [
      {
        'denom': 'beddows',
        'decimals': 0,
        'aliases': [
          'Beddows'
        ]
      },
      {
        'denom': 'lsk',
        'decimals': 8,
        'aliases': [
          'Lisk'
        ]
      }
    ]
  },
  {
    'chainID': '02000000',
    'chainName': 'lisk_mainchain',
    'tokenID': '0200000000000000',
    'tokenName': 'Lisk',
    'networkType': 'betanet',
    'description': 'Default token for the entire Lisk ecosystem',
    'logo': {
      'png': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/betanet/Lisk/images/tokens/lisk.png',
      'svg': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/betanet/Lisk/images/tokens/lisk.svg'
    },
    'symbol': 'LSK',
    'displayDenom': 'lsk',
    'baseDenom': 'beddows',
    'denomUnits': [
      {
        'denom': 'beddows',
        'decimals': 0,
        'aliases': [
          'Beddows'
        ]
      },
      {
        'denom': 'lsk',
        'decimals': 8,
        'aliases': [
          'Lisk'
        ]
      }
    ]
  },
  {
    'chainID': '04000000',
    'chainName': 'lisk_mainchain',
    'tokenID': '0400000000000000',
    'tokenName': 'Lisk',
    'networkType': 'devnet',
    'description': 'Default token for the entire Lisk ecosystem',
    'logo': {
      'png': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/devnet/Lisk/images/tokens/lisk.png',
      'svg': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/devnet/Lisk/images/tokens/lisk.svg'
    },
    'symbol': 'LSK',
    'displayDenom': 'lsk',
    'baseDenom': 'beddows',
    'denomUnits': [
      {
        'denom': 'beddows',
        'decimals': 0,
        'aliases': [
          'Beddows'
        ]
      },
      {
        'denom': 'lsk',
        'decimals': 8,
        'aliases': [
          'Lisk'
        ]
      }
    ]
  },
  {
    'chainID': '04000002',
    'chainName': 'colecti',
    'tokenID': '0400000200000000',
    'tokenName': 'Col',
    'networkType': 'devnet',
    'description': 'Native Utility Token',
    'logo': {
      'png': 'https://raw.githubusercontent.com/LiskHQ/app-registry/main/devnet/Colecti/images/tokens/colecti.png',
      'svg': ''
    },
    'symbol': 'COL',
    'displayDenom': 'col',
    'baseDenom': 'lecti',
    'denomUnits': [
      {
        'denom': 'lecti',
        'decimals': 0,
        'aliases': []
      },
      {
        'denom': 'col',
        'decimals': 8,
        'aliases': []
      }
    ]
  }
];

export const mockTokenDetails: ITokenDetail[] = [
  {
    name: 'Lisk',
    price: 1.23,
    priceChange: +3.24,
    volume24H: 1.23,
    liquidity: 7.2,
    tokenID: '0400001100000000',
    symbol: 'LSK'
  },
  {
    name: 'Bazar',
    price: 1732.25,
    priceChange: -4.54,
    volume24H: 1.23,
    liquidity: 7.2,
    tokenID: '0000000000000002',
    symbol: 'BZR'
  },
  {
    name: 'doEDU',
    price: 1.23,
    priceChange: +3.24,
    volume24H: 1.23,
    liquidity: 7.2,
    tokenID: '0000000000000003',
    symbol: 'EDU'
  },
];

export const mockTokenBalances = [
  {
    'tokenID': '0400000000000000',
    'availableBalance': '1000000000',
    'lockedBalances': []
  },
  {
    'tokenID': '0400001100000000',
    'availableBalance': '100118949503000',
    'lockedBalances': [
      {
        'module': 'pos',
        'amount': '100000000000'
      }
    ]
  }
];