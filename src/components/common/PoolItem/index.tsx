import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { IPool } from 'models';
import { PoolItemStyle } from './index.style';
import { tokenSvgs } from 'imgs/icons';

interface IProps {
  data?: IPool,
}

export const PoolItem: React.FC<IProps> = (props) => {
  const {
    data,
  } = props;

  return (
    <PoolItemStyle>
      {
        data ?
          <>
            <Box className="pool-item-left">
              <Box className="pool-item-token1">
                <Image src={tokenSvgs[data.token1.symbol]} width={32} height={32} />
              </Box>
              <Box className="pool-item-token2">
                <Image src={tokenSvgs[data.token2.symbol]} width={32} height={32} />
              </Box>
              <Typography className="pool-item-title" variant="body2">{data.token1.symbol}-{data.token2.symbol}</Typography>
              <Box className="pool-item-rate"><Typography variant="body2">{10}%</Typography></Box>
            </Box>
            <Typography className="pool-item-amount" variant="body2">${10}m</Typography>
          </>
          :
          <Typography className="pool-item-title" variant="body2">Select a pool ID</Typography>
      }
    </PoolItemStyle>
  );
};
