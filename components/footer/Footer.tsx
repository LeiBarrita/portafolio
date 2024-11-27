import a from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} secondary-section`}>
      <a className="hover-shine hover-grow" href="/">
        Home
      </a>
      <a className="hover-shine hover-grow" href="/experience">
        Experience
      </a>
      <a className="hover-shine hover-grow" href="/#home-contact">
        Contact
      </a>
      <a className="hover-shine hover-grow" href="/credits">
        Credits
      </a>
      {/* <a  className="hover-shine hover-grow" href="/">Spanish</a> */}
      <a className="hover-shine hover-grow" href="https://g.co/kgs/iiJS65j">
        Michoacán, México
      </a>
    </footer>
  );
};

export default Footer;
