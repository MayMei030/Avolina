import React from "react";

import HolyIcon from "../../assets/elements/conjure_circle.png"
import FireIcon from "../../assets/elements/fire_circle.png"
import IceIcon from "../../assets/elements/ice_circle.png"
import KineticIcon from "../../assets/elements/kinetic_circle.png"
import NatureIcon from "../../assets/elements/nature_circle.png"
import UnholyIcon from "../../assets/elements/necromancy_circle.png" 

import openedEye from "../../assets/icons/openedEye.png"
import closedEye from "../../assets/icons/closedEye.png"

import { XMarkIcon } from "@heroicons/react/24/solid";
import "./Orbit.css"

function Orbit () {
const [descMarkAct, setDescMarkAct] = React.useState(false);
const [activated, setActivated] = React.useState(false);
const [info, setInfo] = React.useState(["element-icon", "element-name", "element-desc"])

const fireDes = "To cast fire, you must focus your fey until it feels as if you are burning.  Once done, using a wand or staff, you are able to direct the flow of your fey through it with the aid of the Feystone inside of the weapon. If your weapon of choice is a melee weapon then the focus of your fey doesn't turn into a spell to be cast out, but to be an enhancement of sorts to cover the lethal component to aid in its damaging capabilities. Can and will cause fire to soft fabric like clothing. Fire is considered the default fey to cast as it's the easiest to start up, but fire doesn't have any additional effects besides setting fire to anything flammable. It also has a resistance to Ice magic. Any slowing effects what would happen due to Ice magic is cancelled out. However, it has a natural weakness to nature magic because it can effectively smother your flame out.";
const iceDes = "While usiong Ice spells you will cause freezing damage and have a chance to slow your opponents movements down. First you focus your fey until it feels as if you are freezing. The air around you will start to condense and it will appear to give you a misty aura. You will feel cold and slower, but it is only a feeling. Ice magic has a natural immunity to nature magic as is shown by the weather here on Avolina. Ice and snow tend to overtake the land and wither all the nature down. However, Ice has a weakness to Fire.";
const natureDes = "Fey allows users to manipulate the elements of the planet itself as it's weapon. The ground, the grass, the trees, the wind. It's known to be the hardest to start learning and the hardest to master. To cast you must focus your fey. It will feel as if the air around you is lifting you from the ground. The plants around you will start to stand up straighter as if they were being rejuvenated with fresh energy. Nature magic has a resistance to fire magic. Able to brush away a flame withe the flick of the wind or smother it with earth itself. Hoever, it does have a natural weakness to Ice. Ice can shear straight through the wind and cause the trees and grass to whither.";
const kineticDes = "Kinetic is now the new base magic for casting spells. It's the source of which your element surrounds to be cast out. Kinetic is the ability to not only move objects around with ones mind, but also to teleport great distances as well as telepathy.";
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

            <ul className="orbitUL">
                <li className="element-items bg-[#c82504]">
                    <img className="element-image" src={FireIcon} alt=""/>
                    <p className="element-name bg-[#c82504]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([FireIcon, "Fire", fireDes]);
                    }}>Fire</p>
                </li>
                <li className="element-items bg-[#a4d6e3]">
                    <img className="element-image" src={IceIcon} alt="" />
                    <p className="element-name bg-[#a4d6e3]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([IceIcon, "Ice", iceDes]);
                    }}>Ice</p>
                </li>
                <li className="element-items bg-[#60a75b]">
                    <img className="element-image" src={NatureIcon} alt="" />
                    <p className="element-name bg-[#60a75b]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([NatureIcon, "Nature", natureDes]);
                    }}>Nature</p>
                </li>
                <li className="element-items bg-[#f39a3b]">
                    <img className="element-image" src={HolyIcon} alt="" />
                    <p className="element-name bg-[#f58f21]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([HolyIcon, "Conjuration", conjurationDes]);
                    }}>Conjuration</p>
                </li>
                <li className="element-items bg-[#323232]">
                    <img className="element-image" src={UnholyIcon} alt="" />
                    <p className="element-name bg-[#323232]" onClick={()=>{
                        setDescMarkAct (true);
                        setActivated(true)
                        setInfo ([UnholyIcon, "Necromancy", necromancyDes]);
                    }}>Necromancy</p>
                </li>
                <li className="element-items bg-[#7c3877]">
                    <img className="element-image" src={KineticIcon} alt="" />
                    <p className="element-name bg-[#7c3877]" onClick={()=>{
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
                    <img className="el-icon bg-white p-[1px] rounded-full" src={info[0]} alt={info[0]} />
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