import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  justify-content: center;
  min-height: 350px;
  min-width: 320px;

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    border: 1px solid gray;
    padding: 15px;

    h1 {
      font-size: 2rem;
    }

    fieldset {
      display: flex;
      flex-direction: column;
      width: 85%;
      margin-bottom: 10px;

      input {
        height: 30px;
      }

      p {
        font-size: 0.8rem;
        color: red;
      }
    }

    @media (min-width: 1024px) {
      width: 600px;
    }
  }
`;
