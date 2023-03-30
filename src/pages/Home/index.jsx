import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { useCustomerContext } from "../../contexts/customerContext";

export const Home = () => {
  const { registerCustomer } = useCustomerContext();

  return (
    <>
      <Header />
      <Form
        typeRequest="Create"
        typeData="Customer"
        handleFunction={registerCustomer}
      />
    </>
  );
};
