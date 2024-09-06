import { useEffect, useMemo, useState } from 'react';
import cn from 'classnames';
import { Box, IconButton, Typography } from '@mui/material';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonComponent, InputComponent, SelectTokenModal } from 'components';
import { PlusCircleIcon, SettingIcon } from 'imgs/icons';
import { DepositAmount } from './DepositAmount';
import { FeeTiers } from './FeeTiers';
import { PriceRange } from './PriceRange';
import { RangeSelector } from './RangeSelector';
import { SupplyLiquidityStyle } from './index.style';
import { ICreatePool, IToken, ITokenBalance } from 'models';
import { useRouter } from 'next/dist/client/router';
import { getDisplayTokenAmount } from 'utils';

const chartData = [
  { x: 1.1, y: 50 },
  { x: 1.2, y: 100 },
  { x: 1.3, y: 120 },
  { x: 1.4, y: 440 },
  { x: 1.5, y: 40 },
  { x: 1.6, y: 130 },
  { x: 1.7, y: 240 },
  { x: 1.8, y: 435 },
  { x: 1.9, y: 333 },
  { x: 2.0, y: 223 },
];

export interface ISupplyLiquidityProps {
  closeTransactionModal: boolean,
  tokens: IToken[],
  tokenBalances: ITokenBalance[],
  onPreview: (pool: ICreatePool) => void,
}

export const SupplyLiquidity: React.FC<ISupplyLiquidityProps> = (props) => {
  const router = useRouter();
  const { tokens, tokenBalances, closeTransactionModal, onPreview } = props;

  const [openSelectToken1, setOpenSelectToken1] = useState<boolean>(false);
  const [openSelectToken2, setOpenSelectToken2] = useState<boolean>(false);

  const [token1, setToken1] = useState<IToken | null>(null);
  const [token2, setToken2] = useState<IToken | null>(null);

  const [token1Amount, setToken1Amount] = useState<number | string>('0.00');
  const [token2Amount, setToken2Amount] = useState<number | string>('0.00');

  const [initialPrice, setInitialPrice] = useState<number>(0);
  const [tierValue, setTierValue] = useState<number>(0);

  const [minPrice, setMinPrice] = useState<number>(1.0);
  const [maxPrice, setMaxPrice] = useState<number>(2.0);

  const onSelectToken = (token: IToken) => {
    if (openSelectToken1) {
      if (token2 !== token)
        setToken1(token);
    }
    if (openSelectToken2) {
      if (token1 !== token)
        setToken2(token);
    }
  };

  const onCloseSelectToken = () => {
    setOpenSelectToken1(false);
    setOpenSelectToken2(false);
  };

  const onChangeRange = (range: number[]) => {
    setMinPrice(range[0]);
    setMaxPrice(range[1]);
  };

  const onClickFullRange = () => {
    setMinPrice(1.0);
    setMaxPrice(2.0);
  };

  const isValid = useMemo(() => {
    return (token1 && token2 && minPrice && maxPrice && +token1Amount && +token2Amount && initialPrice && tierValue);
  }, [token1, token2, minPrice, maxPrice, token1Amount, token2Amount, initialPrice, tierValue]);


  useEffect(() => {
    if (router) {
      const { query } = router;
      if (query) {
        if (query.token1) {
          setToken1(tokens.find(token => token.symbol === query.token1) as IToken);
        }
        if (query.token2) {
          setToken2(tokens.find(token => token.symbol === query.token2) as IToken);
        }
      }
    }
  }, [router, tokens]);

  useEffect(() => {
    if (closeTransactionModal) {
      resetPoolValues();
    }
  }, [closeTransactionModal]);

  const resetPoolValues = () => {
    setToken1(null);
    setToken2(null);

    setToken1Amount(0);
    setToken2Amount(0);

    setInitialPrice(0);
    setTierValue(0);

    setMinPrice(1.0);
    setMaxPrice(2.0);
  };

  return (
    <SupplyLiquidityStyle>
      <Box className="supply-liquidity-title">
        <Typography variant="h4">Supply Liquidity</Typography>
        <Box className="supply-liquidity-actions">
          <Typography variant="body2" onClick={resetPoolValues}>Clear</Typography>
          <IconButton>
            <SettingIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography>Start earning incentives on your liquidity</Typography>

      <Box className="supply-liquidity-select-pair">
        <Typography variant="body2">Select a pair</Typography>
        <Box className="supply-liquidity-token-selection">
          <Box
            data-testid="select-token1-test"
            className={
              cn({
                'select-token': true,
                'selected': !!token1,
              })
            }
            onClick={() => { setOpenSelectToken1(true); }}
          >
            {
              token1 ?
                <Box>
                  <img src={token1.logo.png} alt={token1.symbol} width={28} height={28} style={{ borderRadius: '100%' }} />
                  <Typography variant="subtitle1">{token1.symbol}</Typography>
                </Box> :
                <Typography variant="subtitle1">Select a token</Typography>
            }
            <FontAwesomeIcon icon={faChevronDown} />
          </Box>

          <Box className="plus-icon">
            <PlusCircleIcon />
          </Box>

          <Box
            data-testid="select-token2-test"
            className={
              cn({
                'select-token': true,
                'selected': !!token2,
              })
            }
            onClick={() => { setOpenSelectToken2(true); }}
          >
            {
              token2 ?
                <Box>
                  <img src={token2.logo.png} alt={token2.symbol} width={28} height={28} style={{ borderRadius: '100%' }} />
                  <Typography variant="subtitle1">{token2.symbol}</Typography>
                </Box> :
                <Typography variant="subtitle1">Select a token</Typography>
            }
            <FontAwesomeIcon icon={faChevronDown} />
          </Box>
        </Box>
      </Box>

      {
        !!token1 && !!token2 &&
        <InputComponent
          className="supply-liquidity-initial-price"
          data-testid="initial-price-input-test"
          type="number"
          label="Set Initial Price"
          onChange={(e) => { setInitialPrice(parseFloat(e.target.value)); }}
        />
      }

      <Box className="supply-liquidity-select-fee-tier">
        <Typography variant="body2">Select fee tier</Typography>
        <FeeTiers tierValue={tierValue as number} onChange={(value) => { setTierValue(value); }} />
      </Box>

      <RangeSelector
        data={chartData}
        defaultRange={[minPrice, maxPrice]}
        onChangeRange={onChangeRange}
        disabled={!token1 || !token2}
      />

      <Box className="supply-liquidity-set-price-range">
        <Box className="set-price-range-title">
          <Typography variant="body2">Set price range</Typography>
          <Typography className="full-range" variant="body2" onClick={onClickFullRange}>Full range</Typography>
        </Box>
        <Box className="set-price-range">
          <PriceRange
            label="Min Price"
            price={minPrice}
            onChange={(value) => { setMinPrice(value); }}
          />
          <PriceRange
            label="Max Price"
            price={maxPrice}
            onChange={(value) => { setMaxPrice(value); }}
          />
        </Box>
      </Box>

      <Box className="deposit-amounts">
        <Typography variant="body2">Deposit amounts</Typography>
        <DepositAmount
          token={token1 as IToken}
          tokenAmount={token1Amount}
          balance={token1 ? +getDisplayTokenAmount(+(tokenBalances.find(el => el.tokenID === token1.tokenID)?.availableBalance || 0), token1) : 0}
          onChange={(value) => { setToken1Amount(value); }}
        />
        <DepositAmount
          token={token2 as IToken}
          tokenAmount={token2Amount}
          balance={token2 ? +getDisplayTokenAmount(+(tokenBalances.find(el => el.tokenID === token2.tokenID)?.availableBalance || 0), token2) : 0}
          onChange={(value) => { setToken2Amount(value); }}
        />
      </Box>

      <ButtonComponent
        data-testid="preview-button-test"
        onClick={() => {
          onPreview({
            token1: token1 as IToken,
            token2: token2 as IToken,
            token1Amount: +token1Amount,
            token2Amount: +token2Amount,
            tickInitialPrice: initialPrice,
            tickLower: minPrice,
            tickUpper: maxPrice,
            feeTier: tierValue
          });
        }}
        disabled={!isValid}
      >
        <Typography variant="subtitle1">Preview</Typography>
      </ButtonComponent>

      {
        !(token1 && token2) &&
        <Box className="supply-liquidity-mask">
        </Box>
      }

      {
        (openSelectToken1 || openSelectToken2) &&
        <SelectTokenModal
          tokens={tokens}
          tokenBalances={tokenBalances}
          onSelect={onSelectToken}
          onClose={onCloseSelectToken}
        />
      }
    </SupplyLiquidityStyle >
  );
};