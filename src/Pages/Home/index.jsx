import React, { useState, useRef, useEffect } from "react";
import TitleScreen from '../../components/TitleScreen'
import LoreSection from "../../components/LoreSection";
import RacesSection from "../../components/RacesSection";
import ElementsSection from "../../components/ElementsSection";
import FeySection from "../../components/FeySection";
import song from "../../assets/AvolinaSong.wav"

import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

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


  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(song);
    audioRef.current.loop = true;
    audioRef.current.play().catch((error) => console.error("Playback error:", error));
    
    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
    
  return (
        <>
            <TitleScreen titleScreenOn={titleScreenOn} moveToLore={scrollToLore} moveToRaces={scrollToRaces} moveToElements={scrollToElements} moveToFey={scrollToFey} handleTitleScreen ={() => setTitleScreenOn(!titleScreenOn)} />
            <div className="flex w-[100%] h-[100vh] items-center justify-center text-7xl text-center cont-font hide">
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

            <button 
            onClick={toggleAudio} 
            className="fixed left-5 bottom-5 px-3 py-3 rounded-full bg-black text-white hover:bg-[#3b3b3b] "
            >
              {
                isPlaying && (<SpeakerWaveIcon className="w-9"></SpeakerWaveIcon>)
              }
              {
                !isPlaying && (<SpeakerXMarkIcon className="w-9"></SpeakerXMarkIcon>)
              }
            </button>
        </>
    )
}

export default Home