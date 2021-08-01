import { Component } from 'react';
import CounterAlt from "./counterAlt"

class Counters extends Component {
    state = { 
        counters:[
            {id:1,value:0},
            {id:2,value:2},
            {id:3,value:3},
            {id:4,value:0}
        ]
     }
    render() { 
        return <div>
            <div className="reset">
                <button onClick={this.handleReset} className="btn btn-primary m-2">Reset</button>
            </div>
        <div className="Counters">
            {this.state.counters.map(counter =>
                 <CounterAlt key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value}> 
                 {/* the onDelete is a custom property which references handleDelete so when onDelete is called handleDelete is called */}
                 {/* the onDelete property will be called in counterAlt from props */}
                 {/* the id will also be specified as key is not a property and event will not raise through key in props in counterAlt */}
                 {/* instead of passing values or id one by one you can send the whole counter object */}
                 {/* counter={counter} in CounterAlt*/}
                 <h4>Counter no. {counter.id}</h4> 
                 {/* this is how you pass children of a component (it could be any complex tag (maybe not h4)) */}
                 </CounterAlt>
            )}
            {/* the attribute value is a property but key is not property (as it is used only for uniquely identifying) components of props object*/}
        </div>
        </div>
    }

    handleReset =()=>{
        console.log("Reset")
        // this.setState({
        //     counter:this.state.counters.map(counter=>{
        //         counter.value=0;
        //         return counter
        //     })
        // })
        // This wont work as expected as setState will only rebuild the
        // the current widget and not the widget inside it(component)
        // each component has its own state 
        console.log(this.state.counters)
        // this will show a change in the value of counters but the
        // state is to be set in the child component to reflect in the dom
        
        // so will create a controlled component ==> child component solely controlled by parent
        // the child component recieves data from parent and also raises events to parents like onDelete
    }

    handleDelete=(cId)=>{
        console.log(cId)
        this.setState({
            counters:this.state.counters.filter(counter=>counter.id!==cId)
        })
    }
}
 
export default Counters;