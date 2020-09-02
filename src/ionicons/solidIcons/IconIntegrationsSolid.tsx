import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconIntegrationsSolid(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0275 14.0447L22.0496 14.0625C22.278 14.2528 22.4312 14.5182 22.4818 14.8112C22.5324 15.1041 22.477 15.4055 22.3256 15.6614L20.3236 19.125C20.3214 19.1283 20.3194 19.1318 20.3175 19.1353C20.1661 19.3881 19.9308 19.5798 19.6526 19.677C19.3744 19.7741 19.0709 19.7705 18.795 19.6669L18.7786 19.6603L17.0381 18.9595C16.9287 18.9153 16.8104 18.8976 16.6928 18.9079C16.5752 18.9183 16.4617 18.9564 16.3617 19.0191C16.2099 19.1142 16.0533 19.2056 15.893 19.2919C15.7903 19.3479 15.7021 19.4272 15.6355 19.5234C15.569 19.6196 15.5258 19.7301 15.5096 19.8459L15.2485 21.7055L15.2442 21.7317C15.1942 22.0246 15.0425 22.2905 14.8157 22.4825C14.5888 22.6745 14.3016 22.7803 14.0044 22.7812H9.99565C9.70214 22.7789 9.41841 22.6754 9.19231 22.4882C8.9662 22.3011 8.81154 22.0417 8.7544 21.7537L8.74877 21.72L8.48815 19.8642C8.47204 19.7482 8.42891 19.6377 8.36222 19.5414C8.29554 19.4452 8.20717 19.366 8.10424 19.3102C7.94549 19.2242 7.78924 19.1327 7.63549 19.0355C7.53531 18.9724 7.42157 18.934 7.30364 18.9235C7.18571 18.913 7.06697 18.9306 6.95721 18.975L5.21955 19.6748L5.20315 19.6809C4.92767 19.7843 4.62469 19.7879 4.34682 19.6911C4.06896 19.5944 3.83375 19.4034 3.68205 19.1512C3.6803 19.1477 3.67826 19.1442 3.67596 19.1409L1.67393 15.6769C1.52304 15.4212 1.46802 15.1202 1.51868 14.8277C1.56935 14.5353 1.72241 14.2703 1.95049 14.0803L1.97252 14.0625L3.45143 12.9019C3.54479 12.8286 3.61944 12.7342 3.66923 12.6265C3.71902 12.5188 3.74253 12.4008 3.73784 12.2822V11.7403C3.74299 11.621 3.71976 11.5021 3.67006 11.3935C3.62035 11.2849 3.54558 11.1896 3.4519 11.1155L1.97252 9.95531L1.95049 9.9375C1.72218 9.74724 1.569 9.48197 1.51833 9.18913C1.46767 8.89629 1.52282 8.59497 1.67393 8.33906L3.67877 4.87266L3.68487 4.86234C3.8364 4.60965 4.07172 4.41808 4.34989 4.32096C4.62807 4.22384 4.93149 4.22731 5.20737 4.33078L5.22377 4.33734L6.96424 5.04047C7.07366 5.08475 7.19202 5.10244 7.30961 5.09209C7.42719 5.08174 7.54065 5.04365 7.64065 4.98094C7.79385 4.88486 7.95019 4.79388 8.1094 4.70813C8.21166 4.6518 8.29936 4.57239 8.36552 4.4762C8.43168 4.38001 8.47448 4.2697 8.49049 4.15406L8.75159 2.29453L8.7558 2.26828C8.80581 1.97536 8.95758 1.70948 9.18439 1.51749C9.4112 1.32549 9.69849 1.2197 9.99565 1.21875H14.0044C14.2974 1.22176 14.5805 1.32554 14.806 1.51265C15.0315 1.69977 15.1858 1.95881 15.2428 2.24625L15.2485 2.28L15.5105 4.13578C15.5266 4.25176 15.5697 4.36232 15.6364 4.45856C15.7031 4.55481 15.7915 4.63403 15.8944 4.68984C16.0531 4.77609 16.2094 4.86766 16.3631 4.96453C16.4633 5.02763 16.5771 5.06602 16.695 5.07653C16.8129 5.08704 16.9317 5.06938 17.0414 5.025L18.7805 4.32516L18.7969 4.31906C19.0724 4.21571 19.3754 4.2121 19.6532 4.30886C19.9311 4.40562 20.1663 4.59664 20.318 4.84875C20.3197 4.85235 20.3218 4.85579 20.3241 4.85906L22.3261 8.32312C22.477 8.57877 22.532 8.87976 22.4814 9.17225C22.4307 9.46475 22.2776 9.72969 22.0496 9.91969L22.0275 9.9375L20.5486 11.0981C20.4553 11.1714 20.3806 11.2658 20.3308 11.3735C20.281 11.4812 20.2575 11.5992 20.2622 11.7178V12.2597C20.2571 12.379 20.2803 12.4979 20.33 12.6065C20.3797 12.7151 20.4545 12.8104 20.5481 12.8845L22.0275 14.0447ZM13.7052 8.72423C13.4141 8.42953 12.9392 8.4266 12.6445 8.71768C12.3498 9.00876 12.3469 9.48363 12.638 9.77832L14.1757 11.3351H8.02936C7.61514 11.3351 7.27936 11.6709 7.27936 12.0851C7.27936 12.4993 7.61514 12.8351 8.02936 12.8351H14.1652L12.7864 14.2195C12.4941 14.513 12.4951 14.9878 12.7885 15.2801C13.082 15.5724 13.5569 15.5715 13.8492 15.278L16.502 12.6143C16.7927 12.3225 16.7936 11.851 16.5042 11.558L13.7052 8.72423Z"
        fill="black"
        fillOpacity="0.54"
      />
    </SvgIcon>
  );
}