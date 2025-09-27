import { Route, Routes } from "react-router-dom";
import EmployeDetails from "./components/EmployeDetails";
import EmployeList from "./components/EmployeList";

import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup";

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
