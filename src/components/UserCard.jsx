const UserCard = ({ user }) => {
  return (
    <section className="user-card">
      <div className="user-card-text">
        <h2>{user.username}</h2>
        <p>{user.name}</p>
      </div>
      <div className="user-card-image">
        <img src={user.avatar_url} alt={user.username} />
      </div>
    </section>
  );
};

export default UserCard;
