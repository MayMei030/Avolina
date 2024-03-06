import React, { useState, useRef } from "react";
import TitleScreen from '../../components/TitleScreen'
import LoreSection from "../../components/LoreSection";
import RacesSection from "../../components/RacesSection";
import ElementsSection from "../../components/ElementsSection";
import FeySection from "../../components/FeySection";

const Home = () => {
    const [titleScreenOn, setTitleScreenOn] = useState(true);

    
  const loreRef = useRef(null);
  const scrollToLore = () => {
    loreRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const racesRef = useRef(null);
  const scrollToRaces = () => {
    racesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const elemetsRef = useRef(null);
  const scrollToElements = () => {
    elemetsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  const feyRef = useRef(null);
  const scrollToFey = () => {
    feyRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
        <>
            <TitleScreen titleScreenOn={titleScreenOn} moveToLore={scrollToLore} moveToRaces={scrollToRaces} moveToElements={scrollToElements} moveToFey={scrollToFey} handleTitleScreen ={() => setTitleScreenOn(!titleScreenOn)} />
            <div className="flex w-full h-[100vh] items-center justify-center text-7xl text-center cont-font hide">
                <p className={`${titleScreenOn ? "hide-nav":"show-nav"}`}>"Welcome to Avolina, <br /> The Frozen Sphere"</p>
            </div>

            {!titleScreenOn && (
                <> 
                    <LoreSection ref={loreRef} />
                    <RacesSection ref={racesRef} />
                    <ElementsSection ref={elemetsRef} />
                    <FeySection ref={feyRef} />
                </>
            )
            }
        </>
    )
}

export default Home