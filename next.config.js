/** @type {import('next').NextConfig} */

module.exports = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about/ucd",
        permanent: true,
      },
      {
        source: "/events",
        destination: "/events/chapter",
        permanent: true,
      },
      {
        source: "/members",
        destination: "/members/new",
        permanent: true,
      },
    ];
  },
};
