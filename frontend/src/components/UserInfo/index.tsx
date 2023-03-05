import data from '../../data.json';

export interface UserInfoProps {
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

function UserInfo({ user }: UserInfoProps) {
  const currentUser = data.currentUser.username;

  return (
    <div className="user-info">
      <img className="avatar" src={user.image.png} alt="avatar" />
      <span className="username">{user.username}</span>
      {currentUser === user.username ? (
        <>
          <span className="own-comment-indication">you</span>
        </>
      ) : (
        false
      )}
    </div>
  );
}

export default UserInfo;
