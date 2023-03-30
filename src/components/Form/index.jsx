import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchema, updateSchema } from "../../schemas";
import { FormStyled } from "./style";

export const Form = ({ typeRequest, typeData, handleFunction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      typeRequest == "Create" ? createSchema : updateSchema
    ),
  });

  return (
    <FormStyled>
      <form onSubmit={handleSubmit(handleFunction)}>
        <h1>
          {typeRequest} {typeData}
        </h1>
        <fieldset>
          <legend>Dados do {typeData}</legend>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="enter the name..."
            {...register("name")}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="enter the email..."
            {...register("email")}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}

          <label htmlFor="phoneNuber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="enter the phone number..."
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="error">{errors.phoneNumber.message}</p>
          )}
        </fieldset>
        <button type="submit">{typeRequest}</button>
      </form>
    </FormStyled>
  );
};