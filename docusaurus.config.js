// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Warforge Theme',
  tagline: 'Premium Shopify theme for tabletop & wargaming stores',
  favicon: 'img/favicon.ico',

  future: { v4: true },

  url: 'https://scenery-en-zo.myshopify.com',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Disable MDX expression parsing for Liquid syntax
          editUrl: 'https://github.com/scenery-en-zo/warforge-docs/edit/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Scenery en Zo',
        logo: {
          alt: 'Scenery en Zo',
          src: 'img/logo.webp',
          href: '/',
          width: 50,
          height: 32,
        },
        items: [
          {
            href: 'https://scenery-en-zo.myshopify.com',
            label: 'Live Store',
            position: 'right',
          },
          {
            href: 'https://shopify.dev/docs/storefronts/themes',
            label: 'Shopify Docs',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Reference',
            items: [
              { label: 'Overview', to: '/' },
              { label: 'Architecture', to: '/architecture' },
              { label: 'Design System', to: '/design-system' },
              { label: 'Sections', to: '/sections' },
              { label: 'Snippets', to: '/snippets' },
            ],
          },
          {
            title: 'Guides',
            items: [
              { label: 'Templates', to: '/templates' },
              { label: 'Navigation & Menus', to: '/navigation' },
              { label: 'Product Cards', to: '/product-cards' },
              { label: 'Accessibility', to: '/accessibility' },
              { label: 'How to Customize', to: '/customization' },
            ],
          },
          {
            title: 'Shopify Docs',
            items: [
              { label: 'Liquid Reference', href: 'https://shopify.dev/docs/api/liquid' },
              { label: 'Theme Architecture', href: 'https://shopify.dev/docs/storefronts/themes/architecture' },
              { label: 'Sections', href: 'https://shopify.dev/docs/storefronts/themes/architecture/sections' },
              { label: 'Settings Schema', href: 'https://shopify.dev/docs/storefronts/themes/architecture/config/settings-schema-json' },
              { label: 'Theme Editor', href: 'https://shopify.dev/docs/storefronts/themes/tools/online-editor' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Scenery en Zo. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
        additionalLanguages: ['bash', 'css', 'json'],
      },
    }),
};

export default config;
