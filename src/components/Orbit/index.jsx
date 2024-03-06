import React from "react";
import FireIcon from "../../assets/Fire.png"
import HolyIcon from "../../assets/Holy.png"
import IceIcon from "../../assets/Ice.png"
import KineticIcon from "../../assets/Kinetic.png"
import NatureIcon from "../../assets/Nature.png"
import UnholyIcon from "../../assets/Unholy.png" 

import { XMarkIcon } from "@heroicons/react/24/solid";
import "./Orbit.css"

function Orbit () {
const [descMarkAct, setDescMarkAct] = React.useState(false);
const [activated, setActivated] = React.useState(false);
const [info, setInfo] = React.useState(["element-icon", "element-name", "element-desc"])

    return(
        <div className="element-sec">
        <div className="mask">
            <div className="center">
                <p>Elements</p>
            </div>
            <ul className="orbitUL">
                <li className="element-items bg-[#ea7838]">
                    <img className="element-image" src={FireIcon} alt=""/>
                    <p className="element-name bg-[#9a2707]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([FireIcon, "Fire", "Fire burns"]);
                    }}>Fire</p>
                </li>
                <li className="element-items bg-[#a4d6e3]">
                    <img className="element-image" src={IceIcon} alt="" />
                    <p className="element-name bg-[#268e8e]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([IceIcon, "Ice", "Ice is cold"]);
                    }}>Ice</p>
                </li>
                <li className="element-items bg-[#9cc928]">
                    <img className="element-image" src={NatureIcon} alt="" />
                    <p className="element-name bg-[#618805]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([NatureIcon, "Nature", "Nature is cool"]);
                    }}>Nature</p>
                </li>
                <li className="element-items bg-[#5fc1f1]">
                    <img className="element-image" src={HolyIcon} alt="" />
                    <p className="element-name bg-[#0691ba]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([HolyIcon, "Holy", " Holy shit"]);
                    }}>Holy</p>
                </li>
                <li className="element-items bg-[#b38dc1]">
                    <img className="element-image" src={UnholyIcon} alt="" />
                    <p className="element-name bg-[#682f8b]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([UnholyIcon, "Unholy", " Unholy shit"]);
                    }}>Unholy</p>
                </li>
                <li className="element-items bg-[#71c2a7]">
                    <img className="element-image" src={KineticIcon} alt="" />
                    <p className="element-name bg-[#00764f]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([KineticIcon, "Kinetic", "Kinetinc my element"]);
                    }}>Kinetic</p>
                </li>
            </ul>
        </div>

        <div className={`mark ${activated ?
            descMarkAct?
            "expanded-desc-mark"
            : "collapsed-desc-mark"
             : "closed"}`}>
            <div className="description-div">
                <div className="desc-header">
                    <img className="el-icon bg-white p-2 rounded-full" src={info[0]} alt={info[0]} />
                    <p className="element-title cont-font text-5xl">{info[1]}</p>
                    <XMarkIcon className="w-10" onClick={()=>{
                        setDescMarkAct(false)
                    }}/>
                </div>
                <div className="element-description lore-text">{info[2]}</div>
            </div>
        </div>
        </div>
    )
}

export default Orbit