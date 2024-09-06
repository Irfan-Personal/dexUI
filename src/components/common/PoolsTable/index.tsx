import Image from 'next/image';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import cn from 'classnames';
import { ButtonComponent, PaginationComponent } from 'components';
import { PoolsTableStyle } from './index.style';
import { HelpIcon, IncreaseIcon, tokenSvgs } from 'imgs/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { IPoolDetail } from 'models';
import { getPoolToken0, getPoolToken1 } from 'utils';

const sortKeys = [
  {
    label: 'TVL',
    key: 'poolTVL',
  },
  {
    label: 'Volume 24H',
    key: 'poolVolume24H',
  },
  {
    label: 'Fees 24H',
    key: 'poolFees24H',
  },
];

export interface IPoolsTableProps {
  pools: IPoolDetail[],
  onChangeRowCount?: (count: number) => void,
  onNextPage?: () => void,
  onPreviousPage?: () => void,
  onSelectPool?: (id: string) => void,
  onSortClick: (key: string) => void,
  onAddLiquidity?: (token1: string, token2: string) => void,
  onSwap?: (token1: string, token2: string) => void,
  sortKey: string,
  isAsc?: boolean,
  limit?: number,
  page?: number,
  pagination?: boolean,
  totalPages?: number,
}

export const PoolsTable: React.FC<IPoolsTableProps> = (props) => {
  const {
    onChangeRowCount,
    onSelectPool,
    onNextPage,
    onPreviousPage,
    onSortClick,
    onAddLiquidity,
    onSwap,
    pagination,
    pools,
    sortKey,
    isAsc,
    limit,
    totalPages,
    page
  } = props;

  const onSwapClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, token1: string, token2: string) => {
    e.stopPropagation();
    onSwap && onSwap(token1, token2);
  };

  const onAddLiquidityClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, token1: string, token2: string) => {
    e.stopPropagation();
    onAddLiquidity && onAddLiquidity(token1, token2);
  };

  return (
    <PoolsTableStyle>
      <TableContainer className="pools-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="always-visible"><Typography variant="body2">Name</Typography></TableCell>
              {
                sortKeys.map(el => (
                  <TableCell
                    className={
                      cn({
                        'always-visible': el.key === 'volume',
                      })
                    }
                    key={el.key}
                    align="right"
                  >
                    <Box
                      className="sort-key-table-cell"
                      onClick={() => onSortClick(el.key)}
                    >
                      <Typography variant="body2">{el.label}</Typography>
                      {
                        sortKey === el.key ?
                          isAsc ?
                            <FontAwesomeIcon icon={faSortUp} /> :
                            <FontAwesomeIcon icon={faSortDown} /> :
                          <FontAwesomeIcon icon={faSort} />
                      }
                    </Box>
                  </TableCell>
                ))
              }
              <TableCell align="right">
                <Box className="apy-th">
                  <Typography variant="body2">APY</Typography>
                  <HelpIcon />
                </Box>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2">Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pools && pools.map((row, index) => (
              <TableRow
                key={index}
                data-testid='table-pool-row'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => { onSelectPool && onSelectPool(row.poolID); }}
              >
                <TableCell className="always-visible" scope="row">
                  <Box className="name-td">
                    <Typography>{index + 1}</Typography>
                    <Box className="token1-image">
                      <Image src={tokenSvgs[getPoolToken0(row.poolName)]} width={32} height={32}></Image>
                    </Box>
                    <Box className="token2-image">
                      <Image src={tokenSvgs[getPoolToken1(row.poolName)]} width={32} height={32}></Image>
                    </Box>
                    <Typography>{getPoolToken0(row.poolName)} - {getPoolToken1(row.poolName)}</Typography>

                    <Box className="token-share">
                      <Typography variant="caption">{row.share}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">${row.poolTVL}M</Typography>
                </TableCell>
                <TableCell className="always-visible" align="right">
                  <Typography variant="body2">${row.poolVolume24H}M</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">${row.poolFees24H}K</Typography>
                </TableCell>
                <TableCell align="right">
                  <Box className="apy-td">
                    <Typography variant="body2">{row.poolAPY}%</Typography>
                    <IncreaseIcon />
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Box className="actions-td">
                    <ButtonComponent
                      variant="outlined"
                      size="small"
                      data-testid={`addLiquidity-test-${row.poolID}`}
                      onClick={e => { onAddLiquidityClick(e, getPoolToken0(row.poolName), getPoolToken1(row.poolName)); }}
                    >
                      <Typography variant="body2">Add Liquidty</Typography>
                    </ButtonComponent>
                    <ButtonComponent
                      size="small"
                      data-testid={`swap-test-${row.poolID}`}
                      onClick={e => { onSwapClick(e, getPoolToken0(row.poolName), getPoolToken1(row.poolName)); }}
                    >
                      <Typography variant="body2">Swap</Typography>
                    </ButtonComponent>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {
        pagination &&
        <PaginationComponent
          onChangeRowCount={onChangeRowCount}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
          page={page}
          limit={limit}
          totalPages={totalPages}
        />
      }
    </PoolsTableStyle >
  );
};