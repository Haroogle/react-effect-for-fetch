import UsersListItem from "./UsersListItem";

function UserList({ userData }) {
  return (
    <ul className="users-list">
      {userData.map((user, index) => {
        const gender = user.gender === "female";
        return <UsersListItem index={index} gender={gender} user={user} />;
      })}
    </ul>
  );
}
export default UserList;
