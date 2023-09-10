import Button from "./Button";
import { Link } from "react-router-dom";
import { CurrentScreenContext } from "../contexts/CurrentScreenContext";
import { useContext } from "react";

interface CardProps {
  title: string;
  value: number;
  currency?: string;
  screenName?: string;
}

export default function Card(props: CardProps) {
  const formattedValue = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(props.value);

  const currentScreen = useContext(CurrentScreenContext);

  const screenName =
    currentScreen === "SpecificExpense" ? "expense" : props.screenName;

  return (
    <Link to={`/${screenName}`}>
      <div className="flex items-center justify-between h-32 mx-4 my-4 p-8 bg-white rounded-2xl shadow-2xl shadow-secondary-100/50">
        <div>
          <h1 className="text-xl text-secondary-300 font-semibold mb-4">
            {props.title}
          </h1>
          <div className="flex">
            <p className="text-base text-secondary-300 font-base">
              {formattedValue}
            </p>
            <p className="text-base text-secondary-300 font-base ml-2">
              {props.currency ? props.currency : "MZN"}
            </p>
          </div>
        </div>
        <div className="flex">
          <Button icon="edit" type="default" />
          <div className="ml-4">
            <Button icon="trash" type="default" />
          </div>
        </div>
      </div>
    </Link>
  );
}
