import React from "react";
import { Component } from "react";

class Classcomp extends React.Component {
    interval
    constructor(props){
        super(props)
        this.state={
            timer:0
        }
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
            this.setState(prevState=>({timer:prevState.timer+1}))
        },500)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render() {
      return (
        <div>
           ClassTimer: {this.state.timer}
<button onClick={()=>clearInterval(this.interval)}>reset</button>
            </div>
        
      )
    }
  }

export default Classcomp;