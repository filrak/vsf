module.exports = {
  title: 'VSF Next',
  description: 'Just playing around',
  themeConfig: {
    navbar: false,
    sidebar: [
      {
        title: 'Apps',
        collapsable: false,
        children: [
          ["/rfc/api-client", "API Client"],
          ["/rfc/core", "Core"],
          ["/rfc/modules", "Modules"],
          ["/rfc/nuxt-module", "Nuxt Module"],
          ["/rfc/nuxt-theme", "Nuxt Theme"],
        ],
      },
      {
        title: 'Problems',
        collapsable: false,
        children: [
          ['/rfc/integrations','Integrations'],
          ['/rfc/extendibility','Extendibility'],
          ['/rfc/updates','Updates'],
          ['/rfc/browser-support','Browser support'],
          ['/rfc/performance','Performance'],
          ['/rfc/images', 'Images'],
          ['/rfc/documentation', 'Documentation'],
          ['/rfc/coding-standards', 'Coding standards'],
          ['/rfc/testing', 'Testing']
        ],
      },
    ]
  }
};
