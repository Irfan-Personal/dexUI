import { Grid, Typography } from '@mui/material';
import { IVote } from 'models';
import { VoteItemComponentStyle } from './index.style';
import { ellipsisAddress } from 'utils';
import WalletVisual from 'components/common/Wallet/WalletVisual';

export interface IVoteItemComponentProps {
  vote: IVote,
  isUpSm: boolean,
}

export const VoteItemComponent: React.FC<IVoteItemComponentProps> = (props) => {
  const { vote, isUpSm } = props;

  return (
    <VoteItemComponentStyle container>
      <Grid item xs={6} sm={4} md={4} lg={4} className="vote-user">
        <WalletVisual address={vote.user} size={24} />
        <Typography variant="body2">{ellipsisAddress(vote.user)}</Typography>
      </Grid >
      <Grid item xs={3} sm={4} md={4} lg={6} className="vote-agreed">
        {
          vote.agreed ?
            <Typography variant="body2">
              {
                `${isUpSm ? 'Yes, I accept the proposal.' : 'Yes'}`
              }
            </Typography> :
            <Typography variant="body2">
              {
                `${isUpSm ? 'No, I disagree with the proposal.' : 'No'}`
              }
            </Typography>
        }
      </Grid>
      <Grid item xs={3} sm={4} md={4} lg={2} className="vote-amount">
        <Typography variant="body2">{vote.amount} LISKDEX</Typography>
      </Grid>
    </VoteItemComponentStyle >
  );
};