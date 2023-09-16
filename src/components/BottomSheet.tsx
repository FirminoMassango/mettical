import Input from "./Input";
import { CurrentScreenContext } from "../contexts/CurrentScreenContext";
import { useContext } from "react";
import { useForm } from "../contexts/DisplayFormContext";
import Icon from "./Icon";

export default function BottomSheet() {
  const currentScreen = useContext(CurrentScreenContext);
  const { isActive, toggleForm } = useForm();
  return (
    <>
      <CurrentScreenContext.Provider value="bbbbb">
        {isActive && (
          <div className="w-full h-84 bg-white border border-slate-300 shadow-lg rounded-t-2xl fixed bottom-0 p-4">
            <div className="flex justify-between mb-4">
              <span className="text-secondary-300 font-bold">
                {currentScreen}
              </span>
              <button className="text-red-800" onClick={toggleForm}>
                <Icon name="close" />
              </button>
            </div>
            <Input
              type="text"
              name="Tipo de despesa"
              placeholder="Indique o tipo de despesa. Ex: Faculdade"
            />
            <Input
              type="text"
              name="Custo"
              placeholder="Indique o custo da despesa. Ex: 5000"
            />
            <Input type="button" />
          </div>
        )}
      </CurrentScreenContext.Provider>
    </>
  );
}
