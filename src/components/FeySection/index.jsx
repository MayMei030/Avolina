import feystoneImg from "../../assets/Images/feystone.webp"
const FeySection = () => {
    return (
        <div className="h-[100vh] flex flex-col">
            <p className="text-center text-6xl cont-font py-10">Fey</p>
            <div className="flex justify-center gap-10">
                <div className="w-[20%]">
                    <img src={feystoneImg} className="h-[50vh]" />
                </div>
                <div className="w-[50%] flex flex-col gap-4">
                    <p className="cont-font text-4xl">Heort stone</p>
                    <p className="lore-text text-justify">The stone in legends that is said to have given life to the inhabitants of this world. It has strange properties, like give you the feeling of being young again if you are elderly, the strange sight of grass being grown where it lies, even underground. The most use this item seems to have other than growing plants is the ability to let people cast Feyspell. Fey is the energy inside all beings. The Feystone allows inhabitants to call upon the power of Fey through a medium such as wood. The wood has to be shaped around the stone to act as the heart. Most weapons crafted in this way have Feystone crafted into the pommel to minimize seperation of medium and stone. If the stone is dislodged from the medium then you lose the ability to cast Feyspell. The gnomes have found a way to infuse their Fey into another type of stone to let them create their automatons. They do so with what we call "Soul Stones". A bright red gem with the ability to hold Fey with the help of Feystone.</p>
                </div>
            </div>
        </div>
    )
}

export default FeySection