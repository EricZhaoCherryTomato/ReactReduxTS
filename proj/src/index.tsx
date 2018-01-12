import * as React from "react";
import * as ReactDom from "react-dom";

class Root extends React.Component {
    render() {
        return (
            <div>Render Root Here!</div>
        )
    }
}
ReactDom.render(
    <Root />,
    document.getElementById('root')
);