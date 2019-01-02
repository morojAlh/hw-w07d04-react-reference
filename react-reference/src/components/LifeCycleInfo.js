import React, {Component} from 'react';

class LifeCycleInfo extends Component {
    render(){
        return(
            <div>
                <h1>LifeCycle Info</h1>
                <p>Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use <a href="http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/">this lifecycle diagram</a> as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.</p>
            </div>
        )
    }
}
export default LifeCycleInfo;