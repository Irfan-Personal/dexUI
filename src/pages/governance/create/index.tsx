import { NextPage } from 'next';
import { CreateProposalContainer } from 'containers';
import { withLayout } from 'components';

const CreateProposalPage: NextPage = () => {
  return (
    <CreateProposalContainer />
  );
};

export default withLayout(CreateProposalPage);