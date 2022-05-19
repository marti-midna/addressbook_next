import styles from "./styles.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

import Link from "next/link";
import { useState } from "react";

export default function CardContact({ contactsData, searchContact, changestar, deletedContact }) {
  // const { id, name, email, phone } = contactsData;

  function changestar1(contact) {

    changestar(contact);
    // deletedContact(contact)
  }

  return (
    // contactsData &&
    // contactsData
    //   .filter((contact) =>
    //     contact?.name
    //       .toLowerCase()
    //       .trim()
    //       .includes(searchContact.toLowerCase().trim()) ||
    //     contact?.username
    //       .toLowerCase()
    //       .trim()
    //       .includes(searchContact.toLowerCase().trim())
    //   )

    contactsData &&
    contactsData.map((item) => (
      <div className={styles.card_contact} key={item.id}>
        <div className={styles.all}>
          <Link href={`contatto/${item.id}`} key={item.id}>
            <a>
              <div className={styles.img_container}>
                <FaUserAlt size="2rem" />
              </div>
              <div className={styles.info}>
                <h4 className={styles.item_name}>{item.name}</h4>
                {/* <p className={styles.item_username}>{username}</p> */}
                {/* <p className={styles.item_mail}>{email}</p> */}
                <p className={styles.item_number}>{item.phone}</p>
              </div>
            </a>
          </Link>
          <div
            className={styles.star_container}
            onClick={() => changestar1(item)}
          >
            <p className={styles.addstar}>
              <AiOutlineStar size="1.2rem" />
            </p>
          </div>
        </div>
      </div>
    ))


  );
}
