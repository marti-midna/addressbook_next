import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import CardContactList from "../components/CardContactList";
import SearchContact from "../components/SearchContact";

export default function Home() {
  const [searchContact, setSearchContact] = useState("");

  return (
    <div className={styles.container}>
      <Head>
        <title>AddressBook with Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.heading}>
        <h1>Address Book</h1>
      </div>

      <SearchContact setSearchContact={setSearchContact} />
      <div className={styles.titlemain}>
        <h2>contatti</h2>
      </div>
      <main className={styles.main}>
        <CardContactList searchContact={searchContact} />
      </main>
      <NavBar />
    </div>
  );
}
