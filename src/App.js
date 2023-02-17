import { useState, useEffect, useMemo, useCallback } from "react";
import List from "./List";

const initialUsers = [
  { id: 1, name: "Luis" },
  { id: 2, name: "María" },
  { id: 3, name: "Juana" },
  { id: 4, name: "Martha" },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const printUsers = useCallback(() => {
    console.log("ChangedUsers", users);
  }, [users]);

  useEffect(() => {
    // console.log("App Render");
  });
  useEffect(() => {
    printUsers();
  }, [users, printUsers]);

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text };
    setUsers([...users, newUser]);
  };
  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        //console.log("process search");
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [users, search]
  );

  const handleDelete = useCallback(
    (userId) => {
      setUsers(users.filter((user) => user.id !== userId));
    },
    [users]
  );

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filteredUsers} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
