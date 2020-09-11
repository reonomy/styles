import BasierSquareRegularEOT from '../fonts/basier-square/basiersquare-regular.eot';
import BasierSquareRegularWOFF from '../fonts/basier-square/basiersquare-regular.woff';
import BasierSquareRegularOTF from '../fonts/basier-square/basiersquare-regular.otf';
import BasierSquareRegularSVG from '../fonts/basier-square/basiersquare-regular.svg';

import BasierSquareMediumEOT from '../fonts/basier-square/basiersquare-medium.eot';
import BasierSquareMediumWOFF from '../fonts/basier-square/basiersquare-medium.woff';
import BasierSquareMediumOTF from '../fonts/basier-square/basiersquare-medium.otf';
import BasierSquareMediumSVG from '../fonts/basier-square/basiersquare-medium.svg';

import BasierSquareBoldEOT from '../fonts/basier-square/basiersquare-bold.eot';
import BasierSquareBoldWOFF from '../fonts/basier-square/basiersquare-bold.woff';
import BasierSquareBoldOTF from '../fonts/basier-square/basiersquare-bold.otf';
import BasierSquareBoldSVG from '../fonts/basier-square/basiersquare-bold.svg';

import BasierSquareSemiboldEOT from '../fonts/basier-square/basiersquare-semibold.eot';
import BasierSquareSemiboldWOFF from '../fonts/basier-square/basiersquare-semibold.woff';
import BasierSquareSemiboldOTF from '../fonts/basier-square/basiersquare-semibold.otf';
import BasierSquareSemiboldSVG from '../fonts/basier-square/basiersquare-semibold.svg';

const Typography = {
  '@font-face': [
    {
      fontFamily: 'Basier Square Regular',
      src: `url(${BasierSquareRegularEOT})
            url(${BasierSquareRegularEOT}) format('embedded-opentype'),
            url(${BasierSquareRegularWOFF}) format('woff'),
            url(${BasierSquareRegularOTF}) format('opentype'),
            url(${BasierSquareRegularSVG}) format('svg')`
    },
    {
      fontFamily: 'Basier Square Medium',
      src: `url(${BasierSquareMediumEOT}),
            url(${BasierSquareMediumEOT}) format('embedded-opentype'),
            url(${BasierSquareMediumWOFF}) format('woff'),
            url(${BasierSquareMediumOTF}) format('opentype'),
            url(${BasierSquareMediumSVG}) format('svg')`
    },
    {
      fontFamily: 'Basier Square Bold',
      src: `url(${BasierSquareBoldEOT}),
            url(${BasierSquareBoldEOT}) format('embedded-opentype'),
            url(${BasierSquareBoldWOFF}) format('woff'),
            url(${BasierSquareBoldOTF}) format('opentype'),
            url(${BasierSquareBoldSVG}) format('svg')`
    },
    {
      fontFamily: 'Basier Square SemiBold',
      src: `url(${BasierSquareSemiboldEOT}),
            url(${BasierSquareSemiboldEOT}) format('embedded-opentype'),
            url(${BasierSquareSemiboldWOFF}) format('woff'),
            url(${BasierSquareSemiboldOTF}) format('opentype'),
            url(${BasierSquareSemiboldSVG}) format('svg')`
    }
  ]
};

export default Typography;
