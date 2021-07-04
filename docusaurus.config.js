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
           href: 'https://www.businesshustle.online.dream.website/landingpage/pluginops-page-9',
           label:'Project Management',
           label: 'right',
        },
          
     
        { footer: 
      style: 'dark',
      
        }
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
              href: '#',
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
        }, module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: 'blog',
        /**
         * Base url to edit your site.
         * Docusaurus will compute the final editUrl with "editUrl + relativeDocPath"
         */
        editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        /**
         * For advanced cases, compute the edit url for each Markdown file yourself.
         */
        editUrl: ({locale, blogDirPath, blogPath, permalink}) => {
          return `https://github.com/facebook/docusaurus/edit/master/website/${blogDirPath}/${blogPath}`;
        },
        /**
         * Useful if you commit localized files to git.
         * When Markdown files are localized, the edit url will target the localized file,
         * instead of the original unlocalized file.
         * Note: this option is ignored when editUrl is a function
         */
        editLocalizedFiles: false,
        /**
         * Blog page title for better SEO
         */
        blogTitle: 'Blog title',
        /**
         * Blog page meta description for better SEO
         */
        blogDescription: 'Blog',
        /**
         * Number of blog post elements to show in the blog sidebar
         * 'ALL' to show all blog posts
         * 0 to disable
         */
        blogSidebarCount: 5,
        /**
         * Title of the blog sidebar
         */
        blogSidebarTitle: 'All our posts',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'blog',
        include: ['*.md', '*.mdx'],
        postsPerPage: 10,
        /**
         * Theme components used by the blog pages.
         */
        blogListComponent: '@theme/BlogListPage',
        blogPostComponent: '@theme/BlogPostPage',
        blogTagsListComponent: '@theme/BlogTagsListPage',
        blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
        /**
         * Remark and Rehype plugins passed to MDX.
         */
        remarkPlugins: [
          /* require('remark-math') */
        ],
        rehypePlugins: [],
        /**
         * Custom Remark and Rehype plugins passed to MDX before
         * the default Docusaurus Remark and Rehype plugins.
         */
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
        /**
         * Truncate marker, can be a regex or string.
         */
        truncateMarker: /<!--\s*(truncate)\s*-->/,
        /**
         * Show estimated reading time for the blog post.
         */
        showReadingTime: true,
        /**
         * Blog feed.
         * If feedOptions is undefined, no rss feed will be generated.
         */
        feedOptions: {
          type: '', // required. 'rss' | 'feed' | 'all'
          title: '', // default to siteConfig.title
          description: '', // default to  `${siteConfig.title} Blog`
          copyright: '',
          language: undefined, // possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        },
      },
    ],
  ],
};
      },
    ],
  ],
};
