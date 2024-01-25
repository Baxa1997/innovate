import { Animation, MotionSection } from "@/utils/animation";
import Container from "../Container";
import { productsData } from "./mock";
import styles from "./styles.module.scss";
import { productFadeinDown, textFadeinDown } from "@/utils/constants";

export default function Products() {
  return (
    <div className={styles.products}>
      <Container>
        <MotionSection>
          <Animation variants={textFadeinDown}>
            <div className={styles.textBox}>
              <div className={styles.desc}>
                <h6 className={styles.label}>Features</h6>
                <h3 className={styles.title}>Our Products</h3>
              </div>
              <div className={styles.desc}>
                <h5 className={styles.text}>
                  Everything you need to manage your fleet is now in one place
                  with simplified ELD Compliance, Real-time GPS tracking,
                  Sharing Vehicle Location, a Dispatch Board, and AI Dash Camera
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
              {productsData.map((item) => (
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
