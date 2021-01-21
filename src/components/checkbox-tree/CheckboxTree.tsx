import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React, { useCallback } from 'react';
import { Checkbox } from '../checkbox';
import useStyles, { StyleClasses, StyleProps } from './style';
import { CheckboxTreeProvider, useCheckboxTree } from './CheckboxTreeProvider';
import {
  clearAllCheckboxes,
  clearCheckbox,
  closeRootCheckbox,
  selectAllCheckboxes,
  selectCheckbox,
  openRootCheckbox
} from './CheckboxTreeActions';
import { IconCaretDownSolid, IconCaretForwardSolid } from '../..';

export interface TreeData {
  id: string;
  label: string;
  checked: boolean | null;
  children?: TreeData[];
}

interface CheckboxTreeProps {
  data: TreeData;
  open: boolean;
}

interface CheckboxWrapperProps {
  data: TreeData;
  level: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, data: TreeData) => void;
  open?: boolean;
}

export function CheckboxWrapper({ data, level, onChange, open }: CheckboxWrapperProps) {
  const classes: StyleClasses = useStyles({ level } as StyleProps);
  const allChildrenChecked = data?.children?.every(child => child.checked);
  const hasOneAndNotAllChecked = data.children && data.children.some(child => child.checked) && !allChildrenChecked;
  const checkboxName = data.label.toLowerCase().replace(/ /g, '');
  const [, dispatch] = useCheckboxTree();
  const openIcon = open ? (
    <IconCaretDownSolid
      data-testid="icon-caret-down"
      onClick={event => {
        closeRootCheckbox(dispatch);
        event.preventDefault();
      }}
    />
  ) : (
    <IconCaretForwardSolid
      data-testid="icon-caret-forward"
      onClick={event => {
        openRootCheckbox(dispatch);
        event.preventDefault();
      }}
    />
  );

  return (
    <FormControlLabel
      control={
        <>
          {level === 0 && openIcon}
          <Checkbox
            data-testid={`${checkboxName}`}
            color="default"
            checked={level === 0 ? allChildrenChecked : !!data.checked}
            className={level === 0 ? classes.parent : classes.child}
            indeterminate={level === 0 && hasOneAndNotAllChecked}
            name={checkboxName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event, data)}
            onClick={event => event.stopPropagation()}
          />
        </>
      }
      key={data.id}
      label={`${data.label} on level ${level}`}
    />
  );
}

export function CheckboxTreeComponent() {
  const [{ data, open }, dispatch] = useCheckboxTree();
  const classes: StyleClasses = useStyles({} as StyleProps);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, node: TreeData) => {
    const isParentNode = node.children && node.children.length > 0;
    if (isParentNode && e.target.checked) {
      selectAllCheckboxes(dispatch);
    } else if (isParentNode && !e.target.checked) {
      clearAllCheckboxes(dispatch);
    } else if (!isParentNode && e.target.checked) {
      selectCheckbox(dispatch, {
        ...node,
        checked: true
      });
    } else {
      clearCheckbox(dispatch, {
        ...node,
        checked: false
      });
    }
  }, []);

  if (data) {
    return (
      <div className={classes.container} data-testid="checkbox-tree-container">
        <FormControl>
          <FormGroup>
            <CheckboxWrapper data={data} level={0} onChange={onChange} open={open} />
            {open &&
              !!data?.children?.length &&
              data.children.map(childNode => <CheckboxWrapper data={childNode} level={1} onChange={onChange} />)}
          </FormGroup>
        </FormControl>
      </div>
    );
  }

  return null;
}

// add onChange prop so consumer can access data
export function CheckboxTree({ data, open }: CheckboxTreeProps) {
  return (
    <CheckboxTreeProvider data={data} open={open}>
      <CheckboxTreeComponent />
    </CheckboxTreeProvider>
  );
}
