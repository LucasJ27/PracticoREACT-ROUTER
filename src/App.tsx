import { BrowserRouter } from "react-router";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <div className="bg-[#e6f4ea]">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;