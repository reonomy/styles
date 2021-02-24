import MaterialUiChip from '@material-ui/core/Chip';
import Zoom from '@material-ui/core/Zoom';
import React, { useCallback } from 'react';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import useStyles, { StyleClasses } from './style';
import { IconCloseSolid, IconMenuOutline } from '../..';

interface RenderChipProps {
  className: string;
  text: string;
  icon?: JSX.Element;
  deleteIcon?: JSX.Element;
  onClick?: () => void;
  onDelete?: () => void;
  // chip: Chip;
}

// Renders an individual chip.
export function Chip({
  className,
  text,
  icon = <IconMenuOutline />,
  deleteIcon = (
    <IconButton>
      <IconCloseSolid />
    </IconButton>
  ),
  onClick,
  onDelete
}: RenderChipProps) {
  const classes: StyleClasses = useStyles();
  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick();
    }
  }, []);

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
        onClick={handleClick}
      />
    </Zoom>
  );
}
