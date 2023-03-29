import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user:any = useSelector(selectUser);
  

  return (
    <div className="dashboard">
      <h1>This is dashboard</h1>
      <h1>{user.username}</h1>
    </div>
  );
}
