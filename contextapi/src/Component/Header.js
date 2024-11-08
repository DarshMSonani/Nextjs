import { Component } from "react";
import { CommonContext } from "./CommnContext";

export default class HeaderClass extends Component {
    render() {
        return (
            <>
                <CommonContext.Consumer>
                    {
                        ({ color }) => (
                            <h1 style={{ backgroundColor: color }}>This Is Header File</h1>
                        )
                    }
                </CommonContext.Consumer>
            </>
        )
    }
}