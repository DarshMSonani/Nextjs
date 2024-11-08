import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import styles from "./contact.module.css"


export default async function Contact() {
    await new Promise(reslove => setTimeout(reslove, 500))
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> From You</span></h2>
                    <ContactForm />
                </section>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.5210114390477!2d72.9302716387274!3d21.230182145117485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045b9abdf8413%3A0x272253a4c179ec3!2sGadhpur%20Twp%2C%20Khadsad%2C%20Gujarat%20395006!5e0!3m2!1sen!2sin!4v1722853890074!5m2!1sen!2sin" width={100} height={450} style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>

        </>
    )
}