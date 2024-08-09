import Header from "@/components/header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      Hello World
    </main>
  );
}
