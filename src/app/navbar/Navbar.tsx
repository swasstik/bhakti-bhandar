"use client";

import { useState } from "react";
import Link from "next/link";
import classes from "./navbar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidPhoneCall } from "react-icons/bi";
import Image from "next/image";

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header>
      <div className={classes.mobileHeader}>
        <div style={{ display: "flex" , alignItems : "center"}}>
          {showMobileMenu ? (
            <FiX
              className={classes.hambergerMenu}
              onClick={() => setShowMobileMenu(false)}
            />
          ) : (
            <FiMenu
              className={classes.hambergerMenu}
              onClick={() => setShowMobileMenu(true)}
            />
          )}
          <div style={{marginLeft : "15px"}}>
            <Image width={30} height={30} src="/logo.webp" alt="logo" />
          </div>
        </div>
        <div>
          <p className={classes.brandName}>
            <Link href="tel:9691794836">
              <BiSolidPhoneCall /> <span>9691794836</span>
            </Link>
          </p>
        </div>
      </div>

      {showMobileMenu && (
        <div className={classes.mobileMenu}>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
      )}

      <div className={classes.webView}>
        <div className={classes.logo}>
          <Link href="/">BHAKTI BHANDAR</Link>
        </div>
        <div className={classes.Links}>
          <div>
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
