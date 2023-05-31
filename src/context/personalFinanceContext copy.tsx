import { createContext } from "react";
import { finanaceType, financeStateType } from "../types/personalFinanceTypes";

export type financeContextType = {
  financeSate: financeStateType;
  addFinance: (state: finanaceType) => void;
  removeFinance: (id: number) => void;
};

export const personalFinanceContext = createContext({} as financeContextType);
