import Image from "next/image";
import styles from "./styles.module.scss";
import Container from "../Container/index.jsx";
import {
  AnimatePresenceMotion,
  Animation,
  MotionSection,
} from "@/utils/animation";
import {
  fadeInUp,
  fadeinDown,
  fadeinDownPhone,
  fadeinLeft,
  fadeinRight,
} from "@/utils/constants";

export function Banner() {
  return (
    <MotionSection>
      <div className={styles.banner}>
        <div className={styles.banner_container}>
          <div className={styles.bannerDetails}>
            <div className={styles.titleBox}>
              <Animation variants={fadeinDown}>
                <div className={styles.desc}>
                  <h3 className={styles.title}>Innovative Fleet Management</h3>
                  <p className={styles.text}>
                    ELD Compliance, GPS Tracking, Dispatch Board and AI Dash
                    Camera
                  </p>
                </div>
                <div className={styles.btn_group}>
                  <a className={styles.order_button}>Order Now</a>
                  <a className={styles.start_button}>Get started</a>
                </div>
              </Animation>
            </div>
            <div className={styles.imageBox}>
              <Animation variants={fadeinDownPhone}>
                <div
                  style={{
                    height: "568px",
                  }}
                >
                  <div className={styles.phone}>
                    <div className={styles.border_phone}>
                      <Image
                        alt="admin_panel"
                        src="/images/iphone_template.png"
                        fill={true}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.background_phone}>
                      <Image
                        alt="admin_panel"
                        src="/images/phone.jpg"
                        fill={true}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={styles.admin}>
                    <Image
                      alt="admin_panel"
                      src="/images/banner_admin_panel.webp"
                      fill={true}
                      loading="lazy"
                    />
                  </div>
                </div>
              </Animation>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
