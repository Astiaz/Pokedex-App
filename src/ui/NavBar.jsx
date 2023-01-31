import { Link, NavLink } from "react-router-dom"

import { InputSearch } from "./components/InputSearch";

export const NavBar = () => {

  return (
    <nav style={{height: 75}} className="navbar navbar-expand-sm navbar-dark bg-primary p-2">
         <div className="container-fluid">
            <div className="navbar-nav">
                <Link className="navbar-brand" to='/'>Home</Link>
                <NavLink className={({isActive}) => `nav-item nav-link ${isActive && 'active'}`} to='/Region'>Region</NavLink>
                <NavLink className={({isActive}) => `nav-item nav-link ${isActive && 'active'}`} to='/Move'>Moves</NavLink>

            </div>
            <InputSearch/>
        </div>
    </nav>
  )
}
