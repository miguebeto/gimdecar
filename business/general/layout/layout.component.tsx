import Navigation from "../navbar/Navigation";
import Footer from "../footer/footer";
import styles from "./layout.module.css";
import { useRouter } from "next/router";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import HeaderComponent from "./header/header.component";

export default function Layout({ children }: any) {
  const router = useRouter();
  console.log(router.asPath);

  const background = {
    backgroundColor: router.asPath === "/english" ? "#681319" : "#f2ebe1",
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content_view} style={background}>
          <HeaderComponent/>
          <Navigation />
          {children}
          {/* <FloatingWhatsApp phoneNumber="573058779813" /> */}
          <Footer />
        </div>
      </div>
    </>
  );
}
