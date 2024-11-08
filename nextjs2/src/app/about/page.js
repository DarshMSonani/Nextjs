"use client"

import { useEffect } from "react";
import Hero from "../components/Hero";

export default function About() {
    useEffect(()=>{
        document.title = "About"
    })
    return (
        <>
            <Hero title={"OUR STORY"} imageUrl={"/about1.svg"} />
        </>
    )
}