import { forwardRef } from "react"
import Orbit from "../Orbit"

const ElementsSection = ({},ref) => {
    return (
        <div className="pt-10" ref={ref}>
            <p className="cont-font text-6xl text-center mb-4">Elements</p>
            <Orbit />
        </div>
    )
}

export default forwardRef(ElementsSection)