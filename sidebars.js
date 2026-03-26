// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  themeSidebar: [
    // Introduction
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
    
    // Design System
    {
      type: 'category',
      label: 'Design System',
      collapsed: true,
      items: [
        'design-system',
        'customization',
        'accessibility',
      ],
    },
    
    // Snippets (Shopify terminology)
    {
      type: 'category',
      label: 'Snippets',
      collapsed: false,
      items: [
        'snippets-product-cards',
        'snippets-buttons',
        'snippets-icons',
        'snippets-badges',
      ],
    },
    
    // Sections
    {
      type: 'category',
      label: 'Sections',
      collapsed: true,
      items: [
        'sections',
        'snippets',
        'navigation',
      ],
    },
    
    // Pages
    {
      type: 'category',
      label: 'Pages',
      collapsed: true,
      items: [
        'pages/pages-cart',
        'pages/pages-about',
        'pages/pages-contact',
        'pages/pages-account',
      ],
    },
    
    // Advanced
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
