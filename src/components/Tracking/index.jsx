import { Animation, MotionSection } from "@/utils/animation";
import Container from "../Container";
import styles from "./styles.module.scss";
import { textFadeinDown } from "@/utils/constants";
import { trackingData } from "./mock";
import Image from "next/image";

export default function Tracking() {
  return (
    <div className={styles.tracking}>
      <Container>
        <MotionSection>
          <Animation variants={textFadeinDown}>
            <div className={styles.textBox}>
              <div className={styles.desc}>
                <h6 className={styles.label}>GPS Tracking</h6>
                <h3 className={styles.title}>Smart Dashboard</h3>
              </div>
              <div className={styles.desc}>
                <h5 className={styles.text}>
                  Work smarter, not harder. We present our dashboard where you
                  can access all vehicles and driver`s information. Plan ahead
                  of time for fuel, scale, weigh stations or upcoming weather
                </h5>
              </div>
            </div>
          </Animation>
        </MotionSection>
      </Container>
      {trackingData.map((item) => (
        <>
          <Container>
            <MotionSection>
              <Animation variants={textFadeinDown}>
                <div
                  className={styles.card}
                  style={{
                    flexDirection: item.direction,
                  }}
                >
                  <div className={styles.content}>
                    <div className={styles.desc}>
                      <h5 className={styles.title}>{item.title}</h5>
                      <p className={styles.text}>{item.text}</p>
                    </div>
                  </div>
                  <div className={styles.imageBox}>
                    <div className={styles.main_image}>
                      <div className={styles.track_image}>
                        <Image alt="tracking" src={item.image} layout="fill" />
                      </div>
                    </div>
                    {item?.trackings.map((el) => (
                      <div
                        className={`${styles.tracking_image} ${
                          styles[el.className]
                        }`}
                        key={el.image}
                        style={{
                          height: el?.height || "",
                          width: el?.width || "",
                          maxWidth: el?.maxWidth || "",
                          minWidth: el?.minWidth || "",
                          left: el?.left || "",
                          top: el?.top || "",
                          right: el?.right || "",
                          bottom: el?.bottom || "",
                          aspectRatio: el?.aspectRatio || "",
                          transform: el?.transform || "",
                        }}
                      >
                        <div className={styles.img_position}>
                          <Image src={el.image} alt="el_image" layout="fill" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Animation>
            </MotionSection>
          </Container>
        </>
      ))}
    </div>
  );
}
