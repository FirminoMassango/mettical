import Header from "../components/Header";
import Card from "../components/Card";
import RemainingBudget from "../components/RemainingBudget";
import Button from "../components/Button";
import { CurrentScreenContext } from "../contexts/CurrentScreenContext";
import { CurrentExpenseDetailsContext } from "../contexts/CurrentExpenseDetailsContext";
import BottomSheet from "../components/BottomSheet.tsx";
import { FormProvider } from "../contexts/DisplayFormContext.tsx";
import { useContext } from "react";

function SpecificExpense() {
  const expenseDetails = useContext(CurrentExpenseDetailsContext);
  // const currentScreen = useContext(CurrentScreenContext);

  // if (currentScreen === "Expenses") {
  expenseDetails.title = "Despesa lvl 2";
  expenseDetails.budget = 5000;
  // }
  return (
    <>
      <CurrentScreenContext.Provider value="Item">
        <CurrentExpenseDetailsContext.Provider value={expenseDetails}>
          <FormProvider>
            <Header
              title={expenseDetails.title}
              budget={expenseDetails.budget}
            />
            <RemainingBudget />
            <Card title="Despesa 1" value={10000} />
            <Card title="Despesa 2" value={10000} />s
            <Card title="Despesa 3" value={10000} />
            <Card title="Despesa 4" value={10000} />
            <Card title="Despesa 5" value={10000} />
            <Card title="Despesa 6" value={10000} />
            <Card title="Despesa 7" value={10000} />
            <Button icon="add" type="fab" />
            <BottomSheet />
          </FormProvider>
        </CurrentExpenseDetailsContext.Provider>
      </CurrentScreenContext.Provider>
    </>
  );
}

export default SpecificExpense;
