import styles from "./styles.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

import Link from "next/link";
import { useState } from "react";

export default function CardContact({ contactsData, filtered }) {
  const { id, name, email, phone } = contactsData;

  function changestar(contactsData) {
    if (contactsData.favorite === false) {
      contactsData.favorite = true;
    } else if (contactsData.favorite === true) {
      contactsData.favorite = false;
    }
    filtered(contactsData);
  }

  return (
    <div className={styles.card_contact} key={id}>
      <div className={styles.all}>
        <Link href={`contatto/${id}`} key={id}>
          <a>
            <div className={styles.img_container}>
              <FaUserAlt size="2rem" />
            </div>
            <div className={styles.info}>
              <h4 className={styles.item_name}>{name}</h4>
              {/* <p className={styles.item_username}>{username}</p> */}
              {/* <p className={styles.item_mail}>{email}</p> */}
              <p className={styles.item_number}>{phone}</p>
            </div>
          </a>
        </Link>
        <div
          className={styles.star_container}
          onClick={() => changestar(contactsData)}
        >
          <p className={styles.addstar}>
            <AiOutlineStar size="1.2rem" />
          </p>
        </div>
      </div>
    </div>
  );
}
