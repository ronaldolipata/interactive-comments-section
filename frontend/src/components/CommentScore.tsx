import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export interface CommentScoreProps {
  score: number;
}

function CommentScore({ score }: CommentScoreProps) {
  return (
    <div className="upvote-container">
      <button className="button-reset upvote">
        <AiOutlinePlus />
      </button>
      <div className="upvote-count">{score}</div>
      <button className="button-reset downvote">
        <AiOutlineMinus />
      </button>
    </div>
  );
}

export default CommentScore;
