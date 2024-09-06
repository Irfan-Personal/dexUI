import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppActions, RootState } from 'store';
import { InfoView } from 'components';

export const InfoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const [moduleCommand, setModuleCommand] = useState<string>('');
  const { transactions } = useSelector((root: RootState) => root.transaction);
  const { tokenDetails, availableTokens } = useSelector((root: RootState) => root.token);
  const { poolDetails } = useSelector((root: RootState) => root.pool);
  const { conversionRates } = useSelector((root: RootState) => root.token);

  useEffect(() => {
    dispatch(AppActions.transaction.getTransactions({
      moduleCommand: moduleCommand || undefined,
    }));
  }, [dispatch, moduleCommand]);

  const onChangeTransactionCommand = (value: string) => {
    setModuleCommand(value);
  };

  const getToken2FiatConversion = (tokenSymbol: string, currency: string) => {
    dispatch(AppActions.token.getToken2FiatConversion({
      tokenSymbol,
      currency,
    }));
  };

  useEffect(() => {
    dispatch(AppActions.token.getTopTokensFromDatabase({}));
    dispatch(AppActions.pool.getTopPoolsFromDatabase({}));
    dispatch(AppActions.token.getAvailableTokens());
  }, [dispatch]);

  return (
    <InfoView
      poolDetails={poolDetails}
      conversionRates={conversionRates}
      availableTokens={availableTokens}
      getToken2FiatConversion={getToken2FiatConversion}
      tokenDetails={tokenDetails}
      transactions={transactions}
      onChangeTransactionCommand={onChangeTransactionCommand}
    />
  );
};