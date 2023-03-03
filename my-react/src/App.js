import logo from "./logo.svg";
import One from "./Components/One"
import Clock from "./Components/Clock";

function GetTime(props) { 
  return (
    <div> {props.name}
          {props.lastName}
    </div>
  )
}


function App(){
  return (
    <div> 
      
      <Clock />
      <input type="text" />
      {/* <GetTime name="Arman" lastName="Davtyan" /> */}
    </div>
  )


}

export default App 
