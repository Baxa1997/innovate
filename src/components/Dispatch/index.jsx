import { Animation, MotionSection } from "@/utils/animation";
import Container from "../Container";
import styles from "./styles.module.scss";
import { productFadeinDown, textFadeinDown } from "@/utils/constants";
import Image from "next/image";
import { dispatchData } from "./mock";

export default function Dispatch() {
  return (
    <div className={styles.dispatch}>
      <Container>
        <MotionSection>
          <Animation variants={textFadeinDown}>
            <div className={styles.textBox}>
              <div className={styles.desc}>
                <h6 className={styles.coming}>Coming Soon</h6>
                <h3 className={styles.title}>Dispatch Board</h3>
              </div>
              <div className={styles.desc}>
                <h5 className={styles.text}>
                  Zero Max ELD allows you to manage your loads quickly and
                  easily. Our innovative calculation system will provide updates
                  on possible delays for each load based on the vehicle`s
                  current location and streamline your truck routing process by
                  receiving instant notifications when drivers arrive at the
                  pickup location or finish the delivery.
                </h5>
              </div>
            </div>
          </Animation>
        </MotionSection>
      </Container>
      <Container>
        <div className={styles.content}>
          <MotionSection>
            <Animation variants={productFadeinDown}>
              <div className={styles.main_image}>
                <div className={styles.imageBox}>
                  <div className={styles.image}>
                    <Image
                      src="/images/dispatch.webp"
                      alt="dispatch"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>
            </Animation>
          </MotionSection>
        </div>
      </Container>
      <Container>
        <MotionSection>
          <Animation variants={productFadeinDown}>
            <div className={styles.grid}>
              {dispatchData.map((item) => (
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
      </Container>
    </div>
  );
}
