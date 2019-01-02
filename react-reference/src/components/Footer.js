import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <div>
                <h1>Links</h1>
                <h3><a href="https://reactjs.org/docs/context.html">Context</a></h3>
                <p>Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language</p>
            </div>
        )
    }
}
export default Footer;