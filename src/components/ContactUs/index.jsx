import { Animation, MotionSection } from "@/utils/animation";
import Container from "../Container";
import styles from "./styles.module.scss";
import { productFadeinDown, textFadeinDown } from "@/utils/constants";
import { contactUs } from "./mock";
import ContactUsForm from "./components/ContactUsForm";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className={styles.contactus} id="contact">
      <Container>
        <MotionSection>
          <Animation variants={textFadeinDown}>
            <div className={styles.textBox}>
              <div className={styles.desc}>
                <h6 className={styles.label}>Contact us</h6>
                <h3 className={styles.title}>Chat to our friendly team</h3>
              </div>
              <div className={styles.desc}>
                <h5 className={styles.text}>
                  We’d love to hear from you. Please fill out this form or shoot
                  us an email.
                </h5>
              </div>
            </div>
          </Animation>
        </MotionSection>
      </Container>
      <Container>
        <MotionSection>
          <Animation variants={productFadeinDown}>
            <div className={styles.contact}>
              <div className={styles.info}>
                {contactUs.map((item) => (
                  <div className={styles.card} key={item.id}>
                    <div className={styles.iconBox}>
                      <div className={styles.icon}>{item.icon}</div>
                    </div>
                    <div className={styles.body}>
                      <div className={styles.title}>
                        <p>{item.title}</p>
                      </div>
                      <div className={styles.text}>
                        <p>{item.text}</p>
                      </div>
                    </div>
                    <div className={styles.footer}>
                      <Link
                        target="_blank"
                        href={item.link.link}
                        className={styles.link}
                      >
                        <p>{item.link.title}</p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.contact_form}>
                <ContactUsForm />
              </div>
            </div>
          </Animation>
        </MotionSection>
      </Container>
    </div>
  );
}
