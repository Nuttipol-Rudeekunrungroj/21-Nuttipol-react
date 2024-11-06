import React from 'react'

function UserHomeSector({employees}) {
  return (
    <div>
      <h1>User Home Sector</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.lastName}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
  );
}

export default UserHomeSector