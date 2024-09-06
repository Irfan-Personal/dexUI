import { useContext, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { Box, Chip, IconButton, ToggleButton, Typography } from '@mui/material';
import { faArrowUpRightFromSquare, faChevronRight, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { ButtonComponent, InfoChart, PoolsTable, SearchInputComponent, TokensTable, TransactionsTable, } from 'components';
import { DecreaseIcon, IncreaseIcon, tokenSvgs } from 'imgs/icons';
import { createMockChartInfo } from '__mock__';
import { TokensComponentStyle } from './index.style';
import { ITokenDetail, IPoolDetail, ITransaction, IToken } from 'models';
import { getPoolToken0, getPoolToken1 } from 'utils';
import { PATHS, currencySymbols } from 'consts';
import { PlatformContext } from 'contexts';

export interface ITokenComponentProps {
  tokenDetails: ITokenDetail[],
  availableTokens: IToken[],
  tokenID: string,
  poolDetails: IPoolDetail[],
  transactions: ITransaction[],
  onSwap: (token1: string, token2?: string) => void,
  onAddLiquidity: (token1: string, token2?: string) => void,
  onSelectPool: (id: string) => void,
  onSelectToken: (id: string) => void,
  onChangeTransactionCommand: (value: string) => void,
}

export const TokensComponent: React.FC<ITokenComponentProps> = (props) => {
  const {
    transactions,
    availableTokens,
    poolDetails,
    tokenDetails,
    tokenID,
    onSwap,
    onAddLiquidity,
    onSelectPool,
    onSelectToken,
    onChangeTransactionCommand,
  } = props;

  const [isLike, setLike] = useState<boolean>(false);

  const chartData = useMemo(() => {
    if (tokenID) {
      return createMockChartInfo();
    }
    else
      return [];
  }, [tokenID]);

  const tokenDetail = useMemo(() => {
    return tokenDetails.find(el => el.tokenID === tokenID) || {
      tokenID,
      name: '',
      price: 0,
      priceChange: 0,
      volume24H: 0,
      liquidity: 0,
      symbol: '',
    };
  }, [tokenID, tokenDetails]);

  // pools table control
  const [isAsc, setAsc] = useState<boolean>();
  const [sortKey, setSortKey] = useState<string>('');

  const { currency } = useContext(PlatformContext);

  const pools = useMemo(() => {
    if (tokenDetail.symbol)
      return poolDetails
        .filter(pool => getPoolToken0(pool.poolName) === tokenDetail.symbol || getPoolToken1(pool.poolName) === tokenDetail.symbol)
        .sort((a: any, b: any) => isAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]);
    return [];
  }, [sortKey, isAsc, tokenDetail, poolDetails]);

  const onSortClick = (key: string) => {
    if (key !== sortKey) {
      setAsc(false);
      setSortKey(key);
    } else {
      setAsc(!isAsc);
    }
  };
  // transactions table control
  const [transactionsPage, setTransactionsPage] = useState<number>(1);
  const [transactionsLimit, setTransactionsLimit] = useState<number>(10);
  const transactionsTotalPages = useMemo(() => {
    return Math.ceil(transactions.length / transactionsLimit);
  }, [transactionsLimit, transactions]);

  // tokens table control
  const [isTokenAsc, setTokenAsc] = useState<boolean>();
  const [sortTokenKey, setSortTokenKey] = useState<string>('');

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);
  const [totalPages, setMaximumPage] = useState<number>(0);
  const [searchFilter, setSearchFilter] = useState<string>('');

  const tokens = useMemo(() => {
    setMaximumPage(Math.ceil(poolDetails.length / limit));
    return tokenDetails
      .filter(el => el.symbol.includes(searchFilter) || el.name.includes(searchFilter))
      .sort((a: any, b: any) => isTokenAsc ? a[sortTokenKey] - b[sortTokenKey] : b[sortTokenKey] - a[sortTokenKey])
      .slice((page - 1) * limit, page * limit);
  }, [sortTokenKey, isTokenAsc, limit, page, searchFilter, tokenDetails, poolDetails.length]);

  const onSortTokenClick = (key: string) => {
    if (key !== sortTokenKey) {
      setTokenAsc(false);
      setSortTokenKey(key);
    } else {
      setTokenAsc(!isTokenAsc);
    }
  };

  const infoChartSummary = useMemo(() => {
    return [
      {
        title: `${tokenDetails[0].symbol} Price`,
        value: `${currencySymbols[currency]}${tokenDetails[0].price}`,
        changePercent: tokenDetails[0].priceChange,
      },
      {
        title: 'Total Liquidity',
        value: `${currencySymbols[currency]}${tokenDetails[0].liquidity}`,
        changePercent: 2.32,
      },
      {
        title: 'Volume 24h',
        value: `${currencySymbols[currency]}${tokenDetails[0].volume24H}`,
        changePercent: 1.45,
      },
      {
        title: 'Fees 24h',
        value: '$48.9k',
        changePercent: 4.86
      },
      {
        title: 'Transactions 24h',
        value: 216
      }
    ];
  }, [currency, tokenDetails]);

  return (
    <TokensComponentStyle>
      <Box className="info-header">
        {
          !tokenID ?
            <Box>
              <Typography variant="subtitle1">Tokens</Typography>
              <Typography variant="body1">Browse tokens on “dex”.</Typography>
            </Box> :
            <>
              <Box className="info-path">
                <Link href={PATHS.INFO}><Typography variant="h5">Home</Typography></Link>
                <FontAwesomeIcon icon={faChevronRight} />
                <Link href={`${PATHS.INFO}?tabIndex=1`}><Typography variant="h5">Tokens</Typography></Link>
                <FontAwesomeIcon icon={faChevronRight} />
                <Typography variant="h5">{tokenDetail.symbol}</Typography>
              </Box>
              <Box className="info-view-contract">
                <Typography variant="body1">View Contract</Typography>
                <IconButton>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </IconButton>
              </Box>
            </>
        }
      </Box>

      {
        tokenID &&
        <Box className="token-header">
          <Box className="token-header-left-box">
            <Box className="token-summary">
              <Box className="token-summary-image-1">
                <Image src={tokenSvgs[tokenDetail.symbol]} width={48} height={48} />
              </Box>

              <Box className="token-summary-detail">
                <Box className="token-summary-name">
                  <Typography variant="h5">{tokenDetail.name}</Typography>
                  <Chip className="token-summary-share" label={tokenDetail.symbol} />
                </Box>
                <Box>
                  <Typography className="token-price" variant="h5">${tokenDetail.price}&nbsp;
                    <Typography
                      className={cn({
                        'token-price-increasement': true,
                        'decrease': tokenDetail.priceChange < 0,
                      })}
                      variant="caption"
                    >
                      {tokenDetail.priceChange}%&nbsp;
                      {
                        tokenDetail.priceChange >= 0 ? <IncreaseIcon /> : <DecreaseIcon />
                      }
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>

            <ToggleButton
              className="like-button"
              value="like"
              selected={isLike}
              onChange={() => {
                setLike(!isLike);
              }}
            >
              <FontAwesomeIcon
                icon={isLike ? fasStar : farStar}
              />
            </ToggleButton>
          </Box>

          <Box className="token-actions">
            <ButtonComponent className="add-liquidity-button" variant="outlined">
              <Typography variant="h5">Add Liquidity</Typography>
            </ButtonComponent>
            <ButtonComponent>
              <Typography variant="h5">Trade</Typography>
            </ButtonComponent>
          </Box>
        </Box>
      }

      {
        !tokenID &&
        <Box className="table-title">
          <Typography variant="subtitle1">Saved Tokens</Typography>
        </Box>
      }
      <InfoChart
        infoChartSummary={infoChartSummary}
        chartData={chartData}
        tabs={['Volume', 'Liquidity', 'Price']}
        onTabChange={() => { }}
      />

      {
        tokenID ?
          <>
            <Box className="table-title">
              <Typography variant="subtitle1">Pools</Typography>
            </Box>
            <PoolsTable
              pools={pools}
              sortKey={sortKey}
              isAsc={isAsc}
              onSelectPool={onSelectPool}
              onSortClick={onSortClick}
              onSwap={onSwap}
              onAddLiquidity={onAddLiquidity}
            />

            <Box className="table-title">
              <Typography variant="subtitle1">Transactions</Typography>
            </Box>
            <TransactionsTable
              transactions={transactions}
              availableTokens={availableTokens}
              page={transactionsPage}
              limit={transactionsLimit}
              totalPages={transactionsTotalPages}
              onChangeCommand={onChangeTransactionCommand}
              onChangeRowCount={value => setTransactionsLimit(value)}
              onNextPage={() => setTransactionsPage(transactionsPage + 1)}
              onPreviousPage={() => setTransactionsPage(transactionsPage - 1)}
            />
          </> :
          <>
            <Box className="table-title">
              <Typography variant="subtitle1">All Tokens</Typography>
            </Box>
            <Box className="token-search-box">
              <SearchInputComponent
                placeholder="Search tokens..."
                value={searchFilter}
                onChange={e => setSearchFilter(e.target.value)}
              />
            </Box>
            <TokensTable
              pagination
              tokens={tokens}
              isAsc={isTokenAsc}
              sortKey={sortTokenKey}
              onSortClick={onSortTokenClick}
              onSelectToken={onSelectToken}
              onSwap={onSwap}
              onAddLiquidity={onAddLiquidity}
              limit={limit}
              page={page}
              onChangeRowCount={(value) => setLimit(value)}
              onNextPage={() => { setPage(Math.max(page - 1, 1)); }}
              onPreviousPage={() => { setPage(Math.min(page + 1, totalPages)); }}
              totalPages={totalPages}
            />
          </>
      }
    </TokensComponentStyle>
  );
};