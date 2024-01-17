import Image from "next/image";
import styles from "./styles.module.scss";
import Header from "@/components/header";
import Cards from "@/components/cards";

export default function Main() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
