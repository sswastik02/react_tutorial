import { Component } from 'react';
import CounterCntrl from "./counterControlled"

class CountersCntrl extends Component {
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
                 <CounterCntrl key={counter.id} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} id={counter.id} value={counter.value}> 
                 <h4>Counter no. {counter.id}</h4> 
                 </CounterCntrl>
            )}
            </div>
        </div>
    }

    handleIncrement = (cId) => this.setState({
        counters:this.state.counters.map(counter=>{
            if(counter.id === cId)
            counter.value++
            return counter
        })
    })
    handleDecrement = (cId) => this.setState({
        counters:this.state.counters.map(counter=>{
            if(counter.id === cId)
            counter.value=(counter.value===0)?0:counter.value-1
            return counter
        })
    })

    handleReset =()=>{
        console.log("Reset")
        this.setState({
            counters:this.state.counters.map(counter=>{
                counter.value=0
                return counter
            })
        })
       console.log(this.state.counters)
    }

    handleDelete=(cId)=>{
        console.log(cId)
        this.setState({
            counters:this.state.counters.filter(counter=>counter.id!==cId)
        })
    }
}
 
export default CountersCntrl;