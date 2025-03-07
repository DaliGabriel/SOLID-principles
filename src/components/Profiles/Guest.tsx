import { GuestProps } from "../../types/User";
import Layout from "./Layout";

const Guest = ({ user }: GuestProps) => {
  return (
    <Layout user={user}>
      <p>Role: Guest</p>
    </Layout>
  );
};

export default Guest;
