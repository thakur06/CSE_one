import { Component, useState } from "react";

interface gProps{
    name:string;
}

class Classone extends Component<gProps>{

    //count:number =0;
    state={
        count:0
    }

    test=()=>{
        //alert("button clicked");
         //this.state.count++;
        // console.log(this.state.count);
        //this.setState(count:this.state.count++);
        this.setState({count:this.state.count+=1});
    }

    render(){
        return (
            <>
            <p>Hello Brother {this.props.name} {this.state.count}!</p>
            <button onClick={this.test}>Click me</button>
            </>
        )
    }
}

export default Classone;