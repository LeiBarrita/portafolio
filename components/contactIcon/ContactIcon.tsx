import Link from "next/link";
import styles from "./contactIcon.module.css";
import { ContactInfo } from "@/types";
import Image from "next/image";

const ContactIcon = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <Link href={contactInfo.htmlLink}>
      <Image
        // className={styles.icon}
        src={contactInfo.icon}
        alt={`${contactInfo.tag} icon`}
        width={64}
        height={64}
      />
    </Link>
  );
};

export default ContactIcon;
