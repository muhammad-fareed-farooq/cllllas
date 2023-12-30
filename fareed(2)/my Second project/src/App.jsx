import "./App.css"
import { Logo_Component } from "./Componenets/Logo_Component"
import { Submit_Component } from "./Componenets/Submit_Component"

const App1 = ()=>{
 return(


  <div>
    <Submit_Component lable='login'/> <br /><br />
    <Submit_Component lable='Signup'/><br /><br />
  <Submit_Component lable='Submit' />
  <Logo_Component />
  </div>

 )
}

export default App1
