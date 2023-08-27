import Header from "../components/Header";
import Card from "../components/Card";
import RemainingBudget from "../components/RemainingBudget";
import Button from "../components/Button";
import BottomSheet from "../components/BottomSheet";

function Main() {
  return (
    <>
      <Header title="Lista de despesas" budget="150,200.00" isMainScreen />
      <RemainingBudget />
      <Card title="Despesa 1" value={10000} screenName="expenses" />
      <Card title="Despesa 2" value={10000} screenName="expenses" />
      <Card title="Despesa 3" value={10000} screenName="expenses" />
      <Card title="Despesa 4" value={10000} screenName="expenses" />
      <Card title="Despesa 5" value={10000} screenName="expenses" />
      <Card title="Despesa 6" value={10000} screenName="expenses" />
      <Card title="Despesa 7" value={10000} screenName="expenses" />
      <Button icon="add" type="fab" />
      <BottomSheet />
    </>
  );
}

export default Main;
