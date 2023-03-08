
import { useState } from "react"


function Calc() {

    let defaultNum = 0

   const  [state, setState] = useState(defaultNum)

    return  (
        <div id="clockButton">
            <button onClick={() => {
             defaultNum += 1 
                setState(defaultNum)
            }}> + </button>
            <span> {defaultNum} </span>
            <button onClick={() => {
                defaultNum -= 1 
                setState(defaultNum)
            }}> - </button>
        </div>
    )
}

export default Calc 