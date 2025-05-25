import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import TaskPage from "./TaskPage";
import Reports from "./Reports";
import TeamsUsers from "./TeamsUsers";
import Setting from "./Setting";
function MainConten() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full overflow-auto">
      {/* Main content */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/team-users" element={<TeamsUsers />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default MainConten;
