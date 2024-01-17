"use client";

import styles from "@/components/header/styles.module.scss";
import { logo } from "@/utils/common";
import Link from "next/link";

export default function HeaderContent() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Link href={"/"} className={styles.logoContainer}></Link>
        <nav className={styles.nav}>
          <Link href={"/"} className={styles.navLink}>
            Home
          </Link>
          <Link href={"/#Features"} className={styles.navLink}>
            Features
          </Link>
          <Link href={"/#Store"} className={styles.navLink}>
            Store
          </Link>
          <Link href={"/#Partnership"} className={styles.navLink}>
            Partnership
          </Link>
          <Link href={"/#Contact"} className={styles.navLink}>
            Contact
          </Link>
          <Link href={"/#Download"} className={styles.navLink}>
            Download
          </Link>
        </nav>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.btn_group}>
          <a className={styles.login_button}>Log in</a>
          <a className={styles.signup_button}>Sign Up</a>
        </div>
      </div>
    </div>
  );
}
