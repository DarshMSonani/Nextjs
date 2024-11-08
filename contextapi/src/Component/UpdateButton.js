import { Component } from "react";
import { CommonContext } from "./CommnContext";

export default function UpdateButton() {

    return (
        <>
            <CommonContext.Consumer>
                {
                    ({ updateColor }) => (
                        <>
                            <button onClick={() => { updateColor("yellow") }}>Update The Color</button>
                            <button onClick={() => { updateColor("blue") }}>Update The Color</button>
                        </>
                    )
                }
            </CommonContext.Consumer>
        </>
    )

}