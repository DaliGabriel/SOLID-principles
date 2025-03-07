import List from "./components/Profiles/List";
import { mockUsers } from "./components/Profiles/mockUsers";

const LiskovSubstitutionPrinciple = () => {
  
  const handleDelete = (id: number) => {
    console.log("Deleting user with id: ", id);
  };

  const handleEdit = (id: number) => {
    console.log("Editing user with id: ", id);
  };

  return (
    <div>
      <List users={mockUsers} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default LiskovSubstitutionPrinciple;
