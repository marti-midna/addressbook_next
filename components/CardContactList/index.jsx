import { useEffect, useState } from "react";
import { getContacts } from "../../pages/api/hello";
import CardContact from "../CardContact";

export default function CardContactList({ searchContact, set }) {
  const [contactsData, setContactsData] = useState([]);
  const [prova, setProva] = useState([])


  useEffect(() => {
    getContacts().then((data) => setContactsData(data));

  }, []);

  function changestar(contact) {
    if (contact.favorite === false) {
      contact.favorite = true;
    } else if (contact.favorite === true) {
      contact.favorite = false;
    };
    console.log("true", contact);
    filtered();
  }


  const filtered = () => {
    const arrFiltered = contactsData.filter((item) => item.favorite === true);


    localStorage.setItem('arrFiltered', JSON.stringify(arrFiltered))
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
    //   .map((contact) => (
    //     < key={contact.id}>
    <CardContact contactsData={contactsData} searchContact={searchContact} filtered={filtered} changestar={changestar} />
  );

}
