import { createContext, useContext, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const CustomerContext = createContext({});

export const CustomerProvider = ({ children }) => {
  const [changeLi, setChangeLi] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState("");

  async function registerCustomer(data) {
    try {
      await api.post("/customers", data);
      toast.success("Customer criado com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  return (
    <CustomerContext.Provider
      value={{
        registerCustomer,
        changeLi,
        setChangeLi,
        customers,
        setCustomers,
        customerId,
        setCustomerId,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export function useCustomerContext() {
  const context = useContext(CustomerContext);

  return context;
}
