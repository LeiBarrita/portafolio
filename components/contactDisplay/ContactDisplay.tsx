import React from "react";
import styles from "./contactDisplay.module.css";
import ContactIcon from "../contactIcon/ContactIcon";
import { ListOfContactInfo } from "@/types";

const ContactDisplay = ({
  contactList,
}: {
  contactList: ListOfContactInfo;
}) => {
  return (
    <div className={`${styles.contactList}`}>
      {contactList.map((contact) => (
        <div key={contact.id} className={styles.contactItem}>
          <ContactIcon
            contactInfo={contact}
            className={`${styles.icon} scroll-slide-right`}
          />
          <div className={styles.hoverLink}>
            <ContactIcon contactInfo={contact} />
            <h4 className="scroll-slide-right">{contact.rawLink}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDisplay;
