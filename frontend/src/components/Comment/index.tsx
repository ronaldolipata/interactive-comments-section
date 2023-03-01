import data from '../../data.json';
import { useAppDispatch } from '../../store/hooks';
import { show } from '../../store/features/delete/deleteModalSlice';
import { IoMdTrash } from 'react-icons/io';
import { RiPencilFill } from 'react-icons/ri';
import { FaReply } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function Comment() {
  const currentUser = data.currentUser.username;

  // Initialize dispatch from useAppDispatch hook
  const dispatch = useAppDispatch();

  // Pass the action to dispatch to show the modal
  function onClickDeleteHandler() {
    dispatch(show(true));
  }

  // TO DO
  // Pass true value to show the modal
  function onClickEditHandler() {}

  return (
    <>
      {data.comments.map(({ id, content, createdAt, score, user, replies }) => (
        <div key={id} className='comment-container'>
          <div className='comment-info'>
            <div className='user-info'>
              <img className='avatar' src={user.image.png} alt='avatar' />
              <span className='username'>{user.username}</span>
              {currentUser === user.username ? (
                <>
                  <span className='own-comment-indication'>you</span>
                </>
              ) : (
                false
              )}
            </div>
            <span className='comment-date'>{createdAt}</span>
          </div>
          <p className='comment-text'>{content}</p>
          <div className='interactions-container'>
            <div className='upvote-container'>
              <button className='button-reset upvote'>
                <AiOutlinePlus />
              </button>
              <div className='upvote-count'>{score}</div>
              <button className='button-reset downvote'>
                <AiOutlineMinus />
              </button>
            </div>
            <div className='delete-edit-container'>
              {currentUser === user.username ? (
                <>
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
                </>
              ) : (
                <>
                  <button className='button-reset button-center reply-button'>
                    <FaReply />
                    Reply
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Comment;
