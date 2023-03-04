import { FaReply } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';
import { RiPencilFill } from 'react-icons/ri';

export interface CommentActionProps {
  isOwnComment: boolean;
  onDelete: () => void;
  onEdit: () => void;
}

function CommentActions({
  isOwnComment,
  onDelete,
  onEdit,
}: CommentActionProps) {
  return (
    <div className="delete-edit-reply-container">
      {isOwnComment ? (
        <>
          <button
            onClick={onDelete}
            className="button-reset button-center delete-button"
          >
            <IoMdTrash className="delete-icon" />
            Delete
          </button>
          <button
            onClick={onEdit}
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
