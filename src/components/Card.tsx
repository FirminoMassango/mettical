import Button from "./Button";

interface CardProps {
  title: string;
  value: number;
  currency?: string;
}

export default function Card(props: CardProps) {
  const formattedValue = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(props.value);

  return (
    <div className="flex items-center justify-between h-32 mx-4 my-4 p-8 bg-white rounded-2xl shadow-2xl shadow-secondary-100/50">
      <div>
        <h1 className="text-xl text-secondary-300 font-semibold mb-4">
          { props.title }
        </h1>
        <div className="flex">
          <p className="text-base text-secondary-300 font-base">
            { formattedValue }
          </p>
          <p className="text-base text-secondary-300 font-base ml-2">{ props.currency ? props.currency : "MZN"}</p>
        </div>
      </div>
      <div className="flex">
        <Button icon="edit" />
        <div className="ml-4">
          <Button icon="trash" />
        </div>
      </div>
    </div>
  );
}
