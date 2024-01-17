import Image from "next/image";
import styles from "./styles.module.scss";
import HeaderContent from "@/components/header/headerContent";

export default function Header() {
  return (
    <header className={styles.header}>
      <HeaderContent />
    </header>
  );
}
