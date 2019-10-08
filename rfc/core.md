# Vue Storefront Core package

Core should contain **only** features that **glue** other functionalities such as libs and modules (similarly to [Nuxt.js core](https://github.com/nuxt/nuxt.js/tree/dev/packages/core)). It shouldn't contain any eCommerce logic and focus only on making all Vue Storefront parts working together and exposing public Vue Storefront API. It should be a hosting enviroment for core libraries and modules and all of them should be replaceable. You should be able to use it for every PWA, not only eCommerce one depending on wchich modules and libs you'll use.  **It's a standalone package that can be used in any Vue project.**

TBD