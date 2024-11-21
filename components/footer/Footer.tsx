import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} secondary-section link-shine`}>
      <Link href="/">Home</Link>
      <Link scroll={false} prefetch={false} href="/experience">
        Experience
      </Link>
      <Link href="/#home-contact">Contact</Link>
      <Link href="/credits">Credits</Link>
      {/* <Link href="/">Spanish</Link> */}
      <Link href="https://g.co/kgs/iiJS65j">Michoacán, México</Link>
    </footer>
  );
};

export default Footer;
