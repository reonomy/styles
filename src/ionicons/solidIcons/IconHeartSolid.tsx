import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export function IconHeartSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12.0005 21C11.6994 20.9996 11.4054 20.9086 11.1568 20.7389C7.47286 18.2381 5.87771 16.5234 4.99786 15.4514C3.12286 13.1663 2.22521 10.8202 2.25052 8.27953C2.28005 5.36813 4.61583 3 7.45739 3C9.52364 3 10.9547 4.16391 11.7882 5.13328C11.8146 5.16368 11.8472 5.18805 11.8838 5.20476C11.9205 5.22146 11.9603 5.23011 12.0005 5.23011C12.0408 5.23011 12.0806 5.22146 12.1172 5.20476C12.1538 5.18805 12.1865 5.16368 12.2129 5.13328C13.0463 4.16297 14.4774 3 16.5436 3C19.3852 3 21.721 5.36812 21.7505 8.28C21.7758 10.8211 20.8772 13.1672 19.0032 15.4519C18.1233 16.5239 16.5282 18.2386 12.8443 20.7394C12.5955 20.9089 12.3015 20.9998 12.0005 21Z" />
    </SvgIcon>
  );
}
