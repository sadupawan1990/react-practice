import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Login from './Login';
import Logout from './Logout';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn : false, userName : "pawan"};
    this.LoginClickHandler = this.LoginClickHandler.bind(this);
  }

  LoginClickHandler(isLoggedIn,testparam){
    alert(testparam);
    this.setState({isLoggedIn : isLoggedIn});
  }

  LogoutHandler(isLoggedOut,testparam){
    alert(testparam);
    this.setState({isLoggedIn : !isLoggedOut});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header user={this.state.userName} isLoggedIn={true} />
          {this.state.isLoggedIn == true ? (<Logout onLoggedOut={(e,isLoggedOut,testparam) => this.LogoutHandler(e,isLoggedOut,testparam)}/>) : 
            (<Login onLogin={this.LoginClickHandler}/>)}
        </header>
      </div>
    );
  }
}

export default App;
