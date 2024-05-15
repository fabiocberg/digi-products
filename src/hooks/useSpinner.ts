import { useContext } from "react";
import { SpinnerContext, SpinnerContextData } from "../contexts/SpinnerContext";

export const useSpinner = (): SpinnerContextData => {
    const context = useContext(SpinnerContext);
    if (!context) {
        throw new Error(
            "useSpinner must be used within a SpinnerContextProvider"
        );
    }
    return context;
};
