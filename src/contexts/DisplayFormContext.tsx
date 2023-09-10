import React, { createContext, useContext, useState } from "react";

type FormContextProviderProps = {
  children: React.ReactNode;
};

interface FormContextType {
  isActive: boolean;
  toggleForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: FormContextProviderProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  return (
    <FormContext.Provider value={{ isActive, toggleForm }}>
      {children}
    </FormContext.Provider>
  );
}

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
