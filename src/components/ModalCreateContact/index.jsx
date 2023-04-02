import { useCustomerContext } from "../../contexts/customerContext";
import { Form } from "../Form";
import { ModalCreateContactStyled } from "./style";

export const ModalCreateContact = () => {
  const { createContact } = useCustomerContext();

  return (
    <ModalCreateContactStyled>
      <Form
        handleFunction={createContact}
        typeRequest="Create"
        typeData="Contact"
      />
    </ModalCreateContactStyled>
  );
};
