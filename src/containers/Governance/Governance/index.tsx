import { GovernanceView } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
// import { mockProposals } from '__mock__';

export const GovernanceContainer: React.FC = () => {
  const { proposals } = useSelector((state: RootState) => state.proposal);

  return (
    <GovernanceView proposals={proposals} />
  );
};