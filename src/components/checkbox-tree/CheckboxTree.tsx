import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import React from 'react';

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
  return (
    <>
      <FormControlLabel
        control={<Checkbox checked={data.checked} />}
        key={data.id}
        label={`${data.label} & ${level}`}
      />
      {data?.children?.length && data.children.map(childNode => <CheckboxTree data={childNode} level={level + 1} />)}
    </>
  );
}

export default CheckboxTree;
