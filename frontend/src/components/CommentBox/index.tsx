import avatarProfile from '../../assets/images/avatars/image-juliusomo.png';

function CommentBox() {
  return (
    <div className='comment-box-container comment-container'>
      <img className='avatar' src={avatarProfile} alt='avatar' />
      <textarea
        className='comment-box'
        name='comment-box'
        placeholder='Add a comment...'
        rows={5}
      ></textarea>
      <button className='button send-button'>SEND</button>
    </div>
  );
}

export default CommentBox;
