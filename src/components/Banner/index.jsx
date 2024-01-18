import Image from "next/image";
import styles from "./styles.module.scss";
import Container from "../Container/index.jsx";

export function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <Container>
          <div className={styles.bannerDetails}>
            <div className={styles.titleBox}>
              <h3 className={styles.title}>Innovative Fleet Management</h3>
              <p className={styles.text}>
                ELD Compliance, GPS Tracking, Dispatch Board and AI Dash Camera
              </p>
              <div className={styles.btn_group}>
                <a className={styles.order_button}>Order now</a>
                <a className={styles.start_button}>Get started</a>
              </div>
            </div>
            <div className={styles.imageBox}>
              {/* <Image
                alt="admin_panel"
                src="/images/banner_admin_panel.webp"
                width={768}
                height={512}
                loading="lazy"
              /> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
