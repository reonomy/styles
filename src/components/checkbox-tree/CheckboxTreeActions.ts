import { TreeData } from '..';
import { CheckboxTreeState } from './UseCheckboxTree';

export enum CheckboxTreeActionTypes {
  select,
  clear,
  selectAll,
  clearAll,
  open,
  close,
  setDataFromProps
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

export interface SetDataFromPropsType {
  type: CheckboxTreeActionTypes.setDataFromProps;
  payload: CheckboxTreeState;
}

export type CheckboxTreeActions =
  | SelectCheckboxType
  | ClearCheckboxType
  | SelectAllType
  | ClearAllType
  | OpenType
  | CloseType
  | SetDataFromPropsType;
