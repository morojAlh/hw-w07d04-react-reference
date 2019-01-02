import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <div>
                <h1>React is Awesome!</h1>
                <img className="App-logo" alt="logo" src="https://cdn.auth0.com/blog/react-js/react.png" width="300px" />
            </div>
        )
    }
}
export default Header;