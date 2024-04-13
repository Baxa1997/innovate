import { Animation, MotionSection } from "@/utils/animation";
import Container from "../Container";
import styles from "./styles.module.scss";
import { productFadeinDown, textFadeinDown } from "@/utils/constants";
import { CheckIcon, PlanCheckIcon } from "@/assets/icons";
import CustomButton from "../CustomButton";
import { planData } from "./mock";

export default function Plan() {
  return (
    <div className={styles.plan}>
      <Container>
        <MotionSection>
          <Animation variants={textFadeinDown}>
            <div className={styles.textBox}>
              <div className={styles.desc}>
                <h6 className={styles.label}>Pricing</h6>
                <h3 className={styles.title}>Plan that fit your scale</h3>
              </div>
              <div className={styles.desc}>
                <h5 className={styles.text}>
                  Simple, transparent pricing that grows with you
                </h5>
              </div>
            </div>
          </Animation>
        </MotionSection>
      </Container>
      <Container>
        <MotionSection>
          <Animation variants={productFadeinDown}>
            <div className={styles.main}>
              <div className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.head_content}>
                    <div className={styles.head_title}>
                      <p>Standard plan</p>
                    </div>
                    <div className={styles.head_text}>
                      <h4>$75/month</h4>
                    </div>
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.body_content}>
                    {planData.map((item) => (
                      <div className={styles.body_card} key={item.id}>
                        <div className={styles.icon_box}>
                          <div className={styles.icon}>
                            <PlanCheckIcon />
                          </div>
                        </div>
                        <div className={styles.desc}>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.footer}>
                  <div className={styles.footer_button}>
                    <CustomButton padding="12px 18px">Get started</CustomButton>
                  </div>
                </div>
              </div>
            </div>
          </Animation>
        </MotionSection>
      </Container>
    </div>
  );
}
