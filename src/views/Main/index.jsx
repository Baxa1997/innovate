import styles from "./styles.module.scss";
import Header from "@/components/header";
import { Banner } from "@/components/Banner";
import Products from "@/components/Products";
import Compliance from "@/components/Compliance";
import Tracking from "@/components/Tracking";
import Integrations from "@/components/Integrations";

export default function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Products />
      <Compliance />
      <Tracking />
      <Integrations />
    </main>
  );
}
