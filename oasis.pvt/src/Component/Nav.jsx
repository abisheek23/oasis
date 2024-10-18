import {Link, Outlet } from "react-router-dom"
function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
        <Link to="/" >Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className="m-5">CONTACT</Link>
        </li>
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
<Outlet/>
</>

    )
}
export default Navbar