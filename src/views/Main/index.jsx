import styles from "./styles.module.scss";
import Header from "@/components/header";
import { Banner } from "@/components/Banner";

export default function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <Banner />
    </main>
  );
}
