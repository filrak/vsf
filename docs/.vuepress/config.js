module.exports = {
  title: 'Storefront UI',
  description: 'Customizable and performant Vue.js UI library for eCommerce',
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "https://divante.com/open-graph/favicons_storefrontui/sfui_favicon-32x32.png"}],
  ],
  themeConfig: {
    sidebarDepth: 2,
    sidebar: [
      ['/', 'Introduction'],
      {
        title: 'Apps',
        collapsable: false,
        children: [
          ["/api-client", "API Client"],
          ["/core", "Core"],
          ["/modules", "Modules"],
          ["/nuxt-module", "Nuxt Module"],
          ["/nuxt-theme", "Nuxt Theme"],
        ],
      },
      {
        title: 'Problems',
        collapsable: false,
        children: [
          ['/integrations','Integrations']
          ['/extendibility','Extendibility']
          ['/upgradeability','Upgradeability']
          ['/browser-support','Browser support']
          ['/performance','Performance']
          ['/images', 'Images'],
          ['/documentation', 'Documentation'],
          ['/coding-standards', 'Coding standards'],
          ['/testing', 'Testing'],
        ],
      },
    ]
  }
};
