import * as React from 'react';
import { TreeData } from '..';
import * as Actions from './CheckboxTreeActions';
import { ClearCheckboxType, SelectCheckboxType } from './CheckboxTreeActions';

interface UseCheckboxTreeProps {
  data: TreeData;
  open: boolean;
  onUpdate: (data: TreeData) => void;
  reducer?: (state: CheckboxTreeState, action: Actions.CheckboxTreeActions) => CheckboxTreeState;
}

type CheckboxTreeState = {
  data: TreeData;
  open: boolean;
};

const getCheckboxIndex = (name: string, children: TreeData[]) => children.findIndex(child => child.name === name);

const childListToMap = (children: TreeData[]) => {
  return children.reduce(
    (checkboxMap, child, index) => ({
      ...checkboxMap,
      [index]: child
    }),
    {} as { [key: number]: TreeData }
  );
};

const childMapToList = (children: { [key: number]: TreeData }) => {
  return Object.values(children);
};

const updateChildCheckbox = (state: CheckboxTreeState, payload: TreeData) => {
  let newCheckboxChildren: TreeData[] = [];
  if (state?.data?.children) {
    const tempChildDict = childListToMap(state.data.children);
    const currentCheckboxIndex = getCheckboxIndex(payload.name, state.data.children);
    tempChildDict[currentCheckboxIndex] = payload;
    newCheckboxChildren = childMapToList(tempChildDict);
  }
  return newCheckboxChildren;
};

function checkboxTreeReducer(state: CheckboxTreeState, action: Actions.CheckboxTreeActions) {
  switch (action.type) {
    case Actions.CheckboxTreeActionTypes.select:
      return {
        open: state.open,
        data: {
          ...state.data,
          children: updateChildCheckbox(state, action.payload)
        } as TreeData
      };
    case Actions.CheckboxTreeActionTypes.clear:
      return {
        open: state.open,
        data: {
          ...state.data,
          children: updateChildCheckbox(state, action.payload)
        } as TreeData
      };
    case Actions.CheckboxTreeActionTypes.selectAll:
      return {
        open: state.open,
        data: {
          ...state.data,
          checked: true,
          children: (state?.data?.children || []).map(child => ({
            ...child,
            checked: true
          }))
        } as TreeData
      };
    case Actions.CheckboxTreeActionTypes.clearAll:
      return {
        open: state.open,
        data: {
          ...state.data,
          checked: false,
          children: (state?.data?.children || []).map(child => ({
            ...child,
            checked: false
          }))
        } as TreeData
      };
    case Actions.CheckboxTreeActionTypes.open:
      return {
        data: { ...state.data } as TreeData,
        open: true
      };
    case Actions.CheckboxTreeActionTypes.close:
      return {
        data: { ...state.data } as TreeData,
        open: false
      };
    default:
      return state;
  }
}

export function useCheckboxTree({
  data,
  open,
  onUpdate,
  reducer = checkboxTreeReducer
}: UseCheckboxTreeProps): [CheckboxTreeState, React.Dispatch<Actions.CheckboxTreeActions>] {
  const [state, dispatch] = React.useReducer(reducer, { data, open });

  if (state.data) {
    onUpdate(state.data);
  }

  return [state, dispatch];
}
