import shadowElvesimg from "../../assets/Images/shadowElve.jpg"
import elvesimg from "../../assets/Images/Elves.jpg"
import placeHolder from "../../assets/Images/race-placeholder.png"

import RaceElement from "../RaceElement"
import { forwardRef } from "react"

const races = [
    {
        raceIndex: 1,
        name:"Shadow Elves",
        description: "Once a peaceful people. Wronged by the actions of 2 men. They swore to never trust anyone besides their own again. Leaving the surface world to go into hiding underground and spying on the world above until the day they deem right.",
        image: shadowElvesimg,
    },
    {   
        raceIndex: 2,
        name:"Gnomes",
        description:"Natural born thieves. They go around stealing bits and bobs they find in other cities. Grabbing what they can for the elder ones to build their contraptions and weapons. They are also building a secret kingdom under the ocean surface. Crossing the land to the ocean, they have come across the Yaksha several times. At first ignoring them, they soon discovered from sneaking around their home disguised as children with their faces covered, the Yaksha are guarding a rare metal. Feystone. The gnomes had very little and used it to bring the Undersea Kingdom door guard to life. What they have in their possession is so much, the gnomes could create a city of living automatons! They must have it. No matter the cost!",
        image: elvesimg,
    },
    {
        raceIndex: 3,
        name:"Yaksha",
        description: "They are a peaceful people who live near the ocean. The gnomes have gone to war with them over the years for the capture of their Gods lifestone. The Gnomes have called it, \"Fey Stone\". They don't want the trouble from anyone. They just want to be at peace. But they will not let their Gods treasure be taken from them. After a long a dreadful fight with the Gnomes, they eventually surrendered and explained to the Gnomes why they didn't want to give up the stone. The Gnomes were heart broken from their hasty assumptions and swore they would protect the Yaksha for as long as they live.",
        image: placeHolder,
    },
    {   
        raceIndex: 4,
        name:"Torimei",
        description:"Avian creatures who have become sentient. Half human, half owl like. Big round eyes, brown feathers and hair. Thin bodies with large talons. Mostly woman with few men.",
        image: placeHolder,
    },
    {   
        raceIndex: 5,
        name:"Warforged",
        description:"The Warforged are Gnomes who have used Heort Stone to give all their life force into a Soul Stone. The Soul Stone inside the Warforged gives life to the automaton. However, those gnomes who have done this lose their memory of their life before. Now roaming through life trying to find a purpose, they go off in search of answers. Who are they? Why are they here? There are very few Warforged as the Gnomes discourage anyone who thinks of the idea. They warn them of death and your soul being trapped forever. ",
        image: placeHolder,
    },
    {
        raceIndex: 6,
        name: "Sea Elves",
        description: "Sea Elves, also known as Incubus are a strange people. They are able to change their sex at will and use this to their advantage when making offspring. They can't make offspring with each other. Instead, they kidnap the gnomes on the shore and lead them down into the depths of the sea where they keep them in a cavern. They mate with the men as females so they can use their seed as the catalyst for the incubation process and then when they have changed the seeds from the male gnomes into Sea Elf eggs they mate with the Gnome females to impregnate and bear their children.",
        image: placeHolder,
    },
    {
        raceIndex: 7,
        name: "Snow Elves",
        description: "At heart, a peaceful people. They are infatuated by the other non-elf races. That's not what's most interiguing about them however. It is said that when one sees a Snow Elf, they are graced with finding ones true love. No one is sure how this legend was started, but it is said to be older than Fey. If this is true, that would make Snow Elves the eldest race known to Avolina. It also causes some debate on whether or not we were indeed created by Fey as is put foward by the elders. One thing is for certain though, if you are blessed by the sight of a Snow Elf, it is best to remain at a distance. If you find yourself getting too close, you will never be seen again.",
        image: placeHolder,
    },
    {
        raceIndex: 8,
        name: "Human race",
        description: "Mostly a kind people. Able to get along and befriend any others easily with their charm. This is a blessing and a curse. While most are kind, some have done unspeakable evils to the world and it's other inhabitants.",
        image: placeHolder,
    },
    
]

const RacesSection = ({}, ref) => {
    return (
        <div className="w-[100%] flex justify-center" ref={ref}>
            <div  className="flex flex-col w-[90vw] justify-center items-center text-center gap-[10%]">
                <p className="cont-font text-6xl mb-20">Races</p>

                {
                    races.map((race, index)=>(
                        <RaceElement key={index} rIndex={race.raceIndex} name={race.name} description={race.description} image={race.image}/>
                    ))
                }
            </div>
        </div>
    )
}

export default forwardRef(RacesSection)