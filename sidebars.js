// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  themeSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'introduction',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'installation',
      label: 'Installation',
    },
    {
      type: 'doc',
      id: 'architecture',
      label: 'Architecture',
    },
    {
      type: 'doc',
      id: 'design-system',
      label: 'Design System',
    },
    {
      type: 'doc',
      id: 'customization',
      label: 'Customization',
    },
    {
      type: 'doc',
      id: 'navigation',
      label: 'Navigation',
    },
    {
      type: 'doc',
      id: 'accessibility',
      label: 'Accessibility',
    },
    {
      type: 'category',
      label: 'Snippets',
      collapsed: false,
      items: [
        'snippets/snippets-index',
        'snippets/snippets-product-cards',
        'snippets/snippets-buttons',
        'snippets/snippets-icons',
        'snippets/snippets-badges',
        'snippets/snippets-inputs',
        'snippets/snippets-checkboxes',
        'snippets/snippets-textareas',
        'snippets/snippets-breadcrumbs',
        'snippets/snippets-pagination',
        'snippets/snippets-article-cards',
        'snippets/snippets-cookie-banner',
        'snippets/snippets-tables',
        'snippets/snippets-images',
      ],
    },
    {
      type: 'category',
      label: 'Sections',
      collapsed: false,
      items: [
        'sections/sections-index',
        'sections/sections-header',
        'sections/sections-footer',
        'sections/sections-hero',
        'sections/sections-featured-products',
        'sections/sections-newsletter',
        'sections/sections-collection-grid',
        'sections/sections-related-products',
        'sections/sections-image-with-text',
      ],
    },
    {
      type: 'category',
      label: 'Blocks',
      collapsed: false,
      items: [
        'blocks/blocks-index',
        'blocks/blocks-group',
        'blocks/blocks-text',
      ],
    },
    {
      type: 'category',
      label: 'Layout',
      collapsed: false,
      items: [
        'layout/layout-index',
        'layout/layout-theme',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      collapsed: false,
      items: [
        'templates/templates-index',
        'templates/templates-product',
        'templates/templates-collection',
        'templates/templates-cart',
        'templates/templates-blog',
        'templates/templates-article',
        'templates/templates-404',
        'templates/templates-search',
      ],
    },
    {
      type: 'category',
      label: 'Pages',
      collapsed: false,
      items: [
        'pages/pages-summary',
        'pages/pages-about',
        'pages/pages-contact',
        'pages/pages-cart',
        'pages/pages-account',
        'pages/pages-customers',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      collapsed: true,
      items: [
        'advanced/advanced-liquid-filters',
        'advanced/advanced-metafields',
        'advanced/advanced-webgl-effects',
        'advanced/advanced-performance',
      ],
    },
  ],
};

export default sidebars;
