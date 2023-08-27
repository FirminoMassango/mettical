import Icon from "./Icon";

interface RemainingBudgetProps {
  isBudgetRemaing?: boolean;
}

export default function RemainingBudget(props: RemainingBudgetProps) {
  return (
    <>
      <div className="flex justify-between mx-4 my-8">
        <span className="text-xl text-secondary-300 font-semibold">
          Remanescente
        </span>
        {props.isBudgetRemaing ? (
          <div className="flex text-red-500">
            <Icon name="warning" />
            <div className="flex">
              <span className="text-lg font-semibold ml-2">-200.00 </span>
              <span className="text-lg font-semibold ml-2">MZN</span>
            </div>
          </div>
        ) : (
          <span className="text-secondary-200 text-lg font-semibold ml-2">
            200.00 MZN
          </span>
        )}
      </div>
    </>
  );
}
