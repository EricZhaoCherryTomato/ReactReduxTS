import * as React from "react"

export interface WorldProps { firstname: string; lastname: string;}

export class World extends React.Component<WorldProps, {}> {
    render() {
        return <h1>This is {this.props.firstname} and {this.props.lastname}!</h1>;
    }
}