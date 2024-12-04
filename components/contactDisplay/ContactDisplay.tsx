import React from "react";
import styles from "./contactDisplay.module.css";
import ContactIcon from "../contactIcon/ContactIcon";
import { ContactInfo, ListOfContactInfo } from "@/types";
import Link from "next/link";

const ContactDisplay = ({
  contactList,
}: {
  contactList: ListOfContactInfo;
}) => {
  return (
    <div className={styles.contactList}>
      {contactList.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

const Contact = ({ contact }: { contact: ContactInfo }) => {
  // function getTextWidth(text: string): number {
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");

  //   if (context) {
  //     context.font = getComputedStyle(document.body).font;
  //     return Math.ceil(context?.measureText(text).width);
  //   }
  //   return 0;
  // }

  return (
    <Link
      href={contact.htmlLink}
      target="_blank"
      className={styles.contactItem}
    >
      <ContactIcon
        contactInfo={contact}
        className={`${styles.icon} scroll-slide-right`}
      />
      <h4>{contact.rawLink}</h4>
    </Link>
  );
};

export default ContactDisplay;
