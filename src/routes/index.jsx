import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Customers } from "../pages/Customers";
import { Contacts } from "../pages/Contacts";

const RouteMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Customers" element={<Customers />} />
    <Route path="/Contacts" element={<Contacts />} />
  </Routes>
);

export default RouteMain;
