import BasierSquareRegularEot from '../fonts/basier-square/basiersquare-regular.eot';
import BasierSquareRegularWoff from '../fonts/basier-square/basiersquare-regular.woff';
import BasierSquareRegularOtf from '../fonts/basier-square/basiersquare-regular.otf';
import BasierSquareRegularSvg from '../fonts/basier-square/basiersquare-regular.svg';
import BasierSquareMediumEot from '../fonts/basier-square/basiersquare-medium.eot';
import BasierSquareMediumWoff from '../fonts/basier-square/basiersquare-medium.woff';
import BasierSquareMediumOtf from '../fonts/basier-square/basiersquare-medium.otf';
import BasierSquareMediumSvg from '../fonts/basier-square/basiersquare-medium.svg';
import BasierSquareBoldEot from '../fonts/basier-square/basiersquare-bold.eot';
import BasierSquareBoldWoff from '../fonts/basier-square/basiersquare-bold.woff';
import BasierSquareBoldOtf from '../fonts/basier-square/basiersquare-bold.otf';
import BasierSquareBoldSvg from '../fonts/basier-square/basiersquare-bold.svg';
import BasierSquareSemiboldEot from '../fonts/basier-square/basiersquare-semibold.eot';
import BasierSquareSemiboldWoff from '../fonts/basier-square/basiersquare-semibold.woff';
import BasierSquareSemiboldOtf from '../fonts/basier-square/basiersquare-semibold.otf';
import BasierSquareSemiboldSvg from '../fonts/basier-square/basiersquare-semibold.svg';

const Typography = {
  '@font-face': [
    {
      fontFamily: 'Basier Square Regular',
      src: `url(${BasierSquareRegularEot}),
            url(${BasierSquareRegularEot}?#iefix) format('embedded-opentype'),
            url(${BasierSquareRegularWoff}) format('woff'),
            url(${BasierSquareRegularOtf}) format('opentype'),
            url(${BasierSquareRegularSvg}) format('svg')`
    },
    {
      fontFamily: 'Basier Square Medium',
      src: `url(${BasierSquareMediumEot}),
            url(${BasierSquareMediumEot}?#iefix) format('embedded-opentype'),
            url(${BasierSquareMediumWoff}) format('woff'),
            url(${BasierSquareMediumOtf}) format('opentype'),
            url(${BasierSquareMediumSvg}) format('svg')`
    },
    {
      fontFamily: 'Basier Square Bold',
      src: `url(${BasierSquareBoldEot}),
            url(${BasierSquareBoldEot}?#iefix) format('embedded-opentype'),
            url(${BasierSquareBoldWoff}) format('woff'),
            url(${BasierSquareBoldOtf}) format('opentype'),
            url(${BasierSquareBoldSvg}) format('svg')`
    },
    {
      fontFamily: 'Basier Square SemiBold',
      src: `url(${BasierSquareSemiboldEot}),
            url(${BasierSquareSemiboldEot}?#iefix) format('embedded-opentype'),
            url(${BasierSquareSemiboldWoff}) format('woff'),
            url(${BasierSquareSemiboldOtf}) format('opentype'),
            url(${BasierSquareSemiboldSvg}) format('svg')`
    }
  ]
};

export default Typography;
