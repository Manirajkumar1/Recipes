import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="fixed w-full top-0 z-50">
        <Navbar />
      </div>
      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
}

export default App;
