import localFont from "next/font/local";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "@/styles/globals.scss";

const helveticaNeue = localFont({
  src: [
    {
      path: "../fonts/HelveticaNeue.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueBold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-helvetica-neue",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${helveticaNeue.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
