import React from "react";
// import { NavLink } from "react-router-dom";

const Navbar = ({titleScreenOn, moveToLore, moveToRaces, moveToElements, moveToFey}) => {
    const activeStyle = ""
    return (
        <nav className="hide cont-font">
            <ul className={`fixed flex p-0 justify-center items-center gap-10 m-0 text-[30px] top-[1%] right-[2%] ${titleScreenOn ? "hide-nav":"show-nav"}`}>

                <li className="nav-li cursor-pointer" onClick={moveToLore}>
                        Prologue
                </li>
                <li className="nav-li cursor-pointer" onClick={moveToRaces}>
                        Races
                </li>
                <li className="nav-li cursor-pointer" onClick={moveToElements}>
                        Elements
                </li>
                <li className="nav-li cursor-pointer" onClick={moveToFey}>
                        Fey
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar