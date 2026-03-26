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
      ],
    },
  ],
};

export default sidebars;
