import { NextPage } from 'next';
import { GovernanceContainer } from 'containers';
import { withLayout } from 'components';

const GovernanacePage: NextPage = () => {
  return (
    <GovernanceContainer />
  );
};

export default withLayout(GovernanacePage);