import { useEffect } from "react";
import { Header } from "../../components/Header";
import { ModalDelete } from "../../components/ModalDelete";
import { ModalEdit } from "../../components/ModalEdit";
import { useCustomerContext } from "../../contexts/customerContext";
import api from "../../services/api";
import { CustomersStyled } from "./style";

export const Customers = () => {
  const {
    setCustomers,
    changeLi,
    customers,
    deleteModal,
    setDeleteModal,
    setCustomerId,
    customerId,
    deleteCustomer,
    setEditModal,
    editModal,
  } = useCustomerContext();

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
      {deleteModal && (
        <ModalDelete
          typeRequest={"Customer"}
          idToDelete={customerId}
          deleteFunction={deleteCustomer}
        />
      )}
      {editModal && <ModalEdit />}
      <Header />
      <CustomersStyled>
        {!customers.length ? (
          <div className="without_customers">
            <p>No costumers created yet :/</p>
          </div>
        ) : (
          <ul>
            {customers.map((customer) => (
              <li key={customer.id}>
                <h1>Customer {customer.name}</h1>
                <p>Email: {customer.email}</p>
                <p>Phone Number: {customer.phoneNumber}</p>
                <p>Register Date: {customer.register_date.slice(0, 10)}</p>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setCustomerId(customer.id);
                      setEditModal(!editModal);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setCustomerId(customer.id);
                      setDeleteModal(!deleteModal);
                    }}
                  >
                    Delete
                  </button>
                  <button>Create contact</button>
                  <button>List contacts</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CustomersStyled>
    </>
  );
};
