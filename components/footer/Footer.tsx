import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} secondary-section`}>
      <Link href="/">Uziel Barrita</Link>
      <Link href="portafolio">Portafolio</Link>
      <Link href="credits">Credits</Link>
      <Link href="/">Spanish</Link>
      <Link href="https://g.co/kgs/iiJS65j">Michoacán, México</Link>
    </footer>
  );
};

export default Footer;
