import { User, UserListProps } from "../../types/User";
import Admin from "./Admin";
import Guest from "./Guest";
import Layout from "./Layout";

const List = ({ users, onDelete, onEdit }: UserListProps) => {
  const renderUserProfile = (user: User) => {
    switch (user.role) {
      case "admin":
        return <Admin user={user} onEdit={onEdit} onDelete={onDelete} />;
      case "guest":
        return <Guest user={user} />;
      default:
        return <Layout user={user} onEdit={onEdit} />;
    }
  };

  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>{renderUserProfile(user)}</div>
      ))}
    </div>
  );
};

export default List;
