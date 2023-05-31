import { PersonalFinanceReducer } from "../reducers/PersonalFinanceReducer";
import { finanaceType, financeStateType } from "../types/personalFinanceTypes";
import { personalFinanceContext } from "./personalFinanceContext copy";
import { useReducer } from "react";

const initialState: financeStateType = {
  financeCount: 0,
  finances: [],
  totalExpenses: 0,
  totalRevenue: 0,
};

type propsPersonalFinanceType = {
  children: JSX.Element | JSX.Element[];
};
export const PersonalFinanceProvider = ({
  children,
}: propsPersonalFinanceType) => {
  const [financeSate, dispatch] = useReducer(
    PersonalFinanceReducer,
    initialState
  );

  const removeFinance = (id: number) => {
    dispatch({ type: "removeFinance", payload: { id } });
  };

  const addFinance = (finance: finanaceType) => {
    dispatch({ type: "addFinance", payload: finance });
  };

  return (
    <personalFinanceContext.Provider
      value={{ financeSate, removeFinance, addFinance }}
    >
      {children}
    </personalFinanceContext.Provider>
  );
};
