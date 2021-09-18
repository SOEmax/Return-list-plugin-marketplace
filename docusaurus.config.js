const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'The MarketPlace API',
  tagline: 'Return List Of Plugin',
  url: 'https://github.com/SOEmax/',
  baseUrl: '/marketplace_doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
//  organizationName: 'facebook', // Usually your GitHub org/user name.
 projectName: 'marketplace_doc', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SOEmax/marketplace_doc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/docs/apidoc#function-returns-a-list-of-plugins-on-the-marketplace', label: 'The Documentation for Return List of Plugin', position: 'left'},
          {
            href: 'https://github.com/SOEmax/marketplace_doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation Refrence',
            items: [
              {
                label: 'Response Payloads',
                to: '/docs/apidoc#response-payloads',
              },
              {
                label: 'Request Payloads',
                href: '/docs/apidoc#request-payloads',
              },
              {
                label: 'Tutorial Example',
                to: '/docs/apidoc#example',
              },
            ],
          },
          {
            title: 'Request Refrence',
            items: [
              {
                label: 'Customize Request',
                href: '/docs/apidoc#customize-request',
              },
              {
                label: 'Header Structure',
                href: '/docs/apidoc#header-structure',
              },
            ],
          },
          {
            title: 'Response Refrence',
            items: [
              {
                label: 'Header Structure',
                to: '/docs/apidoc#header-structure-1',
              },
              {
                label: 'Response Field Data Refrence',
                href: '/docs/apidoc#datatypes-of-fields-in-result',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The API Documentation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
