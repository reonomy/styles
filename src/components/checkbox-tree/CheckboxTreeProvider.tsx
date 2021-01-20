import * as React from 'react';
import * as Actions from './CheckboxTreeActions';

export interface TreeData {
  id: string;
  label: string;
  checked: boolean | null;
  children?: TreeData[];
}

interface CheckboxTreeProviderProps {
  children: React.ReactNode;
  data: TreeData | null; // this should be TreeData or null
}

type CheckboxTreeState = {
  data: TreeData | null;
};

const INITIAL_STATE: CheckboxTreeState = {
  data: null
};

type CheckboxTreeContextType = [CheckboxTreeState, React.Dispatch<Actions.CheckboxTreeActions>];

const CheckboxTreeContext = React.createContext((null as unknown) as CheckboxTreeContextType);
CheckboxTreeContext.displayName = 'CheckboxTreeContext';

const getCheckboxIndex = (id: string, children: TreeData[]) => children.findIndex(child => child.id === id);

const childListToDict = (children: TreeData[]) => {
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
  let newCheckboxChildren: TreeData[] = [];

  switch (action.type) {
    case Actions.CheckboxTreeActionTypes.select:
      if (state?.data?.children) {
        const tempChildDict = childListToDict(state.data.children);
        const currentCheckboxIndex = getCheckboxIndex(action.payload.id, state.data.children);
        tempChildDict[currentCheckboxIndex] = action.payload;
        newCheckboxChildren = childMapToList(tempChildDict);
      }

      return {
        data: {
          ...state.data,
          children: newCheckboxChildren
        } as TreeData
      };
    // case Actions.CheckboxTreeActionTypes.clearCheckbox:
    //   return {};
    // case Actions.CheckboxTreeActionTypes.selectAll:
    //   return {};
    // case Actions.CheckboxTreeActionTypes.clearAll:
    //   return {};
    default:
      return state;
  }
}

export function CheckboxTreeProvider({ children, data }: CheckboxTreeProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, { data });
  console.log(state);

  return <CheckboxTreeContext.Provider value={[state, dispatch]}>{children}</CheckboxTreeContext.Provider>;
}

export function useCheckboxTree() {
  const context = React.useContext(CheckboxTreeContext);
  if (!context) {
    throw new Error('useCheckboxTree must be used within a CheckboxTreeContext');
  }
  return context;
}
