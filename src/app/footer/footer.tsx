import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";

const footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerMenu}>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/contact-us">Contact Us</Link>
        </div>
        <div>
          <Link href="/returns-and-refunds">Return and Refund</Link>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default footer;
