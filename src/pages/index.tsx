import { PATHS } from 'consts';
import type { NextPage } from 'next';
import router from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {

  useEffect(() => {
    router.push(PATHS.SWAP);
  }, []);

  return null;
};

export default Home;
