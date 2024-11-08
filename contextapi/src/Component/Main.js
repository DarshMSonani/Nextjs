import { Component } from "react";
import { CommonContext } from "./CommnContext";

export default class Main extends Component {
    render() {
        return (
            <>
                <CommonContext.Consumer>
                    {
                        ({ color }) => (
                            <h1 style={{ backgroundColor: color }}>This is Main Component</h1>
                        )
                    }
                </CommonContext.Consumer>
            </>
        )
    }
}

