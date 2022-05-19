import CardContact from "../../components/CardContact"
import { NavBar } from "../../components/NavBar"
import { useState, useEffect } from "react"



export default function Favorite() {
    const [filtrati, setFiltrati] = useState([])



    useEffect(() => {
        const newArr = JSON.parse(localStorage.getItem("arrFiltered"));
        setFiltrati(newArr)
        console.log("NewArr", newArr);

    }, [])

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
        const arrFiltered = filtrati.filter((item) => item.favorite === true);
        console.log("arrFiltered", arrFiltered);
        setFiltrati(arrFiltered)
        localStorage.setItem('arrFiltered', JSON.stringify(arrFiltered))
    }
    return (
        <div>
            <CardContact contactsData={filtrati} changestar={changestar} />
            <NavBar />
            800A
        </div>
    )
}