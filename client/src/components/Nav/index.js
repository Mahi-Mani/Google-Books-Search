import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

function Nav(props) {
 return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg p-3 mb-5 bg-dark rounded">
     <Link className="navbar-brand" to="/">
       Google Book Search
     </Link>
     <div>
       <ul className="navbar-nav">
         <li className="nav-item">
           <Link
             to="/"
             className={
               window.location.pathname === "/" || window.location.pathname === "/home"
                 ? "nav-link active"
                 : "nav-link"
             }
           >
             Home
           </Link>
         </li>
         <li className="nav-item">
           <Link
             to="/saved"
             onClick={props.savedBooks}
             className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
           >
             Saved
           </Link>
         </li>
       </ul>
     </div>
   </nav>
 );
}

export default Nav;