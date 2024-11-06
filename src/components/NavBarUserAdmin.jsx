import React from 'react';

function NavBarUserAdmin({ setSector }) {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center md:justify-between items-center">
        <div className="flex space-x-4">
          <button 
            onClick={() => setSector('user')} 
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
          >
            User Home Sector
          </button>
          <button 
            onClick={() => setSector('admin')} 
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
          >
            Admin Home Sector
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBarUserAdmin;
