import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/router";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={`${ROUTER.Detail}/:id`} element={<Detail />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
