import logo from "./logo.svg";
import One from "./Components/One"
import Clock from "./Components/Clock";
import Test from "./Components/Test"



function GetTime(props) { 
  return (
    <div> {props.name}
          {props.lastName}
    </div>
  )
}


function App() {
  return (
    <div>
    
      <input type="range" className="input" />
      <input type="date" className="input" />
      <input type="checkbox" className="input" />
      <input type="file" className="input" />
      <input type="color" className="input" />
    
      <Clock />
      <GetTime name={"Arman"} lastName={"Davtyan"} />
      <Test v={"string"} b={122 % 2 === 0 ? 10 : 20} c={true} d={false} e={undefined} f={null} g={[1, 2, 3]} />
     
      
    </div>
  )
}

export default App   
