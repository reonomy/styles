import { hexToRGBA } from './utils/hexToRgba';

const ReonomyPalette = {
  // primary
  pelorous: '#40bbc6', // teal
  pelorousLight: '#7aeef9',
  pelorousDark: '#008b95',

  // secondary
  bayOfMany: '#2e3191', // indigo blue
  bayOfManyLight: '#635bc2',
  bayOfManyDark: '#000c62',

  lemon: '#F6EC0E', // yellow
  texasRose: '#FFB74D', // golden orange-yellow
  blueZodiac: '#0F1144', // dark navy blue
  tuatara: '#3b3a39', // dark orange-grey opposite catskill-white

  success: '#07C279', // green chips/labels/panels
  warning: '#FF9800', // orange chips/labels/panels
  danger: '#FF0C3E', // red chips/labels/panels

  // dangerLegacy: '#ec5f5f', // danger color used in Angular app
  mineShaft: '#212121', // dark grey
  deco: '#C5E1A5', // pale green for ownership green matches

  labelStyle0: '#959595', // grey
  labelStyle1: '#f2d600', // yellow
  labelStyle2: '#e79f27', // orange
  labelStyle3: '#d36027', // red
  labelStyle4: '#00a074', // green
  labelStyle5: '#cc7aa8', // pink
  labelStyle6: '#5fb2e6', // light blue
  labelStyle7: '#0773b3', // dark blue
  labelStyle8: '#3a3b4d', // black

  blackHighEmphasis: hexToRGBA('#000', 0.87),
  blackMediumEmphasis: hexToRGBA('#000', 0.6),
  blackInactive: hexToRGBA('#000', 0.54),
  blackDisabled: hexToRGBA('#000', 0.38)
};

export default ReonomyPalette;
