import { Link, useNavigate, useLocation } from "react-router-dom";


export default function Home() {

    const naviget = useNavigate();

    const navToPage = (url) => {
        // Conditional Navigaet
        // let x = true;
        // if (x === true) {
        //     naviget('/about')
        // }
        // else {
        //     naviget('/filter')
        // }

        naviget(url)
    }

    let location = useLocation();
    console.log(location);

    return (
        <>
            <h1>This Is Home Page</h1>
            <p>This is our home page</p>
            <p>This is for routes</p>
            <Link to={"/about"}>Go to About Page</Link>
            <br />
            <br />

            {/* <button onClick={() => naviget("/about")}>Go To About Page</button>
            <br />
            <br />
            <button onClick={() => naviget("/filter")}>Go To Filter Page</button> */}

            <button onClick={() => navToPage("/about")}>Go To About Page</button>
            <br />
            <br />
            <button onClick={() => navToPage("/filter")}>Go To Filter Page</button>


        </>
    )
}