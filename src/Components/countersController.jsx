import React, { Component } from 'react';
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
        return <React.Fragment>
            <nav style={{background:"blue",height:50,width:"100vw"}}>
                
                    <p style={{color:"white",fontSize:35,marginLeft:20}}> Number: <span style={{background:"grey",borderRadius:20,padding:3,marginTop:2,marginBottom:2}}>{this.computeCounters()}</span></p>
                
            </nav>
        <div>
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
        </React.Fragment>
    }

    computeCounters(){
        let c=0;
        for (let i = 0; i < this.state.counters.length; i++) {
            const element = this.state.counters[i];
            if(element.value !== 0)
            c++;
            
        }
        return c;
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

// now with this arrangement of parent and controlled child keeps a single source of truth for all data resetting this will reset all children elements 
