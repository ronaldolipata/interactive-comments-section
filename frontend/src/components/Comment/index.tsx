import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actionCreators } from '../../state';
import { FcUpLeft } from 'react-icons/fc';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import avatar1 from '../../assets/images/avatars/image-amyrobson.png';

function Comment() {
  // Initialize dispatch from react-redux
  const dispatch = useDispatch();

  // Initialize action creators
  const { showDeleteModal } = bindActionCreators(actionCreators, dispatch);

  // Pass true value to show the modal
  function onClickHandler() {
    showDeleteModal(true);
  }

  return (
    <div className='comment-container'>
      <div className='comment-info'>
        <img className='avatar' src={avatar1} alt='avatar' />
        <span className='username'>amyrobson</span>
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
        <button onClick={onClickHandler} className='reply-button'>
          <FcUpLeft className='left-arrow' />
          Reply
        </button>
      </div>
    </div>
  );
}

export default Comment;
