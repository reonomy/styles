import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconPolygonSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1629 3.92806C23.1629 5.27376 22.072 6.36466 20.7263 6.36466C20.6217 6.36466 20.5186 6.35807 20.4175 6.34527L13.3046 18.4286C13.7006 18.8619 13.9422 19.4387 13.9422 20.072C13.9422 21.4177 12.8513 22.5086 11.5056 22.5086C10.1599 22.5086 9.06897 21.4177 9.06897 20.072C9.06897 19.4543 9.29882 18.8903 9.67767 18.4608L4.01412 9.49006C3.78057 9.56448 3.53174 9.60465 3.27352 9.60465C1.92782 9.60465 0.836914 8.51375 0.836914 7.16805C0.836914 5.82235 1.92782 4.73145 3.27352 4.73145C4.19046 4.73145 4.9891 5.23794 5.40494 5.98642L18.3282 3.49468C18.5326 2.35573 19.5285 1.49146 20.7263 1.49146C22.072 1.49146 23.1629 2.58236 23.1629 3.92806ZM12.0012 17.6858L19.0557 5.70174C18.8392 5.49774 18.66 5.25454 18.5296 4.98348L5.69299 7.45851C5.64199 7.88784 5.47936 8.28294 5.23493 8.61396L10.968 17.6949C11.141 17.6559 11.3209 17.6354 11.5056 17.6354C11.6754 17.6354 11.8412 17.6528 12.0012 17.6858Z"
      />
    </SvgIcon>
  );
}
