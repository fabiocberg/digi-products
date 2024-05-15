import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

if (localStorage.getItem("chakra-ui-color-mode") === "dark") {
    localStorage.setItem("chakra-ui-color-mode", "light");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
