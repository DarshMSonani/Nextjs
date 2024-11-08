import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

    let naviget = useNavigate();

    function logedIn() {
        localStorage.setItem("login", true);
        naviget("/");
    }

    useEffect(() => {
        let login = localStorage.getItem("login");

        if (login) {
            naviget("/");
        }
    })
    return (
        <>
            <h1>Login Page</h1>
            <input type="text" />
            <br />
            <br />
            <button onClick={logedIn}>Login</button>
        </>
    )
}
