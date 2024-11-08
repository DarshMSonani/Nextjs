import Link from "next/link";
import { blogArray } from "../array"
import style from "@/app/styles/common.module.css"

export default function Page({ params }) {
    function findObjectById(id) {
        return blogArray.find(obj => obj.id === id);
    }

    const id = params.id
    const findDetails = findObjectById(Number(id))
    console.log(findDetails);


    return (
        <>
            <div className={style.container}>
                <h2 className={style.movie_title}>
                    <span>{findDetails.title}</span>
                </h2>

                <div className={style.card_section}>

                    <div>
                        <h1>{findDetails.description}</h1>
                    </div>
                </div>
                <Link href={`${Number(id) + 1}`}>
                    <button>Next {`${Number(id) + 1}`}</button>
                </Link>
                <Link href={`${Number(id) - 1}`}>
                    <button style={{ marginLeft: "10px" }}>Priviouse {`${Number(id) - 1}`}</button>
                </Link>
            </div>
        </>
    )
}