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
    <div>
      <h1>Admin Home Sector</h1>
      <div>
        <h2>Create User Here</h2>
        <input
          type="text"
          name="name"
          value={newEmployee.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="lastName"
          value={newEmployee.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="position"
          value={newEmployee.position}
          onChange={handleChange}
          placeholder="Position"
        />
        <button onClick={handleSave}>Save</button>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr
                key={index}
                className={
                  employee.action === "delete" ? "text-red-500" : "text-black"
                }
              >
                <td>{employee.name}</td>
                <td>{employee.lastName}</td>
                <td>{employee.position}</td>
                <td>
                  <button
                    onClick={() => toggleDeleteAction(index)}
                    className={
                      employee.action === "delete"
                        ? "text-red-500"
                        : "text-black"
                    }
                  >
                    Delete?
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDelete}>Delete All</button>
      </div>
    </div>
  );
}

export default AdminHomeSector;
