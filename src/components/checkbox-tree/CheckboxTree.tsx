import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React, { useCallback } from 'react';
import { Checkbox } from '../checkbox';
import useStyles, { StyleClasses, StyleProps } from './style';
import { useCheckboxTree } from './UseCheckboxTree';
import {} from './CheckboxTreeActions';
import { IconCaretDownSolid, IconCaretForwardSolid } from '../..';

export interface TreeData {
  id: string;
  label: string;
  checked: boolean | null;
  children?: TreeData[];
}

interface CheckboxTreeProps {
  data: TreeData;
  open?: boolean;
}

interface CheckboxWrapperProps extends CheckboxTreeProps {
  level: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, data: TreeData) => void;
  closeCheckboxGroup?: VoidFunction;
  openCheckboxGroup?: VoidFunction;
}

export function CheckboxWrapper({
  data,
  level,
  onChange,
  open,
  closeCheckboxGroup,
  openCheckboxGroup
}: CheckboxWrapperProps) {
  const classes: StyleClasses = useStyles({ level } as StyleProps);
  const allChildrenChecked = data?.children?.every(child => child.checked);
  const hasOneAndNotAllChecked = data.children && data.children.some(child => child.checked) && !allChildrenChecked;
  const checkboxName = data.label.toLowerCase().replace(/ /g, '');

  const openIcon = open ? (
    <IconCaretDownSolid
      className={classes.collapseIcon}
      data-testid="icon-caret-down"
      onClick={event => {
        if (closeCheckboxGroup) {
          closeCheckboxGroup();
        }
        event.preventDefault();
      }}
    />
  ) : (
    <IconCaretForwardSolid
      className={classes.collapseIcon}
      data-testid="icon-caret-forward"
      onClick={event => {
        if (openCheckboxGroup) {
          openCheckboxGroup();
        }
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

export function CheckboxTreeComponent({ data, open }: CheckboxTreeProps) {
  const {
    checkboxTreeData,
    selectAllCheckboxes,
    clearAllCheckboxes,
    selectCheckbox,
    clearCheckbox,
    isOpen,
    openRootCheckbox,
    closeRootCheckbox
  } = useCheckboxTree({ data, open: !!open });
  const classes: StyleClasses = useStyles({} as StyleProps);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, node: TreeData) => {
    const isParentNode = node.children && node.children.length > 0;
    if (isParentNode && e.target.checked) {
      selectAllCheckboxes();
    } else if (isParentNode && !e.target.checked) {
      clearAllCheckboxes();
    } else if (!isParentNode && e.target.checked) {
      selectCheckbox({
        ...node,
        checked: true
      });
    } else {
      clearCheckbox({
        ...node,
        checked: false
      });
    }
  }, []);

  if (checkboxTreeData) {
    return (
      <div className={classes.container} data-testid="checkbox-tree-container">
        <FormControl>
          <FormGroup>
            <CheckboxWrapper
              data={checkboxTreeData}
              level={0}
              onChange={onChange}
              open={isOpen}
              openCheckboxGroup={openRootCheckbox}
              closeCheckboxGroup={closeRootCheckbox}
            />
            {isOpen &&
              !!checkboxTreeData?.children?.length &&
              checkboxTreeData.children.map(childNode => (
                <CheckboxWrapper data={childNode} level={1} onChange={onChange} />
              ))}
          </FormGroup>
        </FormControl>
      </div>
    );
  }

  return null;
}

// add onChange prop so consumer can access data
export function CheckboxTree({ data, open }: CheckboxTreeProps) {
  return <CheckboxTreeComponent data={data} open={open} />;
}
