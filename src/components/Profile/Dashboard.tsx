import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user:any = useSelector(selectUser);
  const dateString = user.created_at.toString();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className="dashboard">
      <h1>This is dashboard</h1>
      <div className="dashboard-content">
        <p>First Name: {user.first_name}</p>
        <p>Last Name: {user.last_name}</p>
        <p>Email: {user.email}</p>
        <time id="user-data">
          Joined: {formatter.format(Date.parse(dateString))}
        </time>
      </div>
    </div>
  );
}
