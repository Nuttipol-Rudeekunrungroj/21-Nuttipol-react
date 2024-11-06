import React from "react";
import { Link } from "react-router-dom";

function NavBarHomeOwner() {
  return (
    <nav>
      <div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/owner">Owner</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBarHomeOwner;
