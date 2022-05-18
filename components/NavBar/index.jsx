import Link from "next/link";
import styles from "./styles.module.scss";
import { FiUsers, FiStar, FiPlusCircle} from "react-icons/fi";

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/favorite">
            <a>
              <FiStar size="2rem" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FiUsers size="2rem" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/add">
            <a>
              <FiPlusCircle size="2rem" />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
