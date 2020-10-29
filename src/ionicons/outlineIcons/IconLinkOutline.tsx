import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconLinkOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M9.75 16.5H6.75C5.55653 16.5 4.41193 16.0259 3.56802 15.182C2.72411 14.3381 2.25 13.1935 2.25 12C2.25 10.8065 2.72411 9.66193 3.56802 8.81802C4.41193 7.97411 5.55653 7.5 6.75 7.5H9.75M14.25 7.5H17.25C18.4435 7.5 19.5881 7.97411 20.432 8.81802C21.2759 9.66193 21.75 10.8065 21.75 12C21.75 13.1935 21.2759 14.3381 20.432 15.182C19.5881 16.0259 18.4435 16.5 17.25 16.5H14.25M7.65422 12H16.4395"
        fill="transparent"
        strokeWidth="1.6875"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
