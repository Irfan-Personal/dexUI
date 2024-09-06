
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { useContext, useRef } from 'react';
import { FeaturedPoolsStyle } from './index.style';
import { tokenSvgs } from 'imgs/icons';
import { getPoolToken0, getPoolToken1 } from 'utils';
import { IPoolDetail } from 'models';
import { currencySymbols } from 'consts';
import { PlatformContext } from 'contexts';

export interface IFeaturedPoolsProps {
  poolDetails: IPoolDetail[],
  onSelectPool?: (id: string) => void,
}

export const FeaturedPools: React.FC<IFeaturedPoolsProps> = (props) => {
  const { poolDetails, onSelectPool } = props;
  const poolContainerRef = useRef<HTMLDivElement>(null);
  const { currency } = useContext(PlatformContext);

  const onClickScrollLeft = () => {
    if (poolContainerRef.current)
      poolContainerRef.current.scrollLeft -= 332;
  };

  const onClickScrollRight = () => {
    if (poolContainerRef.current)
      poolContainerRef.current.scrollLeft += 332;
  };

  return (
    <FeaturedPoolsStyle className="featured-pools">
      <IconButton className="scroll-button left" data-testid="scroll-left-button-test" onClick={onClickScrollLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </IconButton>
      <Box className="feature-pools-container" ref={poolContainerRef}>
        {
          poolDetails && !!poolDetails.length && poolDetails.map((el, index) => (
            <Box
              key={index}
              data-testid={`feature-pool-item-${index}`}
              className="pool-box"
              onClick={() => { onSelectPool && onSelectPool(index.toString()); }}
            >
              <Box className="pool-box-inner">
                <Box className="pool-tokens">
                  <Box className="token1-image">
                    <Image src={tokenSvgs[getPoolToken0(el.poolName)]} width={48} height={48} />
                  </Box>
                  <Box className="token2-image">
                    <Image src={tokenSvgs[getPoolToken1(el.poolName)]} width={48} height={48} />
                  </Box>
                  <Box className="token-name">
                    <Typography variant="h4">{getPoolToken0(el.poolName)}</Typography>
                    <Typography variant="h4">{getPoolToken1(el.poolName)}</Typography>
                  </Box>
                </Box>

                <Box className="pool-detail">
                  <Box className="pool-apy">
                    <Typography className="pool-detail-title" variant="body2">APY</Typography>
                    <Typography className="pool-detail-value" variant="body2">{el.poolAPY}%</Typography>
                  </Box>
                  <Box className="pool-liquidity">
                    <Typography className="pool-detail-title" variant="body2">Pool Liquidity</Typography>
                    <Typography className="pool-detail-value" variant="body2">{currencySymbols[currency]}{el.poolVolume24H}</Typography>
                  </Box>
                  <Box className="pool-apy">
                    <Typography className="pool-detail-title" variant="body2">Fees (24H)</Typography>
                    <Typography className="pool-detail-value" variant="body2">{currencySymbols[currency]}{el.poolFees24H}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))
        }
      </Box>
      <IconButton className="scroll-button right" data-testid="scroll-right-button-test" onClick={onClickScrollRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </IconButton>
    </FeaturedPoolsStyle >
  );
};