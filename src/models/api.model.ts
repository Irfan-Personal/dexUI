import { IFilteredTokens, IPrice, ITokenBalance, ITokenDetail } from './token.model';
import { ITransactionObject } from './transaction.model';

export interface IResponse {
  data: unknown,
  meta: unknown,
  links: unknown,
}

export interface ITopTokensFromDatabaseRequest {
  tokenID?: string,
}

export interface ITopTokensFromDatabaseReponse extends IResponse {
  data: {
    topTokensFromDatabase: ITokenDetail[] | IFilteredTokens[]
  }
}

export interface ITokenBalancesRequest {
  limit?: number,
  address: string,
}

export interface ITokenBalancesReponse extends IResponse {
  data: ITokenBalance[],
  meta: {
    address: string,
    count: number,
    offset: number,
    total: number,
  }
}

export interface INetwrokFeeRequestBody {
  transaction: ITransactionObject
}

export interface INetwrokFeeResponse extends IResponse {
  data: {
    transaction: {
      fee: {
        tokenID: string,
        minimum: string,
        priority: {
          low: string,
          medium: string,
          high: string,
        }
      }
    }
  },
  meta: {
    breakdown: {
      fee: {
        minimum: {
          byteFee: string,
          additionalFees: {
            validatorRegistrationFee: string,
            userAccountInitializationFee: string,
            escrowAccountInitializationFee: string,
            chainRegistrationFee: string,
            bufferBytes: string,
          }
        },
        params: any,
      }
    }
  }
}

export interface IMarketPriceResponse extends IResponse {
  data: IPrice[],
  meta: {
    count: number,
  }
}