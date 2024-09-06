import { ProposalStatus, ProposalType } from 'consts';
import { IProposal, IVote } from 'models';

export const mockProposal: Pick<
  IProposal,
  'author' | 'proposalType' | 'poolID' | 'multiplier' | 'title' | 'summary' | 'description' | 'link'
> = {
  author: 'Author',
  proposalType: ProposalType.PoolIncentivization,
  poolID: 'pool1',
  multiplier: 8,
  title: 'Deploy Lisk DEX to Bridges on V2',
  summary: 'summary',
  description: 'description',
  link: 'description'
};

export const mockProposals: IProposal[] = [
  {
    id: 'proposal1',
    author: 'Author',
    proposalType: ProposalType.PoolIncentivization,
    poolID: 'pool1',
    multiplier: 8,
    title: 'Deploy Lisk DEX to Bridges on V2',
    summary: 'The DEX Governance module allows creating pool incentivization proposals and universal proposals. The motivation for the proposals is slightly different.',
    description: `Blockchain, the distributed ledger technology, represents most of those things. It promotes consensus because itâs a record-keeping platform.

The transparent because participants in the chain can download and validate individual ledgers. And itâs permanent because those ledgers canât be altered. 

Like education, blockchain is intended to transfer not just content, but also the value inherent in that content.According to our latest research, the global.

Blockchain in Education market size will reach USD million in 2028, growing at a CAGR of % over the analysis period.

Global Blockchain in Education Scope and Market report focuses on the global Blockchain in Education status, future forecast, growth opportunity, key market and key players. 

The study objectives are to present the Blockchain in Education development in North America, Europe, China, Japan, Southeast Asia, India and Central and South America, etc.

It additionally affords the proper insights and evaluation which are crucial to layout powerful commercial enterprise techniques and set the proper direction for improved boom for all enterprise gamers involved. 

With this information, the ones in rate might be capable of create new techniques, which consciousness available in the marketplace possibilities in order to advantage them, maing their commercial enterprise efforts profitable`,
    link: 'description',
    status: ProposalStatus.Active,
  }
];

export const mockVotes: IVote[] = [
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: true,
    amount: 12,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: false,
    amount: 24,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: true,
    amount: 16,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: true,
    amount: 12,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: false,
    amount: 24,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: true,
    amount: 16,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: true,
    amount: 12,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: false,
    amount: 24,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: true,
    amount: 16,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: true,
    amount: 12,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: false,
    amount: 24,
  },
  {
    user: '0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1',
    agreed: true,
    amount: 16,
  },
];