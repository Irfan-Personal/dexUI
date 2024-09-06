import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVote, IProposal } from 'models';
import { mockVotes, mockProposals } from '__mock__';

type StateType = {
  votesLimit: number,
  votesTotal: number,
  votesTotalPages: number,
  votes: IVote[],
  proposals: IProposal[],
  proposal: IProposal,
  openProposalApproval: boolean,
  gettingProposals: boolean,
  gotProposals: boolean,
  gettingCertainProposal: boolean,
  gotCertainProposal: boolean,
  gettingVotes: boolean,
  gotVotes: boolean,
  error: any,
};

const initialState: StateType = {
  votesLimit: 10,
  votesTotal: 0,
  votesTotalPages: 0,
  votes: [],
  proposals: [...mockProposals],
  proposal: {} as IProposal,
  openProposalApproval: false,
  gettingProposals: false,
  gotProposals: false,
  gettingCertainProposal: false,
  gotCertainProposal: false,
  gettingVotes: false,
  gotVotes: false,
  error: { message: '' },
};

const proposalSlice = createSlice({
  name: 'proposal',
  initialState: initialState,
  reducers: {
    /**
     * proposal
     */
    //approve a proposal modal
    setOpenProposalApproval(state, action: PayloadAction<any>) {
      state.openProposalApproval = action.payload;
    },
    getVotesByProposal(state, action: PayloadAction<any>) {
      const newVotes = mockVotes.slice(0, (action.payload + 1) * state.votesLimit);
      state.votesTotal = mockVotes.length;
      state.votesTotalPages = ~~mockVotes.length / state.votesLimit;
      state.votes = [...newVotes];
    },

    // get proposals
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getProposals(state, action: PayloadAction<any>) {
      state.gettingProposals = true;
      state.gotProposals = false;
    },
    getProposalsSuccess(state, action) {
      state.gettingProposals = false;
      state.gotProposals = true;
      state.proposals = [...action.payload.data];
    },
    getProposalsFailure(state, action: PayloadAction<any>) {
      state.gettingProposals = false;
      state.gotProposals = false;
      state.error = action.payload;
    },

    // get certain proposal
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getCertainProposal(state, action: PayloadAction<any>) {
      state.gettingCertainProposal = true;
      state.gotCertainProposal = false;
      state.proposal = mockProposals[0];
    },
    getCertainProposalSuccess(state, action) {
      state.gettingCertainProposal = false;
      state.gotCertainProposal = true;
      state.proposal = action.payload.data;
    },
    getCertainProposalFailure(state, action: PayloadAction<any>) {
      state.gettingCertainProposal = false;
      state.gotCertainProposal = false;
      state.error = action.payload;
    },

    // get votes
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getVotes(state, action: PayloadAction<any>) {
      state.gettingVotes = true;
      state.gotVotes = false;
    },
    getVotesSuccess(state, action) {
      state.gettingVotes = false;
      state.gotVotes = true;
      state.votes = [...action.payload.data];
    },
    getVotesFailure(state, action: PayloadAction<any>) {
      state.gettingVotes = false;
      state.gotVotes = false;
      state.error = action.payload;
    }
  },
});

export const actions = proposalSlice.actions;
export const reducer = proposalSlice.reducer;

