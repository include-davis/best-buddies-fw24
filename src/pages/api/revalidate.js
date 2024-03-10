export default async function handler(_, res) {
  try {
    await res.revalidate("/");
    await res.revalidate("/about/ucd");
    await res.revalidate("/about/intl");
    await res.revalidate("/events/chapter");
    await res.revalidate("/events/regional-state");
    await res.revalidate("/members/new");
    await res.revalidate("/members/current");
    // await res.revalidate("contact");
    return res.json({ ok: true, error: null });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err });
  }
}
