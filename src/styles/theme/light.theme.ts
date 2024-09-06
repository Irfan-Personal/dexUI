import { createTheme } from '@mui/material/styles';
import { baseTheme } from './baseTheme';

const themeColors = {
  text: {
    primary: '#282828',
    secondary: '#515661',
    paragraph: '#6B7280',
    body: '#6B7280',
    heading: '#4738A6',
    button: '#FFFFFF',
    placeholder: '#6B7280',
  },
  lightcurve: {
    0: '#6953F4',
    10: '#A196F6',
    20: '#4738A6',
    40: '#362B7F',
    60: '#261E59',
    80: '#161133',
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
    60: '#FAFAFC',
    40: '#E4EBF9',
    20: '#D9D8F8',
    10: '#E7E9F9',
    5: '#EEF0F8',
    2.5: '#F2F5F9',
    1: '#F4F8F9',
    0: '#6953F4'
  },
  opacities: {
    5: '#333333',
    10: '#E1E1E1',
    20: '#535353',
    40: '#7E7E7E',
    80: '#D4D4D4',
  },
  border: {
    primary: '#E6E6E6',
  },
  slider: {
    primary: '#F2F2F2',
    secondary: '#F4F8F9',
  },
  bg: {
    primary: '#FBFBFB',
    secondary: '#FFFFFF',
    modal: '#FFFFFF',
    helper: '#22184D',
    banner: 'linear-gradient(180deg, #F3F3FD 0%, rgba(238, 238, 249, 0.9) 100%)',
    proposalItem: 'linear-gradient(180deg, #F4F2FF 0%, rgba(238, 236, 249, 0.5) 143.01%);',
    walletAddress: 'linear-gradient(180deg, #EEEFF7 0%, rgba(232, 234, 245, 0.8) 100%);',
    slider: '#F2F2F2',
  },
  switch: {
    track: '#E6E6E6',
    thumb: '#FFFFFF',
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
    mode: 'light'
  },
});

export default lightTheme;
