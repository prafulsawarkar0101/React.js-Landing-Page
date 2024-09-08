import React from 'react'
import "./navbar.css"

export default function Navbar() {

  return (
    <>
    <div className="navbar">
    <div className="burger-menu" >
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="nav-left">
        <a href="#" className="active">Home</a>
        <a href="#">Orders</a>
        <a href="#">Integrations</a>
        <div className="dropdown">
       
            <div className="icon myDropDown">
                Tracking Page
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
            <div className="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
            </div>
        </div>
        <a href="#">Partner with Us</a>
    </div>

    <div className="nav-right">
        <div className="icon mySearchInput">
            <span className="material-icons">search</span>
            <input className="mySearch" type="text" placeholder="Search"></input>
        </div>
        <div className="icon cursorPointer">
            <span className="material-symbols-outlined">person</span>
            Account
        </div>
        <div className="icon cursorPointer">
            <span className="material-symbols-outlined">settings</span>
            Settings
        </div>
    </div>
</div>
</>
  )
}
