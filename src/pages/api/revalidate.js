export default async function handler(_, res) {
  try {
    await res.revalidate("/");
    await res.revalidate("/about/intl");
    await res.revalidate("/about/ucd");
    await res.revalidate("/contact");
    await res.revalidate("/events/chapter");
    await res.revalidate("/events/regional-state");
    await res.revalidate("/members/current");
    await res.revalidate("/members/new");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
