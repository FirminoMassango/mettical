import { createContext } from "react";

export interface ExpenseDetailsProps {
  title?: string;
  budget?: number;
}

export const expenseDetails: ExpenseDetailsProps = {
  title: "",
  budget: 150000,
};

export const CurrentExpenseDetailsContext = createContext(expenseDetails);
