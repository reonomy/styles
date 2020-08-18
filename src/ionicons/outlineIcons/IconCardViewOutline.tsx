import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconCardViewOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.50439 13.9591C1.50439 13.5449 1.84018 13.2091 2.25439 13.2091H21.79C22.2042 13.2091 22.54 13.5449 22.54 13.9591V21.2504C22.54 21.6646 22.2042 22.0004 21.79 22.0004H2.25439C1.84018 22.0004 1.50439 21.6646 1.50439 21.2504V13.9591ZM3.00439 14.7091V20.5004H21.04V14.7091H3.00439Z"
        fill="black"
        fillOpacity="0.54"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5044 2.77319C1.5044 2.35898 1.84018 2.02319 2.2544 2.02319H21.79C22.2042 2.02319 22.54 2.35898 22.54 2.77319V10.0645C22.54 10.4787 22.2042 10.8145 21.79 10.8145H2.2544C1.84018 10.8145 1.5044 10.4787 1.5044 10.0645V2.77319ZM3.0044 3.52319V9.31447H21.04V3.52319H3.0044Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  );
}
