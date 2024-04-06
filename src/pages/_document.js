import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          sizes="87x87"
          href="/best-buddies-logo.svg"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Best Buddies is an international organization that focuses on normalizing friendships between people with and without intellectual and developmental disabilities. We pair UCD students to people in the community with intellectual and developmental disabilities in one-to-one friendships for the academic year."
        />
        <meta
          name="keywords"
          content="best buddies, best buddies at ucd, uc davis, ucd best buddies, international organization, intellectual disability, developmental disability, friendship, friendship program, friendship club, friendship organization, friendship organization davis, friendship organization uc davis, friendship organization california, friendship organization northern california, friendship organization sacramento, friendship organization davis california, friendship organization davis ca"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
