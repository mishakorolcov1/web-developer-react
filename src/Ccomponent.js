import React, { Component } from 'react'
import Menu from './Menu';

export default class Ccomponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        visibility: false ,   
        //    name: 'Alex',
           age: '2',  
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {

        this.setState(state =>({
            visibility: !state.visibility
        }));

        // this.setState({
        //     name: 'Webdeveloper',
        // })
    }        

    render() {
        const age = this.state.age;
        if(this.state.visibility){

        
            return (
                <div>
                    <Menu />
                    <h1>Class component {this.props.name} {this.props.numbers.join(',')}</h1>
                    <h2> State {this.state.name } {age}</h2>
                    <button onClick={this.handleClick}>Click</button>
                </div>
            );
        }
        else{
            return (
                <div>
                     <button onClick={this.handleClick}>Click</button>
                </div>
            )
        }
    }
}

Ccomponent.defaultProps = { name: 'Alexey'}
