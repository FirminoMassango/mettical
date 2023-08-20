import Icon from "./Icon";

interface ButtonProps {
  icon?: string;
  fill?: boolean;
  type: string;
}

export default function Button(props: ButtonProps) {
  const background_color = props.fill ? "bg-primary-100" : "";

  return (
    <>
      { props.type === "default" ? (
        <button
          className={`grid h-10 w-10 place-content-center rounded-full hover:bg-primary-100/50 ${background_color}`}
        >
          <Icon name={ props.icon } />
        </button>
      ) : (
        <button className="grid h-16 w-16 place-content-center fixed bottom-9 right-4 rounded-full bg-primary-200 hover:bg-primary-100">
          <Icon name="add" />
        </button>
      ) }
    </>
  );
}
