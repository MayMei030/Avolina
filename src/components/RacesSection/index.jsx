import shadowElvesimg from "../../assets/Images/shadowElve.jpg"
import elvesimg from "../../assets/Images/Elves.jpg"

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
        name:"Shadow Elves",
        description: "Once a peaceful people. Wronged by the actions of 2 men. They swore to never trust anyone besides their own again. Leaving the surface world to go into hiding underground and spying on the world above until the day they deem right.",
        image: shadowElvesimg,
    },
    {   
        raceIndex: 4,
        name:"Gnomes",
        description:"Natural born thieves. They go around stealing bits and bobs they find in other cities. Grabbing what they can for the elder ones to build their contraptions and weapons. They are also building a secret kingdom under the ocean surface. Crossing the land to the ocean, they have come across the Yaksha several times. At first ignoring them, they soon discovered from sneaking around their home disguised as children with their faces covered, the Yaksha are guarding a rare metal. Feystone. The gnomes had very little and used it to bring the Undersea Kingdom door guard to life. What they have in their possession is so much, the gnomes could create a city of living automatons! They must have it. No matter the cost!",
        image: elvesimg,
    },
]

const RacesSection = ({}, ref) => {
    return (
        <div className="w-[100vw] flex justify-center" ref={ref}>
            <div  className="flex flex-col w-[80vw] justify-center items-center text-center gap-[10%]">
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