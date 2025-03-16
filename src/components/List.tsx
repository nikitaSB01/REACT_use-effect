import { UserShort } from "../types";

interface ListProps {
  users: UserShort[];
  selectedId?: number;
  onSelect: (user: UserShort) => void;
}

const List = ({ users, selectedId, onSelect }: ListProps) => {
  return (
    <div className="list">
      {users.map((user) => (
        <div
          key={user.id}
          className={`list-item ${user.id === selectedId ? "active" : ""}`}
          onClick={() => onSelect(user)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default List;
