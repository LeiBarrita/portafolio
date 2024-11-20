import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={`${styles.header} ${styles.separation}`}>
      <Link href="/">Uziel Barrita</Link>
      <div className={styles.separation}>
        <Link href="/experience">Experience</Link>
        <Link href="/#home-contact">Contact</Link>
        {/* <Link href="">Spanish</Link> */}
      </div>
    </header>
  );
};

export default Header;
