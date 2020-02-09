import React from 'react';

function Header(props){
    return (
        <div>
            Welcome to React App! {props.user} - {props.isLoggedIn.toString()}
        </div>
    );
}
export default Header;