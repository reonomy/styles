const Typography = (dir: string) => ({
  '@font-face': [
    {
      fontFamily: 'Basier Square Regular',
      src: `url(${dir}/basier-square/basiersquare-regular.eot),
            url(${dir}/basier-square/basiersquare-regular.eot?#iefix) format('embedded-opentype'),
            url(${dir}/basier-square/basiersquare-regular.woff) format('woff'),
            url(${dir}/basier-square/basiersquare-regular.otf) format('opentype'),
            url(${dir}/basier-square/basiersquare-regular.svg) format('svg')`
    },
    {
      fontFamily: 'Basier Square Medium',
      src: `url(${dir}/basier-square/basiersquare-medium.eot),
            url(${dir}/basier-square/basiersquare-medium.eot?#iefix) format('embedded-opentype'),
            url(${dir}/basier-square/basiersquare-medium.woff) format('woff'),
            url(${dir}/basier-square/basiersquare-medium.otf) format('opentype'),
            url(${dir}/basier-square/basiersquare-medium.svg) format('svg')`
    },
    {
      fontFamily: 'Basier Square Bold',
      src: `url(${dir}/basier-square/basiersquare-bold.eot),
            url(${dir}/basier-square/basiersquare-bold.eot?#iefix) format('embedded-opentype'),
            url(${dir}/basier-square/basiersquare-bold.woff) format('woff'),
            url(${dir}/basier-square/basiersquare-bold.otf) format('opentype'),
            url(${dir}/basier-square/basiersquare-bold.svg) format('svg')`
    },
    {
      fontFamily: 'Basier Square SemiBold',
      src: `url(${dir}/basier-square/basiersquare-semibold.eot),
            url(${dir}/basier-square/basiersquare-semibold.eot?#iefix) format('embedded-opentype'),
            url(${dir}/basier-square/basiersquare-semibold.woff) format('woff'),
            url(${dir}/basier-square/basiersquare-semibold.otf) format('opentype'),
            url(${dir}/basier-square/basiersquare-semibold.svg) format('svg')`
    }
  ]
});

export default Typography;
