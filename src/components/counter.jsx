import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
    state={
        count: this.props.value
    };
    handleIncrement = e => {
       console.log(e);
       this.setState({count: this.state.count + 1 });
    };

    render() { 
        let classes= "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";

      console.log(this.props);
        return (
            <div> 
            {this.props.children}
            <span className={classes}>{this.formatCount()}</span>
            <button onClick={() => this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>
            </div>
            );
    }
    formatCount(){
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    }
}
 
export default Counter;
