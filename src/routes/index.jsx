import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Customers } from "../pages/Customers";

const RouteMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Customers" element={<Customers />} />
  </Routes>
);

export default RouteMain;
