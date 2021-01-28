import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React, { useCallback } from 'react';
import { Checkbox } from '../checkbox';
import useStyles, { StyleClasses, StyleProps } from './style';
import { useCheckboxTree } from './UseCheckboxTree';
import {} from './CheckboxTreeActions';
import { IconCaretDownSolid, IconCaretForwardSolid } from '../..';
import * as Actions from './CheckboxTreeActions';

export interface TreeData {
  name: string;
  label: string;
  checked: boolean | null;
  disabled?: boolean;
  children?: TreeData[];
}

type Variant = 'default' | 'greyed';

export interface CheckboxTreeProps {
  data: TreeData;
  open?: boolean;
  onUpdate: (data: TreeData) => void;
  variant: Variant;
}

interface CheckboxWrapperProps extends Omit<CheckboxTreeProps, 'onUpdate'> {
  level: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, data: TreeData) => void;
  closeCheckboxGroup?: VoidFunction;
  openCheckboxGroup?: VoidFunction;
  variant: Variant;
}

export function CheckboxWrapper({
  data,
  level,
  onChange,
  open,
  closeCheckboxGroup,
  openCheckboxGroup,
  variant = 'default'
}: CheckboxWrapperProps) {
  const allChildrenChecked = data?.children?.every(child => child.checked || child.disabled);
  const noChildrenChecked = data?.children?.every(child => !child.checked || child.disabled);
  const classes: StyleClasses = useStyles({
    level,
    variant,
    checked: level === 0 ? !noChildrenChecked : !!data.checked
  } as StyleProps);
  const hasOneAndNotAllChecked =
    data.children && data.children.some(child => child.checked || child.disabled) && !allChildrenChecked;
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
            disabled={data.disabled}
            indeterminate={level === 0 && hasOneAndNotAllChecked}
            name={checkboxName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event, data)}
            onClick={event => event.stopPropagation()}
          />
        </>
      }
      key={data.name}
      label={data.label}
      classes={{
        label: classes.label
      }}
    />
  );
}

export function CheckboxTreeComponent({ data, open, onUpdate, variant }: CheckboxTreeProps) {
  const [state, dispatch] = useCheckboxTree({ data, open: !!open, onUpdate });
  const classes: StyleClasses = useStyles({} as StyleProps);
  const openRootCheckbox = () =>
    dispatch({
      type: Actions.CheckboxTreeActionTypes.open
    });
  const closeRootCheckbox = () =>
    dispatch({
      type: Actions.CheckboxTreeActionTypes.close
    });

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>, node: TreeData) => {
    const isParentNode = node.children && node.children.length > 0;
    if (isParentNode && e.target.checked) {
      dispatch({ type: Actions.CheckboxTreeActionTypes.selectAll });
    } else if (isParentNode && !e.target.checked) {
      dispatch({
        type: Actions.CheckboxTreeActionTypes.clearAll
      });
    } else if (!isParentNode && e.target.checked) {
      dispatch({
        type: Actions.CheckboxTreeActionTypes.select,
        payload: {
          ...node,
          checked: true
        }
      });
    } else {
      dispatch({
        type: Actions.CheckboxTreeActionTypes.clear,
        payload: {
          ...node,
          checked: false
        }
      });
    }
  }, []);

  return (
    <div className={classes.container} data-testid="checkbox-tree-container">
      <FormControl>
        <FormGroup>
          <CheckboxWrapper
            data={state.data}
            level={0}
            onChange={onChange}
            open={state.open}
            openCheckboxGroup={openRootCheckbox}
            closeCheckboxGroup={closeRootCheckbox}
            variant={variant}
          />
          {state.open &&
            !!state.data?.children?.length &&
            state.data.children.map(childNode => (
              <CheckboxWrapper key={childNode.name} data={childNode} level={1} onChange={onChange} variant={variant} />
            ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}

export function CheckboxTree({ data, open, onUpdate, variant }: CheckboxTreeProps) {
  return <CheckboxTreeComponent data={data} open={open} onUpdate={onUpdate} variant={variant} />;
}
