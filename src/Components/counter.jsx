import React, {Component} from "react";
class Counter extends Component {
    state = {
        count : 0,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag1','tag2','tag3','tag4']
        // this gives 200 by 200 random image
    }
    // state stores the data of an object
    // its a lot like json

    styles={
        fontSize: 20,
        fontWeight: "bold",
        height: "50px"
    }
    render() {
        //return <h1>Hello World</h1><button>Increase</button> 
        // the above expression will not work with babel
        // as it converts it to React.createElement
        // the syntax goes like React.createElement(h1)
        // you can create only one type of element
        // putting in a div is an ideal solution
        
        return <div>
            <img src={this.state.imageUrl} alt="random200" />
            <h1>Hello World</h1>
            {/* class is a keyword in react so className is used */}
            <div className={this.getBadgeClass()} style={this.styles}>{this.state.count}</div>
            {/* this is how bootstrap is used .... putting class as a predefined css element, m-2 means margin: 2px; */}
            <span className={this.getBadgeClass()} style={{fontSize:20,fontWeight:'bold',height:"50px"}}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-secondary m-2" style={this.styles}>Increment</button>
            <button onClick={this.handleDecrement} className="btn btn-secondary" style={this.styles}>Decrement</button>
             {/* the 2 ways of implementing styles attribute in html tags in react */}
             {/* the button needs to have a reference to function so no () */}
             <div className="List">
                 {this.state.tags.length ===0 && "Enter tags"}
                 {/* the above statement works like true && "hi" => "hi" */}
                 {/* "hi" && true => true .... here "hi" is a truesy*/}
                 
                {this.renderTags()}
             </div>
        </div>
        // the above return statement will display as
        // <div id="root"> <div> <h1> </h1> <button> </button> </div> </div>

        // if the above div were replaced by <React.fragment> 
        // it would display as
        // <div id="root"> <h1> </h1> <button> </button> </div>
    }

    // constructor() {
    //     super()
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    handleIncrement = ()=>{
        // event handlers dont have access to this .... when referenced as handleIncrement without bracket
        console.log("Incremeneted",this.state.count)
        // the above statement will give error on click
        // you can solve this by using constructor as given above
        // or use the function as arrow function
        this.setState({
            count:this.state.count +1
        })
        // this is how you set the attributes of state
        // it will run render with the changed state
    }

    handleDecrement=()=> {
        console.log("Decremented",this.state.count)
        this.setState({
            count:this.state.count ===0? 0:this.state.count-1
        })
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>No tags</p>
        return <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li> )}
                {/* key needs to be specefied for react in order to factor in the changes in the virtual dom and make changes to real DOM */}
               </ul>
    }

    getBadgeClass() {
        let classNameCount = "badge m-2 p-3 badge-";
        classNameCount += (this.state.count === 0) ? "warning" : "primary";
        return classNameCount;
    }

    formatCount() {
        const {count} = this.state; // this way can be used for when multiple properties present
        //const count = this.state.count // this can be used when not many properties exist
        return count ===0 ? "Zero" : count
    }

}

export default Counter;