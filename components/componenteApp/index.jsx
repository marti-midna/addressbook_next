import { useState } from "react";
import Favorite from "../../pages/favorite";
import CardContactList from "../CardContactList";

function ComponenteApp() {
    const [set, setState] = useState(1234);


    return (
        <>
            <CardContactList set={set} />
            <Favorite set={set} />
        </>
    )
}