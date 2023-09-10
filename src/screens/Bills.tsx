import Header from "../components/Header";
import Card from "../components/Card";
import RemainingBudget from "../components/RemainingBudget";
import Button from "../components/Button";
import BottomSheet from "../components/BottomSheet";
import { CurrentScreenContext } from "../contexts/CurrentScreenContext";
import { CurrentExpenseDetailsContext } from "../contexts/CurrentExpenseDetailsContext";
import { useContext } from "react";
import { useForm } from "../contexts/DisplayFormContext";

function Main() {
  const expenseDetails = useContext(CurrentExpenseDetailsContext);

  const { isActive } = useForm();

  console.log(isActive);
  // const currentScreen = useContext(CurrentScreenContext);

  expenseDetails.title = "Lista de despesas";
  expenseDetails.budget = 9000;

  return (
    <>
      <CurrentScreenContext.Provider value="Bills">
        <CurrentExpenseDetailsContext.Provider value={expenseDetails}>
          <Header
            title={expenseDetails.title}
            budget={expenseDetails.budget}
            isMainScreen
          />
          <RemainingBudget />
          <Card title="Despesa 1" value={10000} screenName="expenses" />
          <Card title="Despesa 2" value={10000} screenName="expenses" />
          <Card title="Despesa 3" value={10000} screenName="expenses" />
          <Card title="Despesa 4" value={10000} screenName="expenses" />
          <Card title="Despesa 5" value={10000} screenName="expenses" />
          <Card title="Despesa 6" value={10000} screenName="expenses" />
          <Card title="Despesa 7" value={10000} screenName="expenses" />
          <Button icon="add" type="fab" />
          {isActive && <BottomSheet />}
        </CurrentExpenseDetailsContext.Provider>
      </CurrentScreenContext.Provider>
    </>
  );
}

export default Main;
