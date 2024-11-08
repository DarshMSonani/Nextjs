// "use client"
import style from "@/app/styles/common.module.css"
import Image from "next/image";

export default async function GetedMovie({ params }) {

    await new Promise(reslove => setTimeout(reslove, 2000))

    const id = params.id
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'eebf06acebmsh6144cad3db0fd41p1b89fdjsn60d618ac5653',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;
    return (
        <>
            <div className={style.container}>
                <h2 className={style.movie_title}>
                    Netflix \ <span>{main_data.type}</span>
                </h2>

                <div className={style.card_section}>
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                    </div>

                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div>
        </>
    )
}