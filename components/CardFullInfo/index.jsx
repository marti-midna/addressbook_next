export default function CardFullInfo() {

    // const name = contacts.name || "Contatto 1";
    // const username = contacts.username || "Username Contatto 1";
    // const email = contacts.email || "Email Contatto 1";
    // const phone = contacts.phone || "1234567890";
    
    return(
        <div className={styles.card_contact_info} >

            <div className={styles.img_container}>
                <img src={img} />
            </div>

            <div className={styles.info}>
                <h3 className={styles.item_username}>{username}</h3>
                <h4 className={styles.item_name}>{name}</h4>
                <p className={styles.item_mail}>{email}</p>
                <p className={styles.item_number}>{phone}</p>
                <p className={styles.item_email}>{email}</p>

            </div>
        </div>
    )
}