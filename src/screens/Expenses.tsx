import Header from "../components/Header";
import Card from "../components/Card";
import RemainingBudget from "../components/RemainingBudget";
import Button from "../components/Button";
import { useParams } from "react-router-dom";

function Expense() {
  const { billId, title } = useParams();

  return (
    <>
      <Header title={title!} budget={billId!} />
      <RemainingBudget />
      <Card title="Despesa 1" value={10000} screenName="expense" />
      <Card title="Despesa 2" value={10000} screenName="expense" />
      <Card title="Despesa 3" value={10000} screenName="expense" />
      <Card title="Despesa 4" value={10000} screenName="expense" />
      <Card title="Despesa 5" value={10000} screenName="expense" />
      <Card title="Despesa 6" value={10000} screenName="expense" />
      <Card title="Despesa 7" value={10000} screenName="expense" />
      <Button icon="add" type="fab" />
    </>
  );
}

export default Expense;
