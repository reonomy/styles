import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React from 'react';
import useStyles, { StyleClasses, StyleProps } from './style';

export interface TreeData {
  id: string;
  label: string;
  checked: boolean;
  children?: TreeData[];
}

export interface CheckboxTreeProps {
  data: TreeData;
  level: number;
}

function CheckboxTree({ data, level = 0 }: CheckboxTreeProps) {
  const classes: StyleClasses = useStyles({ level } as StyleProps);
  const allChildNodesChecked: boolean = data?.children?.every(node => node.checked) || false;
  const hasOneChildNodeChecked: boolean = data?.children?.some(node => node.checked) || false;

  return (
    <div className={classes.container}>
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={allChildNodesChecked || data.checked}
                className={level === 0 ? classes.parent : classes.child}
                indeterminate={level === 0 && !allChildNodesChecked && hasOneChildNodeChecked}
                onChange={event => event}
                onClick={event => event.stopPropagation()}
              />
            }
            key={data.id}
            label={`${data.label} on level ${level}`}
          />
          {data?.children?.length &&
            data.children.map(childNode => <CheckboxTree key={data.id} data={childNode} level={level + 1} />)}
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxTree;
