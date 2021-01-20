import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React, { useCallback, useState } from 'react';
import { Checkbox } from '../checkbox';
import useStyles, { StyleClasses, StyleProps } from './style';
import { CheckboxTreeProvider, useCheckboxTree } from './CheckboxTreeProvider';
import { clearCheckbox, selectCheckbox } from './CheckboxTreeActions';

export interface TreeData {
  id: string;
  label: string;
  checked: boolean | null;
  children?: TreeData[];
}

// export interface CheckboxTreeProps {
//   // data: TreeData;
//   // level: number;
//   // onChange?: (event: React.ChangeEvent<HTMLInputElement>, data: TreeData) => void;
//   // selected: string[];
// }

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
      console.log('cool');
    } else if (isParentNode && !e.target.checked) {
      console.log('this');
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

interface CheckboxTreeProps2 {
  data: TreeData;
  onChange: VoidFunction;
}

export function CheckboxTree({ data, onChange }: CheckboxTreeProps2) {
  return (
    <CheckboxTreeProvider data={data}>
      <CheckboxTreeComponent />
    </CheckboxTreeProvider>
  );
}
