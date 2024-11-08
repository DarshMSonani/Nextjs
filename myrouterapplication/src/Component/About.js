import { Link } from "react-router-dom";

export default function About() {
    return (
        <>
            <h1>This Is About Page</h1>
            <p>This is our about page</p>
            <Link to={"/"}>Go to home page</Link>
            
        </>
    )
}