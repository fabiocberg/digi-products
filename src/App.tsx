import "./App.css";
import { SpinnerContextProvider } from "./contexts/SpinnerContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <SpinnerContextProvider>
            <AppRoutes />
        </SpinnerContextProvider>
    );
}

export default App;
