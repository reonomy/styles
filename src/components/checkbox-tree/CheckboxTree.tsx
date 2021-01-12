import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import React, { useCallback, useState } from 'react';
import { Checkbox } from '../checkbox';
import useStyles, { StyleClasses, StyleProps } from './style';

export interface TreeData {
  id: string;
  label: string;
  checked: boolean | null;
  children?: TreeData[];
}

export interface CheckboxTreeProps {
  data: TreeData;
  level: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, data: TreeData) => void;
  selected: string[];
}

export function CheckboxWrapper({ data, level, onChange, selected }: CheckboxTreeProps) {
  const classes: StyleClasses = useStyles({ level } as StyleProps);
  const allChildNodesChecked: boolean = data?.children?.length === selected.length && selected.length > 0;
  const hasOneChildNodeChecked: boolean = selected.length > 0;
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="default"
          checked={level === 0 ? allChildNodesChecked : selected.some(id => id === data.id)}
          className={level === 0 ? classes.parent : classes.child}
          indeterminate={level === 0 && !allChildNodesChecked && hasOneChildNodeChecked}
          name={data.label.toLowerCase().replace(/ /g, '')}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(event, data)}
          onClick={event => event.stopPropagation()}
        />
      }
      key={data.id}
      label={`${data.label} on level ${level}`}
    />
  );
}

export function CheckboxTree({ data, level = 0, onChange }: CheckboxTreeProps) {
  const classes: StyleClasses = useStyles({ level } as StyleProps);
  const defaultSelected = [data, ...(data.children || [])].filter(node => node.checked).map(node => node.id);
  const [selected, setSelected] = useState<string[]>(defaultSelected);

  const onToggleCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, node: TreeData) => {
      if (onChange) {
        onChange(e, node);
      }
      const isParentNode = node.children && node.children.length > 0;
      if (isParentNode && e.target.checked) {
        setSelected([...(node?.children || []).map(child => child.id)]);
      } else if (isParentNode && !e.target.checked) {
        setSelected([]);
      } else if (!isParentNode && e.target.checked) {
        setSelected([...selected, node.id]);
      } else {
        setSelected([...selected.filter(id => id !== node.id)]);
      }
    },
    [onChange, selected]
  );

  return (
    <div className={classes.container}>
      <FormControl>
        <FormGroup>
          <CheckboxWrapper data={data} level={level} onChange={onToggleCheck} selected={selected} />
          {!!data?.children?.length &&
            data.children.map(childNode => (
              <CheckboxWrapper
                key={data.id}
                data={childNode}
                level={level + 1}
                onChange={onToggleCheck}
                selected={selected}
              />
            ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}
