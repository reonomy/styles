import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconImageSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19.5 3H4.5C3.70462 3.00087 2.94206 3.31722 2.37964 3.87964C1.81722 4.44206 1.50087 5.20462 1.5 6V18C1.50087 18.7954 1.81722 19.5579 2.37964 20.1204C2.94206 20.6828 3.70462 20.9991 4.5 21H19.5C20.2954 20.9991 21.0579 20.6828 21.6204 20.1204C22.1828 19.5579 22.4991 18.7954 22.5 18V6C22.4991 5.20462 22.1828 4.44206 21.6204 3.87964C21.0579 3.31722 20.2954 3.00087 19.5 3ZM15.75 6C16.195 6 16.63 6.13196 17 6.37919C17.37 6.62643 17.6584 6.97783 17.8287 7.38896C17.999 7.8001 18.0436 8.2525 17.9568 8.68895C17.87 9.12541 17.6557 9.52632 17.341 9.84099C17.0263 10.1557 16.6254 10.37 16.189 10.4568C15.7525 10.5436 15.3001 10.499 14.889 10.3287C14.4778 10.1584 14.1264 9.87004 13.8792 9.50003C13.632 9.13002 13.5 8.69501 13.5 8.25C13.5006 7.65345 13.7379 7.08152 14.1597 6.65969C14.5815 6.23787 15.1535 6.00062 15.75 6ZM4.5 19.5C4.10218 19.5 3.72064 19.342 3.43934 19.0607C3.15804 18.7794 3 18.3978 3 18V14.8298L7.44562 10.8783C7.87455 10.4979 8.43238 10.2953 9.00545 10.3119C9.57853 10.3284 10.1237 10.5628 10.53 10.9673L13.5745 14.0053L8.07984 19.5H4.5ZM21 18C21 18.3978 20.842 18.7794 20.5607 19.0607C20.2794 19.342 19.8978 19.5 19.5 19.5H10.2014L15.893 13.8084C16.2959 13.4657 16.8073 13.277 17.3363 13.2756C17.8653 13.2742 18.3776 13.4603 18.7823 13.8009L21 15.6488V18Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  );
}