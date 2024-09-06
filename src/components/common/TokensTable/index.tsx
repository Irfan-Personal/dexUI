import Image from 'next/image';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import cn from 'classnames';
import { ButtonComponent, PaginationComponent } from 'components';
import { TokensTableStyle } from './index.style';
import { DecreaseIcon, IncreaseIcon, tokenSvgs } from 'imgs/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { ITokenDetail } from 'models';

const sortKeys = [
  {
    label: 'Price',
    key: 'price',
  },
  {
    label: 'Price Change',
    key: 'priceChange',
  },
  {
    label: 'Volume 24H',
    key: 'volume',
  },
  {
    label: 'Liquidity',
    key: 'liquidity',
  },
];

export interface ITokensTableProps {
  tokens: ITokenDetail[],
  onChangeRowCount?: (count: number) => void,
  onNextPage?: () => void,
  onPreviousPage?: () => void,
  onSelectToken?: (id: string) => void,
  onSortClick: (key: string) => void,
  onSwap?: (token: string) => void,
  onAddLiquidity?: (token: string) => void,
  sortKey: string,
  isAsc?: boolean,
  limit?: number,
  page?: number,
  pagination?: boolean,
  totalPages?: number
}

export const TokensTable: React.FC<ITokensTableProps> = (props) => {
  const {
    onChangeRowCount,
    onSelectToken,
    onNextPage,
    onPreviousPage,
    onSortClick,
    onAddLiquidity,
    onSwap,
    pagination,
    tokens,
    sortKey,
    isAsc,
    limit,
    totalPages,
    page
  } = props;

  const onSwapClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, tokenId: string) => {
    e.stopPropagation();
    onSwap && onSwap(tokenId);
  };

  const onAddLiquidityClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, tokenId: string) => {
    e.stopPropagation();
    onAddLiquidity && onAddLiquidity(tokenId);
  };

  return (
    <TokensTableStyle>
      <TableContainer className="tokens-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="always-visible"><Typography variant="body2">Name</Typography></TableCell>
              {
                sortKeys.map(el => (
                  <TableCell
                    key={el.key}
                    align="right"
                    className={
                      cn({
                        'always-visible': el.key === 'volume',
                      })
                    }
                  >
                    <Box className="sort-key-table-cell" onClick={() => onSortClick(el.key)}>
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
              <TableCell align="right"><Typography variant="body2">Actions</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokens && tokens.map((row, index) => (
              <TableRow
                key={row.tokenID}
                data-testid='table-token-row'
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => { onSelectToken && onSelectToken(row.tokenID); }}
              >
                <TableCell className="always-visible" scope="row">
                  <Box className="name-td">
                    <Typography>{index + 1}</Typography>
                    <Box className="token1-image">
                      <Image className="token1-image" src={tokenSvgs[row.symbol]} width={32} height={32}></Image>
                    </Box>
                    <Typography variant="body2">{row.name}</Typography>
                    <Box className="token-symbol">
                      <Typography variant="caption">{row.symbol}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">${row.price}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Box className={
                    cn({
                      'price-change-td': true,
                      'decrease': row.priceChange < 0,
                    })
                  }>
                    <Typography variant="body2">{row.priceChange}%</Typography>
                    {
                      row.priceChange >= 0 ? <IncreaseIcon /> :
                        <DecreaseIcon />
                    }
                  </Box>
                </TableCell>
                <TableCell className="always-visible" align="right">
                  <Typography variant="body2">${row.volume24H}M</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="body2">${row.liquidity}M</Typography>
                </TableCell>
                <TableCell align="right">
                  <Box className="actions-td">
                    <ButtonComponent
                      data-testid={`addLiquidity-test-${row.tokenID}`}
                      variant="outlined"
                      size="small"
                      onClick={e => { onAddLiquidityClick(e, row.symbol); }}
                    >
                      <Typography variant="body2">Add Liquidty</Typography>
                    </ButtonComponent>
                    <ButtonComponent
                      data-testid={`swap-test-${row.tokenID}`}
                      size="small"
                      onClick={e => { onSwapClick(e, row.symbol); }}
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
          onNextPage={onNextPage}
          onPreviousPage={onPreviousPage}
          limit={limit}
          page={page}
          totalPages={totalPages}
        />
      }
    </TokensTableStyle >
  );
};