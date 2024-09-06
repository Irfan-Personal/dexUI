import { NextPage } from 'next';
import { InfoContainer } from 'containers';
import { withLayout } from 'components';

const InfoPage: NextPage = () => {
  return (
    <InfoContainer />
  );
};

export default withLayout(InfoPage);