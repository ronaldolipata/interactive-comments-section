import { useState, ChangeEvent } from 'react';
import avatarProfile from '../../assets/images/avatars/image-juliusomo.png';

function CommentBox() {
  const [textarea, setTextArea] = useState('');

  function textAreaHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setTextArea(e.target.value);
  }

  async function postComment() {
    try {
      const response = await fetch(
        'http://localhost:4000/api/v1/interactions/comment',
        {
          method: 'POST',
          body: JSON.stringify({
            type: 'comment',
            content: textarea,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='comment-box-container comment-container'>
      <img className='avatar' src={avatarProfile} alt='avatar' />
      <textarea
        onChange={textAreaHandler}
        className='comment-box'
        name='comment-box'
        placeholder='Add a comment...'
        rows={5}
      ></textarea>
      <button onClick={postComment} className='button send-button'>
        SEND
      </button>
    </div>
  );
}

export default CommentBox;
