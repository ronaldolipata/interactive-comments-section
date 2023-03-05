import { FaReply } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';
import { RiPencilFill } from 'react-icons/ri';

import { useAppDispatch } from '../store/hooks';
import { show } from '../store/features/delete/deleteModalSlice';

export interface CommentActionProps {
  isOwnComment: boolean;
}

function CommentActions({ isOwnComment }: CommentActionProps) {
  // Initialize dispatch from useAppDispatch hook
  const dispatch = useAppDispatch();

  // Pass the action to dispatch to show the modal
  function handleCommentDelete() {
    dispatch(show(true));
  }

  // TO DO
  // Pass true value to show the modal
  function handleCommentEdit() {}

  return (
    <div className="delete-edit-reply-container">
      {isOwnComment ? (
        <>
          <button
            onClick={handleCommentDelete}
            className="button-reset button-center delete-button"
          >
            <IoMdTrash className="delete-icon" />
            Delete
          </button>
          <button
            onClick={handleCommentEdit}
            className="button-reset button-center edit-button"
          >
            <RiPencilFill className="edit-icon" />
            Edit
          </button>
        </>
      ) : (
        <>
          <button className="button-reset button-center reply-button">
            <FaReply />
            Reply
          </button>
        </>
      )}
    </div>
  );
}

export default CommentActions;
