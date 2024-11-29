import React, { CSSProperties, useEffect, useState } from "react";
import styles from "./contactDisplay.module.css";
import ContactIcon from "../contactIcon/ContactIcon";
import { ContactInfo, ListOfContactInfo } from "@/types";

const ContactDisplay = ({
  contactList,
}: {
  contactList: ListOfContactInfo;
}) => {
  return (
    <div className={`${styles.contactList}`}>
      {contactList.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

const Contact = ({ contact }: { contact: ContactInfo }) => {
  const [linkLenght, setLinkLenght] = useState(0);
  // const [textStyle, setTextStyle] = useState<CSSProperties>();

  // type CustomCSSProperties = React.CSSProperties & {
  //   "--hover-width"?: string;
  // };

  const h4Style = {
    h4: { transition: "width " },
  };

  function getTextWidth(text: string): number {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (context) {
      context.font = getComputedStyle(document.body).font;
      return Math.ceil(context?.measureText(text).width);
    }
    return 0;
  }

  useEffect(() => {
    setLinkLenght(getTextWidth(contact.rawLink));
    // const textLenght = getTextWidth(contact.rawLink);
    // const hoverStyle: CustomCSSProperties = {
    //   "--hover-width": `${textLenght}px`,
    // };
    // setTextStyle(hoverStyle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.contactItem}>
      <ContactIcon
        contactInfo={contact}
        className={`${styles.icon} scroll-slide-right`}
      />
      <h4>{contact.rawLink}</h4>
      {/* {linkLenght} */}
    </div>
  );
};

export default ContactDisplay;
