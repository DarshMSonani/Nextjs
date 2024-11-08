import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div>
            <h1>Page 404</h1>
            <p>This URL Is Not Valid</p>
            <Link to={"/"}>Home</Link>
        </div>
    )
}