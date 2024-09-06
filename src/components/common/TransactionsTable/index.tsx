import { useMemo } from 'react';
// import Image from 'next/image';
import { Box, IconButton, MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { faArrowLeft, faArrowRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DropdownComponent, SearchInputComponent } from 'components';
import { IToken, ITransaction } from 'models';
import { TransactionsTableStyle } from './index.style';
import { ellipsisAddress } from 'utils';
// import { tokenSvgs } from 'imgs/icons';
import { TransactionCommands } from 'consts';

export interface ITransactionsTableProps {
  onChangeRowCount?: (count: number) => void,
  onNextPage?: () => void,
  onPreviousPage?: () => void,
  onChangeCommand?: (value: string) => void,
  transactions: ITransaction[],
  availableTokens: IToken[],
  limit?: number,
  page?: number,
  totalPages?: number,
}

export const TransactionsTable: React.FC<ITransactionsTableProps> = (props) => {
  const {
    transactions: _transactions,
    // availableTokens,
    onChangeCommand,
    onChangeRowCount,
    onNextPage,
    onPreviousPage,
    limit,
    totalPages,
    page
  } = props;

  const transactions = useMemo(() => {
    if (page && limit)
      return _transactions.slice((page - 1) * limit, page * limit);
    return [];
  }, [page, limit, _transactions]);

  // const getTokenSymbol = (tokenId: string) => {
  //   return availableTokens.find(token => token.tokenID === tokenId)?.symbol || '';
  // };

  return (
    <TransactionsTableStyle>
      <Box className="transactions-filter-box">
        <SearchInputComponent
          className="transactions-search-input"
          placeholder="Search transactions by token..."
        />
        <DropdownComponent className="transactions-filter-dropdown" defaultValue={''} onChange={(value: any) => onChangeCommand && onChangeCommand(value)}>
          <MenuItem value="">
            <Typography variant="body2">All transactions</Typography>
          </MenuItem>
          {
            Object.entries(TransactionCommands).map(([key, value]) =>
              <MenuItem value={value} key={key}>
                <Typography variant="body2">{value}</Typography>
              </MenuItem>
            )
          }
        </DropdownComponent>
      </Box>

      <TableContainer className="transactions-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="body2">Type</Typography></TableCell>
              <TableCell align="right"><Typography variant="body2">ID</Typography></TableCell>
              <TableCell align="right"><Typography variant="body2">Height</Typography></TableCell>
              <TableCell align="right"><Typography variant="body2">Sender</Typography></TableCell>
              <TableCell align="right"><Typography variant="body2">Time</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.length > 0 && transactions.map((row: ITransaction, index: number) => (
              <TableRow
                key={index}
                data-testid='table-transaction-row'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell scope="row">
                  <Box className="name-td">
                    <Typography>{index + 1}</Typography>&nbsp;
                    {
                      // {
                      //   [TransactionCommands.swapExactIn]: <>
                      //     <Box className="token1-image">
                      //       <Image className="token1-image" src={tokenSvgs[getTokenSymbol(row.params.tokenIdIn)]} width={32} height={32}></Image>
                      //     </Box>
                      //     <Box className="token2-image">
                      //       <Image src={tokenSvgs[getTokenSymbol(row.params.tokenIdOut)]} width={32} height={32}></Image>
                      //     </Box>
                      //     <Typography>{getTokenSymbol(row.params.tokenIdIn)} - {getTokenSymbol(row.params.tokenIdOut)}</Typography>
                      //   </>,
                      // }[row.moduleCommand]
                      <Typography>{row.moduleCommand}</Typography>
                    }
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <a href={`https://testnet.liskscan.com/transaction/${row.id}`} target='_blank' rel="noreferrer">
                    <Box className="action-td">
                      {
                        // {
                        //   [TransactionCommands.swapExactIn]: <>
                        //     <Typography variant="body2">Swap {getTokenSymbol(row.params.tokenIdIn)} for {getTokenSymbol(row.params.tokenIdOut)}</Typography>
                        //   </>,
                        // }[row.moduleCommand]
                        <Typography variant="body2">{ellipsisAddress(row.id)}</Typography>
                      }
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Box>
                  </a>
                </TableCell>
                <TableCell align="right">
                  <Box className="details-td">
                    {
                      // {
                      //   [TransactionCommands.swapExactIn]: <>
                      //     <Image src={tokenSvgs[getTokenSymbol(row.params.tokenIdIn)]} width={16} height={16} />
                      //     <Typography variant="body2">{row.params.maxAmountTokenIn} {getTokenSymbol(row.params.tokenIdIn)}</Typography>
                      //     <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
                      //     <Image src={tokenSvgs[getTokenSymbol(row.params.tokenIdOut)]} width={16} height={16} />
                      //     <Typography variant="body2">{row.params.amountTokenOut} {getTokenSymbol(row.params.tokenIdOut)}</Typography>
                      //   </>
                      // }[row.moduleCommand]
                      <Typography>{row.block.height}</Typography>
                    }
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <a href={`https://testnet.liskscan.com/account/${row.sender.address}`} target='_blank' rel="noreferrer">
                    <Box className="action-td">
                      <Typography variant="body2">{ellipsisAddress(row.sender.address)}</Typography>
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </Box>
                  </a>
                </TableCell>
                <TableCell align="right">{new Date(row.block.timestamp).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className="transactions-pager">
        <DropdownComponent
          className='row-count-dropdown'
          onChange={(e) => { onChangeRowCount && onChangeRowCount(e.target.value as number); }}
          defaultValue={limit}
          renderValue={(value: any) => (
            <Box className='show-rows-dropdown'>
              <Typography variant='h6'>Show rows:</Typography>
              <Typography variant='body2'>{value}</Typography>
            </Box>
          )}
        >
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="10">10</MenuItem>
          <MenuItem value="25">25</MenuItem>
        </DropdownComponent>
        <IconButton
          data-testid='previous-page-test'
          onClick={() => { onPreviousPage && onPreviousPage(); }}
          disabled={page == 1}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
        <Typography variant='body2'>Page {page} of {totalPages && totalPages}</Typography>
        <IconButton
          onClick={() => { onNextPage && onNextPage(); }}
          data-testid='transaction-table-next-page-test'
          disabled={totalPages == page}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </IconButton>
      </Box>
    </TransactionsTableStyle >
  );
};