import * as React from 'react';
import * as Actions from './CheckboxTreeActions';
import { ClearCheckboxType, SelectCheckboxType } from './CheckboxTreeActions';

export interface TreeData {
  id: string;
  label: string;
  checked: boolean | null;
  children?: TreeData[];
}

interface CheckboxTreeProviderProps {
  children: React.ReactNode;
  data: TreeData | null;
  open: boolean;
}

type CheckboxTreeState = {
  data: TreeData | null;
  open: boolean;
};

type CheckboxTreeContextType = [CheckboxTreeState, React.Dispatch<Actions.CheckboxTreeActions>];

const CheckboxTreeContext = React.createContext((null as unknown) as CheckboxTreeContextType);
CheckboxTreeContext.displayName = 'CheckboxTreeContext';

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

function reducer(state: CheckboxTreeState, action: Actions.CheckboxTreeActions) {
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

export function CheckboxTreeProvider({ children, data, open }: CheckboxTreeProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, { data, open });
  console.log('state >>', state);
  console.log('open >>', open);

  return <CheckboxTreeContext.Provider value={[state, dispatch]}>{children}</CheckboxTreeContext.Provider>;
}

export function useCheckboxTree() {
  const context = React.useContext(CheckboxTreeContext);
  if (!context) {
    throw new Error('useCheckboxTree must be used within a CheckboxTreeContext');
  }
  return context;
}
