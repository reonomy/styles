import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconChevronBackOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        d="M15.375 5.25L8.625 12L15.375 18.75"
        fill="transparent"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export function IconChevronForwardOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        d="M8.625 5.25L15.375 12L8.625 18.75"
        fill="transparent"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export function IconChevronUpOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        d="M5.25 15.375L12 8.625L18.75 15.375"
        fill="transparent"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export function IconChevronDownOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path
        d="M5.25 8.625L12 15.375L18.75 8.625"
        fill="transparent"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
