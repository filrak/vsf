# Vue Storefront Core package

Core should contain **only** features that **glue** other functionalities (similarly to [Nuxt.js core](https://github.com/nuxt/nuxt.js/tree/dev/packages/core)).

Core complexity should be reduced to bare minimum

## Responsibility and use case

Core responsibility is to make sure that other parts of the ecosystem (not Nuxt ones) are working well together.

Vue Storefront core should be used only for existing or custom Vue projects. For every other use case we recommend using Nuxt and Vue Storefront Nuxt module.

### Architecture

In simple words `@vue-storefront/core` is just a set of abstractiosn and interfaces. It contains

- **Interfaces** to keep common data formats in libs and modules.

- **Dependencies** for most crucial packages like `api-client`

- **Components**, to be precise `vsf-link` and `vsf-view` to handle multistore.

- **Global reactive micro-state** accessible by other libs/modules.

- **Libraries** are core features that can be turned on/off by config (like multistore).

- **Configuration**

### Note on components

`vsf-link` and `vsf-view` components are meant to handle multistore in combination with global state. Under the hood depending on hosting enviroment they should either use `<nuxt-link>` and `<nuxt>` components or `<router-link>` and `<router-view>`

### To be discussed

Should we pass router and Vuex instance to core for better extendibility and more features "outside" of Nuxt?