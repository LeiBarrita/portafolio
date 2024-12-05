import Link from "next/link";
import styles from "./contactIcon.module.css";
import { ContactInfo } from "@/types";
import Image from "next/image";

const ContactIcon = ({
  contactInfo,
  className,
}: {
  contactInfo: ContactInfo;
  className?: string;
}) => {
  return (
    <div className={className}>
      <Image
        className={styles.icon}
        src={contactInfo.icon}
        alt={`${contactInfo.tag} icon`}
        width={64}
        height={64}
      />
    </div>
  );
};

export default ContactIcon;
