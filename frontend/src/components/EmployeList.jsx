import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EmployeList() {
  const [employes, setEmployes] = useState([]);

  const employeInformationFetcher = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/user");
      const data = await response.json();
      setEmployes(data.user);
      console.log(data.user);
    } catch (error) {
      console.error("Failed to fetch employee data:", error);
    }
  };

  useEffect(() => {
    employeInformationFetcher();
  }, []);

  return (
    <>
      {employes.length === 0 ? (
        <p>employe list is empty</p>
      ) : (
        <div>
          <div>Users:</div>
          <ul>
            {employes.map((employe) => (
              <li key={employe._id}>
                <Link to={`/employes/${employe._id}`}>{employe.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default EmployeList;
