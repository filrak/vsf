# Nuxt Module

VSF Nuxt Mdule is platform-agnostic module for Nuxt that adds some VSF-specific features on top of Nuxtjs (for example URL dispatching and some performance optimizations). It also installs other required Nuxt Modules and libraries like `@vue/composition-api` so user can add everything that is required by other packages(like integrations) via single command. It also hides some configuration details from the user so it's easier for us to maintain and update it.

# Responsibilities

- Seamless enviroment setup for Vue Storefront core development
- Installing packages and modules required for Vue Storefront to run.
- Scanning files after each build and printing warnings if they are too big to fit into performance best practices.
- Adding SEO-friendly URLs mechanism
- Performance-wise handling of ecosystem libraries source - taking ES Modules of integration packages (`api-client`, `helpers`, `composables`) in production mode to make them tree-shakeable which ends up in smaller production bundle.
- ... (more to come)

# Usage

To add Vue Storefront Nuxt module into your project simply install it:
```
yarn add @vue-storefront/nuxt-module
```
Then add to your `nuxt.config.js` and (if needed) pass some additional configuration:
```js
 modules: [
    ['@vue-storefront/nuxt', {
      coreDevelopment: true
    }]
 ]
```