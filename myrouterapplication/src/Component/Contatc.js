import { Link, Outlet } from "react-router-dom";

export default function Contatct() {
    return (
        <>
            <h1>Contatc Us</h1>
            <p>This is the simple way for contatct us.</p>
            <Link to={"compney"}>Compney</Link>
            <Link to={"chenel"}>chenel</Link>
            <Link to={"address"}>Address</Link>
            <Outlet />
        </>
    )
}