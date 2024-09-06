import { useEffect, useMemo, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { TabPanel } from 'components';
import { InfoViewStyle } from './index.style';
import { OverviewComponent } from './Overview';
import { PoolsComponent } from './Pools';
import { TokensComponent } from './Tokens';
import { useRouter } from 'next/router';
import { SearchComponent } from './Search';
import { PATHS } from 'consts';
import { ConversionRates, ITokenDetail, IPoolDetail, ITransaction, IToken } from 'models';

export interface InfoViewProps {
  transactions: ITransaction[],
  tokenDetails: ITokenDetail[],
  poolDetails: IPoolDetail[],
  availableTokens: IToken[],
  conversionRates: ConversionRates,
  getToken2FiatConversion: (tokenSymbol: string, currency: string) => void,
  onChangeTransactionCommand: (value: string) => void,
}

export const InfoView: React.FC<InfoViewProps> = (props) => {
  const {
    transactions,
    availableTokens,
    poolDetails,
    conversionRates,
    getToken2FiatConversion,
    onChangeTransactionCommand,
  } = props;
  const router = useRouter();
  const [tabValue, setTabValue] = useState(0);
  const [filter, setFilter] = useState('');
  const [tokenID, setTokenID] = useState<string>('');
  const [poolID, setPoolID] = useState('');

  const { tokenDetails } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const onClickTab = (tabIndex: number) => {
    if (router)
      router.push(`?tabIndex=${tabIndex}`);
  };

  const onChangeSearchFilter = (value: string) => {
    setFilter(value);
  };

  useEffect(() => {
    if (router) {
      const { query } = router;
      if (query) {
        setPoolID(query.poolID as string);
        setTokenID(query.tokenID as string);
        if (query.tabIndex) {
          setTabValue(parseInt(query.tabIndex as string));
        }
        if (query.poolID !== undefined) {
          setTabValue(1);
        }
        if (query.tokenID !== undefined) {
          setTabValue(2);
        }
      }
    }
  }, [router]);

  const searchedPools = useMemo(() => {
    if (filter)
      return poolDetails.filter(pool =>
        pool.poolName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        .slice(0, 3);
    return [];
  }, [filter, poolDetails]);

  const searchedTokens = useMemo(() => {
    if (filter)
      return tokenDetails.filter(token =>
        token.symbol.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
        token.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        .slice(0, 3);
    return [];
  }, [filter, tokenDetails]);

  const onSelectPool = (id: string) => {
    router.push(`?poolID=${id}`);
  };

  const onSelectToken = (id: string) => {
    router.push(`?tokenID=${id}`);
  };

  const onGotoSwap = (token1: string, token2?: string) => {
    const url = `${PATHS.SWAP}?token1=${token1}&token2=${token2 || ''}`;
    router.replace(url);
  };

  const onGotoAddLiquidity = (token1: string, token2?: string) => {
    const url = `${PATHS.POOL}?token1=${token1}&token2=${token2 || ''}`;
    router.replace(url);
  };

  return (
    <InfoViewStyle>
      <Box className="info-top-box">
        <Tabs className="info-tab" value={tabValue} onChange={handleChange} centered>
          <Tab label="Overview" data-testid="overview-tab-test" onClick={() => onClickTab(0)} />
          <Tab label="Pools" data-testid="pools-tab-test" onClick={() => onClickTab(1)} />
          <Tab label="Tokens" data-testid="tokens-tab-test" onClick={() => onClickTab(2)} />
        </Tabs>
        <SearchComponent
          className="info-search-box"
          router={router}
          pools={searchedPools}
          tokens={searchedTokens}
          onChangeSearchFilter={onChangeSearchFilter}
        />
      </Box>

      <TabPanel value={tabValue} index={0}>
        <OverviewComponent
          transactions={transactions}
          availableTokens={availableTokens}
          poolDetails={poolDetails}
          tokenDetails={tokenDetails}
          onSwap={onGotoSwap}
          onAddLiquidity={onGotoAddLiquidity}
          onSelectPool={onSelectPool}
          onSelectToken={onSelectToken}
          onChangeTransactionCommand={onChangeTransactionCommand}
        />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <PoolsComponent
          poolDetails={poolDetails}
          poolID={poolID}
          conversionRates={conversionRates}
          getToken2FiatConversion={getToken2FiatConversion}
          onSwap={onGotoSwap}
          onAddLiquidity={onGotoAddLiquidity}
          onSelectPool={onSelectPool}
          onSelectToken={onSelectToken}
        />
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <TokensComponent
          transactions={transactions}
          availableTokens={availableTokens}
          poolDetails={poolDetails}
          tokenID={tokenID}
          tokenDetails={tokenDetails}
          onSwap={onGotoSwap}
          onAddLiquidity={onGotoAddLiquidity}
          onSelectPool={onSelectPool}
          onSelectToken={onSelectToken}
          onChangeTransactionCommand={onChangeTransactionCommand}
        />
      </TabPanel>
    </InfoViewStyle >
  );
};