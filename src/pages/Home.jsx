import React, { useState, useEffect } from "react";
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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Generation Thailand</h1>
      <h1 className="text-xl font-semibold mb-6 text-center">{header()}</h1>
      <NavBarUserAdmin setSector={setSector} className="mb-6" />
      <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
        <div className="mt-4">
          {sector === "admin" && (
            <AdminHomeSector employees={employees} setEmployees={setEmployees} />
          )}
          {sector === "user" && <UserHomeSector employees={employees} />}
        </div>
      </div>
    </div>
  );
}

export default Home;

