"use client";

import styles from "@/components/header/styles.module.scss";
import { logo } from "@/utils/common";
import Link from "next/link";
import Container from "../Container";
import { Box } from "@chakra-ui/react";

export default function HeaderContent() {
  return (
    <Container>
      <Box className={styles.navbar}>
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
            <button className={styles.login_button}>Log in</button>
            <button className={styles.signup_button}>Sign up</button>
          </div>
        </div>
      </Box>
    </Container>
  );
}
