import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import ReonomyPalette from './palette';
import ReonomyCssBaseline from './baseline';
import ReonomyTheme from './theme';
import IconAddSolid from './ionicons/solidIcons/IconAddSolid';
import {
  IconArrowDownSolid,
  IconArrowUpSolid,
  IconArrowBackSolid,
  IconArrowForwardSolid
} from './ionicons/solidIcons/ArrowIcons';
import IconBriefcaseSocialSolid from './ionicons/solidIcons/IconBriefcaseSocialSolid';
import IconBulbSolid from './ionicons/solidIcons/IconBulbSolid';
import IconBusinessSolid from './ionicons/solidIcons/IconBusinessSolid';
import IconCalendarSolid from './ionicons/solidIcons/IconCalendarSolid';
import IconCallSolid from './ionicons/solidIcons/IconCallSolid';
import IconCameraSolid from './ionicons/solidIcons/IconCameraSolid';
import IconCardViewSolid from './ionicons/solidIcons/IconCardViewSolid';
import {
  IconCaretBackSolid,
  IconCaretForwardSolid,
  IconCaretDownSolid,
  IconCaretUpSolid
} from './ionicons/solidIcons/CaretIcons';
import IconChatboxEllipsesSolid from './ionicons/solidIcons/IconChatboxEllipsesSolid';
import IconCheckboxSolid from './ionicons/solidIcons/IconCheckboxSolid';
import IconCheckmarkCircleSolid from './ionicons/solidIcons/IconCheckmarkCircleSolid';
import IconCheckmarkSolid from './ionicons/solidIcons/IconCheckmarkSolid';
import {
  IconChevronBackSolid,
  IconChevronForwardSolid,
  IconChevronUpSolid,
  IconChevronDownSolid
} from './ionicons/solidIcons/ChevronIcons';
import IconCloseSolid from './ionicons/solidIcons/IconCloseSolid';
import IconCloudDownloadSolid from './ionicons/solidIcons/IconCloudDownloadSolid';
import IconCloudUploadSolid from './ionicons/solidIcons/IconCloudUploadSolid';
import IconCodeDownload from './ionicons/solidIcons/IconCodeDownload';
import IconCodeSlashSolid from './ionicons/solidIcons/IconCodeSlashSolid';
import IconColorWandSolid from './ionicons/solidIcons/IconColorWand';
import IconComparablesSolid from './ionicons/solidIcons/IconComparablesSolid';
import IconCopySolid from './ionicons/solidIcons/IconCopySolid';
import IconDownloadSolid from './ionicons/solidIcons/IconDownloadSolid';
import { IconEllipsisVerticalSolid, IconEllipsisHorizontalSolid } from './ionicons/solidIcons/EllipsisIcons';
import IconEyeSolid from './ionicons/solidIcons/IconEyeSolid';
import IconFilterSolid from './ionicons/solidIcons/IconFilterSolid';
import IconFolderSolid from './ionicons/solidIcons/IconFolderSolid';
import IconGridSolid from './ionicons/solidIcons/IconGridSolid';
import IconHeartSolid from './ionicons/solidIcons/IconHeartSolid';
import IconHelpCircleSolid from './ionicons/solidIcons/IconHelpCircleSolid';
import IconImageSolid from './ionicons/solidIcons/IconImageSolid';
import IconInformationCircleSolid from './ionicons/solidIcons/IconInformationCircleSolid';
import IconIntegrationsSolid from './ionicons/solidIcons/IconIntegrationsSolid';
import IconLabelSolid from './ionicons/solidIcons/IconLabelSolid';
import IconLayersSolid from './ionicons/solidIcons/IconLayersSolid';
import { IconLockClosedSolid, IconLockOpenSolid } from './ionicons/solidIcons/LockIcons';
import IconMailOpenSolid from './ionicons/solidIcons/IconMailOpenSolid';
import IconMailSolid from './ionicons/solidIcons/IconMailSolid';
import IconMailboxSolid from './ionicons/solidIcons/IconMailboxSolid';
import IconMailerHistorySolid from './ionicons/solidIcons/IconMailerHistorySolid';
import IconMapSolid from './ionicons/solidIcons/IconMapSolid';
import IconMenuSolid from './ionicons/solidIcons/IconMenuSolid';
import IconNutritionSolid from './ionicons/solidIcons/IconNutritionSolid';
import IconOpenSolid from './ionicons/solidIcons/IconOpenSolid';
import IconPaperPlaneSolid from './ionicons/solidIcons/IconPaperPlaneSolid';
import IconPencilSolid from './ionicons/solidIcons/IconPencilSolid';
import IconPersonAddSolid from './ionicons/solidIcons/IconPersonAddSolid';
import IconPersonSolid from './ionicons/solidIcons/IconPersonSolid';
import IconPlaySolid from './ionicons/solidIcons/IconPlaySolid';
import IconPolygonSolid from './ionicons/solidIcons/IconPolygonSolid';
import IconPrintSolid from './ionicons/solidIcons/IconPrintSolid';
import IconRadiusSolid from './ionicons/solidIcons/IconRadiusSolid';
import IconRemoveSolid from './ionicons/solidIcons/IconRemoveSolid';
import IconReonomySolid from './ionicons/solidIcons/IconReonomyIcon';
import IconSaveSolid from './ionicons/solidIcons/IconSaveSolid';
import IconSearchSolid from './ionicons/solidIcons/IconSearchSolid';
import IconSettingsSolid from './ionicons/solidIcons/IconSettingsSolid';
import IconShareSocialSolid from './ionicons/solidIcons/IconShareSocialSolid';
import IconSpreadsheetSolid from './ionicons/solidIcons/IconSpreadsheetSolid';
import IconSquareSolid from './ionicons/solidIcons/IconSquareSolid';
import IconTodaySolid from './ionicons/solidIcons/IconTodaySolid';
import IconTrashSolid from './ionicons/solidIcons/IconTrashSolid';
import IconWarningSolid from './ionicons/solidIcons/IconWarningSolid';

import IconAddOutline from './ionicons/outlineIcons/IconAddOutline';
import {
  IconArrowDownOutline,
  IconArrowUpOutline,
  IconArrowBackOutline,
  IconArrowForwardOutline
} from './ionicons/outlineIcons/ArrowIcons';
import IconBriefcaseSocialOutline from './ionicons/outlineIcons/IconBriefcaseOutline';
import IconBulbOutline from './ionicons/outlineIcons/IconBulbOutline';
import IconBusinessOutline from './ionicons/outlineIcons/IconBusinessOutline';
import IconCalendarOutline from './ionicons/outlineIcons/IconCalendarOutline';
import IconCallOutline from './ionicons/outlineIcons/IconCallOutline';
import IconCameraOutline from './ionicons/outlineIcons/IconCameraOutline';
import IconCardViewOutline from './ionicons/outlineIcons/IconCardViewOutline';
import {
  IconCaretBackOutline,
  IconCaretForwardOutline,
  IconCaretDownOutline,
  IconCaretUpOutline
} from './ionicons/outlineIcons/CaretIcons';
import IconChatboxEllipsesOutline from './ionicons/outlineIcons/IconChatboxEllipsesOutline';
import IconCheckboxOutline from './ionicons/outlineIcons/IconCheckboxOutline';
import IconCheckmarkCircleOutline from './ionicons/outlineIcons/IconCheckmarkCircleOutline';
import IconCheckmarkOutline from './ionicons/outlineIcons/IconCheckmarkOutline';
import {
  IconChevronBackOutline,
  IconChevronForwardOutline,
  IconChevronUpOutline,
  IconChevronDownOutline
} from './ionicons/outlineIcons/ChevronIcons';
import IconCloseOutline from './ionicons/outlineIcons/IconCloseOutline';
import IconCloudDownloadOutline from './ionicons/outlineIcons/IconCloudDownloadOutline';
import IconCloudUploadOutline from './ionicons/outlineIcons/IconCloudUploadOutline';
import IconCodeDownloadOutline from './ionicons/outlineIcons/IconCodeDownloadOutline';
import IconCodeSlashOutline from './ionicons/outlineIcons/IconCodeSlashOutline';
import IconColorWandOutline from './ionicons/outlineIcons/IconColorWandOutline';
import IconComparablesOutline from './ionicons/outlineIcons/IconComparablesOutline';
import IconCopyOutline from './ionicons/outlineIcons/IconCopyOutline';
import IconDownloadOutline from './ionicons/outlineIcons/IconDownloadOutline';
import { IconEllipsisVerticalOutline, IconEllipsisHorizontalOutline } from './ionicons/outlineIcons/EllipsisIcons';
import IconEyeOutline from './ionicons/outlineIcons/IconEyeOutline';
import IconFilterOutline from './ionicons/outlineIcons/IconFilterOutline';
import IconFolderOutline from './ionicons/outlineIcons/IconFolderOutline';
import IconGridOutline from './ionicons/outlineIcons/IconGridOutline';
import IconHeartOutline from './ionicons/outlineIcons/IconHeartOutline';
import IconHelpCircleOutline from './ionicons/outlineIcons/IconHelpCircleOutline';
import IconImageOutline from './ionicons/outlineIcons/IconImageOutline';
import IconInformationCircleOutline from './ionicons/outlineIcons/IconInformationCircleOutline';
import IconIntegrationsOutline from './ionicons/outlineIcons/IconIntegrationsOutline';
import IconLabelOutline from './ionicons/outlineIcons/IconLabelOutline';
import IconLayersOutline from './ionicons/outlineIcons/IconLayersOutline';
import { IconLockClosedOutline, IconLockOpenOutline } from './ionicons/outlineIcons/LockIcons';
import IconMailOpenOutline from './ionicons/outlineIcons/IconMailOpenOutline';
import IconMailOutline from './ionicons/outlineIcons/IconMailOutline';
import IconMailboxOutline from './ionicons/outlineIcons/IconMailboxOutline';
import IconMailerHistoryOutline from './ionicons/outlineIcons/IconMailerHistoryOutline';
import IconMapOutline from './ionicons/outlineIcons/IconMapOutline';
import IconMenuOutline from './ionicons/outlineIcons/IconMenuOutline';
import IconNutritionOutline from './ionicons/outlineIcons/IconNutritionOutline';
import IconOpenOutline from './ionicons/outlineIcons/IconOpenOutline';
import IconPaperPlaneOutline from './ionicons/outlineIcons/IconPaperPlaneOutline';
import IconPencilOutline from './ionicons/outlineIcons/IconPencilOutline';
import IconPersonAddOutline from './ionicons/outlineIcons/IconPersonAddOutline';
import IconPersonOutline from './ionicons/outlineIcons/IconPersonOutline';
import IconPlayOutline from './ionicons/outlineIcons/IconPlayOutline';
import IconPolygonOutline from './ionicons/outlineIcons/IconPolygonOutline';
import IconPrintOutline from './ionicons/outlineIcons/IconPrintOutline';
import IconRadiusOutline from './ionicons/outlineIcons/IconRadiusOutline';
import IconRemoveOutline from './ionicons/outlineIcons/IconRemoveOutline';
import IconReonomyOutline from './ionicons/outlineIcons/IconReonomy';
import IconSaveOutline from './ionicons/outlineIcons/IconSaveOutline';
import IconSearchOutline from './ionicons/outlineIcons/IconSearchOutline';
import IconSettingsOutline from './ionicons/outlineIcons/IconSettingsOutline';
import IconShareSocialOutline from './ionicons/outlineIcons/IconShareSocialOutline';
import IconSpreadsheetOutline from './ionicons/outlineIcons/IconSpreadsheetOutline';
import IconSquareOutline from './ionicons/outlineIcons/IconSquareOutline';
import IconTodayOutline from './ionicons/outlineIcons/IconTodayOutline';
import IconTrashOutline from './ionicons/outlineIcons/IconTrashOutline';
import IconWarningOutline from './ionicons/outlineIcons/IconWarningOutline';

interface StylesProps {
  children?: React.ReactElement;
}

function ReonomyStyles({ children }: StylesProps) {
  return (
    <MuiThemeProvider theme={ReonomyTheme}>
      <CssBaseline />
      <ReonomyCssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export {
  ReonomyPalette,
  ReonomyCssBaseline,
  ReonomyTheme,
  IconAddSolid,
  IconArrowDownSolid,
  IconArrowUpSolid,
  IconArrowBackSolid,
  IconArrowForwardSolid,
  IconBriefcaseSocialSolid,
  IconBulbSolid,
  IconBusinessSolid,
  IconCalendarSolid,
  IconCallSolid,
  IconCameraSolid,
  IconCardViewSolid,
  IconCaretBackSolid,
  IconCaretForwardSolid,
  IconCaretDownSolid,
  IconCaretUpSolid,
  IconChatboxEllipsesSolid,
  IconCheckboxSolid,
  IconCheckmarkCircleSolid,
  IconCheckmarkSolid,
  IconChevronBackSolid,
  IconChevronForwardSolid,
  IconChevronUpSolid,
  IconChevronDownSolid,
  IconCloseSolid,
  IconCloudDownloadSolid,
  IconCloudUploadSolid,
  IconCodeDownload,
  IconCodeSlashSolid,
  IconColorWandSolid,
  IconComparablesSolid,
  IconCopySolid,
  IconDownloadSolid,
  IconEllipsisVerticalSolid,
  IconEllipsisHorizontalSolid,
  IconEyeSolid,
  IconFilterSolid,
  IconFolderSolid,
  IconGridSolid,
  IconHeartSolid,
  IconHelpCircleSolid,
  IconImageSolid,
  IconInformationCircleSolid,
  IconIntegrationsSolid,
  IconLabelSolid,
  IconLayersSolid,
  IconLockClosedSolid,
  IconLockOpenSolid,
  IconMailOpenSolid,
  IconMailSolid,
  IconMailboxSolid,
  IconMailerHistorySolid,
  IconMapSolid,
  IconMenuSolid,
  IconNutritionSolid,
  IconOpenSolid,
  IconPaperPlaneSolid,
  IconPencilSolid,
  IconPersonAddSolid,
  IconPersonSolid,
  IconPlaySolid,
  IconPolygonSolid,
  IconPrintSolid,
  IconRadiusSolid,
  IconRemoveSolid,
  IconReonomySolid,
  IconSaveSolid,
  IconSearchSolid,
  IconSettingsSolid,
  IconShareSocialSolid,
  IconSpreadsheetSolid,
  IconSquareSolid,
  IconTodaySolid,
  IconTrashSolid,
  IconWarningSolid,
  IconAddOutline,
  IconArrowDownOutline,
  IconArrowUpOutline,
  IconArrowBackOutline,
  IconArrowForwardOutline,
  IconBriefcaseSocialOutline,
  IconBulbOutline,
  IconBusinessOutline,
  IconCalendarOutline,
  IconCallOutline,
  IconCameraOutline,
  IconCardViewOutline,
  IconCaretBackOutline,
  IconCaretForwardOutline,
  IconCaretDownOutline,
  IconCaretUpOutline,
  IconChatboxEllipsesOutline,
  IconCheckboxOutline,
  IconCheckmarkCircleOutline,
  IconCheckmarkOutline,
  IconChevronBackOutline,
  IconChevronForwardOutline,
  IconChevronUpOutline,
  IconChevronDownOutline,
  IconCloseOutline,
  IconCloudDownloadOutline,
  IconCloudUploadOutline,
  IconCodeDownloadOutline,
  IconCodeSlashOutline,
  IconColorWandOutline,
  IconComparablesOutline,
  IconCopyOutline,
  IconDownloadOutline,
  IconEllipsisVerticalOutline,
  IconEllipsisHorizontalOutline,
  IconEyeOutline,
  IconFilterOutline,
  IconFolderOutline,
  IconGridOutline,
  IconHeartOutline,
  IconHelpCircleOutline,
  IconImageOutline,
  IconInformationCircleOutline,
  IconIntegrationsOutline,
  IconLabelOutline,
  IconLayersOutline,
  IconLockClosedOutline,
  IconLockOpenOutline,
  IconMailOpenOutline,
  IconMailOutline,
  IconMailboxOutline,
  IconMailerHistoryOutline,
  IconMapOutline,
  IconMenuOutline,
  IconNutritionOutline,
  IconOpenOutline,
  IconPaperPlaneOutline,
  IconPencilOutline,
  IconPersonAddOutline,
  IconPersonOutline,
  IconPlayOutline,
  IconPolygonOutline,
  IconPrintOutline,
  IconRadiusOutline,
  IconRemoveOutline,
  IconReonomyOutline,
  IconSaveOutline,
  IconSearchOutline,
  IconSettingsOutline,
  IconShareSocialOutline,
  IconSpreadsheetOutline,
  IconSquareOutline,
  IconTodayOutline,
  IconTrashOutline,
  IconWarningOutline
};

export default ReonomyStyles;
