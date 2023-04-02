import { useCustomerContext } from "../../contexts/customerContext";
import { Form } from "../Form";
import { ModalEditStyled } from "./style";

export const ModalEdit = () => {
  const { updateCustomer } = useCustomerContext();
  return (
    <ModalEditStyled>
      <Form
        handleFunction={updateCustomer}
        typeRequest="Update"
        typeData="Customer"
      />
    </ModalEditStyled>
  );
};
