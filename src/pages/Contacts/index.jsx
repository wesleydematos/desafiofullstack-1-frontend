import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useCustomerContext } from "../../contexts/customerContext";

export const Contacts = () => {
  const { getContactsById, contacts } = useCustomerContext();

  useEffect(() => {
    getContactsById();
  }, []);

  console.log(contacts);

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
        <>
          <p>oo</p>
        </>
      )}
    </div>
  );
};
