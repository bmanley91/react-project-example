import AwesomeComponent from './AwesomeComponent.jsx';
import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div id="body-wrapper">
                <p>Hello!</p>
                <AwesomeComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));