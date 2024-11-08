import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Logout() {

    let naviget = useNavigate();

    useEffect(() => {
        let login = localStorage.getItem("login");
        if (login) {
            localStorage.removeItem("login");
            naviget("/login");
        }
    });

    return (
        <>
        </>
    )
}