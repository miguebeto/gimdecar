import Navigation from "../navbar/Navigation";
import Footer from "../footer/footer";
import styles from "./layout.module.css";
import {useRouter} from "next/router";

export default function Layout({ children }: any) {
    const router = useRouter();
    console.log(router.asPath)

    const background = {
        backgroundColor: router.asPath === '/idiomas' ? '#681319' : '#f2ebe1'
    }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content_view} style={background}>
          <Navigation />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
