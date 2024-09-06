export const getPoolToken0 = (pool: string) => {
  return pool.split('-')[0];
};

export const getPoolToken1 = (pool: string) => {
  return pool.split('-')[1];
};