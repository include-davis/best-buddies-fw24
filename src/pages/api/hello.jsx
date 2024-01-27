// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// only need to worry about API if you're backend
// contact form is backend for emailing
// events page needs backend to manipulate google calendar

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
