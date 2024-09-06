import { NextRouter } from 'next/router';
import Image from 'next/image';
import { SearchComponentStyle } from './index.style';
import { InputComponent } from 'components';
import { Box, Typography } from '@mui/material';
import cn from 'classnames';
import { CancelIcon, DecreaseIcon, IncreaseIcon, SearchIcon, tokenSvgs } from 'imgs/icons';
import { useEffect, useState } from 'react';
import { IPoolDetail, ITokenDetail } from 'models';
import { getPoolToken0, getPoolToken1 } from 'utils';

export interface ISearchComponentProps {
  className?: string,
  router?: NextRouter,
  onChangeSearchFilter: (value: string) => void,
  pools?: IPoolDetail[],
  tokens?: ITokenDetail[],
}

export const SearchComponent: React.FC<ISearchComponentProps> = (props) => {
  const { className, router, pools, tokens, onChangeSearchFilter } = props;
  const [filter, setFilter] = useState<string>('');

  const onClickPoolsViewMore = () => {
    if (router) {
      router.push('?tabIndex=1');
    }
    setFilter('');
  };

  const onClickTpkensViewMore = () => {
    if (router) {
      router.push('?tabIndex=2');
    }
    setFilter('');
  };

  useEffect(() => {
    onChangeSearchFilter(filter);
  }, [filter, onChangeSearchFilter]);

  return (
    <SearchComponentStyle
      className={`${className} ${filter && 'filtered'}`}
    >
      <InputComponent
        data-testid="search-input-test"
        className="search-input"
        placeholder="Search tokens or pools..."
        value={filter}
        onChange={(e) => { setFilter(e.target.value); }}

        startAdornment={
          <SearchIcon />
        }
        endAdornment={
          filter &&
          <CancelIcon className="cancel-icon" onClick={() => { setFilter(''); }} />
        }
      />
      {
        filter &&
        <>
          <Box className="search-label">
            <Typography variant="body2">Pools</Typography>
            <Typography className="label-tvl" variant="body2">TVL</Typography>
          </Box>
          {
            pools && pools.length > 0 && <>
              {
                pools.map((pool, index) =>
                  <Box key={index} className="search-pool-item">
                    <Box className="search-pool-name">
                      <Box className="pool-images">
                        <Box className="pool-image-1">
                          <Image src={tokenSvgs[getPoolToken0(pool.poolName)]} width={34} height={34} />
                        </Box>
                        <Box className="pool-image-2">
                          <Image src={tokenSvgs[getPoolToken1(pool.poolName)]} width={34} height={34} />
                        </Box>
                      </Box>
                      <Box className="pool-token-names">
                        <Typography variant="h5">{getPoolToken0(pool.poolName)} & {getPoolToken1(pool.poolName)}</Typography>
                        <Typography variant="body2">{getPoolToken0(pool.poolName)} / {getPoolToken1(pool.poolName)}</Typography>
                      </Box>
                    </Box>
                    <Box className="search-pool-value">
                      <Typography variant="h5">$ {pool.poolTVL}</Typography>
                      <Typography
                        className={
                          cn({
                            increasement: pool.poolAPY > 0
                          })
                        }
                        variant="body2"
                      >
                        {pool.poolAPY}
                        {
                          pool.poolAPY > 0 ?
                            <IncreaseIcon /> :
                            <DecreaseIcon />
                        }
                      </Typography>
                    </Box>
                  </Box>)
              }
              <Typography data-testid="pools-view-more-test" className="view-more" variant="body2" onClick={onClickPoolsViewMore}>View more...</Typography>
            </>
          }


          <Box className="search-label">
            <Typography variant="body2">Tokens</Typography>
            <Typography className="label-tvl" variant="body2">Price</Typography>
          </Box>
          {
            tokens && tokens.length > 0 && <>
              {
                tokens.map((token, index) =>
                  <Box key={index} className="search-pool-item">
                    <Box className="search-pool-name">
                      <Box className="pool-images">
                        <Box className="pool-image-1">
                          <Image src={tokenSvgs[token.symbol]} width={34} height={34} />
                        </Box>
                      </Box>
                      <Box className="pool-token-names">
                        <Typography variant="h5">{token.name}</Typography>
                        <Typography variant="body2">{token.symbol}</Typography>
                      </Box>
                    </Box>
                    <Box className="search-pool-value">
                      <Typography variant="h5">$ {token.price}</Typography>
                      <Typography
                        className={
                          cn({
                            increasement: token.priceChange > 0
                          })
                        }
                        variant="body2"
                      >
                        {token.priceChange}
                        {
                          token.priceChange > 0 ?
                            <IncreaseIcon /> :
                            <DecreaseIcon />
                        }
                      </Typography>
                    </Box>
                  </Box>)
              }
              <Typography data-testid="tokens-view-more-test" className="view-more" variant="body2" onClick={onClickTpkensViewMore}>View more...</Typography>
            </>
          }
        </>
      }
    </SearchComponentStyle >
  );
};
