"use client";

import styles from "@/components/header/styles.module.scss";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

export default function BurgerContent() {
  return (
    <Box className={styles.burger}>
      <nav className={styles.list}>
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
      <div className={styles.btn_group}>
        <button className={styles.login_button}>Log in</button>
        <button className={styles.signup_button}>Sign up</button>
      </div>
    </Box>
  );
}
