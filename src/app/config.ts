export const appConfig = {
  absoluteUrl: process.env.SITE_URL,
  name: 'SRI',
  companyName: 'SRI Pte Ltd',
  companyAddress: '140 Robinson Road SPACES, Crown at Robinson #13-07, Singapore 068907',
  contact: {
    email: 'hello@sri.sg',
  },
  currency: 'SGD',
  meta: {
    openGraph: {
      url: process.env.SITE_URL,
      site_name: 'SRI',
      images: [
        {
          url: `${process.env.SITE_URL}/opengraph.png`,
          alt: 'SRI Open Graph Image',
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      handle: '@1XTech',
      site: '@1XTech',
      cardType: 'summary_large_image',
    },
  },
  socialMediaLinks: {
    dribbble: 'https://dribbble.com/onexdesign',
    behance: 'https://www.behance.net/onextech',
    medium: 'https://medium.com/one-x-tech',
    twitter: 'https://twitter.com/1XTech',
    facebook: 'https://www.facebook.com/onextech',
    linkedin: 'https://www.linkedin.com/company/one-x-tech',
    github: '',
  },
  mail: {
    defaultFrom: 'One X Tech <dev@onextech.com>',
  },
}
