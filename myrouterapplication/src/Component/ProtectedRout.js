import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRout(propes) {
    const { Component } = propes;

    let naviget = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem("login");

        if (!login) {
            naviget("/login")
        }
    })
    return (
        <>
            <Component />
        </>
    )
}