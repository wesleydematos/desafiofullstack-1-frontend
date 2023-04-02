import { useCustomerContext } from "../../contexts/customerContext";
import { ModalDeleteStyled } from "./style";

export const ModalDelete = ({ typeRequest, deleteFunction, idToDelete }) => {
  const { setDeleteModal } = useCustomerContext();

  return (
    <ModalDeleteStyled>
      <div className="card_delete">
        <h3>Confirm the deletion of the {typeRequest}?</h3>
        <div className="buttons">
          <button onClick={() => deleteFunction(idToDelete)}>Yes</button>
          <button onClick={() => setDeleteModal(false)}>No</button>
        </div>
      </div>
    </ModalDeleteStyled>
  );
};
