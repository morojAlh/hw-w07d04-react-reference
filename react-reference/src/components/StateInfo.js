import React, {Component} from 'react';

class StateInfo extends Component {
    render(){
        return(
            <div>
                <h1>State Info</h1>
                <p>Props shouldn’t change, so state steps up. State is used so that a component can keep track of information in between any renders that it does. When you setState it updates the state object and then re-renders the component. This is super cool because that means React takes care of the hard work and is blazingly fast.</p>
            </div>
        )
    }
}
export default StateInfo;