import { useState } from 'react';
import { Box, Grid, MenuItem, Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import { DropdownComponent, InputComponent, PoolItem, PopoverComponent } from 'components';
import { HelpIcon } from 'imgs/icons';
import { allowDigitOnly } from 'utils';
import { IncentivizationProposalStyle } from './index.style';
import { UseFormRegister } from 'react-hook-form';
import { IPool } from 'models';

interface IProps {
  pools: IPool[],
  className?: string,
  register?: UseFormRegister<any>,
}

export const IncentivizationProposal: React.FC<IProps> = (props) => {
  const { pools, className, register } = props;
  const theme: any = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [openPoolIdHelp, setOpenPoolIdHelp] = useState<boolean>(false);
  const [openMultiplierHelp, setOpenMultiplierHelp] = useState<boolean>(false);

  const onClickPoolIDHelp = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
    setOpenPoolIdHelp(true);
  };

  const onClickMultiplierHelp = (event: React.MouseEvent<any>) => {
    setAnchorEl(event.currentTarget);
    setOpenMultiplierHelp(true);
  };

  return (
    <IncentivizationProposalStyle className={className}>
      <Grid container spacing={3} className="proposal-incentivization">
        <Grid item lg={6}>
          <DropdownComponent
            name="poolID"
            className="proposal-pool-id"
            defaultValue={''}
            label={
              <>
                Select a pool ID <HelpIcon
                  onClick={onClickPoolIDHelp}
                />
              </>
            }
            renderValue={(value) => {
              const item = pools.find(el => el.id == value);
              if (item)
                return (<PoolItem data={item} />);
              else
                return (<Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '2rem',
                    color: theme.text.placeholder
                  }}>
                  <Typography variant="body1">Select a pool</Typography>
                </Box>
                );
            }}
            register={register}
          >
            <MenuItem value="" disabled>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '2rem',
                width: '100%',
              }}>
                <Typography variant="body2">Pools</Typography>
                <Typography variant="body2">TVL</Typography>
              </Box>
            </MenuItem>
            {
              pools.map(item => (
                <MenuItem
                  key={item.id}
                  value={item.id}
                >
                  <PoolItem data={item} />
                </MenuItem>
              ))
            }
          </DropdownComponent>
          <PopoverComponent
            open={openPoolIdHelp}
            anchorEl={anchorEl}
            onClose={() => { setOpenPoolIdHelp(false); }}
          >
            <Typography variant="body2">Incentivization proposals must include a pool ID of the incentivized pool.</Typography>
          </PopoverComponent>
          <PopoverComponent
            open={openMultiplierHelp}
            anchorEl={anchorEl}
            onClose={() => { setOpenMultiplierHelp(false); }}
          >
            <Typography variant="body2">The multiplier of the pool to be incentivized in case of incentivization proposal.</Typography>
          </PopoverComponent>
        </Grid>
        <Grid item lg={6}>
          <InputComponent
            name="multiplier"
            label={
              <>
                Add a multiplier  <HelpIcon
                  onClick={onClickMultiplierHelp}
                />
              </>
            }
            type="number"
            placeholder="Add multiplier"
            onKeyDown={allowDigitOnly}
            register={register}
          />
        </Grid>
      </Grid>
    </IncentivizationProposalStyle >
  );
};