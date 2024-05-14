import { Route, Routes } from "react-router-dom";
import ClientRouters from "./client/Routers/ClientRouters";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<ClientRouters />} />
      </Routes>
    </div>
  );
}

export default App;
