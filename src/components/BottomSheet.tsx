import Input from "./Input";
import { CurrentScreenContext } from "../contexts/CurrentScreenContext";
import { useContext } from "react";
import { useForm } from "../contexts/DisplayFormContext";

export default function BottomSheet() {
  const currentScreen = useContext(CurrentScreenContext);
  const { toggleForm } = useForm();
  return (
    <>
      <CurrentScreenContext.Provider value="bbbbb">
        <div className="w-full h-72 bg-white border border-secondary-100 rounded-t-2xl fixed bottom-0 p-4">
          <div className="flex justify-between">
            {currentScreen}
            <button className="text-red-800" onClick={toggleForm}>
              close
            </button>
          </div>
          <Input type="text" name="tipo" />
          <Input type="text" name="tipo" />
          <Input type="button" name="tipo" />
        </div>
      </CurrentScreenContext.Provider>
    </>
  );
}
