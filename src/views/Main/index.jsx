import styles from "./styles.module.scss";
import Header from "@/components/header";
import { Banner } from "@/components/Banner";
import Products from "@/components/Products";
import Compliance from "@/components/Compliance";
import Tracking from "@/components/Tracking";
import Integrations from "@/components/Integrations";
import Dispatch from "@/components/Dispatch";
import Record from "@/components/Record";
import Plan from "@/components/Plan";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Products />
      <Compliance />
      <Tracking />
      <Integrations />
      <Dispatch />
      <Record />
      <Plan />
      <ContactUs />
      <Footer />
    </main>
  );
}
