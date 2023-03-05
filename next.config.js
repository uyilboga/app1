const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      $lightPurple: #f6f4fe;
      $purple: #6a49f2;
      $bgPurple: #6a49f2;
      $darkPurple: #32236f;
      $darkPurple: #32236F;
      $bodyTextPurple: #3E3F66;
      $textWhite: #ffffff;
      $bgWhite: #ffffff;
      $sliderDotsColor: #D4D2DD;
      $lightBg: #DFDAF3;
      $white: #fff;
    `,
  },
};

module.exports = nextConfig;
