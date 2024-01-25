import styles from './styles.module.scss'
import Header from "@/components/header";
import PartnershipBanner from "@/components/PartnershipBanner";
import PartnershipFeatures from "@/components/PartnershipFeatures";

export default function PartnerShipView() {
    return (
        <main className={styles.main}>
            <Header/>
            <PartnershipBanner/>
            <PartnershipFeatures/>
        </main>
    );
}