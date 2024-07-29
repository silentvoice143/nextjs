import React from "react";

type User = {
  id: number;
  name: string;
};
const User = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();
  return (
    <div>
      <h1>User</h1>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.id}-{item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
