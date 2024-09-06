import { NextPage } from 'next';
import { SwapContainer } from 'containers';
import { withLayout } from 'components';

const SwapPage: NextPage = () => {
  return (
    <SwapContainer />
  );
};

export default withLayout(SwapPage);