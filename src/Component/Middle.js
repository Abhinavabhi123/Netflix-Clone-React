import React ,{Component} from "react";
class Middle extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
       this.increment = this.increment.bind(this)
    }
    increment(){
        this.setState((prevState)=>({
            count:prevState.count+1,
        }));
    }
    render(){
        return(
            <div>
                <p>Count:{this.state.count}</p>
                <button onClick={this.increment}>Click Me</button>
            </div>
        )
    }
    
}
export default Middle;
