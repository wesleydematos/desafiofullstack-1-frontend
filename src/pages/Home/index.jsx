import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { useCustomerContext } from "../../contexts/customerContext";
import { StyledHome } from "./style";

export const Home = () => {
  const { registerCustomer } = useCustomerContext();

  return (
    <>
      <Header />
      <StyledHome>
        <p>Add your customers here!</p>
        <Form
          typeRequest="Create"
          typeData="Customer"
          handleFunction={registerCustomer}
        />
      </StyledHome>
    </>
  );
};
