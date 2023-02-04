import { useSelector } from 'react-redux';
import { State } from '../../state';
import Comment from '../Comment';
import CommentBox from '../CommentBox';
import DeleteConfirmationModal from '../DeleteModal';
import '../../styles/main.css';

function App() {
  // Initialize deleteModalStatus state
  const deleteModalStatus = useSelector((state: State) => state.deleteModal);

  return (
    <div className='container'>
      <Comment />
      <CommentBox />
      {deleteModalStatus && <DeleteConfirmationModal />}
    </div>
  );
}

export default App;
