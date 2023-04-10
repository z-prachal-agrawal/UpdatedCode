import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
// import PrimaryAppBar from "./components/PrimaryAppBar.js";
// import MiniDrawer from "./components/MiniDrawer.js";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        <Dashboard />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
