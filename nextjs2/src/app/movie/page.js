import styles from "@/app/styles/common.module.css";
import MovieCard from "../components/MovieCard";

export default async function Page() {

    await new Promise(reslove => setTimeout(reslove, 2000))

    const url = process.env.RAPID_API;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'eebf06acebmsh6144cad3db0fd41p1b89fdjsn60d618ac5653',
            'x-rapidapi-host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Serise & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((element) => {
                                return <MovieCard key={element.id} {...element} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

