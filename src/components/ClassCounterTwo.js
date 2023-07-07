import React, { Component } from 'react'

export class ClassCounterTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>({
            count:prevState.count+1            
        }))
    }
    decrementCount=()=>{
        this.setState(prevState=>({
            count:prevState.count-1            
        }))
    }
    resetCount=()=>{
        this.setState({count:0})
    }
    incrementFive=()=>{
        for(let i = 0;i<5;i++){
            this.incrementCount()
        }
    }
    render() {
        return (
            <div>
                Count-{this.state.count}
                <button onClick={this.incrementCount}>increment</button>
                <button onClick={this.decrementCount}>decrement</button>
                <button onClick={this.resetCount}>reset</button>
                <button onClick={this.incrementFive}>increment Five</button>
            </div>
        )
    }
}

export default ClassCounterTwo
