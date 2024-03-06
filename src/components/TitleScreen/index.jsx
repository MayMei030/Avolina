import React from "react";
import "./TitleStyle.css"
import Navbar from "../Navbar";
import {ChevronDoubleRightIcon} from "@heroicons/react/24/solid"

const TitleScreen = ({titleScreenOn, handleTitleScreen}) => {
    return (
        <div className ={`w-full flex flex-col justify-center items-center left-0`}>
            <div className="absolute object-cover bg-img bg-cover bg-center w-full h-[100vh] -z-10 overflow-hidden border-none top-0" />
            <div className={`fixed title z-30 ${titleScreenOn ? "title-on" : "title-off" }` }>
                <p className="name-in" onClick={()=>handleTitleScreen()}>Avolina</p>
            </div>

            <div>
                <Navbar titleScreenOn={titleScreenOn} />
            </div>

            <div className="fixed flex bottom-3 right-5 cursor-pointer" onClick={()=>handleTitleScreen()} >
                <p className={`cont-font text-4xl appear-cont ${titleScreenOn ? "" : "hide-cont"}`}>Continue</p>
                <ChevronDoubleRightIcon className={`w-8 ml-3 appear-cont ${titleScreenOn ? "" : "hide-cont"}`} />
            </div>
        </div>
    )
}

export default TitleScreen