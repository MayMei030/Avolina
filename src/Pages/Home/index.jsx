import React, { useState } from "react";
import TitleScreen from '../../components/TitleScreen'
import LoreSection from "../../components/LoreSection";
import RacesSection from "../../components/RacesSection";
import ElementsSection from "../../components/ElementsSection";
import FeySection from "../../components/FeySection";

const Home = () => {
    const [titleScreenOn, setTitleScreenOn] = useState(true);

    return (
        <>
            <TitleScreen titleScreenOn={titleScreenOn} handleTitleScreen ={() => setTitleScreenOn(!titleScreenOn)} />
            <div className="flex w-full h-[100vh] items-center justify-center text-7xl text-center cont-font hide">
                <p className={`${titleScreenOn ? "hide-nav":"show-nav"}`}>"Welcome to Avolina, <br /> The Frozen Sphere"</p>
            </div>

            {!titleScreenOn && (
                <> 
                    <LoreSection />
                    <RacesSection />
                    <ElementsSection />
                    <FeySection />
                </>
            )
            }
        </>
    )
}

export default Home