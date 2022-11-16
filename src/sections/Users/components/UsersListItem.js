function UsersListItem({ gender, index, user }) {
  return (
    <li key={index} className={gender ? "bg-pink" : "bg-blue"}>
      <img src={`${user.picture.medium}`} alt={`${user.name}`} />
      <h3>
        {Object.values(user.name).map((value) => {
          return [value + " "];
        })}
      </h3>
      <p>{user.email}</p>
    </li>
  );
}
export default UsersListItem;
