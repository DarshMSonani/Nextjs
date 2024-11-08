import { useParams, useLocation } from "react-router-dom";

export default function PeramsRout() {

    let location = useLocation();
    console.log(location);

    let perams = useParams();
    let { name } = perams

    return (
        <>
            <h1>Hello {name}</h1>
        </>
    )
}