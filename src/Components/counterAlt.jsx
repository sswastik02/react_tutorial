import { Component } from 'react';
class CounterAlt extends Component {
    state = { 
        //count:0
        count:this.props.value
     }
     // this is one way of passing arguments to give inital value
    //  the props enables communication between components
    render() { 
        console.log("props",this.props)
        return ( 
            <div>
                <div className="title m-2">{this.props.children}</div>
                {/* this is how you access children that are passed */}
                <div className={this.formatCountBage()} style={{fontSize:20}}>{this.formatCount()}</div>
                <button style={{fontSize:20, padding:10}} onClick={this.handleIncrement} className="btn btn-secondary m-2">Increment</button>
                <button style={{fontSize:20, padding:10}} onClick={this.handleDecrement} className="btn btn-secondary m-2">Decrement</button>
                <button style={{fontSize:20, padding:10}} onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger m-2">Delete</button>
                {/* although the delete button is here it needs to be deleted in counters */}
                {/* an event needs to be raised to delete the particular counter and the counters class will handle it */}

            </div>
         );
    }

    handleIncrement = () => this.setState({count:this.state.count+1})
    handleDecrement = () => this.setState({count:(this.state.count === 0)?0:this.state.count-1})

    formatCountBage() {
        let className = "badge m-2 p-3 badge-"
        if(this.state.count ===0) className+="warning"
        else className+="primary"
        return className
    }

    formatCount() {
        if(this.state.count === 0) return "Zero"
        return this.state.count
    }

}
 
export default CounterAlt;