import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import {
  ButtonComponent,
} from 'components';
import { CancelIcon, HelpIcon, tokenSvgs } from 'imgs/icons';
import { SwapConfirmStyle } from './index.style';
import { ConversionRates, ISwapData, IToken } from 'models';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { cryptoDecimalFormat, currencyDecimalFormat } from 'utils';

export interface ISwapConfirmModalProps {
  tokenIn: IToken,
  tokenOut: IToken,
  token1Amount: number,
  token2Amount: number,
  splipageTolerance: number,
  openTransactionApproval?: boolean,
  conversionRates: ConversionRates,
  currency: string,
  swapExactIn: boolean,
  onClose: () => void,
  onConfirm: (data: ISwapData) => void,
}

export const SwapConfirmModal: React.FC<ISwapConfirmModalProps> = (props) => {
  const {
    token1Amount,
    tokenIn,
    tokenOut,
    token2Amount,
    splipageTolerance,
    openTransactionApproval,
    conversionRates,
    currency,
    swapExactIn,
    onClose,
    onConfirm,
  } = props;

  const onClickConfirm = () => {
    onConfirm({
      tokenIn,
      tokenOut,
      tokenInAmount: token1Amount,
      tokenOutAmount: token2Amount,
      swapExactIn,
    });
    onClose();
  };

  return (
    <SwapConfirmStyle data-testid="swap-confirm-modal-test">
      <Box className="swap-confirm-modal-background" />
      <Box className="swap-confirm-modal-container">
        <Box className="swap-confirm-modal-header">
          <Typography variant="h4">Review & Confirms</Typography>
          <CancelIcon onClick={onClose} />
        </Box>
        <Box className="swap-confirm-modal-body">
          <Typography variant="body1">Swapping LSK</Typography>
          <Box className="swap-confirm-token-amount">
            <Image src={tokenSvgs[tokenIn.symbol]} width={24} height={24} />
            <Typography className="swap-confirm-amount" variant="body2">{cryptoDecimalFormat(token1Amount)}</Typography>
            <Typography className="swap-confirm-estimate-amount" variant="body2">~{currencyDecimalFormat(token1Amount * conversionRates[tokenIn.symbol][currency], currency)}</Typography>
          </Box>

          <FontAwesomeIcon
            className="swap-confirm-arrow"
            icon={faArrowDown}
          />

          <Typography variant="body1">for {tokenOut.symbol}</Typography>
          <Box className="swap-confirm-token-amount">
            <Image src={tokenSvgs[tokenOut.symbol]} width={24} height={24} />
            <Typography className="swap-confirm-amount" variant="body2">{cryptoDecimalFormat(token2Amount)}</Typography>
            <Typography className="swap-confirm-estimate-amount" variant="body2">~{currencyDecimalFormat(token2Amount * conversionRates[tokenOut.symbol][currency], currency)}</Typography>
          </Box>

          <Box className="transaction-detail">
            <Typography className="transaction-detail-title">Transaction details</Typography>
            <Box className="transaction-detail-property slippage-tolerance">
              <Typography className="transaction-detail-property-title" variant="body2">Slippage Tolerance <HelpIcon /></Typography>
              <Typography className="transaction-detail-property-value" variant="body2">{splipageTolerance}%</Typography>
            </Box>
            <Box className="transaction-detail-property price-impact">
              <Typography className="transaction-detail-property-title" variant="body2">Price Impact <HelpIcon /></Typography>
              <Typography className="transaction-detail-property-value" variant="body2">{'<0.21%'}</Typography>
            </Box>
            <Box className="transaction-detail-property network-fee">
              <Typography className="transaction-detail-property-title" variant="body2">Network Fee <HelpIcon /></Typography>
              <Typography className="transaction-detail-property-value" variant="body2">~$1.72</Typography>
            </Box>
            <Box className="transaction-detail-property minimum-received">
              <Typography className="transaction-detail-property-title" variant="body2">Minimum Received <HelpIcon /></Typography>
              <Typography className="transaction-detail-property-value" variant="body2">{cryptoDecimalFormat(token2Amount)} {tokenOut.symbol}</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="swap-confirm-modal-footer">
          <ButtonComponent
            data-testid="swap-confirm-cancel-test"
            className="swap-confirm-modal-cancel"
            variant="text"
            onClick={onClose}
          >
            <Typography variant="body1">Cancel</Typography>
          </ButtonComponent>
          <ButtonComponent
            data-testid="swap-confirm-modal-button-test"
            className="swap-confirm-modal-confirm"
            loading={openTransactionApproval}
            onClick={onClickConfirm}
          >
            <Typography variant="body1">Go to Confirm</Typography>
          </ButtonComponent>
        </Box>
      </Box>
    </SwapConfirmStyle>
  );
};