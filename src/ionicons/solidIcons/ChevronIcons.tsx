import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconChevronBackSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15.375 5.06836L8.625 11.8184L15.375 18.5684"
        stroke="black"
        strokeOpacity="0.54"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export function IconChevronForwardSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M9 4.99951L15.75 11.7495L9 18.4995"
        stroke="black"
        strokeOpacity="0.54"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export function IconChevronUpSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5.25 15.375L12 8.625L18.75 15.375"
        stroke="black"
        strokeOpacity="0.54"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export function IconChevronDownSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M5.25 8.625L12 15.375L18.75 8.625"
        stroke="black"
        strokeOpacity="0.54"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
