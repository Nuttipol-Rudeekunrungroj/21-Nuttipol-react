import React from "react";
import { Link } from "react-router-dom";

function NavBarHomeOwner() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white text-lg font-semibold hover:text-gray-400 transition duration-300">Home</Link>
          <Link to="/owner" className="text-white text-lg font-semibold hover:text-gray-400 transition duration-300">Owner</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBarHomeOwner;

