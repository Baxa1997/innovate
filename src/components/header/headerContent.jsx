"use client";

import styles from "@/components/header/styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Animation } from "@/utils/animation";
import {
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import { BurgerIcon, CloseIcon } from "@/assets/icons";
import BurgerContent from "./BurgerContent";
import CustomButton from "../CustomButton";

let scrollThreshold = [0, 2];

export default function HeaderContent() {
  let { scrollY } = useScroll();
  let scrollYOnDirectionChange = useRef(scrollY.get());
  let lastPixelsScrolled = useRef();
  let lastScrollDirection = useRef();
  let pixelsScrolled = useMotionValue(0);
  let transform = useTransform(pixelsScrolled, scrollThreshold, [0, -80]);
  let transformMotion = useMotionTemplate`${transform}px`;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleChange(latest) {
      if (latest < 0) return;

      setOpen(false);
      let isScrollingDown = scrollY.getPrevious() - latest < 0;
      let scrollDirection = isScrollingDown ? "down" : "up";
      let currentPixelsScrolled = pixelsScrolled.get();
      let newPixelsScrolled;

      if (lastScrollDirection.current !== scrollDirection) {
        lastPixelsScrolled.current = currentPixelsScrolled;
        scrollYOnDirectionChange.current = latest;
      }

      if (isScrollingDown) {
        newPixelsScrolled = Math.min(
          lastPixelsScrolled.current +
            (latest - scrollYOnDirectionChange.current),
          scrollThreshold[1]
        );
      } else {
        newPixelsScrolled = Math.max(
          lastPixelsScrolled.current -
            (scrollYOnDirectionChange.current - latest),
          scrollThreshold[0]
        );
      }

      pixelsScrolled.set(newPixelsScrolled);
      lastScrollDirection.current = scrollDirection;
    }

    const scrollChange = scrollY.on("change", handleChange);
    return () => scrollChange();
  }, [pixelsScrolled, scrollY]);

  return (
    <>
      <Animation
        className={styles.framerHeader}
        style={{
          y: transformMotion,
        }}
      >
        <Box className={styles.navbar}>
          <div className={styles.leftSide}>
            <Link href={"/"} className={styles.logoContainer}>
              <Image
                src="/images/logo.svg"
                alt="Vercel Logo"
                className={styles.logo}
                width={172}
                height={24}
                priority
              />
            </Link>
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
              <Link href={"/partnership"} className={styles.navLink}>
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
              <CustomButton className={styles.login_button} type="secondary">
                Log in
              </CustomButton>
              <CustomButton className={styles.signup_button}>
                Sign up
              </CustomButton>
            </div>
            <div
              className={styles.icon_box}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <CloseIcon /> : <BurgerIcon />}
            </div>
          </div>
        </Box>
      </Animation>
      {open && <BurgerContent />}
    </>
  );
}
