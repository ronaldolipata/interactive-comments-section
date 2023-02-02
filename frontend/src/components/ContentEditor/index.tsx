import avatarProfile from '../../assets/images/avatars/image-juliusomo.png';

function ContentEditor() {
  return (
    <div className='textEditorContainer'>
      <img className='avatarTextEditor' src={avatarProfile} alt='avatar' />
      <textarea
        className='inputTextEditor'
        name='textEditor'
        placeholder='Add a comment...'
        cols={50}
        rows={5}
      ></textarea>
      <button className='button'>SEND</button>
    </div>
  );
}

export default ContentEditor;
