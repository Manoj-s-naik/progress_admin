import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployeList from "./components/EmployeList";
import EmployeDetails from "./components/EmployeDetails";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import TaskPage from "./components/TaskPage";
import Reports from "./components/Reports";
import Projects from "./components/Projects";
import TeamsUsers from "./components/TeamsUsers";
import Setting from "./components/Setting";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employes" element={<EmployeList />} />
      <Route path="/employes/:id" element={<EmployeDetails />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<TaskPage />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/team-users" element={<TeamsUsers />} />
      <Route path="/settings" element={<Setting />} />
    </Routes>
  );
}

export default App;
