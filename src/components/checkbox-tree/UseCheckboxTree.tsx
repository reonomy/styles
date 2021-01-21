import * as React from 'react';
import { TreeData } from '..';
import * as Actions from './CheckboxTreeActions';
import { ClearCheckboxType, SelectCheckboxType } from './CheckboxTreeActions';

interface UseCheckboxTreeProps {
  data: TreeData | null;
  open: boolean;
  reducer?: (state: CheckboxTreeState, action: Actions.CheckboxTreeActions) => CheckboxTreeState;
}

type CheckboxTreeState = {
  data: TreeData | null;
  open: boolean;
};

const getCheckboxIndex = (id: string, children: TreeData[]) => children.findIndex(child => child.id === id);

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

function checkboxTreeReducer(state: CheckboxTreeState, action: Actions.CheckboxTreeActions) {
  const updateChildCheckbox = (data: SelectCheckboxType | ClearCheckboxType) => {
    let newCheckboxChildren: TreeData[] = [];
    if (state?.data?.children) {
      const tempChildDict = childListToMap(state.data.children);
      const currentCheckboxIndex = getCheckboxIndex(data.payload.id, state.data.children);
      tempChildDict[currentCheckboxIndex] = data.payload;
      newCheckboxChildren = childMapToList(tempChildDict);
    }
    return newCheckboxChildren;
  };

  switch (action.type) {
    case Actions.CheckboxTreeActionTypes.select:
      return {
        open: state.open,
        data: {
          ...state.data,
          children: updateChildCheckbox(action)
        } as TreeData
      };
    case Actions.CheckboxTreeActionTypes.clear:
      return {
        open: state.open,
        data: {
          ...state.data,
          children: updateChildCheckbox(action)
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

export function useCheckboxTree({ data, open, reducer = checkboxTreeReducer }: UseCheckboxTreeProps) {
  const [{ data: checkboxTreeData, open: isOpen }, dispatch] = React.useReducer(reducer, { data, open });

  const selectAllCheckboxes = () => dispatch({ type: Actions.CheckboxTreeActionTypes.selectAll });

  const clearAllCheckboxes = () =>
    dispatch({
      type: Actions.CheckboxTreeActionTypes.clearAll
    });

  const selectCheckbox = (selectedCheckboxData: TreeData) =>
    dispatch({
      type: Actions.CheckboxTreeActionTypes.select,
      payload: selectedCheckboxData
    });

  const clearCheckbox = (clearedCheckboxData: TreeData) =>
    dispatch({
      type: Actions.CheckboxTreeActionTypes.clear,
      payload: clearedCheckboxData
    });

  const openRootCheckbox = () =>
    dispatch({
      type: Actions.CheckboxTreeActionTypes.open
    });

  const closeRootCheckbox = () =>
    dispatch({
      type: Actions.CheckboxTreeActionTypes.close
    });

  return {
    checkboxTreeData,
    isOpen,
    selectAllCheckboxes,
    clearAllCheckboxes,
    selectCheckbox,
    clearCheckbox,
    openRootCheckbox,
    closeRootCheckbox
  };
}
