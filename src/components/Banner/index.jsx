import Image from "next/image";
import styles from "./styles.module.scss";
import { Animation, MotionSection } from "@/utils/animation";
import { fadeinDown, fadeinDownPhone } from "@/utils/constants";
import CustomButton from "../CustomButton";
import Link from "next/link";

export function Banner() {
  return (
    <MotionSection>
      <div className={styles.banner}>
        <div className={styles.banner_container}>
          <div className={styles.bannerDetails}>
            <Animation variants={fadeinDown} className={styles.titleBox}>
              <div className={styles.desc}>
                <h3 className={styles.title}>Innovative Fleet Management</h3>
                <p className={styles.text}>
                  ELD Compliance, GPS Tracking, Dispatch Board and AI Dash
                  Camera
                </p>
              </div>
              <div className={styles.btn_group}>
                <Link
                  href="https://app.zeromaxeld.com/"
                  target="_blank"
                  className={styles.order_button}
                  type="secondary"
                  padding="12px 18px"
                >
                  Order Now
                </Link>
                <Link
                  href="https://app.zeromaxeld.com/"
                  target="_blank" className={styles.start_button} padding="12px 18px">
                  Get Started
                </Link>
              </div>
            </Animation>
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
                        src="/images/iphone_template.svg"
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
                      src="/images/banner_laptop_screen.png"
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
