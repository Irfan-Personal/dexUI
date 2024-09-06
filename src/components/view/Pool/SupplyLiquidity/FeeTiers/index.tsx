import { Box, Grid, Typography } from '@mui/material';
import { FeeTiersStyle } from './index.style';
import { RadioComponent } from 'components';
import { useEffect, useState } from 'react';
import cn from 'classnames';

export interface IFeeTiersProps {
  tierValue: number,
  onChange: (value: number) => void,
}

const tiers = [
  {
    value: 0.01,
    description: 'Best for very stable pairs.'
  },
  {
    value: 0.05,
    description: 'Best for very stable pairs.'
  },
  {
    value: 0.3,
    description: 'Best for very stable pairs.'
  },
  {
    value: 1,
    description: 'Best for exotic pairs.'
  }
];

export const FeeTiers: React.FC<IFeeTiersProps> = (props) => {
  const { tierValue, onChange } = props;
  const [value, setValue] = useState<number>(tierValue);

  useEffect(() => {
    onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    setValue(tierValue);
  }, [tierValue]);

  return (
    <FeeTiersStyle className="fee-tiers">
      <Grid container spacing={1}>
        {
          tiers.map(tier => (
            <Grid key={tier.value} item xs={3}>
              <Box
                data-testid={`fee-tier-${tier.value}`}
                className={
                  cn({
                    'fee-tier': true,
                    'selected': tier.value === value
                  })}
                onClick={() => { setValue(tier.value); }}
              >
                <Typography variant="body2">{tier.value}%</Typography>
                <RadioComponent checked={tier.value === value} />
                <Typography className="fee-tier-description" variant="body2">{tier.description}</Typography>
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </FeeTiersStyle>
  );
};