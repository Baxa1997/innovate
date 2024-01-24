import styles from './styles.module.scss'
import Header from "@/components/header";
import PartnershipBanner from "@/components/PartnershipBanner";

export default function PartnerShipView() {
    return (
        <main className={styles.main}>
            <Header/>
            <PartnershipBanner/>
        </main>
    );
}