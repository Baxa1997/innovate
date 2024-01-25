"use client";
import { Animation, MotionSection } from "@/utils/animation";
import Container from "../Container";
import styles from "./styles.module.scss";
import { textFadeinDown } from "@/utils/constants";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Record() {
  return (
    <ParallaxProvider>
      <div className={styles.record}>
        <Container>
          <MotionSection>
            <Animation variants={textFadeinDown}>
              <div className={styles.textBox}>
                <div className={styles.desc}>
                  <h6 className={styles.coming}>Coming Soon</h6>
                  <h3 className={styles.title}>Record. Analyze. Improve.</h3>
                </div>
                <div className={styles.desc}>
                  <h5 className={styles.text}>
                    Save on insurance rates and improve safety scores throughout
                    your fleet with our AI Dash Camera System. With the cost of
                    accidents potentially reaching upwards of $1.2 million
                    according to the FMCSA, you can save millions by securing
                    your fleet.
                  </h5>
                </div>
              </div>
            </Animation>
          </MotionSection>
        </Container>
        <Container>
          <div className={styles.parallax}>
            <Parallax speed={8}>
              <div className={styles.background}>
                <div className={styles.camera_1}>
                  <Image
                    src="/images/camera_1.webp"
                    alt="camera number 1"
                    layout="fill"
                  />
                </div>
              </div>
            </Parallax>
            <Parallax speed={-12}>
              <div className={styles.background}>
                <div className={styles.camera_2}>
                  <Image
                    src="/images/camera_2.webp"
                    alt="camera number 1"
                    layout="fill"
                  />
                </div>
              </div>
            </Parallax>
          </div>
        </Container>
      </div>
    </ParallaxProvider>
  );
}
