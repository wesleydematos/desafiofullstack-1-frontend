import styled from "styled-components";

export const ModalDeleteStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: #12121457;

  .card_delete {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 200px;
    width: 300px;
    border-radius: 30px;
    gap: 10px;
    background-color: #292929;
    color: #fff;

    .buttons {
      display: flex;
      gap: 10px;
    }

    @media (min-width: 1024px) {
      .card_delete {
        height: 350px;
        width: 450px;
      }
    }
  }
`;
