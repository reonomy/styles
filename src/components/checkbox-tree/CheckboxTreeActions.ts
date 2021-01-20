import { TreeData } from './CheckboxTreeProvider';

export enum CheckboxTreeActionTypes {
  select,
  clear,
  selectAll,
  clearAll
}

export interface SelectCheckboxType {
  type: CheckboxTreeActionTypes.select;
  payload: TreeData; // the checkbox to add
}

export interface ClearCheckboxType {
  type: CheckboxTreeActionTypes.clear;
  payload: TreeData; // the checkbox to remove
}

export interface SelectAllType {
  type: CheckboxTreeActionTypes.selectAll;
}

export interface ClearAllType {
  type: CheckboxTreeActionTypes.clearAll;
}

export type CheckboxTreeActions = SelectCheckboxType | ClearCheckboxType | SelectAllType | ClearAllType;

export function selectCheckbox(dispatch: React.Dispatch<SelectCheckboxType>, selectedCheckboxData: TreeData) {
  dispatch({
    type: CheckboxTreeActionTypes.select,
    payload: selectedCheckboxData
  });
}

export function clearCheckbox(dispatch: React.Dispatch<ClearCheckboxType>, clearedCheckboxData: TreeData) {
  dispatch({
    type: CheckboxTreeActionTypes.clear,
    payload: clearedCheckboxData
  });
}

export function selectAllCheckboxes(dispatch: React.Dispatch<SelectAllType>) {
  dispatch({
    type: CheckboxTreeActionTypes.selectAll
  });
}

export function clearAllCheckboxes(dispatch: React.Dispatch<ClearAllType>) {
  dispatch({
    type: CheckboxTreeActionTypes.clearAll
  });
}
