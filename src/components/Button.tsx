// import { FormProvider } from "../contexts/DisplayFormContext";
import { useForm } from "../contexts/DisplayFormContext";
import Icon from "./Icon";
import BottomSheet from "./BottomSheet";

interface ButtonProps {
  icon: string;
  fill?: boolean;
  type: string;
}

export default function Button(props: ButtonProps) {
  // const isActive = useContext(DisplayFormContext);
  // const { isActive, setIsActive } = useContext(DisplayFormContext);
  // const isActive = true;
  // const { isActive, setIsActive } = useState(false);
  // const [isActive, setIsActive] = useState<boolean>(false);
  // const [isActive, setIsActive] = useState(false);

  // Function to update isActive
  // const toggleIsActive = () => {
  //   setIsActive(!isActive);
  // };

  const { isActive, toggleForm } = useForm();
  const background_color = props.fill ? "bg-primary-100" : "";

  console.log(isActive);

  return (
    <>
      {props.type === "default" ? (
        <button
          className={`grid h-10 w-10 place-content-center rounded-full hover:bg-primary-100/50 ${background_color}`}
        >
          <Icon name={props.icon} />
        </button>
      ) : (
        <button
          className="grid h-14 w-14 place-content-center fixed bottom-9 right-4 rounded-full bg-primary-200 hover:bg-primary-100"
          onClick={toggleForm}
        >
          <Icon name={props.icon} />
        </button>
      )}

      {isActive && <BottomSheet />}
    </>
  );
}
