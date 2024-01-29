import {
  AppStoreIcon,
  FaceBookIcon,
  GooglePlayIcon,
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon,
} from "@/assets/icons";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.footer_content}>
            <div className={styles.footer_main}>
              <div className={styles.footer_img}>
                <div className={styles.logo}>
                  <Image
                    alt="logo"
                    src="/images/logo.png"
                    width={231}
                    height={31}
                  />
                </div>
                <div className={styles.logo_txt}>
                  Delivering convenience and excellence to all fleet sizes
                </div>
              </div>
              <div className={styles.footer_list}>
                <div className={styles.link_main}>
                  <div className={styles.link_header}>
                    <p>Company</p>
                  </div>
                  <div className={styles.link_body}>
                    <Link href="/" className={styles.link}>
                      Home
                    </Link>
                    <Link href="/" className={styles.link}>
                      Features
                    </Link>
                    <Link href="/" className={styles.link}>
                      Store
                    </Link>
                    <Link href="/" className={styles.link}>
                      Partnership
                    </Link>
                    <Link href="/" className={styles.link}>
                      Contact
                    </Link>
                  </div>
                </div>
                <div className={styles.link_main}>
                  <div className={styles.link_header}>
                    <p>Resource</p>
                  </div>
                  <div className={styles.link_body}>
                    <Link href="/" className={styles.link}>
                      Download
                    </Link>
                    <Link href="/" className={styles.link}>
                      Manuals
                    </Link>
                  </div>
                </div>
                <div className={styles.link_main}>
                  <div className={styles.link_header}>
                    <p>Legal</p>
                  </div>
                  <div className={styles.link_body}>
                    <Link href="/" className={styles.link}>
                      Terms
                    </Link>
                    <Link href="/" className={styles.link}>
                      Privacy
                    </Link>
                    <Link href="/" className={styles.link}>
                      Returns & Refunds
                    </Link>
                    <Link href="/" className={styles.link}>
                      Product Warranty
                    </Link>
                  </div>
                </div>
                <div className={styles.link_main}>
                  <div className={styles.link_header}>
                    <p>Get the app</p>
                  </div>
                  <div className={styles.link_body}>
                    <Link href="/" className={styles.link}>
                      <GooglePlayIcon />
                    </Link>
                    <Link href="/" className={styles.link}>
                      <AppStoreIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.social}>
          <div className={styles.footer_social}>
            <div className={styles.social_main}>
              <div className={styles.text_box}>
                <p>© Blue Star ELD™. All rights reserved.</p>
              </div>
              <div className={styles.icon_box}>
                <div className={styles.icon_card}>
                  <div className={styles.icon}>
                    <YouTubeIcon />
                  </div>
                </div>
                <div className={styles.icon_card}>
                  <div className={styles.icon}>
                    <TelegramIcon />
                  </div>
                </div>
                <div className={styles.icon_card}>
                  <div className={styles.icon}>
                    <InstagramIcon />
                  </div>
                </div>
                <div className={styles.icon_card}>
                  <div className={styles.icon}>
                    <FaceBookIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
