import { useDispatch } from 'react-redux';
import { actionCreators } from '../../state';
import { bindActionCreators } from '@reduxjs/toolkit';

function DeleteModal() {
  // Initialize dispatch from react-redux
  const dispatch = useDispatch();

  // Initialize action creators
  const { showDeleteModal } = bindActionCreators(actionCreators, dispatch);

  // Pass false value to hide the modal
  function onClickHandler() {
    showDeleteModal(false);
  }

  return (
    <div className='modal-container'>
      <p className='modal-title'>Delete comment</p>
      <p className='modal-text'>
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </p>
      <div className='buttons-container'>
        <button onClick={onClickHandler} className='button cancel-button'>
          NO, CANCEL
        </button>
        <button className='button delete-button'>YES, DELETE</button>
      </div>
    </div>
  );
}

export default DeleteModal;
