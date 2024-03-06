import { forwardRef } from "react"

const LoreSection = ({}, ref) => {
    return (
        <div className="flex flex-col h-[100vh] w-[100vw] bg-black justify-center items-center text-center gap-[10%]" ref={ref}>
            <p className="w-[20%] cont-font text-6xl">Prologue</p>
            <p className="w-[50%] lore-text text-lg">In the caverns of Avolina, a desperate chase ensues as a young woman, known only as the Shade, flees her captors. With each step, memories of captivity drive her forward. But as exhaustion threatens to overcome her, a mysterious surge of energy propels her towards an uncertain fate</p>
        </div>
    )
}

export default forwardRef(LoreSection)