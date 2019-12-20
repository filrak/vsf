module.exports = {
  title: 'VSF Next',
  description: 'Just playing around',
  themeConfig: {
    sidebar: [
      ["/introduction", "Introduction"],
      {
        title: 'Agnostic',
        collapsable: false,
        children: [
          ["/rfc/interfaces", "Interfaces"],
          ['/rfc/nuxt-module','Nuxt Module'],
          ['/rfc/cli','CLI'],
        ],
      },
      {
        title: 'Platform-specific',
        collapsable: false,
        children: [
          ["/rfc/api-client", "API Client"],
          ["/rfc/composables", "Composables"],
          ['/rfc/helpers','Helpers'],
          ["/rfc/nuxt-theme", "Nuxt Scaffolding Theme"],
        ],
      },
      {
        title: 'Other',
        collapsable: false,
        children: [
          ["/rfc/browser-support", "Browser support"],
          ['/rfc/internationalization','Internationalization'],
          ['/rfc/performance','Performance'],
        ],
      },

    ]
  }
};
