import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
       
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.AboutText}</a>
        </li>
       
      </ul>
     {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>  */}

      {/* only for understandin some logic */}
      <div className="d-flex">
          <div className="bg-primary rounded mx-1" onClick={()=>{props.togglemode('primary')}} style={{height: '30px',width: '30px',cursor: 'pointer'}}></div>
          <div className="bg-success rounded mx-1" onClick={()=>{props.togglemode('success')}} style={{height: '30px',width: '30px',cursor: 'pointer'}}></div>
         <div className="bg-warning rounded mx-1" onClick={()=>{props.togglemode('warning')}} style={{height: '30px',width: '30px',cursor: 'pointer'}}></div>
          <div className="bg-danger rounded mx- 1" onClick={()=>{props.togglemode('danger')}} style={{height: '30px',width: '30px',cursor: 'pointer'}}></div>
      </div>

      <div id = 'div'className={` form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input mx-1" style={{cursor: 'pointer'}} onClick={props.togglemode} type="checkbox"  role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" style={{cursor: 'pointer'}} htmlFor="flexSwitchCheckDefault">Enable dark</label>
      </div>
    </div>
  </div>
</nav>
    
  )
}

Navbar.prototypes={AboutText: PropTypes.string,
            title: PropTypes.string } //props type string 

// Navbar.defaultprops ={
//     title: 'textutils',
//     AboutText: 'AboutText here'
// };     // defaultprops unfortunatly forget set the propstypes and value so u can use 