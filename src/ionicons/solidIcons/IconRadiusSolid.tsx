import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconRadiusSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.0752 11.9999C2.0752 6.90711 6.20374 2.77856 11.2966 2.77856C15.6119 2.77856 19.2359 5.74343 20.2409 9.74708C19.5836 10.0187 19.071 10.5696 18.8512 11.252H13.5676C13.2519 10.2722 12.3328 9.56335 11.248 9.56335C9.90231 9.56335 8.8114 10.6543 8.8114 12C8.8114 13.3457 9.90231 14.4366 11.248 14.4366C12.3313 14.4366 13.2494 13.7296 13.5664 12.752H18.8524C19.073 13.4324 19.5849 13.9817 20.2409 14.2528C19.2359 18.2565 15.6119 21.2213 11.2966 21.2213C6.20374 21.2213 2.0752 17.0927 2.0752 11.9999ZM11.2966 1.27856C16.4052 1.27856 20.6783 4.85093 21.7558 9.63405C22.819 9.89607 23.6074 10.8559 23.6074 12C23.6074 13.144 22.819 14.1039 21.7558 14.3659C20.6782 19.149 16.4051 22.7213 11.2966 22.7213C5.37531 22.7213 0.575195 17.9212 0.575195 11.9999C0.575195 6.07868 5.37531 1.27856 11.2966 1.27856Z"
      />
    </SvgIcon>
  );
}
