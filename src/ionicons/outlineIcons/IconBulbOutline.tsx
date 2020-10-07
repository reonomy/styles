import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconBulbOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M14.25 18V16.875C14.25 15.5157 15.7285 14.2299 16.6875 13.3125C18.0394 12.0202 18.75 10.2839 18.75 8.25003C18.75 4.50003 15.7627 1.50003 12 1.50003C11.1129 1.49755 10.234 1.67046 9.41398 2.0088C8.59392 2.34714 7.84882 2.84425 7.22154 3.47154C6.59425 4.09883 6.09714 4.84392 5.7588 5.66399C5.42046 6.48405 5.24755 7.36291 5.25003 8.25003C5.25003 10.2113 5.99112 12.0652 7.31252 13.3125C8.26643 14.213 9.75002 15.5016 9.75002 16.875V18M10.5 22.5H13.5M9.75002 20.25H14.25M12 18V12M12 12C12.773 12 13.7813 11.25 13.7813 11.25M12 12C11.2271 12 10.2188 11.25 10.2188 11.25"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
