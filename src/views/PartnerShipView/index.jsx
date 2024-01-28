import styles from './styles.module.scss'
import Header from "@/components/header";
import PartnershipBanner from "@/components/PartnershipBanner";
import PartnershipFeatures from "@/components/PartnershipFeatures";
import Footer from "@/components/Footer";
import PartnershipFormComp from "src/components/PartnershipFormComp";

export default function PartnerShipView() {
    return (
        <main className={styles.main}>
            <Header/>
            <PartnershipBanner/>
            <PartnershipFeatures/>
            <PartnershipFormComp/>
            <Footer/>
        </main>
    );
}