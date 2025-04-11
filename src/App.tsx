import { BrowserRouter } from "react-router";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <div className="bg-[#b6b8d1] ">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;