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
        source: "/event",
        destination: "/event/chapter",
        permanent: true,
      },
      {
        source: "/member",
        destination: "/member/new",
        permanent: true,
      },
    ];
  },
};