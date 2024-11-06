import React, { useState } from "react";
import NavBarUserAdmin from "../components/NavBarUserAdmin";
import AdminHomeSector from "../components/AdminHomeSector";
import UserHomeSector from "../components/UserHomeSector";

function Home() {
  const [sector, setSector] = useState("");
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
        {sector === "admin" && <AdminHomeSector />}
        {sector === "user" && <UserHomeSector />}
      </div>
    </div>
  );
}

export default Home;
