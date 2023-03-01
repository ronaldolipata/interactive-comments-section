import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators } from '../../state';
import { IoMdTrash } from 'react-icons/io';
import { RiPencilFill } from 'react-icons/ri';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import avatar1 from '../../assets/images/avatars/image-amyrobson.png';

function Comment() {
  // Initialize dispatch from react-redux
  const dispatch = useDispatch();

  // Initialize action creators
  const { showDeleteModal } = bindActionCreators(actionCreators, dispatch);

  // Pass true value to show the modal
  function onClickDeleteHandler() {
    showDeleteModal(true);
  }

  // Pass true value to show the modal
  function onClickEditHandler() {}

  return (
    <div className='comment-container'>
      <div className='comment-info'>
        <div className='user-info'>
          <img className='avatar' src={avatar1} alt='avatar' />
          <span className='username'>amyrobson</span>
          <span className='own-comment-indication'>you</span>
        </div>
        <span className='comment-date'>1 month ago</span>
      </div>
      <p className='comment-text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
        dolore quaerat corporis accusantium praesentium laborum sint quibusdam,
        laboriosam quo dicta, error optio quas vero? Assumenda ea nemo quo error
        quaerat!
      </p>
      <div className='comment-sub-container'>
        <div className='upvote-container'>
          <button className='button-reset upvote'>
            <AiOutlinePlus />
          </button>
          <div className='upvote-count'>12</div>
          <button className='button-reset downvote'>
            <AiOutlineMinus />
          </button>
        </div>
        <div className='reply-delete-edit-button-container'>
          {/* <button onClick={onClickHandler} className='button-reset reply-button'>
          <FcUpLeft className='left-arrow-icon' />
          Reply
        </button> */}
          <button
            onClick={onClickDeleteHandler}
            className='button-reset button-center delete-button'
          >
            <IoMdTrash className='delete-icon' />
            Delete
          </button>
          <button
            onClick={onClickEditHandler}
            className='button-reset button-center edit-button'
          >
            <RiPencilFill className='edit-icon' />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
