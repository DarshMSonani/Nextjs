"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Hero from "./components/Hero";
import Head from "next/head"
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    document.title="Home"
  })
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero title={"LET'S WATCH MOVIE TOGETHER"} imageUrl={"/home.svg"} />
    </>
  );
}
