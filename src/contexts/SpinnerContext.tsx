import React from "react";
import Spinner from "../components/Spinner";

export type SpinnerContextData = {
  isSpinnerOpen: boolean;
  setLoading: (loading: boolean) => void;
};

type SpinnerContextProviderProps = {
  children: React.ReactNode;
};

export const SpinnerContext = React.createContext<SpinnerContextData>(
  {} as SpinnerContextData
);

export const SpinnerContextProvider = ({
  children,
}: SpinnerContextProviderProps) => {
  const [isSpinnerOpen, setIsSpinnerOpen] = React.useState(false);

  const spinnerContextData: SpinnerContextData = {
    isSpinnerOpen,
    setLoading: (loading: boolean) => setIsSpinnerOpen(loading),
  };

  return (
    <SpinnerContext.Provider value={spinnerContextData}>
      {children}
      <Spinner visible={isSpinnerOpen} />
    </SpinnerContext.Provider>
  );
};
