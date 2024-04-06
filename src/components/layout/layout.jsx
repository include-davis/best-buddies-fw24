import Navbar from "@/components/navBar/navBar";
import Footer from "@/components/footer/footer";
import Head from "next/head";
import { useRouter } from "next/router";

const pageMappings = {
  "/": "Home",
  "/about/ucd": "About-UCD",
  "/about/intl": "About-INTL",
  "/events/chapter": "Chapter Events",
  "/events/regional-state": "Regional & State Events",
  "/members/new": "New Members",
  "/members/current": "Current Members",
  "/contact": "Contact",
};

const pageDescriptions = {
  "/": "Landing page indicating the purpose of Best Buddies UCD, the organization's mission, featured events, announcements, and a member spotlight.",
  "/about/ucd":
    "About page depicting the Best Buddies UCD Chapter with sections that highlight how the organization operates at UC Davis.",
  "/about/intl":
    "About page describing and emphasizing the goals of the Best Buddies International organization.",
  "/events/chapter":
    "Events page displaying the upcoming events hosted by Best Buddies UCD along with a calendar for easier viewing.",
  "/events/regional-state":
    "Events page showcasing the regional and state events hosted by Best Buddies International.",
  "/members/new":
    "Members page providing instructions and tutorial videos to assist new members who are interested in joining Best Buddies UCD.",
  "/members/current":
    "Members page for current participants who want to renew their membership or keep up with the latest news.",
  "/contact":
    "Contact page with a form for inquiries. The form allows users to send messages to the Best Buddies UCD team.",
};

export default function Layout({ children }) {
  const router = useRouter();
  const page = pageMappings[router.pathname];
  const description = pageDescriptions[router.pathname];

  return (
    <>
      <Navbar />
      <main>
        <Head>
          <title>{`${page} | Best Buddies UCD`}</title>
          <meta type="description" content={description} />
        </Head>
        {children}
      </main>
      <Footer />
    </>
  );
}
