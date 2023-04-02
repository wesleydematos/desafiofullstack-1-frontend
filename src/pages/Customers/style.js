import styled from "styled-components";

export const CustomersStyled = styled.main`
  width: 100vw;
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 0;

    li {
      background-color: grey;
      display: flex;
      flex-direction: column;
      padding: 10px;
      border-radius: 15px;

      h1 {
        font-size: 24px;
        text-align: center;
      }

      .buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5px;
      }
    }
  }
`;
