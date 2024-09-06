export enum ProposalType {
  PoolIncentivization = 'Pool Incentivization proposal',
  Universal = 'Universal proposal',
}

export enum ProposalStatus {
  All_Proposals = 'All Proposals',
  Active = 'Active',
  Accepted = 'Accepted',
  Failed = 'Failed',
  Failed_Quorum = 'Failed Quorum',
}

export const LENGTH_POOL_ID = 20; // The number of bytes of a DEX pool ID.
export const MAX_LENGTH_PROPOSAL_TEXT = 10240; // 1024|The maximal allowed length for proposal text, in bytes.
export const MAX_LENGTH_METADATA_TITLE = 124; // The maximal allowed length for data in the `title` property in proposal metadata, in bytes.
export const MAX_LENGTH_METADATA_AUTHOR = 200; // The maximal allowed length for data in the `author` property in proposal metadata, in bytes.
export const MAX_LENGTH_METADATA_SUMMARY = 500; // The maximal allowed length for `summary` property of proposal metadata, in bytes.
export const MAX_LENGTH_METADATA_LINK = 200; // The maximal allowed length for `discussionsTo` property of proposal metadata, in bytes.