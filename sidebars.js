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
      label: 'Reference',
      collapsed: false,
      items: [
        'sections',
        'snippets',
        'templates',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'navigation',
        'product-cards',
        'accessibility',
        'customization',
      ],
    },
  ],
};

export default sidebars;
