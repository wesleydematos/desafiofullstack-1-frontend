import { createContext, useContext } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  return (
    <CustomerContext.Provider value={{}}>{children}</CustomerContext.Provider>
  );
};

export function useCustomerContext() {
  const context = useContext(CustomerContext);

  return context;
}
