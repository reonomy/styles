import React from 'react';
import ReactDOM from 'react-dom';

import ReonomyStyles, {
  CheckboxTree,
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
  IconPhonePortraitSolid,
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
  IconStarHalfSolid,
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
  IconPhonePortraitOutline,
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
  IconStarHalfOutline,
  IconTodayOutline,
  IconTrashOutline,
  IconWarningOutline,
  IconNewDataFeedOutline,
  IconSortOutline,
  IconRefreshOutline,
  IconLinkOutline
} from '@reonomy/styles';
import { Button, IconButton, Typography } from '@material-ui/core';

const HelloWorld = () => {
  return (
    <ReonomyStyles>
      <main style={{ padding: 150 }}>
        <Typography variant="h1">Hello World, I should be Basier Square</Typography>
        <Typography>These leader lines should look not broken:</Typography>
        <article style={{ width: 350, padding: 20, background: 'white' }}>
          <dl className="leader-lines">
            <dt>Lot Area SF</dt>
            <dd>
              <span>20,000 sf</span>
            </dd>
          </dl>
          <dl className="leader-lines">
            <dt>Lot Area Acres</dt>
            <dd>
              <span>0.46 acres</span>
            </dd>
          </dl>
          <dl className="leader-lines">
            <dt>Zoning</dt>
            <dd>0100</dd>
          </dl>
          <dl className="leader-lines">
            <dt>Depth</dt>
            <dd>200 ft</dd>
          </dl>
          <dl className="leader-lines">
            <dt>Frontage</dt>
            <dd>100 ft</dd>
          </dl>
          <dl className="leader-lines">
            <dt>Asset Type</dt>
            <dd style={{ maxWidth: '72%' }}>A line that has just gone too long</dd>
          </dl>
        </article>

        <Typography variant="h5">These buttons should be colorful and hoverable:</Typography>
        <article>
          <Button variant="contained" className="label-style-0">
            Style 0
          </Button>
          <Button variant="contained" className="label-style-1">
            Style 1
          </Button>
          <Button variant="contained" className="label-style-2">
            Style 2
          </Button>
          <Button variant="contained" className="label-style-3">
            Style 3
          </Button>
          <Button variant="contained" className="label-style-4">
            Style 4
          </Button>
          <Button variant="contained" className="label-style-5">
            Style 5
          </Button>
          <Button variant="contained" className="label-style-6">
            Style 6
          </Button>
          <Button variant="contained" className="label-style-7">
            Style 7
          </Button>
        </article>

        <Typography variant="h5">And hey look, a spinning ampersand:</Typography>
        <article>
          <div className="icon-spin" style={{ background: 'white', boxShadow: '0 0 5px rgba(0,0,0,0.2)' }}>
            @
          </div>
        </article>

        <Typography variant="h5">MTA icons, for your pleasure:</Typography>
        <article>
          <div>
            <span className="subway-icon mta-green">6</span>
            <span className="subway-icon mta-green express">6</span>
            <span className="subway-icon mta-green">4</span>
          </div>
          <div>
            <span className="subway-icon mta-orange ">B</span>
            <span className="subway-icon mta-blue">C</span>
            <span className="subway-icon mta-blue">A</span>
          </div>
          <div>
            <span className="subway-icon mta-purple">7</span>
            <span className="subway-icon mta-purple express">7</span>
            <span className="subway-icon mta-gray">S</span>
          </div>
          <div>
            <span className="subway-icon mta-yellow">N</span>
            <span className="subway-icon mta-yellow">R</span>
            <span className="subway-icon mta-yellow">Q</span>
            <span className="subway-icon mta-red">1</span>
            <span className="subway-icon mta-red">2</span>
            <span className="subway-icon mta-red">3</span>
          </div>
        </article>

        <Typography variant="h5" gutterBottom>
          IonIcons
        </Typography>
        <article>
          <Typography>Solid Icons</Typography>
          <IconAddSolid />
          <IconArrowDownSolid />
          <IconArrowUpSolid />
          <IconArrowBackSolid />
          <IconArrowForwardSolid />
          <IconBriefcaseSocialSolid />
          <IconBulbSolid />
          <IconBusinessSolid />
          <IconCalendarSolid />
          <IconCallSolid />
          <IconCameraSolid />
          <IconCardViewSolid />
          <IconCaretBackSolid />
          <IconCaretForwardSolid />
          <IconCaretDownSolid />
          <IconCaretUpSolid />
          <IconChatboxEllipsesSolid />
          <IconCheckboxSolid />
          <IconCheckmarkCircleSolid />
          <IconCheckmarkSolid />
          <IconChevronBackSolid />
          <IconChevronForwardSolid />
          <IconChevronUpSolid />
          <IconChevronDownSolid />
          <IconCloseSolid />
          <IconCloudDownloadSolid />
          <IconCloudUploadSolid />
          <IconCodeDownload />
          <IconCodeSlashSolid />
          <IconColorWandSolid />
          <IconComparablesSolid />
          <IconCopySolid />
          <IconDownloadSolid />
          <IconEllipsisVerticalSolid />
          <IconEllipsisHorizontalSolid />
          <IconEyeSolid />
          <IconFilterSolid />
          <IconFolderSolid />
          <IconGridSolid />
          <IconHeartSolid />
          <IconHelpCircleSolid />
          <IconImageSolid />
          <IconInformationCircleSolid />
          <IconIntegrationsSolid />
          <IconLabelSolid />
          <IconLayersSolid />
          <IconLockClosedSolid />
          <IconLockOpenSolid />
          <IconMailOpenSolid />
          <IconMailSolid />
          <IconMailboxSolid />
          <IconMailerHistorySolid />
          <IconMapSolid />
          <IconMenuSolid />
          <IconNutritionSolid />
          <IconOpenSolid />
          <IconPaperPlaneSolid />
          <IconPencilSolid />
          <IconPersonAddSolid />
          <IconPersonSolid />
          <IconPhonePortraitSolid />
          <IconPlaySolid />
          <IconPolygonSolid />
          <IconPrintSolid />
          <IconRadiusSolid />
          <IconRemoveSolid />
          <IconReonomySolid />
          <IconSaveSolid />
          <IconSearchSolid />
          <IconSettingsSolid />
          <IconShareSocialSolid />
          <IconSpreadsheetSolid />
          <IconSquareSolid />
          <IconStarHalfSolid />
          <IconTodaySolid />
          <IconTrashSolid />
          <IconWarningSolid />
        </article>
        <article>
          <Typography>Outline Icons</Typography>
          <IconAddOutline />
          <IconArrowDownOutline />
          <IconArrowUpOutline />
          <IconArrowBackOutline />
          <IconArrowForwardOutline />
          <IconBriefcaseSocialOutline />
          <IconBulbOutline />
          <IconBusinessOutline />
          <IconCalendarOutline />
          <IconCallOutline />,
          <IconCameraOutline />
          <IconCardViewOutline />
          <IconCaretBackOutline />
          <IconCaretForwardOutline />
          <IconCaretDownOutline />
          <IconCaretUpOutline />
          <IconChatboxEllipsesOutline />
          <IconCheckboxOutline />
          <IconCheckmarkCircleOutline />
          <IconCheckmarkOutline />
          <IconChevronBackOutline />
          <IconChevronForwardOutline />
          <IconChevronUpOutline />
          <IconChevronDownOutline />
          <IconCloseOutline />
          <IconCloudDownloadOutline />
          <IconCloudUploadOutline />
          <IconCodeDownloadOutline />
          <IconCodeSlashOutline />
          <IconColorWandOutline />
          <IconComparablesOutline />
          <IconCopyOutline />
          <IconDownloadOutline />
          <IconEllipsisVerticalOutline />
          <IconEllipsisHorizontalOutline />
          <IconEyeOutline />
          <IconFilterOutline />
          <IconFolderOutline />
          <IconGridOutline />
          <IconHeartOutline />
          <IconHelpCircleOutline />
          <IconImageOutline />
          <IconInformationCircleOutline />
          <IconIntegrationsOutline />
          <IconLabelOutline />
          <IconLayersOutline />
          <IconLockClosedOutline />
          <IconLockOpenOutline />
          <IconMailOpenOutline />
          <IconMailOutline />
          <IconMailboxOutline />
          <IconMailerHistoryOutline />
          <IconMapOutline />
          <IconMenuOutline />
          <IconNutritionOutline />
          <IconOpenOutline />
          <IconPaperPlaneOutline />
          <IconPencilOutline />
          <IconPersonAddOutline />
          <IconPersonOutline />
          <IconPhonePortraitOutline />
          <IconPlayOutline />
          <IconPolygonOutline />
          <IconPrintOutline />
          <IconRadiusOutline />
          <IconRemoveOutline />
          <IconReonomyOutline />
          <IconSaveOutline />
          <IconSearchOutline />
          <IconSettingsOutline />
          <IconShareSocialOutline />
          <IconSpreadsheetOutline />
          <IconSquareOutline />
          <IconStarHalfOutline />
          <IconTodayOutline />
          <IconTrashOutline />
          <IconWarningOutline />
          <IconNewDataFeedOutline />
          <IconSortOutline />
          <IconRefreshOutline />
          <IconLinkOutline />
        </article>
        <Typography variant="h2" color="primary">
          I am primary color h2 with icon <IconTodaySolid fontSize="inherit" />
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          I am a secondary color subtitle1 with icon <IconTodaySolid fontSize="inherit" />
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          I am a textSecondary color subtitle2 with icon <IconTodaySolid fontSize="inherit" />
        </Typography>
        <Typography>
          I am a default body color paragraph with icon <IconTodaySolid fontSize="inherit" />
        </Typography>
        <Typography>
          And here is an IconButton:
          <IconButton>
            <IconTodaySolid fontSize="inherit" />
          </IconButton>
        </Typography>
        <CheckboxTree
          data={{
            id: '1',
            label: 'one',
            checked: null,
            children: [
              {
                id: '2',
                label: 'two',
                checked: false
              },
              {
                id: '3',
                label: 'three',
                checked: true
              }
            ]
          }}
          open={true}
        />
      </main>
    </ReonomyStyles>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
