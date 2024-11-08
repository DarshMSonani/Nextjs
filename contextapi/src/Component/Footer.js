import { Component } from "react";
import { CommonContext } from "./CommnContext";

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <CommonContext.Consumer>
                    {
                        ({ color }) => (
                            <h1 style={{ backgroundColor: color }}>This Is Footer</h1>
                        )
                    }
                </CommonContext.Consumer>
            </div>
        )
    }
}