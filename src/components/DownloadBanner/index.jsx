import styles from "./styles.module.scss";
import {downloadCont} from "@/components/DownloadBanner/mock/downloads";
import Link from "next/link";
import Container from "@/components/Container";

export default function DownloadBanner() {
    return (
        <div className={styles.downloadBanner}>
            <Container>
                <div className={styles.downloadCont}>
                    <div className={styles.titleCont}>
                        <h3 className={styles.title}>Download our app</h3>
                        <p>Blue Star ELD™ delivers an innovative Fleet Management and Electronic Logging system that
                            empowers
                            carriers and drivers with various advanced features.</p>
                    </div>
                    <div className={styles.downloadBtnsCont}>
                        <h5>Download Apps & Manuals</h5>
                        {downloadCont.map((item, index) => (
                            <Link
                                className={`${styles.downloadBtn} ${styles[item.className]}`}
                                href={item.link}
                                key={item.id}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}