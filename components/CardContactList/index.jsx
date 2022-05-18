import { useEffect, useState } from "react";
import { getContacts } from "../../pages/api/hello";
import CardContact from "../CardContact";

export default function CardContactList({ searchContact }) {
  const [contactsData, setContactsData] = useState([]);
  const [filtrati, setFiltrati] = useState([])

  useEffect(() => {
    getContacts().then((data) => setContactsData(data));
  }, []);

  const filtered = (contactsData) => {
    setFiltrati((filtrati) => [...filtrati, contactsData])
    console.log('sei in card list',contactsData);
  }

  useEffect(() => {
    console.log('sei nel tuo array filtrato -->',filtrati);
  }, [filtrati]);

  return (
    contactsData &&
    contactsData
      .filter((contact) => 
        contact?.name
          .toLowerCase()
          .trim()
          .includes(searchContact.toLowerCase().trim()) ||
          contact?.username
          .toLowerCase()
          .trim()
          .includes(searchContact.toLowerCase().trim())
      )
      .map((contact) => (
        <div key={contact.id}>
          <CardContact contactsData={contact} filtered={filtered}/>
        </div>
      ))
  );
}
