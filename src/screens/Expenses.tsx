import Header from "../components/Header";
import Card from "../components/Card";
import RemainingBudget from "../components/RemainingBudget";
import Button from "../components/Button";
import BottomSheet from "../components/BottomSheet";
import {FormProvider} from "../contexts/DisplayFormContext.tsx";
// import { useParams } from "react-router-dom";
import { CurrentScreenContext } from "../contexts/CurrentScreenContext";
import { CurrentExpenseDetailsContext } from "../contexts/CurrentExpenseDetailsContext";

import { useContext } from "react";

function Expense() {
  const expenseDetails = useContext(CurrentExpenseDetailsContext);
  // const currentScreen = useContext(CurrentScreenContext);

  // if (currentScreen === "Expenses") {
  expenseDetails.title = "Despesa lvl 1";
  expenseDetails.budget = 8000;
  // }

  return (
    <>
      <CurrentScreenContext.Provider value="Expenses">
        <CurrentExpenseDetailsContext.Provider value={expenseDetails}>
          <FormProvider>
          <Header title={expenseDetails.title} budget={expenseDetails.budget} />
          <RemainingBudget />
          <Card title="Despesa 1" value={10000} screenName="expense" />
          <Card title="Despesa 2" value={10000} screenName="expense" />
          <Card title="Despesa 3" value={10000} screenName="expense" />
          <Card title="Despesa 4" value={10000} screenName="expense" />
          <Card title="Despesa 5" value={10000} screenName="expense" />
          <Card title="Despesa 6" value={10000} screenName="expense" />
          <Card title="Despesa 7" value={10000} screenName="expense" />
          <Button icon="add" type="fab" />
          <BottomSheet />
          </FormProvider>
        </CurrentExpenseDetailsContext.Provider>
      </CurrentScreenContext.Provider>
    </>
  );
}

export default Expense;
