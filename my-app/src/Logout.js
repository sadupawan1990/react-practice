import React from 'react';

class Logout extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    LogoutHandler(isloggedOut){
        this.props.onLoggedOut(isloggedOut,"testinglogout");
    }

    tick(){
        this.setState({date : new Date() });
    }

    render(){
        return (<div style={{color:"red"}}>{this.state.date.toLocaleTimeString()} 
            <button onClick={(e) => this.LogoutHandler(e,true) }> Logout</button> </div>);
    }
}

export default Logout;