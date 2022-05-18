import { useEffect, useState } from "react";
import { getContacts } from "../../pages/api/hello";
import CardContact from "../CardContact";

export default function CardContactList({ searchContact }) {
  const [contactsData, setContactsData] = useState([]);

  useEffect(() => {
    getContacts().then((data) => setContactsData(data));
  }, []);

  {
    console.log(contactsData);
  }

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
          <CardContact contactsData={contact} />
        </div>
      ))
  );
}
