import styles from "./styles.module.scss";
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiMapPin,
  FiGlobe,
} from "react-icons/fi";
import InternNavBar from "../../components/InternNavBar";
// import Image from 'next/image';
// import img1 from "../../public/img1.jpeg";
// import img1_m from "../../public/img1_m.jpeg";

import { useState } from "react";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { contact: data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await res.json();

  const paths = data.map((contact) => {
    return {
      params: { id: contact.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default function ContattoId({ contact }) {
  const images = [
    "https://i.ibb.co/X3mP08Q/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg",
    "https://i.ibb.co/g93hN7h/hannah-busing-ff5-K3-k-YPHA-unsplash.jpg",
    "https://i.ibb.co/PhmQLvm/julian-wan-2-Ed-IX-O2lk-I-unsplash.jpg",
    "https://i.ibb.co/8X4KhR9/julian-wan-WNo-Ln-Jo7t-S8-unsplash.jpg",
  ];
  console.log("immagine", images);

  const randomImage = images[Math.floor(Math.random() * images.length)];
  console.log("scelta", randomImage);

  return (
    <div>
      <InternNavBar />
      <div className={styles.sfondo}>
        <div className={styles.img_container}>
          <img
            src={randomImage}
            className={styles.imageStyle}
            alt="foto_profilo_user"
          />
        </div>
        <div className={styles.contact_container}>
          <h2>{contact.name}</h2>
          <div className={styles.icons}>
            <div className={`${styles.icon} ${styles.phone}`}>
              <FiPhone size="1.5rem"/>
            </div>
            <div className={`${styles.icon} ${styles.chat}`}>
              <FiMessageCircle size="1.5rem" />
            </div>
            <div className={`${styles.icon} ${styles.message}`}>
              <FiMail size="1.5rem"/>
            </div>
          </div>
          <div className={styles.all}>
            <div className={styles.tag}>
              <p>
                <FiMail />
              </p>
              <p>
                <FiPhone />
              </p>
              <p>
                <FiMapPin />
              </p>
              <p>
                <FiGlobe />
              </p>
            </div>
            <div className={styles.info}>
              <p className={styles.info_}>{contact.email}</p>

              <p className={styles.info_}>{contact.phone}</p>

              <p className={styles.info_}>
                {contact.address.street}
                {contact.address.suite}
                {contact.address.city}
              </p>
              <p className={styles.info_}>{contact.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
