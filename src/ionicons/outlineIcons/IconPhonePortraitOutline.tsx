import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconPhonePortraitOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 3C6.75 2.17157 7.42157 1.5 8.25 1.5H9.04763C9.11406 1.75726 9.24826 1.99458 9.43934 2.18566C9.72064 2.46696 10.1022 2.625 10.5 2.625H13.5C13.8978 2.625 14.2794 2.46697 14.5607 2.18566C14.7517 1.99458 14.8859 1.75726 14.9524 1.5H15.75C16.5784 1.5 17.25 2.17157 17.25 3V21C17.25 21.8284 16.5784 22.5 15.75 22.5H8.25C7.42157 22.5 6.75 21.8284 6.75 21V3ZM8.25 0H9.375H14.625H15.75C17.4069 0 18.75 1.34315 18.75 3V21C18.75 22.6569 17.4069 24 15.75 24H8.25C6.59315 24 5.25 22.6569 5.25 21V3C5.25 1.34315 6.59315 0 8.25 0Z"
      />
    </SvgIcon>
  );
}
