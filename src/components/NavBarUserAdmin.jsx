import React from 'react'

function NavBarUserAdmin({setSector}) {
  return (
    <nav>
    <div>
    <div>
      <button onClick={()=> setSector('user')}>User Home Sector</button>
      <button onClick={()=> setSector('admin')}>Admin Home Sector</button>
    </div>
    </div>
   </nav>
  )
}

export default NavBarUserAdmin