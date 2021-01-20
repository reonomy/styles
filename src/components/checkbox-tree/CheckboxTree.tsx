import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React, { useCallback } from 'react';
import { Checkbox } from '../checkbox';
import useStyles, { StyleClasses, StyleProps } from './style';
import { CheckboxTreeProvider, useCheckboxTree } from './CheckboxTreeProvider';
import { clearAllCheckboxes, clearCheckbox, selectAllCheckboxes, selectCheckbox } from './CheckboxTreeActions';

export interface TreeData {
  id: string;
  label: string;
  checked: boolean | null;
  children?: TreeData[];
}

interface CheckboxTreeProps {
  data: TreeData;
}

interface CheckboxWrapperProps {
  data: TreeData;
  level: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, data: TreeData) => void;
}

export function CheckboxWrapper({ data, level, onChange }: CheckboxWrapperProps) {
  const classes: StyleClasses = useStyles({ level } as StyleProps);
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="default"
          checked={!!data.checked}
          className={level === 0 ? classes.parent : classes.child}
          indeterminate={data.checked === null}
          name={data.label.toLowerCase().replace(/ /g, '')}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event, data)}
          onClick={event => event.stopPropagation()}
        />
      }
      key={data.id}
      label={`${data.label} on level ${level}`}
    />
  );
}

function CheckboxTreeComponent() {
  const [{ data }, dispatch] = useCheckboxTree();
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
      <div className={classes.container}>
        <FormControl>
          <FormGroup>
            <CheckboxWrapper data={data} level={0} onChange={onChange} />
            {!!data?.children?.length &&
              data.children.map(childNode => <CheckboxWrapper data={childNode} level={1} onChange={onChange} />)}
          </FormGroup>
        </FormControl>
      </div>
    );
  }

  return null;
}

export function CheckboxTree({ data }: CheckboxTreeProps) {
  return (
    <CheckboxTreeProvider data={data}>
      <CheckboxTreeComponent />
    </CheckboxTreeProvider>
  );
}
