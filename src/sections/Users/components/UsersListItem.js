function UsersListItem({ gender, index, user }) {
  return (
    <li key={index} className={gender ? "bg-pink" : "bg-blue"}>
      <img src={`${user.picture.medium}`} alt={`${user.name}`} />
      <h3>
        {user.name.title} {user.name.first} {user.name.last}
      </h3>
      <p>{user.email}</p>
    </li>
  );
}
export default UsersListItem;
