module.exports = {
  title: 'Business Hustle',
  tagline: 'Let us help you grow your business',
  url: 'https://bhw-d2.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'BHW', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Business Hustle ©',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Resources',
          position: 'left',
        },
        {to: 'blog', label: 'Updates', position: 'left'},
        {
          href: 'https://bhw-d2.vercel.app/docs/mdx',
          label: 'Project Management',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About Us',
          items: [
            {
              label: 'What we do',
              to: 'docs/doc1',
            },
            {
              label: 'Who we are',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/HustlebusinessWorldwide',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/businesshustleworldwide',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/HustleBusiness',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Latest News',
              to: 'blog',
            },
            {
              label: 'Contact Us',
              href: 'https://bit.ly/business-hustle',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Simple eternity holdings (Pty) Ltd. All rights reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
