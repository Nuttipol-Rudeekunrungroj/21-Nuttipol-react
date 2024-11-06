import React, { useState } from "react";

function AdminHomeSector({ employees, setEmployees }) {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    lastName: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSave = () => {
    setEmployees([...employees, { ...newEmployee, action: "" }]);
    setNewEmployee({ name: "", lastName: "", position: "" });
  };

  const toggleDeleteAction = (index) => {
    const updatedEmployees = employees.map((employee, i) =>
      i === index
        ? { ...employee, action: employee.action === "delete" ? "" : "delete" }
        : employee
    );
    setEmployees(updatedEmployees);
  };

  const handleDelete = () => {
    setEmployees(employees.filter((employee) => employee.action !== "delete"));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Home Sector</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-semibold mb-4">Create User Here</h2>
        <div className="grid gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={newEmployee.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="lastName"
            value={newEmployee.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="position"
            value={newEmployee.position}
            onChange={handleChange}
            placeholder="Position"
            className="border p-2 rounded"
          />
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Save
          </button>
        </div>

        <table className="w-full table-auto mb-4">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Position</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className={employee.action === "delete" ? "bg-red-100" : ""}>
                <td className="border px-4 py-2">{employee.name}</td>
                <td className="border px-4 py-2">{employee.lastName}</td>
                <td className="border px-4 py-2">{employee.position}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    onClick={() => toggleDeleteAction(index)}
                    className={
                      employee.action === "delete"
                        ? "bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300"
                        : "bg-gray-200 text-black px-2 py-1 rounded hover:bg-gray-300 transition duration-300"
                    }
                  >
                    Delete?
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
          Delete All
        </button>
      </div>
    </div>
  );
}

export default AdminHomeSector;

