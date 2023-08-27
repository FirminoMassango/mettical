import Button from "./Button";
import { Link } from "react-router-dom";

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

  const screenName = props.screenName === "bills" ? "/" : props.screenName
  const val = `${screenName}/${props.value}`
  console.log(val)

  return (
    <Link to={`${props.screenName}/${props.value}/${props.title}`}>
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
