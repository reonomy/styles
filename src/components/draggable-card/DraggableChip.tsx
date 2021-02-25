import MaterialUiChip from '@material-ui/core/Chip';
import Zoom from '@material-ui/core/Zoom';
import React, { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import useStyles, { StyleClasses } from './style';
import { IconCloseSolid, IconMenuOutline } from '../..';

export interface RenderDraggableChipProps {
  className: string;
  text: string;
  icon?: JSX.Element;
  deleteIcon?: JSX.Element;
  onDelete?: () => void;
  // chip: Chip;
}

// Renders an individual chip.
export function DraggableChip({
  className,
  text,
  icon = <IconMenuOutline />,
  deleteIcon = (
    <IconButton>
      <IconCloseSolid />
    </IconButton>
  ),
  onDelete
}: RenderDraggableChipProps) {
  const classes: StyleClasses = useStyles();

  const handleDelete = useCallback(() => {
    if (typeof onDelete === 'function') {
      // onDelete(chip);
    }
  }, []);

  return (
    <Zoom in>
      <MaterialUiChip
        className={clsx([classes.chip, className])}
        label={text}
        icon={icon}
        onDelete={handleDelete}
        deleteIcon={deleteIcon}
      />
    </Zoom>
  );
}
