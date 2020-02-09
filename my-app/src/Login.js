import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.loginHandler = this.loginHandler.bind(this);
    }
    loginHandler(){
        this.props.onLogin(true, "testing");
    }
    render(){
        return (
            <button onClick={this.loginHandler}>Login</button>
        );
    }
}

export default Login;