import { useAppSelector } from '../../store/hooks';
import Comment from '../Comment';
import CommentBox from '../CommentBox';
import DeleteConfirmationModal from '../DeleteModal';
import '../../styles/main.css';

function App() {
  // Initialize showDeleteModal state
  const showDeleteModal = useAppSelector(
    (state) => state.deleteModal.showDeleteModal
  );

  return (
    <div className='container'>
      <Comment />
      <CommentBox />
      {showDeleteModal && <DeleteConfirmationModal />}
    </div>
  );
}

export default App;
