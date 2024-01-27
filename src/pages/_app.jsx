import localFont from "next/font/local";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "@/styles/globals.scss";

// note: weight & style property determines the font used?
const helveticaNeue = localFont({
  src: [
    {
      path: "../fonts/HelveticaNeue.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/HelveticaNeueBold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-helvetica-neue",
  fallback: ["arial"],
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
