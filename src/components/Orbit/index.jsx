import React from "react";
import FireIcon from "../../assets/FireIcon.webp"
import HolyIcon from "../../assets/HolyIcon.webp"
import IceIcon from "../../assets/IceIcon.webp"
import KineticIcon from "../../assets/KineticIcon.webp"
import NatureIcon from "../../assets/NatureIcon.webp"
import UnholyIcon from "../../assets/UnholyIcon.webp" 

import openedEye from "../../assets/icons/openedEye.png"
import closedEye from "../../assets/icons/closedEye.png"

import { XMarkIcon } from "@heroicons/react/24/solid";
import "./Orbit.css"

function Orbit () {
const [descMarkAct, setDescMarkAct] = React.useState(false);
const [activated, setActivated] = React.useState(false);
const [info, setInfo] = React.useState(["element-icon", "element-name", "element-desc"])

const fireDes = "To cast Fire fey spells you must focus it until it feels as if you are burning.  Once done, using a wand or staff, you are able to direct the flow of your fey through it with the aid of the Feystone inside of the weapon. If your weapon of choice is a melee weapon then the focus of your fey doesn't turn into a spell to be cast out, but to be an enhancement of sorts to cover the lethal component to aid in its damaging capabilities. Can and will cause fire to soft fabric like clothing.";
const iceDes = "While usiong Ice spells you will cause freezing damage and have a chance to slow your opponents movements down. First you focus your fey until it feels as if you are freezing. The air around you will start to condense and it will appear to give you a misty aura. You will feel cold and slower, but it is only a feeling. Ice magic has a natural immunity to nature magic as is shown by the weather here on Avolina. Ice and snow tend to overtake the land and wither all the nature down. However, Ice has a weakness to Fire.";
const natureDes = "Fey allows users to manipulate the elements of the planet itself as it's weapon. The ground, the grass, the trees, the wind. It's known to be the hardest to start learning and the hardest to master. To cast you must focus your fey. It will feel as if the air around you is lifting you from the ground. The plants around you will start to stand up straighter as if they were being rejuvenated with fresh energy. Nature magic has a resistance to fire magic. Able to brush away a flame withe the flick of the wind or smother it with earth itself. Hoever, it does have a natural weakness to Ice. Ice can shear straight through the wind and cause the trees and grass to whither.";
const kineticDes = "Once you've attained the ability to cast Divine Magic, all other magic becomes second nature. Kinetic is the ability to not only move objects around with ones mind, but also to teleport great distances as well as telepathy.";
const conjurationDes = "Conjuration is a source of great power. While using it, you sacrifice the ability to cast your basic magics. You are able to create creatures from the 3 elemental magics, Nature, Fire and Ice. Anything from birds to golems.";
const necromancyDes = "Necromancy is the opposite of Conjuration. Instead of creating creatures with your elemental magics, you instead can raise the dead to do your bidding. All dead animals and even people are at your will. There were even rumors of Necromancy being able to control the living";

    return(
        <div className="element-sec">
        <div className="mask">
            {
                descMarkAct && ( <div className="center opened-eye"></div> )
            }
            {
                !descMarkAct && ( <div className="center closed-eye"></div> )
            }

            {/* <div className={`center ${descMarkAct ? "opened-eye":"closed-eye"}`}> */}
                {/* <p>Elements</p> */}
                {/* <div className={`center-thing ${activated? "opened-eye":"closed-eye"}`}>
                </div> */}
                {/* <img className="center-thing" src={descMarkAct ? openedEye : closedEye} alt="" /> */}
            {/* </div> */}
            <ul className="orbitUL">
                <li className="element-items bg-[#ea7838]">
                    <img className="element-image" src={FireIcon} alt=""/>
                    <p className="element-name bg-[#9a2707]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([FireIcon, "Fire", fireDes]);
                    }}>Fire</p>
                </li>
                <li className="element-items bg-[#a4d6e3]">
                    <img className="element-image" src={IceIcon} alt="" />
                    <p className="element-name bg-[#268e8e]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([IceIcon, "Ice", iceDes]);
                    }}>Ice</p>
                </li>
                <li className="element-items bg-[#9cc928]">
                    <img className="element-image" src={NatureIcon} alt="" />
                    <p className="element-name bg-[#618805]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([NatureIcon, "Nature", natureDes]);
                    }}>Nature</p>
                </li>
                <li className="element-items bg-[#5fc1f1]">
                    <img className="element-image" src={HolyIcon} alt="" />
                    <p className="element-name bg-[#0691ba]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([HolyIcon, "Conjuration", conjurationDes]);
                    }}>Conjuration</p>
                </li>
                <li className="element-items bg-[#b38dc1]">
                    <img className="element-image" src={UnholyIcon} alt="" />
                    <p className="element-name bg-[#682f8b]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([UnholyIcon, "Necromancy", necromancyDes]);
                    }}>Necromancy</p>
                </li>
                <li className="element-items bg-[#71c2a7]">
                    <img className="element-image" src={KineticIcon} alt="" />
                    <p className="element-name bg-[#00764f]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([KineticIcon, "Kinetic", kineticDes]);
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