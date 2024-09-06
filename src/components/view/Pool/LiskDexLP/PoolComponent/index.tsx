import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { IPool } from 'models';
import { PoolComponentStyle } from './index.style';
import { PieChartIcon } from 'imgs/icons';
import { ButtonComponent } from 'components/common';

export interface IPoolComponentProps {
  pool: IPool,
  onIncreaseLiquidity: (pool: IPool) => void,
  onRemoveLiquidity: (pool: IPool) => void,
  'data-testid'?: string,
}

export const PoolComponent: React.FC<IPoolComponentProps> = (props) => {
  const { pool, onIncreaseLiquidity, onRemoveLiquidity, ...rest } = props;

  return (
    <PoolComponentStyle>
      <AccordionSummary
        {...rest}
        expandIcon={<FontAwesomeIcon icon={faChevronDown} />}
      >

        <img src={pool.token1.logo.png} width={24} height={24} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
        <img src={pool.token2.logo.png} width={24} height={24} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />

        <Typography className="pool-summary-token-name" variant="body1">{pool.token1.symbol} / {pool.token2.symbol}</Typography>

        <Box className="pool-summary-rate">
          <Typography variant="body2">0.05</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box className="pool-details">
          <Box className="pool-details-info liquidity">
            <Typography variant="body1">Liquidity</Typography>
            <Typography variant="h2">$2,523</Typography>

            <Box className="pool-details-token token1">
              <Box className="pool-details-image">
                <img src={pool.token1.logo.png} width={24} height={24} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
                <Typography variant="body2">{pool.token1.symbol}</Typography>
              </Box>
              <Box className="pool-details-amount">
                <Typography variant="body2">{pool.token1Amount.toPrecision(16)}</Typography>
                <Box>
                  <Typography variant="body2">55%</Typography>
                </Box>
              </Box>
            </Box>

            <Box className="pool-details-token token2">
              <Box className="pool-details-image">
                <img src={pool.token2.logo.png} width={24} height={24} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
                <Typography variant="body2">{pool.token2.symbol}</Typography>
              </Box>
              <Box className="pool-details-amount">
                <Typography variant="body2">{pool.token2Amount.toPrecision(16)}</Typography>
                <Box>
                  <Typography variant="body2">55%</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="pool-details-info fees-earned">
            <Typography variant="body1">Fees earned</Typography>
            <Typography variant="h2">$105.76</Typography>

            <Box className="pool-details-token token1">
              <Box className="pool-details-image">
                <img src={pool.token1.logo.png} width={20} height={20} alt={pool.token1.symbol} style={{ borderRadius: '100%' }} />
                <Typography variant="body2">{pool.token1.symbol}</Typography>
              </Box>
              <Box className="pool-details-amount">
                <Typography variant="body2">0.034</Typography>
                <Typography variant="caption">($52.42)</Typography>
              </Box>
            </Box>

            <Box className="pool-details-token token2">
              <Box className="pool-details-image">
                <img src={pool.token2.logo.png} width={20} height={20} alt={pool.token2.symbol} style={{ borderRadius: '100%' }} />
                <Typography variant="body2">{pool.token2.symbol}</Typography>
              </Box>
              <Box className="pool-details-amount">
                <Typography variant="body2">49.251</Typography>
                <Typography variant="caption">($53.98)</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="pool-share">
          <Box className="pool-share-title">
            <PieChartIcon />
            <Typography variant="body2">Your pool share:</Typography>
          </Box>
          <Box className="pool-share-percent">
            <Typography variant="body2">0.085%</Typography>
          </Box>
        </Box>

        <Box className="pool-buttons">
          <ButtonComponent
            data-testid="remove-liquidity-test"
            className="remove-liquidity"
            variant="outlined"
            onClick={() => { onRemoveLiquidity(pool); }}
          >
            <Typography variant="body1">- Remove Liquidity</Typography>
          </ButtonComponent>
          <ButtonComponent
            data-testid="increase-liquidity-test"
            onClick={() => { onIncreaseLiquidity(pool); }}
          >
            <Typography variant="body1">+ Increase Liquidity</Typography>
          </ButtonComponent>
        </Box>
      </AccordionDetails>
    </PoolComponentStyle >
  );
};