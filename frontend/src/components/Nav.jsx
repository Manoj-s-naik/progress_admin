import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="h-[calc(100vh-7rem)] w-64 gap-[3rem] bg-gray-900 text-gray-300 flex flex-col">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/team-users">Teams / Users</Link>
      <Link to="/reports">Reports</Link>
      <Link to="/settings">Setting</Link>
    </div>
  );
}

export default Nav;
