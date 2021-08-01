// a controlled component will recieve all data from props and send data from props
// so it cant have a local state 
// this.state => this.props

import { Component } from 'react';
class CounterCntrl extends Component {
    render() { 
        console.log("props",this.props)
        return ( 
            <div>
                <div className="title m-2">{this.props.children}</div>
                <div className={this.formatCountBage()} style={{fontSize:20}}>{this.formatCount()}</div>
                <button style={{fontSize:20, padding:10}} onClick={()=>this.props.onIncrement(this.props.id)} className="btn btn-secondary m-2">Increment</button>
                <button style={{fontSize:20, padding:10}} onClick={()=>this.props.onDecrement(this.props.id)} className="btn btn-secondary m-2">Decrement</button>
                <button style={{fontSize:20, padding:10}} onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger m-2">Delete</button>
                
            </div>
         );
    }

    // handleIncrement = () => this.setState({count:this.state.count+1})
    // handleDecrement = () => this.setState({count:(this.state.count === 0)?0:this.state.count-1})
    // these needs to be handled by countersController to control counterControlled

    formatCountBage() {
        let className = "badge m-2 p-3 badge-"
        if(this.props.value ===0) className+="warning"
        else className+="primary"
        return className
    }

    formatCount() {
        if(this.props.value === 0) return "Zero"
        return this.props.value
    }

}
 
export default CounterCntrl;