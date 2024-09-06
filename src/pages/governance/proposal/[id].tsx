import { NextPage } from 'next';
import { ProposalContainer } from 'containers';
import { withLayout } from 'components';

const ProposalPage: NextPage = () => {
  return (
    <ProposalContainer />
  );
};

export default withLayout(ProposalPage);