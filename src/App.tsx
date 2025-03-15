import { useEffect, useState } from "react";
import List from "./components/List";
import Details from "./components/Details";
import { UserShort } from "./types";

function App() {
  const [users, setUsers] = useState<UserShort[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserShort | null>(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <List
        users={users}
        onSelect={setSelectedUser}
        selectedId={selectedUser?.id}
      />
      {selectedUser && <Details info={selectedUser} />}
    </div>
  );
}

export default App;
