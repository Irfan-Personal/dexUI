import { Box, IconButton, Typography } from '@mui/material';
import { TokenComponentStyle } from './index.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { IToken } from 'models';
import { BadgeCheckIcon } from 'imgs/icons';
import { PlatformContext } from 'contexts';
import { useContext } from 'react';
import { currencySymbols } from 'consts';

export interface ITokenComponentProps {
  token: IToken,
  tokenBalance: string | number,
  fiatBalance: number,
  onBack: () => void,
}

export const TokenComponent: React.FC<ITokenComponentProps> = (props) => {
  const { token, tokenBalance, fiatBalance, onBack } = props;
  const { currency } = useContext(PlatformContext);

  return (
    <TokenComponentStyle>
      <Box className="token-header">
        <IconButton data-testid={'token-back-test'} onClick={onBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
        <Box className="token-name">
          <BadgeCheckIcon />
          <Typography variant="h4">{token.chainName}</Typography>
        </Box>
        <IconButton>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </IconButton>
      </Box>
      <Box className="token-main">
        <Box className="token-image">
          <img src={token.logo.png} alt={token.symbol} width={40} height={40} style={{ borderRadius: '100%' }} />
        </Box>
        <Typography variant="body2">{currencySymbols[currency]} {fiatBalance}</Typography>
        <Typography variant="h2">{tokenBalance} {token.symbol}</Typography>
      </Box>
    </TokenComponentStyle >
  );
};