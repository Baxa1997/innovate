import { Animation, MotionSection } from "@/utils/animation";
import Container from "../Container";
import { integrationsData } from "./mock";
import styles from "./styles.module.scss";
import { productFadeinDown, textFadeinDown } from "@/utils/constants";
import Image from "next/image";

export default function Integrations() {
  return (
    <div className={styles.integrations}>
      <Container>
        <MotionSection>
          <Animation variants={textFadeinDown}>
            <div className={styles.textBox}>
              <div className={styles.desc}>
                <h3 className={styles.title}>Integrations</h3>
              </div>
              <div className={styles.desc}>
                <h5 className={styles.text}>
                  Connect your essential third-party apps to benefit from
                  real-time data, improve efficiencies, and reduce operational
                  costs
                </h5>
              </div>
            </div>
          </Animation>
        </MotionSection>
      </Container>
      <Container>
        <MotionSection>
          <Animation variants={productFadeinDown}>
            <div className={styles.grid}>
              {integrationsData.map((item) => (
                <div key={item.id} className={styles.card}>
                  <div className={styles.box}>
                    <div className={styles.image}>
                      <Image src={item.image} alt={item.title} layout="fill" />
                    </div>
                  </div>
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
      </Container>
    </div>
  );
}
