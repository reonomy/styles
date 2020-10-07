import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconLabelSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4.49492 20.001L16.0384 20.001C16.3372 20.0006 16.6326 19.9366 16.9048 19.8132C17.1771 19.6897 17.4199 19.5098 17.6171 19.2852C17.6513 19.2462 17.6813 19.2038 17.7066 19.1586L21.8916 12.8877C21.9619 12.7709 21.999 12.6372 21.999 12.501C21.999 12.3647 21.9619 12.231 21.8916 12.1143L17.7127 5.85316C17.6864 5.80491 17.655 5.75965 17.619 5.71816C17.4218 5.4932 17.1789 5.31287 16.9065 5.18919C16.6341 5.06552 16.3384 5.00136 16.0393 5.00098L4.49492 5.00098C3.93728 5.0016 3.40266 5.22339 3.00836 5.6177C2.61405 6.01201 2.39225 6.54662 2.39163 7.10426V17.8977C2.39225 18.4553 2.61405 18.9899 3.00836 19.3843C3.40266 19.7786 3.93728 20.0004 4.49492 20.001Z" />
    </SvgIcon>
  );
}
