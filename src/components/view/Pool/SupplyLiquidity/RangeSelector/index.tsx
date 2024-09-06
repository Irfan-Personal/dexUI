import { Box, Slider, SliderThumb, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import { Chart } from 'components/common';
import { PositionIcon } from 'imgs/icons';
import { useEffect, useState } from 'react';
import { RangeSelectorStyle } from './index.style';

export interface IRangeSelectorProps {
  data: any,
  disabled: boolean,
  defaultRange: number[],
  onChangeRange: (range: number[]) => void,
}

const minDistance = 1;

type AirbnbThumbComponentProps = React.HTMLAttributes<unknown>

function ThumbComponent(props: AirbnbThumbComponentProps) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <Box className="thumb-box">
        <span className="thumb-bar" />
        <span className="thumb-bar" />
      </Box>
    </SliderThumb>
  );
}

export const RangeSelector: React.FC<IRangeSelectorProps> = (props) => {
  const { data, disabled, defaultRange, onChangeRange } = props;
  const theme: any = useTheme();

  const [range, setRange] = useState<number[]>([(defaultRange[0] - 1) * 100, (defaultRange[1] - 1) * 100]);

  useEffect(() => {
    setRange([(defaultRange[0] - 1) * 100, (defaultRange[1] - 1) * 100]);
  }, [defaultRange]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setRange([Math.min(newValue[0], range[1] - minDistance), range[1]]);
      onChangeRange([1 + Math.min(newValue[0], range[1] - minDistance) / 100, 1 + range[1] / 100]);
    } else {
      setRange([range[0], Math.max(newValue[1], range[0] + minDistance)]);
      onChangeRange([1 + range[0] / 100, 1 + Math.max(newValue[1], range[0] + minDistance) / 100]);
    }
  };

  return (
    <RangeSelectorStyle>
      <Box className="range-selector-container">
        {
          !disabled ?
            <>
              <Chart className="chart-svg" data={data} />
              <Slider
                slots={{
                  thumb: ThumbComponent
                }}
                value={range}
                valueLabelDisplay="off"
                onChange={handleChange}
                disableSwap
              />
              <Box
                sx={{
                  position: 'absolute',
                  width: `${range[0]}%`,
                  height: '100%',
                  left: 0,
                  bottom: 0,
                  background: theme.primary[1],
                  opacity: 0.5,
                  zIndex: 1,
                }}
              ></Box>
              <Box
                sx={{
                  position: 'absolute',
                  width: `${100 - range[1]}%`,
                  height: '100%',
                  right: 0,
                  bottom: 0,
                  background: theme.primary[1],
                  opacity: 0.5,
                  zIndex: 1,
                }}
              ></Box>
            </>
            :
            <>
              <PositionIcon />
              <Typography variant="body1">Your positions will be here.</Typography>
            </>
        }
      </Box>
    </RangeSelectorStyle>
  );
};