import React, {Component} from "react";
class Dileep extends Component{
    name="Dileep"
    print=()=>{
        return (
            <h4>My name is:<span className="text-info">{this.name}</span>
            </h4>
        );
    };
    render(){
        return(
            <div>
                {this.print()}
            </div>
        );
    }
}
export default Dileep;