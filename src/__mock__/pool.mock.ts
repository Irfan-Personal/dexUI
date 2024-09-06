import { ICreatePool, IPool, IPoolDetail } from 'models';
import { mockTokens } from './swap.mock';
import { MAX_TICK, MIN_TICK } from 'containers';

export const mockPool: IPool = {
  id: '1001',
  token1: mockTokens[0],
  token2: mockTokens[1],
  token1Amount: 1862,
  token2Amount: 0.045,
  share: 0.085,
};

export const mockCreatePool: ICreatePool = {
  token1: mockTokens[0],
  token2: mockTokens[1],
  feeTier: 100,
  tickInitialPrice: 1,
  tickLower: -MIN_TICK,
  tickUpper: MAX_TICK,
  token1Amount: 100,
  token2Amount: 10,
};

export const mockPools: IPool[] = [
  mockPool,
];

export const mockPoolDetails: IPoolDetail[] = [
  {
    poolID: '000000000000000000000100000000000001',
    poolName: 'LSK-DEX',
    poolTVL: 12.2,
    poolVolume24H: 6.06,
    poolFees24H: 1.5,
    poolAPY: 3.24,
    share: 0.3
  },
  {
    poolID: '000000000000000000000100000000000002',
    poolName: 'LSK-DEX',
    poolTVL: 15.6,
    poolVolume24H: 2.3,
    poolFees24H: 2.9,
    poolAPY: 11.24,
    share: 0.3
  }
];

function generatePriceChange() {
  const basePrice = 100; // Starting price
  const volatility = 0.2; // Degree of price fluctuation

  // Generate a random percentage change between -volatility and +volatility
  const percentChange = (Math.random() * 2 * volatility) - volatility;

  // Calculate the new price by applying the percentage change to the base price
  const newPrice = basePrice * (1 + percentChange);
  return newPrice;
}

export const createMockChartInfo = (): {
  time: Date,
  price: number,
}[] => {
  const array: {
    time: Date,
    price: number,
  }[] = [];

  const currentTime = new Date().getTime();
  let startTime = currentTime - 1000 * 60 * 60 * 24 * 30 * 365;

  while (startTime < currentTime) {
    const period = Math.random() * 1000 * 60 * 60 * 4;
    const price = generatePriceChange();
    array.push({
      time: new Date(startTime += period),
      price,
    });
  }

  return array;
};