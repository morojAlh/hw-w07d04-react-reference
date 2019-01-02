import React, {Component} from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LifeCycleInfo from './LifeCycleInfo';

class ComponentInfo extends Component {
    render(){
        return(
            <div>
                <h1>Component Info</h1>
                <p>Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.</p>
                <PropsInfo/>
                <StateInfo/>
                <LifeCycleInfo/>
            </div>
        )
    }
}
export default ComponentInfo;