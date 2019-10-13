module.exports = {
  title: 'VSF Next',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      {
        title: 'Apps',
        collapsable: false,
        children: [
          ["/rfc/api-client", "API Client"],
          ["/rfc/data-api", "Data API"],
          ["/rfc/core", "Core"],
          ['/rfc/integrations','Integrations'],
          ["/rfc/nuxt-module", "Nuxt Module"],
          ["/rfc/nuxt-theme", "Nuxt Theme"],
        ],
      },
      {
        title: 'Problems',
        collapsable: false,
        children: [
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
