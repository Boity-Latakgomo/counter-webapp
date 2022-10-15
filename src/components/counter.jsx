import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state={
        count: 0
    };

    render() { 
        return (
            <div> 
            <span className="badge badge-primary m-2">{this.formatCount()}</span>
            <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
            );
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    }
}
 
export default Counter;
