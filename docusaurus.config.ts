import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Superfluid Docs',
  tagline: 'Docs but they hyper super fluid',
  favicon: 'img/favicon.ico',
  themes: ['@docusaurus/theme-live-codeblock', '@markprompt/docusaurus-theme-search'],

  // Set the production url of your site here
  url: 'https://docs.superfluid.finance/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/docusaurus-social-card.png',
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo-black.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'Concepts',
          position: 'left',
          label: 'Concepts',
        },
        /*{
          type: 'docSidebar',
          sidebarId: 'UseCases',
          position: 'left',
          label: 'Use Cases',
        },*/
        {
          type: 'docSidebar',
          sidebarId: 'Protocol',
          position: 'left',
          label: 'Protocol',
        },
        {
          type: 'docSidebar',
          sidebarId: 'SDK',
          position: 'left',
          label: 'SDK',
        },
        {
          type: 'docSidebar',
          sidebarId: 'TechnicalReference',
          position: 'left',
          label: 'Technical Reference',
        },
        {
          href: 'https://console.superfluid.finance/',
          position: 'right',
          label: 'Console',
        },
        {
          href: 'https://github.com/superfluid-finance',
          position: 'right',
          label: 'Github',
        },
        {
          href: 'https://discord.gg/pPzPEDMVua',
          position: 'right',
          label: 'Discord',
        },
        {
          type: 'dropdown',
          label: 'Version',
          position: 'right',
          items: [
            {
              label: 'Current',
              href: '#',
            },
            {
              label: 'Legacy',
              href: 'https://superfluid.gitbook.io/',
            },
          ],
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Concepts',
              to: '/docs/concepts/superfluid',
            },
            {
              label: 'Protocol',
              to: '/docs/protocol/quickstart',
            },
            {
              label: 'SDK',
              to: '/docs/sdk/overview',
            },
            {
              label: 'Technical Reference',
              to: '/docs/technical-reference/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/superfluid-finance',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/pPzPEDMVua',
            },
            {
              label: 'X/Twitter',
              href: 'https://twitter.com/intent/follow?screen_name=Superfluid_HQ',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'About Us',
              href: 'https://www.superfluid.finance/about',
            },
            {
              label: 'Blog',
              href: 'https://www.superfluid.finance/blog',
            },
            {
              label: 'Terms of Use',
              href: 'https://www.superfluid.finance/terms',
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.iubenda.com/privacy-policy/34415583/legal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Superfluid Finance LTD. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['solidity'],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'O3JEVRIQUM',

      // Public API key: it is safe to commit it
      apiKey: '8de88a77f0d3ae7ea04ea6e10bd6b52c',

      indexName: 'v2-omega',

      // Optional: see doc section below
      contextualSearch: false,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      /*replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },*/

      // Optional: Algolia search parameters
      //searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    markprompt: {
      projectKey: 'sk_test_ubCqOlHANKE1H1teDc6ykbIV2asfKklN',
      // By setting `floating` to false, use the standard
      // navbar search component.
      trigger: { floating: false },
      search: {
        enabled: true,
        provider: {
          name: 'algolia',
          apiKey: '8de88a77f0d3ae7ea04ea6e10bd6b52c',
          appId: 'O3JEVRIQUM',
          indexName: 'v2-omega',
        },
      },
    },
    plugins:
      [['@saucelabs/theme-github-codeblock', {}],
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              to: '/docs/concepts/superfluid',
              from: '/superfluid/protocol-overview/in-depth-overview',
            },
          ],
        },
      ],
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
