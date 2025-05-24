import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  CheckSquare,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

function Nav() {
  const navItems = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/",
    },
    { label: "Projects", icon: <FileText size={18} />, path: "/projects" },
    { label: "Tasks", icon: <CheckSquare size={18} />, path: "/tasks" },
    { label: "Teams / Users", icon: <Users size={18} />, path: "/team-users" },
    { label: "Reports", icon: <BarChart3 size={18} />, path: "/reports" },
    { label: "Settings", icon: <Settings size={18} />, path: "/settings" },
  ];

  return (
    <div className="h-[calc(100vh-5rem)] w-[12rem] 	bg-gray-900 text-gray-300 flex flex-col p-4 gap-4">
      {navItems.map(({ label, icon, path }) => (
        <Link
          key={label}
          to={path}
          className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          {icon}
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}

export default Nav;
