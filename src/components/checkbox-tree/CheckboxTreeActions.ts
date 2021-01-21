import { TreeData } from './CheckboxTreeProvider';

export enum CheckboxTreeActionTypes {
  select,
  clear,
  selectAll,
  clearAll,
  open,
  close
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

export interface OpenType {
  type: CheckboxTreeActionTypes.open;
}

export interface CloseType {
  type: CheckboxTreeActionTypes.close;
}

export type CheckboxTreeActions =
  | SelectCheckboxType
  | ClearCheckboxType
  | SelectAllType
  | ClearAllType
  | OpenType
  | CloseType;

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

export function openRootCheckbox(dispatch: React.Dispatch<OpenType>) {
  dispatch({
    type: CheckboxTreeActionTypes.open
  });
}

export function closeRootCheckbox(dispatch: React.Dispatch<CloseType>) {
  dispatch({
    type: CheckboxTreeActionTypes.close
  });
}
