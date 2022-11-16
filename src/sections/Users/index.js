import { useEffect, useState } from "react";

function UsersSection() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUserData(data.results));
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {userData.map((user, index) => {
            const gender = user.gender === "female";
            return (
              <li key={index} className={gender ? "bg-pink" : "bg-blue"}>
                <img src={`${user.picture.medium}`} alt={`${user.name}`} />
                <h3>
                  {user.name.title} {user.name.first} {user.name.last}
                </h3>
                <p>{user.email}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default UsersSection;
