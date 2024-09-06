import { POOL_CREATED, POOL_CREATION_FAILED, POSITION_CREATED, POSITION_CREATION_FAILED, POSITION_UPDATED, POSITION_UPDATE_FAILED, SWAPPED, SWAP_FAILED } from 'consts/socket.events';

export const validationErrorMessages = {
  NOT_ENOUGH_BALANCE: 'Not enough balance!',
};

export const alertMessages: {
  [key: string]: string,
} = {
  CONNECT_YOUR_WALLET: 'Pleaset connect your wallet!',
  POOL_DOES_NOT_EXIST: 'Pool does not exist!',
  POOL_IS_REQUIRED_TO_CREATE_PROPOSAL: 'Pool is required to create proposal',
  [POOL_CREATED]: 'CreatePool transaction success',
  [POOL_CREATION_FAILED]: 'CreatePool transaction failed',
  [POSITION_CREATED]: 'CreatePosition transaction success',
  [POSITION_CREATION_FAILED]: 'CreatePosition transactoin failed',
  [POSITION_UPDATED]: 'Update position transaction success',
  [POSITION_UPDATE_FAILED]: 'Update position transaction failed',
  [SWAPPED]: 'Swap transaction success',
  [SWAP_FAILED]: 'Swap transaction failed',
};