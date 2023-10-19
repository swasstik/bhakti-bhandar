import React, { FC } from "react";
import classes from "./whatsapp.module.css";
import Image from "next/image";
import Link from "next/link";

interface WhatsAppLogoProps {
  generateWhatsAppURL: () => string;
}

const WhatsAppLogo: FC<WhatsAppLogoProps> =  ({ generateWhatsAppURL }) => {
  return (
    <div className={classes.whatsappLogo}>
      <Link href="tel:9691794836">
        <Image width={500} height={500} src="/phone.svg" alt="phone" />
      </Link>
      <Link href={generateWhatsAppURL()}>
        <Image width={1000} height={1000} src="/whatsapp.svg" alt="phone" />
      </Link>
    </div> 
  );
};

export default WhatsAppLogo;
