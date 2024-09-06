import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { HistoryComponentStyle } from './index.style';
import { LoaderComponent } from 'components';
import { AppActions, RootState } from 'store';
import { getDisplayTokenAmount, timestampToString } from 'utils';
import { TransactionCommands, TransactionModule } from 'consts';
import { IToken, ITransaction } from 'models';

export interface IHistoryComponentProps {
  accountTokens: IToken[],
  accountAddress: string,
}

export const HistoryComponent: React.FC<IHistoryComponentProps> = (props) => {
  const dispatch = useDispatch();
  const { accountTokens, accountAddress } = props;
  const { offset, total } = useSelector((root: RootState) => root.transaction);
  const [_transactions, setTransactions] = useState<ITransaction[]>([]);

  useEffect(() => {
    dispatch(AppActions.transaction.getTransactions({
      limit: 10,
      offset: 0,
      senderAddress: accountAddress,
      next: (data: ITransaction[]) => {
        setTransactions(() => {
          return [...data];
        });
      }
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadMoreTransactions = () => {
    dispatch(AppActions.transaction.getTransactions({
      limit: 10,
      offset: +(offset + 1) * 10,
      senderAddress: accountAddress,
      next: (data: ITransaction[]) => {
        setTransactions(prev => {
          return [...prev, ...data];
        });
      }
    }));
  };

  const getToken = (tokenId: string) => {
    return accountTokens.find(token => token.tokenID === tokenId) || accountTokens[0];
  };

  return (
    <HistoryComponentStyle>
      <Typography variant="h4">History</Typography>
      <InfiniteScroll
        dataLength={_transactions.length}
        next={loadMoreTransactions}
        hasMore={_transactions.length < total}
        loader={<LoaderComponent />}
        height={548}
      >
        {
          _transactions.map((transaction, index) => (
            <Box
              className="transaction-item"
              key={index}
            >
              {
                transaction.block.timestamp &&
                <Typography variant="body2">{timestampToString(transaction.block.timestamp * 1000)}</Typography>
              }
              <Box className="transaction-item-main">
                {/* <Box className="transaction-type-icon">
                    <SwapIcon />
                  </Box> */}
                <Box className="transaction-summary">
                  {
                    transaction.params && {
                      [`${TransactionModule.dex}:${TransactionCommands.swapExactOut}`]:
                        <Box className="transaction-values">
                          <Typography variant="body2">Swap {getToken(transaction.params.tokenIdIn)?.symbol} for {getToken(transaction.params.tokenIdOut)?.symbol}</Typography>
                          <Typography variant="body2">{transaction.params.amountTokenIn} {getToken(transaction.params.tokenIdIn)}</Typography>
                        </Box>,
                      [`${TransactionModule.dex}:${TransactionCommands.createPool}`]:
                        <Box className="transaction-values">
                          <Typography variant="body2">Create {getToken(transaction.params.tokenID0)?.symbol} & {getToken(transaction.params.tokenID1)?.symbol}</Typography>
                          {
                            transaction.params.tokenID0 &&
                            <Typography variant="body2">
                              {getDisplayTokenAmount(transaction.params.initialPosition.amount0Desired, getToken(transaction.params.tokenID0))} {getToken(transaction.params.tokenID0)?.symbol}
                              &nbsp;&&nbsp;
                              {getDisplayTokenAmount(transaction.params.initialPosition.amount1Desired, getToken(transaction.params.tokenID1))} {getToken(transaction.params.tokenID1)?.symbol}
                            </Typography>
                          }
                        </Box>,
                      [TransactionCommands.addLiquidity]:
                        <Box className="transaction-values">
                          <Typography variant="body2">Add LSK & DEX</Typography>
                          <Typography variant="body2">{transaction.params.amount0Desired} LSK & {transaction.params.amount1Desired} DEX</Typography>
                        </Box>,
                      default:
                        <Box className="transaction-values">
                          {
                            transaction.moduleCommand &&
                            <Typography variant="body2">{transaction.moduleCommand}</Typography>
                          }
                        </Box>
                    }[transaction.moduleCommand]
                  }
                  <Box className="transaction-status">
                    <Typography variant="body2" style={{ textTransform: 'capitalize' }}>{transaction.executionStatus}</Typography>
                    <Typography variant="body2">{transaction.fee}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))
        }
      </InfiniteScroll>
    </HistoryComponentStyle >
  );
};