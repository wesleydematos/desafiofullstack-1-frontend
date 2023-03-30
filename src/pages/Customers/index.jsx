import { useEffect } from "react";
import { Header } from "../../components/Header";
import { useCustomerContext } from "../../contexts/customerContext";
import api from "../../services/api";

export const Customers = () => {
  const { setCustomers, changeLi, customers } = useCustomerContext();

  useEffect(() => {
    api
      .get("/customers")
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [changeLi]);

  return (
    <>
      <Header />
      {!customers.length ? (
        <div className="without_customers">
          <p>No contact created yet :/</p>
        </div>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>
              <p>Name: {customer.name}</p>
              <p>Email: {customer.email}</p>
              <p>Phone Number: {customer.phoneNumber}</p>
              <p>Register Date: {customer.register_date}</p>
              <button>Edit</button>
              <button>Delete</button>
              <button>Create contact</button>
              <button>List contacts</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
