import { Arial } from "next/fonts/google";
import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import "@/styles/globals.scss";

const arial = Arial({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-arial",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${arial.variable}`}>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}