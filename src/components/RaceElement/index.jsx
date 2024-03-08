import { useEffect, useRef } from "react"
import {motion, useInView, useAnimation} from "framer-motion"

const RaceElement = ({rIndex, name, description, image}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false});

    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible")
        }
    },[isInView])



    return (
        <div ref={ref} className={`media-races overflow-hidden flex gap-[10%] mb-20 ${rIndex % 2 === 0 ? "": "flex-row-reverse"}`}>
            <motion.div 
            variants={{
                hidden: {opacity:0, x:rIndex % 2 === 0 ? 100 : -100},
                visible: {opacity:1, x:0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5, delay:0.7}}
            className="flex flex-col justify-around my-2">
                <p className="cont-font text-4xl">{name}</p>
                <p className="lore-text text-justify">{description}</p>
            </motion.div>
            <motion.div 
            variants={{
                hidden: {opacity:0, x:rIndex % 2 === 0 ? -100 : 100},
                visible: {opacity:1, x:0},
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5, delay:0.7}}
            className="flex justify-center items-center" >
                <img src={image} alt=""  className="h-[50vh] max-w-none"/>
            </motion.div>
        </div>
    )
}

export default RaceElement