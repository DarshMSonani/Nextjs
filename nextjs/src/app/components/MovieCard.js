import styles from "@/app/styles/common.module.css"
import Image from "next/image"
import Link from "next/link"

export default async function MovieCard(element) {
    const { id, type, title, synopsis } = element.jawSummary
    return (
        <>
            <div className={styles.card}>
                <div className={styles.card_image}>
                    <Image src={element.jawSummary.backgroundImage.url} alt="" width={250} height={207} />
                </div>
                <div className={styles.card_data}>
                    <h2>{title.substring(0, 18)}</h2>
                    <p>
                        {`${synopsis.substring(0, 66)} ...`}
                    </p>
                    <Link href={`movie/${id}`}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}