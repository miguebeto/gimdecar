import Navigation from "../navbar/Navigation";
import Footer from "../footer/footer";
import styles from "./layout.module.css";

export default function Layout({ children }: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content_view}>
          <Navigation />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
