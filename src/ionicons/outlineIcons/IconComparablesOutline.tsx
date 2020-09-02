import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconComparablesOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.73606 2.4802C1.87394 2.34231 2.06096 2.26485 2.25596 2.26485H11.256C11.451 2.26485 11.638 2.34231 11.7759 2.4802C11.9137 2.61809 11.9912 2.8051 11.9912 3.0001V12.0262C11.9912 12.4485 12.3336 12.7909 12.756 12.7909C13.1783 12.7909 13.5207 12.4485 13.5207 12.0262V3.0001C13.5207 2.39945 13.2821 1.8234 12.8574 1.39868C12.4327 0.973958 11.8566 0.735352 11.256 0.735352H2.25596C1.65531 0.735352 1.07926 0.973958 0.65454 1.39868C0.229817 1.8234 -0.00878906 2.39945 -0.00878906 3.0001V22.5001C-0.00878906 22.9225 0.333601 23.2649 0.75596 23.2649H6.82086L6.8233 23.2649L6.82574 23.2649H12.5685C12.821 23.2649 13.0632 23.1645 13.2418 22.9859C13.4204 22.8074 13.5207 22.5651 13.5207 22.3126V17.5672C13.5207 17.1449 13.1783 16.8025 12.756 16.8025C12.3336 16.8025 11.9912 17.1449 11.9912 17.5672V21.7354H7.58804V19.5001C7.58804 19.0777 7.24565 18.7354 6.8233 18.7354C6.40094 18.7354 6.05855 19.0777 6.05855 19.5001V21.7354H1.52071V3.0001C1.52071 2.8051 1.59817 2.61809 1.73606 2.4802ZM16.5062 9.756V12.0378C16.5062 12.4601 16.1638 12.8025 15.7414 12.8025C15.3191 12.8025 14.9767 12.4601 14.9767 12.0378V9.74125C14.9767 9.33951 15.1363 8.95423 15.4203 8.67016C15.7044 8.38609 16.0897 8.2265 16.4914 8.2265H21.7414C22.3421 8.2265 22.9181 8.46511 23.3428 8.88983C23.7676 9.31455 24.0062 9.8906 24.0062 10.4912V22.4912C24.0062 22.9136 23.6638 23.256 23.2414 23.256H15.7414C15.3191 23.256 14.9767 22.9136 14.9767 22.4912V17.5686C14.9767 17.1462 15.3191 16.8038 15.7414 16.8038C16.1638 16.8038 16.5062 17.1462 16.5062 17.5686V21.7265H22.4767V10.4912C22.4767 10.2962 22.3992 10.1092 22.2613 9.97135C22.1234 9.83346 21.9364 9.756 21.7414 9.756H16.5062ZM2.87444 20.1613C3.01255 20.2353 3.17034 20.2641 3.32567 20.2438C3.48959 20.2223 3.64184 20.1473 3.75874 20.0304C3.87564 19.9135 3.95064 19.7613 3.97208 19.5974C3.99239 19.442 3.96356 19.2842 3.88962 19.1461C3.81569 19.008 3.70037 18.8965 3.55984 18.8273C3.41931 18.7581 3.26064 18.7346 3.10608 18.7601C2.95153 18.7857 2.80885 18.859 2.69808 18.9698C2.58731 19.0805 2.51401 19.2232 2.48846 19.3778C2.4629 19.5323 2.48639 19.691 2.55562 19.8315C2.62484 19.9721 2.73633 20.0874 2.87444 20.1613ZM10.5181 20.2438C10.3628 20.2641 10.205 20.2353 10.0669 20.1613C9.92875 20.0874 9.81726 19.9721 9.74804 19.8315C9.67881 19.691 9.65533 19.5323 9.68088 19.3778C9.70643 19.2232 9.77973 19.0805 9.8905 18.9698C10.0013 18.859 10.1439 18.7857 10.2985 18.7601C10.4531 18.7346 10.6117 18.7581 10.7523 18.8273C10.8928 18.8965 11.0081 19.008 11.082 19.1461C11.156 19.2842 11.1848 19.442 11.1645 19.5974C11.1431 19.7613 11.0681 19.9135 10.9512 20.0304C10.8343 20.1473 10.682 20.2223 10.5181 20.2438ZM2.87444 16.4113C3.01255 16.4853 3.17034 16.5141 3.32567 16.4938C3.48959 16.4723 3.64184 16.3973 3.75874 16.2804C3.87564 16.1635 3.95064 16.0113 3.97208 15.8474C3.99239 15.692 3.96356 15.5342 3.88962 15.3961C3.81569 15.258 3.70037 15.1465 3.55984 15.0773C3.41931 15.0081 3.26064 14.9846 3.10608 15.0101C2.95153 15.0357 2.80885 15.109 2.69808 15.2198C2.58731 15.3305 2.51401 15.4732 2.48846 15.6278C2.4629 15.7823 2.48639 15.941 2.55562 16.0815C2.62484 16.2221 2.73633 16.3374 2.87444 16.4113ZM3.32567 12.7438C3.17034 12.7641 3.01255 12.7353 2.87444 12.6613C2.73633 12.5874 2.62484 12.4721 2.55562 12.3315C2.48639 12.191 2.4629 12.0323 2.48846 11.8778C2.51401 11.7232 2.58731 11.5805 2.69808 11.4698C2.80885 11.359 2.95153 11.2857 3.10608 11.2601C3.26064 11.2346 3.41931 11.2581 3.55984 11.3273C3.70037 11.3965 3.81569 11.508 3.88962 11.6461C3.96356 11.7842 3.99239 11.942 3.97208 12.0974C3.95064 12.2613 3.87564 12.4135 3.75874 12.5304C3.64184 12.6473 3.48959 12.7223 3.32567 12.7438ZM2.87444 8.91132C3.01255 8.98526 3.17034 9.01409 3.32567 8.99377C3.48959 8.97234 3.64184 8.89734 3.75874 8.78044C3.87564 8.66354 3.95064 8.51129 3.97208 8.34737C3.99239 8.19204 3.96356 8.03425 3.88962 7.89614C3.81569 7.75803 3.70037 7.64654 3.55984 7.57731C3.41931 7.50809 3.26064 7.4846 3.10608 7.51015C2.95153 7.5357 2.80885 7.60901 2.69808 7.71978C2.58731 7.83055 2.51401 7.97322 2.48846 8.12778C2.4629 8.28233 2.48639 8.44101 2.55562 8.58154C2.62484 8.72206 2.73633 8.83739 2.87444 8.91132ZM3.32567 5.24376C3.17034 5.26408 3.01255 5.23525 2.87444 5.16131C2.73633 5.08738 2.62484 4.97205 2.55562 4.83153C2.48639 4.691 2.4629 4.53232 2.48846 4.37777C2.51401 4.22321 2.58731 4.08054 2.69808 3.96977C2.80885 3.859 2.95153 3.78569 3.10608 3.76014C3.26064 3.73459 3.41931 3.75808 3.55984 3.8273C3.70037 3.89653 3.81569 4.00802 3.88962 4.14613C3.96356 4.28424 3.99239 4.44203 3.97208 4.59736C3.95064 4.76128 3.87564 4.91353 3.75874 5.03043C3.64184 5.14733 3.48959 5.22233 3.32567 5.24376ZM6.46642 8.91132C6.60453 8.98526 6.76232 9.01409 6.91765 8.99377C7.08158 8.97234 7.23383 8.89734 7.35072 8.78044C7.46762 8.66354 7.54262 8.51129 7.56406 8.34737C7.58438 8.19204 7.55554 8.03425 7.48161 7.89614C7.40768 7.75803 7.29235 7.64654 7.15182 7.57731C7.0113 7.50809 6.85262 7.4846 6.69806 7.51015C6.54351 7.5357 6.40083 7.60901 6.29006 7.71978C6.17929 7.83055 6.10598 7.97322 6.08043 8.12778C6.05488 8.28233 6.07837 8.44101 6.14759 8.58154C6.21682 8.72206 6.32831 8.83739 6.46642 8.91132ZM6.91765 5.24376C6.76232 5.26408 6.60453 5.23525 6.46642 5.16131C6.32831 5.08738 6.21682 4.97205 6.14759 4.83153C6.07837 4.691 6.05488 4.53232 6.08043 4.37777C6.10598 4.22321 6.17929 4.08054 6.29006 3.96977C6.40083 3.859 6.54351 3.78569 6.69806 3.76014C6.85262 3.73459 7.0113 3.75808 7.15182 3.8273C7.29235 3.89653 7.40768 4.00802 7.48161 4.14613C7.55554 4.28424 7.58438 4.44203 7.56406 4.59736C7.54262 4.76128 7.46762 4.91353 7.35072 5.03043C7.23383 5.14733 7.08158 5.22233 6.91765 5.24376ZM10.9461 7.72099C11.2396 8.01443 11.2408 8.489 10.9488 8.78098C10.6568 9.07296 10.1822 9.07177 9.8888 8.77833C9.59536 8.48489 9.59417 8.01031 9.88615 7.71834C10.1781 7.42636 10.6527 7.42755 10.9461 7.72099ZM10.5152 5.24376C10.3599 5.26408 10.2021 5.23525 10.064 5.16131C9.92588 5.08738 9.81439 4.97205 9.74517 4.83153C9.67594 4.691 9.65245 4.53232 9.67801 4.37777C9.70356 4.22321 9.77686 4.08054 9.88763 3.96977C9.9984 3.859 10.1411 3.78569 10.2956 3.76014C10.4502 3.73459 10.6089 3.75808 10.7494 3.8273C10.8899 3.89653 11.0052 4.00802 11.0792 4.14613C11.1531 4.28424 11.1819 4.44203 11.1616 4.59736C11.1402 4.76128 11.0652 4.91353 10.9483 5.03043C10.8314 5.14733 10.6791 5.22233 10.5152 5.24376ZM10.1445 12.7835C10.4429 12.4846 10.4425 12.0004 10.1435 11.702C9.84463 11.4036 9.36042 11.404 9.06203 11.703L6.56639 14.203C6.26837 14.5015 6.26837 14.985 6.56639 15.2835L9.06203 17.7835C9.36042 18.0825 9.84463 18.0829 10.1435 17.7845C10.4425 17.4861 10.4429 17.0019 10.1445 16.703L8.95161 15.508H18.7501L17.5556 16.7025C17.257 17.0011 17.257 17.4854 17.5556 17.784C17.8543 18.0827 18.3385 18.0827 18.6371 17.784L21.1371 15.284C21.4358 14.9854 21.4358 14.5011 21.1371 14.2025L18.6371 11.7025C18.3385 11.4038 17.8543 11.4038 17.5556 11.7025C17.257 12.0011 17.257 12.4853 17.5556 12.784L18.7501 13.9785H8.95161L10.1445 12.7835Z"
          fill="black"
          fillOpacity="0.54"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}