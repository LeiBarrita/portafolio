import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} secondary-section`}>
      <Link href="/">Home</Link>
      <Link href="/">leibarrita@gmail.com</Link>
      <Link href="/">4433731339</Link>
      <Link href="/">Linkedin</Link>
      <Link href="credits">Credits</Link>
      <Link href="/">Michoacán, México</Link>
    </footer>
  );
};

export default Footer;
