# Vue Storefront Core package


**NOTE** The responsibilities of core are now a bit blurred and may highly change.


Core should contain **only** features that **glue** other functionalities such as libs and modules (similarly to [Nuxt.js core](https://github.com/nuxt/nuxt.js/tree/dev/packages/core)).

In core we also should have all core libraries and it's configuration.

### Architecture

In simple words `@vue-storefront/core` is just a set :of abstractiosn needed by Vue Storefront. It contains


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