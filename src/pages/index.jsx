import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/button/button"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`body-1`}>
      <div>
        Best Buddies at UC Davis is a chapter of the global nonprofit Best Buddies
        International, which promotes social and economic inclusion for people
        with intellectual and developmental disabilities (IDD). We envision a
        world in which programs like Best Buddies are no longer needed because
        people with IDD are completely included in their communities. 
      </div>
    </div>
  );
}
