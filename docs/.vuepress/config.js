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
          ["/rfc/integrations", "Core"],
          ['/rfc/integrations','Integrations'],
          ["/rfc/nuxt-module", "Nuxt Module"],
          ["/rfc/nuxt-theme", "Nuxt Theme"],
        ],
      }

    ]
  }
};
