import { useAppDispatch } from '../../store/hooks';
import { show } from '../../store/features/delete/deleteModalSlice';

function DeleteModal() {
  // Initialize dispatch from useAppDispatch hook
  const dispatch = useAppDispatch();

  // Pass the action to dispatch to hide the modal
  function onClickCancelHandler() {
    dispatch(show(false));
  }

  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <p className='modal-title'>Delete comment</p>
        <p className='modal-text'>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className='buttons-container'>
          <button
            onClick={onClickCancelHandler}
            className='button modal-cancel-button'
          >
            NO, CANCEL
          </button>
          <button className='button modal-delete-button'>YES, DELETE</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
