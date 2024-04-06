import localFont from "next/font/local";
import Layout from "@/components/layout/layout";
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
