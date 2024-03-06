import React from "react";
// import { NavLink } from "react-router-dom";

const Navbar = ({titleScreenOn}) => {
    const activeStyle = ""
    return (
        <nav className="hide cont-font">
            <ul className={`fixed flex p-0 justify-center items-center gap-10 m-0 text-[30px] top-[1%] right-[2%] ${titleScreenOn ? "hide-nav":"show-nav"}`}>
                <li className="nav-li font-bold">
                        Read
                </li>
                <li className="nav-li" >
                        Prologue
                </li>
                <li className="nav-li">
                        Races
                </li>
                <li className="nav-li">
                        Elements
                </li>
                <li className="nav-li">
                        Fey
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar