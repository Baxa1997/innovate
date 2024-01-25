import styles from './styles.module.scss'
import Header from "@/components/header";
import PartnershipBanner from "@/components/PartnershipBanner";
import PartnershipFeatures from "@/components/PartnershipFeatures";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function PartnerShipView() {
    return (
        <main className={styles.main}>
            <Header/>
            <PartnershipBanner/>
            <PartnershipFeatures/>
            <ContactUs/>
            <Footer/>
        </main>
    );
}