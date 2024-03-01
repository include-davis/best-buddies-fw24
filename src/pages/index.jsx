import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/button/button";
import EventCard from "@/components/eventCard/eventCard";

const events = [
  {
    title: "Event 1",
    date: "2022-01-01",
    description: "Event 1 description",
    imagePath: "/event1.jpg",
    altText: "Event 1 image",
    eventLink: "/event1",
  },
];

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`body-1`}>
      <EventCard />
    </div>
  );
}
