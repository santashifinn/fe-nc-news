import UserCard from "./UserCard";

const UserList = ({ users, loading }) => {
  return (
    <>
      {loading ? (
        <div className="center-loader">
          <span className="loader"></span>
        </div>
      ) : (
        <section className="user-list">
          <h2>Users</h2>
          {loading ? (
            <span className="loader"></span>
          ) : (
            <div className="user-list-display">
              {users.map((user, index) => {
                return <UserCard user={user} key={index} />;
              })}
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default UserList;
