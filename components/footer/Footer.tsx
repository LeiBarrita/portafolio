import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} secondary-section`}>
      <Link className="hover-shine hover-grow" href="/">
        Home
      </Link>
      <Link className="hover-shine hover-grow" href="/experience">
        Experience
      </Link>
      <Link className="hover-shine hover-grow" href="/#home-contact">
        Contact
      </Link>
      <Link className="hover-shine hover-grow" href="/credits">
        Credits
      </Link>
      {/* <Link  className="hover-shine hover-grow" href="/">Spanish</Link> */}
      <Link className="hover-shine hover-grow" href="https://g.co/kgs/iiJS65j">
        Michoacán, México
      </Link>
    </footer>
  );
};

export default Footer;
