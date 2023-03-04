import { useAppSelector } from '../../store/hooks';
import Comment from '../Comment';
import CommentBox from '../CommentBox';
import DeleteConfirmationModal from '../DeleteModal';
import '../../styles/main.css';
import { useDispatch } from 'react-redux';
import { initializeComments } from '../../store/features/comments/commentsSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => dispatch(initializeComments(data.comments)));
  }, []);

  // Initialize showDeleteModal state
  const showDeleteModal = useAppSelector(
    (state) => state.deleteModal.showDeleteModal
  );

  const comments = useAppSelector((state) => state.commentsSlice.comments);

  return (
    <div className="container">
      <Comment />
      <CommentBox />
      {showDeleteModal && <DeleteConfirmationModal />}
    </div>
  );
}

export default App;
