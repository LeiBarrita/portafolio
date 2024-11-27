import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.separation}`}>
      <a className="hover-shine hover-grow" href="/">
        Uziel Barrita
      </a>
      <div className={styles.separation}>
        <a className="hover-shine hover-grow" href="/experience">
          Experience
        </a>
        <a className="hover-shine hover-grow" href="/#home-contact">
          Contact
        </a>
        {/* <a className="hover-shine" href="">Spanish</a> */}
      </div>
    </header>
  );
};

export default Header;
