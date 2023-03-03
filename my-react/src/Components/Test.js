import React from "react"

class Test extends React.Component {
    render() {
        const { v, b, c, d, e, f, g, h } = this.props

        
        return (
        
            <ul>
    
                <li> {v} </li>
                <li> {b} </li>
                <li> {c} </li>
                <li> {d} </li>
                <li> {e} </li>
                <li> {f} </li>
                <li> {g} </li>
                <li> {h} </li>
                  
            </ul>
        
        )
    }
}
 export default Test 