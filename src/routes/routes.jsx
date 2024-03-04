import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "../layout/DefaultLayout";
import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;