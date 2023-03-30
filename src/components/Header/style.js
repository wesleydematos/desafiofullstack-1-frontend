import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 5rem;
  border-bottom: 1px solid #646cff;

  .logo {
    margin-left: 5%;

    p {
      font-size: 2rem;
      color: #535bf2;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-right: 5%;

    a {
      font-size: 1.5rem;
    }
  }
`;
