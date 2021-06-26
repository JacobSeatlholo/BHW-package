module.exports = {
  title: 'Unlimited Business Resources',
  tagline: 'Let us help you grow your business',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Business Hustle',
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
           href: 'https://businesshustleworldwideltd.vercel.app/docs/doc2#our-digital-transformation-strategy',
           label: 'Project Management',
           position: 'right',
         },{to: 'blog', label: 'Pricing', position: 'left'},
        
       
        
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Resources',
              to: 'docs/doc1',
            },
            {
              label: 'What we offer',
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
              label: 'Updates',
              to: 'blog',
            },
            {
              label: 'Contact us',
              href: 'https://bit.ly/business-hustle',
            },
          ],
        },
      ],
      copyright: `Copyright © Business Hustle ${new Date().getFullYear()} Simple eternity holdings (Pty) Ltd.`,
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
