import Header from "./components/Header";
import Card from "./components/Card";
import FloatActionButton from "./components/FloatActionButton";
import RemainingBudget from "./components/RemainingBudget";

function App() {
  return (
    <>
      <Header title="Despesa 1" budget="150,200.00" main />
      <RemainingBudget />
      <Card title="Despesa 1" value={10000} />
      <Card title="Despesa 2" value={10000} />
      <Card title="Despesa 3" value={10000} />
      <Card title="Despesa 4" value={10000} />
      <Card title="Despesa 5" value={10000} />
      <Card title="Despesa 6" value={10000} />
      <Card title="Despesa 7" value={10000} />
      <FloatActionButton/>
    </>
  );
}

export default App;
