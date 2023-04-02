import { createContext, useContext, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

export const CustomerContext = createContext({});

export const CustomerProvider = ({ children }) => {
  const [changeLi, setChangeLi] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  async function registerCustomer(data) {
    try {
      await api.post("/customers", data);
      toast.success("Customer created successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  async function deleteCustomer() {
    try {
      await api.delete(`/customers/${customerId}`);
      toast.success("Customer deleted successfully!");
      setDeleteModal(false);
      setChangeLi(!changeLi);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }

  async function updateCustomer(data) {
    try {
      await api.patch(`/customers/${customerId}`, data);
      toast.success("Customer successfully edited!");
      setEditModal(false);
      setChangeLi(!changeLi);
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
        deleteModal,
        setDeleteModal,
        deleteCustomer,
        updateCustomer,
        editModal,
        setEditModal,
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
