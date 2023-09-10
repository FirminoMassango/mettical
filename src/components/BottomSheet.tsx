import Input from "./Input";
import { CurrentScreenContext } from "../contexts/CurrentScreenContext";
import { useContext } from "react";

export default function BottomSheet() {
  const currentScreen = useContext(CurrentScreenContext);
  return (
    <>
      <CurrentScreenContext.Provider value="bbbbb">
        <div className="w-full h-72 bg-white border border-secondary-100 rounded-t-2xl fixed bottom-0 p-4">
          {currentScreen}
          <Input type="text" name="tipo" />
          <Input type="text" name="tipo" />
          <Input type="button" name="tipo" />
        </div>
      </CurrentScreenContext.Provider>
    </>
  );
}
