import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <ul className="navbar">
                <li><NavLink className={"navLink"} to={"/"}>Home</NavLink></li>
                <li><NavLink className={"navLink"} to={"/about"}>About</NavLink></li>
                <li><NavLink className={"navLink"} to={"/contact"}>Contact</NavLink></li>
                <li><NavLink className={"navLink"} to={"/user/ram"}>Ram</NavLink></li>
                <li><NavLink className={"navLink"} to={"/user/shive"}>Shive</NavLink></li>
                <li><NavLink className={"navLink"} to={"/filter"}>Filter</NavLink></li>
                <li><NavLink className={"navLink"} to={"/login"}>Login</NavLink></li>
                <li><NavLink className={"navLink"} to={"/logout"}>Logout</NavLink></li>
            </ul>
        </>
    )
}