import ReactDOM from "react-dom"
//import Counter from "./Components/counter"
import 'bootstrap/dist/css/bootstrap.min.css';
//import CounterAlt from "./Components/counterAlt"
//import Counters from "./Components/counters"
import CountersController from "./Components/countersController"

ReactDOM.render(
    //<Counter/>,
    //<CounterAlt/>,
    //<Counters/>,
    <CountersController/>,
    document.getElementById("root"),

)

// this is how you can use classes to create html elements
// this way you just have to call Counter class everytime you
// need a counter