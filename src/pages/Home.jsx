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


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NavBarUserAdmin from "../components/NavBarUserAdmin";
// import AdminHomeSector from "../components/AdminHomeSector";
// import UserHomeSector from "../components/UserHomeSector";

// function Home() {
//   const [sector, setSector] = useState("");
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true); // Added loading state

//   const API_URL = "https://jsd5-mock-backend.onrender.com/members"; // Use your API URL

//   const fetchEmployees = async () => {
//     setLoading(true); // Start loading
//     try {
//       const response = await axios.get(API_URL);
//       setEmployees(response.data);
//       localStorage.setItem("employees", JSON.stringify(response.data)); // Cache data
//     } catch (error) {
//       console.error("Error fetching employees from API:", error);
//       const cachedEmployees = localStorage.getItem("employees");
//       if (cachedEmployees) {
//         setEmployees(JSON.parse(cachedEmployees));
//       }
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const addEmployee = async (newEmployee) => {
//     try {
//       await axios.post(API_URL, newEmployee);
//       fetchEmployees(); // Refetch data after adding
//     } catch (error) {
//       console.error("Error adding new employee:", error);
//     }
//   };

//   const deleteEmployee = async (id) => {
//     try {
//       await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
//       fetchEmployees(); // Refetch data after deleting
//     } catch (error) {
//       console.error("Error deleting employee:", error);
//     }
//   };

//   const updateEmployee = async (id, updatedEmployee) => {
//     try {
//       await axios.put(API_URL, { id, ...updatedEmployee });
//       fetchEmployees(); // Refetch data after updating
//     } catch (error) {
//       console.error("Error updating employee:", error);
//     }
//   };

//   const header = () => {
//     if (sector === "admin") {
//       return "Home - Admin Sector";
//     }
//     if (sector === "user") {
//       return "Home - User Sector";
//     }
//     return "React - Assessment";
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
//       <h1 className="text-3xl font-bold mb-4 text-center">Generation Thailand</h1>
//       <h1 className="text-xl font-semibold mb-6 text-center">{header()}</h1>
//       <NavBarUserAdmin setSector={setSector} className="mb-6" />
//       <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="mt-4">
//             {sector === "admin" && (
//               <AdminHomeSector
//                 employees={employees}
//                 addEmployee={addEmployee}
//                 deleteEmployee={deleteEmployee}
//                 updateEmployee={updateEmployee}
//               />
//             )}
//             {sector === "user" && <UserHomeSector employees={employees} />}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;







