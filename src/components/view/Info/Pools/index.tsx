import { useContext, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { Box, Chip, IconButton, ToggleButton, Typography } from '@mui/material';
import { faArrowUpRightFromSquare, faChevronRight, faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonComponent, InfoChart, PoolsTable, SearchInputComponent } from 'components';
import { PoolsComponentStyle } from './index.style';
import Link from 'next/link';
import { PATHS, currencySymbols } from 'consts';
import { tokenSvgs } from 'imgs/icons';
import { ConversionRates, IPoolDetail } from 'models';
import { createMockChartInfo } from '__mock__';
import { currencyDecimalFormat, getPoolToken0, getPoolToken1 } from 'utils';
import { PlatformContext } from 'contexts';

export interface IPoolsComponentProps {
  onSwap: (token1: string, token2?: string) => void,
  onAddLiquidity: (token1: string, token2?: string) => void,
  onSelectPool: (id: string) => void,
  onSelectToken: (id: string) => void,
  getToken2FiatConversion: (tokenSymbol: string, currency: string) => void,
  poolDetails: IPoolDetail[],
  poolID: string,
  conversionRates: ConversionRates,
}

export const PoolsComponent: React.FC<IPoolsComponentProps> = (props) => {
  const {
    onSwap,
    onAddLiquidity,
    onSelectPool,
    getToken2FiatConversion,
    conversionRates,
    poolDetails,
    poolID,
  } = props;

  const { currency } = useContext(PlatformContext);
  // pools table control
  const [isAsc, setAsc] = useState<boolean>();
  const [sortKey, setSortKey] = useState<string>('');
  const [totalPages, setMaximumPage] = useState<number>(0);

  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(10);

  const [searchFilter, setSearchFilter] = useState<string>('');
  const [isLike, setLike] = useState<boolean>(false);

  const pool = useMemo(() => {
    return poolDetails.find(el => el.poolID === poolID) || {
      poolID: '',
      poolName: '',
      poolAPY: 0,
      poolFees24H: 0,
      poolTVL: 0,
      poolVolume24H: 0,
      share: 0,
    };
  }, [poolID, poolDetails]);

  const chartData = useMemo(() => {
    if (poolID)
      return createMockChartInfo();
    else
      return [];
  }, [poolID]);

  useEffect(() => {
    if (pool.poolID) {
      getToken2FiatConversion(getPoolToken0(pool.poolName), currency);
      getToken2FiatConversion(getPoolToken1(pool.poolName), currency);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pool, currency]);

  const pools = useMemo(() => {
    setMaximumPage(Math.ceil(poolDetails.length / limit));
    return poolDetails
      .filter(el => el.poolName.includes(searchFilter))
      .sort((a: any, b: any) => isAsc ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey])
      .slice((page - 1) * limit, page * limit);
  }, [sortKey, isAsc, limit, page, searchFilter, poolDetails]);

  const onSortClick = (key: string) => {
    if (key !== sortKey) {
      setAsc(false);
      setSortKey(key);
    } else {
      setAsc(!isAsc);
    }
  };

  const infoChartSummary = useMemo(() => {
    return [
      {
        title: 'Liquidity',
        value: `${currencySymbols[currency]}221.4M`,
        changePercent: -2.34,
      },
      {
        title: 'Total Tokens Locked',
        value: `${poolDetails[0].poolName}`,
      },
      {
        title: 'TVL',
        value: `${currencySymbols[currency]}${poolDetails[0].poolTVL}`,
        changePercent: 1.45,
      },
      {
        title: 'Volume 24h',
        value: `${currencySymbols[currency]}${poolDetails[0].poolVolume24H}`,
        changePercent: 4.86
      },
      {
        title: 'Fees 24h',
        value: `${currencySymbols[currency]}4252`,
        changePercent: 4.86
      }
    ];
  }, [currency, poolDetails]);

  return (
    <PoolsComponentStyle>
      <Box className="info-header">
        {
          !poolID ?
            <Box>
              <Typography variant="subtitle1">Liquidity Pools</Typography>
              <Typography variant="body1">Start earning incentives by providing liquidity.</Typography>
            </Box> :
            <>
              <Box className="info-path">
                <Link href={PATHS.INFO}><Typography variant="h5">Home</Typography></Link>
                <FontAwesomeIcon icon={faChevronRight} />
                <Link href={`${PATHS.INFO}?tabIndex=1`}><Typography variant="h5">Pools</Typography></Link>
                <FontAwesomeIcon icon={faChevronRight} />
                <Typography variant="h5">{getPoolToken0(pool.poolName)}/{getPoolToken1(pool.poolName)}</Typography>
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
        poolID &&
        <Box className="pool-header">
          <Box className="pool-header-left-box">
            <Box className="pool-summary">
              <Box className="pool-summary-image-1">
                <Image src={tokenSvgs[getPoolToken0(pool.poolName)]} width={48} height={48} />
              </Box>
              <Box className="pool-summary-image-2">
                <Image src={tokenSvgs[getPoolToken1(pool.poolName)]} width={48} height={48} />
              </Box>

              <Box className="pool-summary-detail">
                <Box className="pool-summary-name">
                  <Typography variant="h5">{getPoolToken0(pool.poolName)}/{getPoolToken1(pool.poolName)}</Typography>
                  <Chip className="pool-summary-share" label={`${pool.share}%`} />
                </Box>
                <Box>
                  {
                    conversionRates[getPoolToken0(pool.poolName)] && conversionRates[getPoolToken1(pool.poolName)] &&
                    <Typography variant="h5">
                      1 {getPoolToken0(pool.poolName)} = {currencyDecimalFormat(+conversionRates[getPoolToken0(pool.poolName)][currency], currency)}  1 {getPoolToken1(pool.poolName)} = {currencyDecimalFormat(+conversionRates[getPoolToken1(pool.poolName)][currency], currency)}
                    </Typography>
                  }
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

          <Box className="pool-actions">
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
        !poolID &&
        <Box className="table-title">
          <Typography variant="subtitle1">Saved Pools</Typography>
        </Box>
      }
      <InfoChart
        infoChartSummary={infoChartSummary}
        chartData={chartData}
        tabs={['Volume', 'Liquidity', 'Fees']}
        onTabChange={() => { }}
      />

      <Box className="table-title pools">
        <Typography variant="subtitle1">All Pools</Typography>
        <ButtonComponent variant='outlined'><Typography variant="h5">Create a pool</Typography></ButtonComponent>
      </Box>
      <Box className="pools-table-action">
        <SearchInputComponent placeholder='Search pools...' value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
      </Box>
      <PoolsTable
        pools={pools}
        sortKey={sortKey}
        isAsc={isAsc}
        limit={limit}
        page={page}
        onNextPage={() => { setPage(Math.min(page + 1, totalPages)); }}
        onPreviousPage={() => { setPage(Math.max(page - 1, 1)); }}
        onSortClick={onSortClick}
        onSelectPool={onSelectPool}
        onSwap={onSwap}
        onAddLiquidity={onAddLiquidity}
        onChangeRowCount={value => { setLimit(value); }}
        totalPages={totalPages}
        pagination
      />
    </PoolsComponentStyle>
  );
};