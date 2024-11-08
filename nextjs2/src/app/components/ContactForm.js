"use client"

import styles from "@/app/contact/contact.module.css"
import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
    weight: "400",
    subsets: ["latin"],
    display: "swap"
})


export default function ContactForm() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    });

    const [status, setStatus] = useState(null)

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        console.log('name :>> ', name);

        setUser((preUser) => ({ ...preUser, [name]: value }));
    }

    const handleForm = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("./api/contact", {
                method: "POST",
                headers: {
                    "Content_Type": "application/json"
                },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
            if (response.status === 200) {
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    message: ""
                })
                setStatus("success")
            }
            else {
                setStatus("error")
            }
        } catch (e) {
            console.log(e);

        }

    }


    return (
        <form onSubmit={handleForm} className={styles.contact_form} >
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter Your Name:
                    <input className={mulish.className} type="text" name="username" id="username" placeholder="enter your name" value={user.username} onChange={handleChange} autoComplete="off" required />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Enter You Email:
                    <input className={mulish.className} type="email" name="email" id="email" placeholder="enter your email" value={user.email} onChange={handleChange} autoComplete="off" required />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Enter You Phonenumber:
                    <input className={mulish.className} type="number" name="phone" id="phone" placeholder="enter your phonenumber" value={user.phone} onChange={handleChange} autoComplete="off" required />
                </label>
            </div>
            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message:
                    <textarea className={mulish.className} name="message" id="messege" placeholder="enter your messege" rows={4} value={user.message} onChange={handleChange} autoComplete="off" required />
                </label>
            </div>

            <div>
                {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
                <button type="submit" className={mulish.className}>Send A Message</button>
            </div>
        </form>
    )
}