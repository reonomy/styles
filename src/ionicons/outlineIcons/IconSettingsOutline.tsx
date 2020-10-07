import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

export default function IconSettingsOutline(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12.2955 9.01453C11.68 8.95374 11.0607 9.08469 10.5225 9.38945C9.98426 9.69421 9.55339 10.1579 9.28886 10.717C9.02434 11.2761 8.93909 11.9033 9.04479 12.5127C9.1505 13.1221 9.44198 13.684 9.87934 14.1213C10.3167 14.5587 10.8786 14.8502 11.488 14.9559C12.0974 15.0616 12.7246 14.9763 13.2837 14.7118C13.8428 14.4473 14.3065 14.0164 14.6112 13.4782C14.916 12.94 15.0469 12.3207 14.9861 11.7052C14.9168 11.0151 14.6111 10.3703 14.1207 9.87995C13.6304 9.38958 12.9855 9.08384 12.2955 9.01453V9.01453ZM19.5189 12C19.517 12.3261 19.4931 12.6517 19.4472 12.9745L21.5664 14.6367C21.6587 14.7132 21.7209 14.8199 21.7419 14.9379C21.763 15.056 21.7415 15.1776 21.6813 15.2812L19.6764 18.75C19.6156 18.8527 19.5204 18.9305 19.4077 18.9699C19.295 19.0093 19.1721 19.0076 19.0605 18.9652L16.9558 18.1177C16.8398 18.0714 16.714 18.0547 16.5899 18.0691C16.4658 18.0834 16.3472 18.1283 16.2447 18.1997C15.9235 18.4209 15.586 18.6174 15.235 18.7875C15.1247 18.8411 15.0293 18.9211 14.9572 19.0203C14.8851 19.1196 14.8385 19.2351 14.8216 19.3566L14.5061 21.6014C14.4854 21.72 14.4242 21.8276 14.3329 21.906C14.2415 21.9844 14.1258 22.0287 14.0055 22.0312H9.99582C9.87748 22.0292 9.76337 21.9869 9.67228 21.9113C9.5812 21.8357 9.51857 21.7314 9.49473 21.6155L9.17973 19.3739C9.16204 19.2511 9.11427 19.1345 9.04067 19.0346C8.96707 18.9346 8.86992 18.8544 8.75785 18.8011C8.40733 18.6319 8.07094 18.4349 7.75192 18.2119C7.64977 18.1408 7.53155 18.0963 7.40791 18.0823C7.28426 18.0683 7.15908 18.0853 7.04364 18.1317L4.93942 18.9788C4.82791 19.0212 4.70499 19.023 4.59231 18.9837C4.47964 18.9444 4.38444 18.8666 4.32348 18.7641L2.31864 15.2953C2.25836 15.1917 2.23682 15.07 2.25785 14.952C2.27888 14.834 2.34112 14.7272 2.43348 14.6508L4.22457 13.2445C4.3227 13.1666 4.39982 13.0655 4.44893 12.9502C4.49805 12.835 4.5176 12.7093 4.50582 12.5845C4.48895 12.3891 4.47864 12.1941 4.47864 11.9986C4.47864 11.8031 4.48848 11.6109 4.50582 11.4197C4.51632 11.2957 4.4958 11.1711 4.44613 11.057C4.39646 10.9429 4.3192 10.843 4.22129 10.7662L2.43114 9.36C2.34027 9.28317 2.27935 9.17681 2.25904 9.05957C2.23872 8.94232 2.26032 8.82167 2.32004 8.71875L4.32489 5.25C4.38577 5.14734 4.48094 5.06946 4.59362 5.0301C4.7063 4.99074 4.82926 4.99242 4.94082 5.03484L7.04551 5.88234C7.16157 5.92856 7.28729 5.94525 7.41139 5.93094C7.5355 5.91662 7.65411 5.87174 7.7566 5.80031C8.07782 5.57912 8.41535 5.38262 8.76629 5.2125C8.87662 5.15887 8.97206 5.07891 9.04416 4.97966C9.11627 4.88042 9.16283 4.76494 9.17973 4.64344L9.4952 2.39859C9.51592 2.28004 9.57717 2.17236 9.66848 2.09396C9.75979 2.01555 9.8755 1.9713 9.99582 1.96875H14.0055C14.1238 1.9708 14.238 2.01309 14.329 2.08867C14.4201 2.16425 14.4828 2.2686 14.5066 2.38453L14.8216 4.62609C14.8393 4.74894 14.8871 4.86551 14.9607 4.96544C15.0343 5.06537 15.1314 5.14557 15.2435 5.19891C15.594 5.3681 15.9304 5.56514 16.2494 5.78813C16.3516 5.85919 16.4698 5.90373 16.5934 5.91772C16.7171 5.93172 16.8423 5.91473 16.9577 5.86828L19.0619 5.02125C19.1734 4.97879 19.2963 4.97704 19.409 5.01631C19.5217 5.05558 19.6169 5.13336 19.6779 5.23594L21.6827 8.70469C21.743 8.80832 21.7645 8.92999 21.7435 9.04802C21.7225 9.16604 21.6602 9.27278 21.5679 9.34922L19.7768 10.7555C19.6782 10.8331 19.6006 10.9342 19.5511 11.0494C19.5016 11.1647 19.4817 11.2905 19.4932 11.4155C19.5086 11.6095 19.5189 11.8045 19.5189 12Z"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}
