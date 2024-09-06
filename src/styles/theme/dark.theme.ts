import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';

const themeColors = {
  text: {
    primary: '#F2F2F2',
    secondary: '#F2F2F2',
    paragraph: '#CDCDCD',
    body: '#F2F2F2',
    heading: '#4738A6',
    button: '#FFFFFF',
    placeholder: '#A4ABB7',
  },
  lightcurve: {
    0: '#6953F4',
    10: '#5845CC',
    20: '#4738A6',
    40: '#362B7F',
    60: '#261E59',
    80: '#E6E6E6',
  },
  secondary: {
    0: '#F5981B',
    5: '#F5981B',
    10: '#CC7E16',
    30: '#A66712',
    40: '#7F4F0E',
    50: '#59370A',
    60: '#332006',
  },
  primary: {
    85: '#7E6CF4',
    70: '#4F39B2',
    60: '#271B5B',
    40: '#2D2166',
    20: '#322573',
    10: '#4F39B2',
    5: '#322573',
    2.5: '#25195E',
    1: '#F4F8F9',
    0: '#FFFFFF',
  },
  opacities: {
    5: '#333333',
    10: '#3D3D3D',
    20: '#E6E6E6',
    40: '#7E7E7E',
    80: '#D4D4D4',
  },
  border: {
    primary: '#433199',
  },
  bg: {
    primary: 'linear-gradient(90deg, #140C42 0%, #211953 52.88%, #110A3A 101.53%, #140C42 101.53%)',
    secondary: '#22184C',
    helper: '#6953F4',
    proposalItem: 'linear-gradient(180deg, #2E2567 0%, rgba(37, 26, 103, 0.5) 143.01%);',
    banner: 'linear-gradient(180deg, #150556 0%, rgba(25, 9, 98, 0.9) 100%)',
    walletAddress: 'linear-gradient(180deg, #372589 0%, rgba(27, 19, 68, 0.8) 100%)',
    slider: '#322573',
  },
  switch: {
    track: '#382980',
    thumb: '#6953F4',
  },
  success: {
    light: '#BD5359',
    lighter: '#8DC881',
    dark: '#459A33',
  },
  warning: {
    lighter: '#F8F3D8',
    light: '#E2CA64',
  },
  info: {
    dark: '#2EA3DD',
    light: '#C0ECE8',
  },
  error: {
    dark: '#FF4557',
    light: '#FB8B96',
  },
} as const;

const lightTheme = createTheme({
  ...themeColors,
  ...baseTheme,
  palette: {
    mode: 'dark',
  },
});

export default lightTheme;
