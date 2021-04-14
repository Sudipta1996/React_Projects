import React from 'react'
import { Link } from 'react-router-dom';

const Home=()=>{
    return(
        <div>
            <li className="navbar navbar-lg navbar-dark bg-dark">
                      <Link to="/Home" className="nav-link" href="#">Home</Link></li>
            <li className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <Link to="/allList" className="nav-link" href="#">Todos</Link></li>
           <li className="navbar navbar-expand-lg navbar-dark bg-dark">
                      <Link to="/add" className="nav-link" href="#">Create Todo</Link>
            </li>
            
            <h1>This is home</h1>
        </div>
    )
}
export default Home;