import React from "react";
import { Link } from 'react-router-dom';


const NavBar=({card})=>{
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="img/download.jpg" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Single">Single</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Admin">Admin</Link>
                    </li>
                    <li className="nav-item">
                        {/*9 belezim */}
                        <Link className="nav-link" to="/Card">Card({card.length})</Link>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
        </>
    )
}
export default NavBar;
