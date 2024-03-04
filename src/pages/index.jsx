import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/pages/home/home.module.scss";
import AutoImage from "@/components/AutoImage/AutoImage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`body-1`}>
      <h1>Home</h1>
    </div>
  );
}
