import style from "@/app/styles/blog.module.css"
import styles from "@/app/styles/common.module.css"
import BlogCard from "../components/BlogCard"
import { blogArray } from "./array"

export default async function Table() {


    // const url = 'https://covid-19-statistics.p.rapidapi.com/regions';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'x-rapidapi-key': 'eebf06acebmsh6144cad3db0fd41p1b89fdjsn60d618ac5653',
    //         'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
    //     }
    // };
    // const res = await fetch(url, options);
    // const data = await res.json();
    // // const main_data = data;
    // console.log('data :>> ', data);


    return (
        <>
            <div className={style.blog}>
                <h1>Welcome to my blog</h1>

                <div className={styles.card_section}>
                    {
                        blogArray.map((element) => {
                            return <BlogCard key={element.id} {...element} />
                        })
                    }
                </div>
            </div>
        </>
    )
}