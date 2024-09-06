import { NextPage } from 'next';
import { PoolContainer } from 'containers';
import { withLayout } from 'components';

const PoolPage: NextPage = () => {
  return (
    <PoolContainer />
  );
};

export default withLayout(PoolPage);