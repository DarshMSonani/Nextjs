import { useSearchParams } from "react-router-dom"

export default function SerachComponent() {

    let [serachPerams, setSearchPerams] = useSearchParams();

    let age = serachPerams.get("age");
    let city = serachPerams.get("city")

    return (
        <>
            <h1>The Age Is :{age}</h1>
            <h1>THe City Is: {city}</h1>

            <input type="text" onChange={(e) => { setSearchPerams({ text: e.target.value, age: 30 }) }} />
        </>
    )
}