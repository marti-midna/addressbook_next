import styles from './styles.module.scss';

import Link from 'next/link';
import { FiChevronLeft } from "react-icons/fi";


export default function InternNavBar() {
    return(
        <div className={styles.internNavBar}>
            <Link href="/">
                <a><FiChevronLeft size="1.6rem"/></a>
            </Link>
        </div>
    )
}