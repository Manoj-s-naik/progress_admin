import React from "react";
import { Routes, Route } from "react-router-dom";
import EmployeList from "./components/EmployeList";
import EmployeDetails from "./components/EmployeDetails";

import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
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
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route path="/employes" element={<EmployeList />} />
      <Route path="/employes/:id" element={<EmployeDetails />} />
      
    </Routes>
  );
}

export default App;
