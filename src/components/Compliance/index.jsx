import { Animation, MotionSection } from "@/utils/animation";
import Container from "../Container";
import styles from "./styles.module.scss";
import {
  phoneFadeinDown,
  productFadeinDown,
  textFadeinDown,
} from "@/utils/constants";
import { complianceGrid1, complianceGrid2 } from "./mock";
import { PhoneIcon } from "@/assets/icons";
import Image from "next/image";

export default function Compliance() {
  return (
    <div className={styles.compliance}>
      <Container>
        <MotionSection>
          <Animation variants={textFadeinDown}>
            <div className={styles.textBox}>
              <div className={styles.desc}>
                <h6 className={styles.label}>ELD Compliance</h6>
                <h3 className={styles.title}>
                  Everything you need, all in one place
                </h3>
              </div>
              <div className={styles.desc}>
                <h5 className={styles.text}>
                  We built and tested the ELD with truckers in mind, which is
                  why our extensive features offer a simplified experience.
                </h5>
              </div>
            </div>
          </Animation>
        </MotionSection>
      </Container>

      <Container>
        <div className={styles.grid}>
          <MotionSection>
            <Animation variants={productFadeinDown}>
              <div className={styles.left_side}>
                {complianceGrid1.map((item) => (
                  <div key={item.id} className={styles.card}>
                    <span className={styles.iconbox}>{item?.icon}</span>
                    <div className={styles.content}>
                      <h5 className={styles.title}>{item.title}</h5>
                      <p className={styles.text}>{item.text}</p>
                    </div>
                    {item.coming_soon && (
                      <span className={styles.coming}>Coming Soon</span>
                    )}
                  </div>
                ))}
              </div>
            </Animation>
          </MotionSection>
          <MotionSection>
            <Animation variants={phoneFadeinDown}>
              <div className={styles.center_side}>
                <div className={styles.phone}>
                  <div className={styles.image}>
                    <div className={styles.screen}>
                      <Image
                        alt="phone"
                        src="/images/dark_phone.webp"
                        fill={true}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.icon}>
                    <PhoneIcon />
                  </div>
                </div>
              </div>
            </Animation>
          </MotionSection>
          <MotionSection>
            <Animation variants={productFadeinDown}>
              <div className={styles.right_side}>
                {complianceGrid2.map((item) => (
                  <div key={item.id} className={styles.card}>
                    <span className={styles.iconbox}>{item?.icon}</span>
                    <div className={styles.content}>
                      <h5 className={styles.title}>{item.title}</h5>
                      <p className={styles.text}>{item.text}</p>
                    </div>
                    {item.coming_soon && (
                      <span className={styles.coming}>Coming Soon</span>
                    )}
                  </div>
                ))}
              </div>
            </Animation>
          </MotionSection>
        </div>
      </Container>
    </div>
  );
}
