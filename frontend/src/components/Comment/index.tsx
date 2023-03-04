import data from '../../data.json';
import { useAppDispatch } from '../../store/hooks';
import { show } from '../../store/features/delete/deleteModalSlice';
import CommentActions from '../CommentActions';
import CommentScore from '../CommentScore';
import UserInfo from '../UserInfo';

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
        // TODO: key={id} should be in the top level
        // instead of separating comment to its replies we should combine them
        <>
          <div key={id} className="comment-container">
            <div className="comment-info">
              <UserInfo user={user} />
              <span className="comment-date">{createdAt}</span>
            </div>
            <p className="comment-text">{content}</p>
            <CommentScore score={score} />
            {/* TODO: much better if redux will handle this event. */}
            <CommentActions
              isOwnComment={currentUser === user.username}
              onEdit={onClickEditHandler}
              onDelete={onClickDeleteHandler}
            />
          </div>
          <div className="replies-container">
            {replies.map(({ id, content, createdAt, replyingTo, user }) => (
              <div
                key={id}
                className="comment-container reply-commment-container"
              >
                <div className="comment-info">
                  <UserInfo user={user} />
                  <span className="comment-date">{createdAt}</span>
                </div>
                <p className="comment-text">
                  <span className="replyingTo">@{replyingTo}</span>
                  {content}
                </p>
                <CommentScore score={score} />
                <CommentActions
                  isOwnComment={currentUser === user.username}
                  onEdit={onClickEditHandler}
                  onDelete={onClickDeleteHandler}
                />
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
}

export default Comment;
