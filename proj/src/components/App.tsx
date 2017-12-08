// This component handles the App template used on every page.
import * as React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                {this.props.children}
            </div>
        );
    }
}

