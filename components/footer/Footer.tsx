import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} secondary-section`}>
      <Link href="/">Home</Link>
      <Link href="https://github.com/LeiBarrita">GitHub</Link>
      <Link href="https://www.linkedin.com/in/uzielbarrita">Linkedin</Link>
      <Link href="mailto:leibarrita@gmail.com">leibarrita@gmail.com</Link>
      <Link href="tel:4433731339">4433731339</Link>
      <Link href="credits">Credits</Link>
      <Link href="https://g.co/kgs/iiJS65j">Michoacán, México</Link>
    </footer>
  );
};

export default Footer;
