import React, { useState, useEffect } from "react";
import ImageLoader from "./ImageLoader";

interface User {
  id: number;
  name: string;
  email: string;
}

const Plugin = () => {
  const [users, setUsers] = useState(Array<User>());
  const URL = "https://jsonplaceholder.typicode.com/users";

  async function fetchData() {
    const response = await fetch(URL);
    const json = await response.json();
    setUsers(json);
  }

  useEffect(() => {
    fetchData();
  }, [URL]);

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <ImageLoader
              src={`https://i.pravatar.cc/65?u=${user.email}`}
              alt={user.email}
            />
            <p className="title">{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Plugin;
