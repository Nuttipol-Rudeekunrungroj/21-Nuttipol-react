import React, { useState,useEffect } from "react";
import NavBarUserAdmin from "../components/NavBarUserAdmin";
import AdminHomeSector from "../components/AdminHomeSector";
import UserHomeSector from "../components/UserHomeSector";

function Home() {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees");
    if (savedEmployees) {
      try {
        setEmployees(JSON.parse(savedEmployees));
      } catch (error) {
        console.error("Error parsing tasks from localStorage:", error);
        setEmployees([]); // Fallback to an empty array if parsing fails
      }
    }
    setIsInitialLoad(false); // Mark initial load as complete
  }, []);
 

  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem("employees", JSON.stringify(employees));
    }
  }, [employees, isInitialLoad]);

  const header = () => {
    if (sector === "admin") {
      return "Home - Admin Sector";
    }
    if (sector === "user") {
      return "Home - User Sector";
    }
    return "React - Assessment";
  };
  return (
    <div>
      <h1>Generation Thailand</h1>
      <h1>{header()}</h1>
      <NavBarUserAdmin setSector={setSector} />
      <div>
      <div>
        {sector === "admin" && (<AdminHomeSector employees={employees} setEmployees={setEmployees} /> )}
        {sector === "user" && <UserHomeSector employees={employees} />}
      </div>
      </div>
    </div>
  );
}

export default Home;
