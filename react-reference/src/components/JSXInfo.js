import React, {Component} from 'react';

class JSXInfo extends Component {
    render(){
        return(
            <div>
                <h1>JSX Info</h1>
                <p>JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant.

Just like XML, JSX tags have a tag name, attributes, and children. If an attribute value is enclosed in quotes, the value is a string. Otherwise, wrap the value in braces and the value is the enclosed JavaScript expression</p>
            </div>
        )
    }
}
export default JSXInfo;