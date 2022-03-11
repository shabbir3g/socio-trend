module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://socio-trend.vercel.app/:path*",
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "img.icons8.com",
      "encrypted-tbn0.gstatic.com",
      "ichef.bbci.co.uk",
      "uitheme.net",
      "thumbs.dreamstime.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ],
  },
};