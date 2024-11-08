import styles from "@/app/styles/common.module.css"
import Image from "next/image"
import Link from "next/link"

export default async function BlogCard(element, key) {
    const { id, title, description } = element

    return (
        <>
            <div className={styles.card}>
                {/* <div className={styles.card_image}>
                    <Image src={element.jawSummary.backgroundImage.url} alt="" width={250} height={207} />
                </div> */}
                <div className={styles.card_data}>
                    <h2>{title}</h2>
                    <p>
                        {`${description} ...`}
                    </p>
                    <Link href={`blog/${id}`}>
                        <button>Read More</button>
                    </Link>
                </div>
            </div>
        </>
    )
}