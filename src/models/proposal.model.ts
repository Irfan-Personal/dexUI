import { ProposalStatus, ProposalType } from 'consts';

export interface IProposal {
  id: string,
  author: string,
  proposalType: ProposalType,
  poolID?: string,
  multiplier?: number,
  title: string,
  summary: string,
  description: string,
  link?: string,
  status: ProposalStatus,
}

export interface IVote {
  user: string,
  agreed: boolean,
  amount: number,
}