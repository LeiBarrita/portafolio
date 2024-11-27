import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.separation}`}>
      <Link className="hover-shine hover-grow" href="/">
        Uziel Barrita
      </Link>
      <div className={styles.separation}>
        <Link className="hover-shine hover-grow" href="/experience.html">
          Experience
        </Link>
        <Link className="hover-shine hover-grow" href="/#home-contact">
          Contact
        </Link>
        {/* <Link className="hover-shine" href="">Spanish</Link> */}
      </div>
    </header>
  );
};

export default Header;
