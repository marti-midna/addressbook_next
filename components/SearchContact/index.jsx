import { useState } from "react";
import styles from './styles.module.scss';

const SearchContact = ({setSearchContact, searchContact}) => {
  return (
    <div className={styles.input}>
      <form>
        <input
          type="text"
          value={searchContact}
          onChange={(e) => setSearchContact(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchContact;
