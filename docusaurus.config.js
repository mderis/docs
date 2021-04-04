/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Apiato',
  tagline: 'Build scalable API\'s faster | With PHP 7.4 and Laravel 8.0',
  url: 'https://moslem-deris.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'moslem-deris', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  themeConfig: {
    hideableSidebar: true,
    announcementBar: {
      id: 'v1-new-domain',
      content:
        '➡️ We are trying hard to move to version 10.0 of Apiato 🔄',
    },
    navbar: {
      title: 'Apiato',
      logo: {
        alt: 'Apiato Logo',
        src: 'img/logo.png',
      },  
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
          dropdownItemsAfter: [
            {
              to: '/versions',
              label: 'All versions',
            },
          ],
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://github.com/moslem-deris/docs/issues',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/apiato/apiato',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/apiato',
            },
            {
              label: 'Slack',
              href: 'https://apiato.slack.com/join/shared_invite/zt-mtriung2-1__8zBAaJO_xXa_kMFsHgQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/apiato/apiato',
            },
          ],
        },
      ],
      copyright: `Copyright © 2016 - ${new Date().getFullYear()} Apiato. Built with Love.`,
    },
    prism: {
      additionalLanguages: ['php'],
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
            'https://github.com/moslem-deris/docs/edit/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/moslem-deris/docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
