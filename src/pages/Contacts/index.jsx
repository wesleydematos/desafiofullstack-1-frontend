import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { ModalDelete } from "../../components/ModalDelete";
import { ModalEdit } from "../../components/ModalEdit";
import { useCustomerContext } from "../../contexts/customerContext";

export const Contacts = () => {
  const { getContactsById, contacts, deleteModal, editModal, deleteContact } =
    useCustomerContext();

  useEffect(() => {
    getContactsById();
  }, []);

  return (
    <div>
      <Header />
      <h1>Listando contatos de {contacts.name}</h1>
      {!contacts.contacts.length ? (
        <div className="without_contacts">
          <p>No contacts created yet :/</p>
          <p>
            <Link to="/Customers">Back</Link> to customers and add your contact!
          </p>
        </div>
      ) : (
        <ul>
          {contacts.contacts.map((contact) => {
            <li key={contact.id}>
              {deleteModal && (
                <ModalDelete
                  typeRequest={"Customer"}
                  idToDelete={contact.id}
                  deleteFunction={deleteContact(contact.id)}
                />
              )}
              {editModal && <ModalEdit />}
              <p>Name: {contact.name}</p>
              <p>Email: {contact.email}</p>
              <p>Phone Number: {contact.phoneNumber}</p>
              <div>
                <button>Delete</button>
                <button>Edit</button>
              </div>
            </li>;
          })}
        </ul>
      )}
    </div>
  );
};
