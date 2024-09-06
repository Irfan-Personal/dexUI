import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { ButtonComponent, Chart } from 'components';
import { InfoChartStyle } from './index.style';
import { DecreaseIcon, IncreaseIcon, PositionIcon, tokenSvgs } from 'imgs/icons';
import { getPoolToken0, getPoolToken1 } from 'utils';

const periodUnits = [
  'D',
  'W',
  'M',
  'Y',
];

export interface IInfoChartProps {
  chartData?: { time: Date, price: number }[],
  tabs: string[],
  infoChartSummary: any,
  onTabChange: (tab: string) => void,
}

export const InfoChart: React.FC<IInfoChartProps> = (props) => {
  const { chartData, tabs, infoChartSummary, onTabChange } = props;

  const [tabValue, setTabValue] = useState<number>(0);
  const [periodUnit, setPeriodUnit] = useState<string>('D');
  const [volume, setVolume] = useState<number>(0);
  const [timeLines, setTimeLines] = useState<string[]>([]);

  const data = useMemo(() => {
    if (chartData && chartData.length > 0) {
      const now = chartData[chartData.length - 1].time;
      const startOfYear = new Date(now.getFullYear(), 0, 1);
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const startOfWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - now.getDay());
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      let startTime = 0;

      switch (periodUnit) {
      case 'D':
        startTime = startOfDay.getTime();
        break;
      case 'W':
        startTime = startOfWeek.getTime();
        break;
      case 'M':
        startTime = startOfMonth.getTime();
        break;
      case 'Y':
        startTime = startOfYear.getTime();
        break;
      }

      const data = chartData.reduce((cur: { x: number; y: number }[], el: { time: Date; price: number }) => {
        if (el.time.getTime() > startTime) {
          return [
            ...cur,
            {
              x: el.time.getTime(),
              y: el.price,
            },
          ];
        }
        return cur;
      }, []);

      return data;
    }
    return [];
  }, [chartData, periodUnit]);

  useEffect(() => {
    if (data.length > 0) {
      let start = data[0].x;
      const end = data[data.length - 1].x;
      const period = (end - start) / 7;
      const array: string[] = [];
      for (let i = 0; i < 7; i++) {
        const time = new Date(start += period);
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const date = time.getDate();
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[time.getMonth()];
        switch (periodUnit) {
        case 'D':
          array.push(`${hours > 12 ? hours - 12 : hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`);
          break;
        case 'W':
          array.push(`${hours}:${minutes} / ${month} ${date}`);
          break;
        case 'M':
          array.push(`${hours}:${minutes} / ${month} ${date}`);
          break;
        case 'Y':
          array.push(`${month} ${date}`);
          break;
        }
      }
      setTimeLines(array);

      const totalVolume = data.reduce((sum, el) => {
        return sum += el.y;
      }, 0);
      setVolume(totalVolume);
    }
  }, [data, periodUnit]);

  const onChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <InfoChartStyle>
      {
        data.length > 0 ?
          <>
            <Box className="info-chart-header">
              <Box className="info-chart-volume">
                <Typography variant="body1">Volume</Typography>
                <Typography data-testid="volume-test" variant="h2">${volume.toLocaleString()}</Typography>
                <Typography variant="body2">{new Date().toDateString()}</Typography>
              </Box>
              <Tabs className="info-chart-tab" value={tabValue} onChange={onChangeTab} centered>
                {
                  tabs.map((tab) => <Tab key={tab} label={tab} data-testid={`tab-test-${tab}`} onClick={() => onTabChange(tab)} />)
                }
              </Tabs>
              <Box className="info-chart-period">
                {
                  periodUnits.map((el) => (
                    <ButtonComponent
                      key={el}
                      data-testid={`peroid-unit-${el}-test`}
                      className={
                        cn({
                          'selected': el === periodUnit
                        })
                      }
                      onClick={() => { setPeriodUnit(el); }}
                    >
                      <Typography variant="body2">{el}</Typography>
                    </ButtonComponent>
                  ))
                }
              </Box>
            </Box>
            <Chart className="info-chart-svg"
              data={data}
              dots={periodUnit === 'D' || periodUnit === 'W'}
              gradient
            />
            <Box className="info-chart-timeline">
              {
                timeLines && timeLines.map((el, index) => (
                  <Typography variant="caption" key={index}>{el}</Typography>
                ))
              }
            </Box>
            {
              !!infoChartSummary.length &&
              <Grid className="info-chart-summary" container spacing={2}>
                {
                  infoChartSummary.map((el: any, index: number) =>
                    <Grid item key={index}>
                      <Box className="summary-item">
                        <Box className="summary-title">
                          <Typography variant="body1">{el.title}</Typography>
                        </Box>
                        {
                          el.title === 'Total Tokens Locked' ?
                            <Box className='summary-total-tokens-locked'>
                              <Image src={tokenSvgs[getPoolToken0(el.value)]} width={24} height={24} />
                              <Typography variant="body2">38.5k</Typography>
                              <Image src={tokenSvgs[getPoolToken1(el.value)]} width={24} height={24} />
                              <Typography variant="body2">145.9k</Typography>
                            </Box> :
                            <Typography variant="body2">{el.value}</Typography>
                        }
                        {
                          !!el.changePercent &&
                          <Box className={cn({ 'summary-percent': true, 'increase': el.changePercent >= 0 })} >
                            <Typography variant="body2">{el.changePercent}%</Typography>
                            {el.changePercent >= 0 ? <IncreaseIcon /> : <DecreaseIcon />}
                          </Box>
                        }
                      </Box>
                    </Grid>
                  )
                }
              </Grid>
            }
          </>
          :
          <Box className="empty-chart-box">
            <PositionIcon />
            <Typography variant="body2">Your favorite pools will be shown here.</Typography>
          </Box>
      }
    </InfoChartStyle>
  );
};
