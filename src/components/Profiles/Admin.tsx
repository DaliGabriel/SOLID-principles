import { AdminProps } from "../../types/User";
import UserProfile from "./Layout";

const Admin = ({ onEdit, user, onDelete }: AdminProps) => {
  return (
    <div>
      <UserProfile onEdit={onEdit} user={user}>
        <p>Role: Admin</p>
        {onDelete && user && (
          <button onClick={() => onDelete(user.id)}>Delete</button>
        )}
      </UserProfile>
    </div>
  );
};

export default Admin;
