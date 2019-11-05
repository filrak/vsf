
# What is Vue Storefront Next

Vue Storefront is a **fraemework**!. It's a set of **standalone tools related to either agnostic eCommerce logic or specific platform that can be used standalone or together in any combination** to create great headless shops. Vue Storefront Core provides **declarative** TypeScript interfaces for those tools to ensure common data formats and same declarative approach across every platform. 

# Agnostic parts

## Interfaces

Vue Storefront Interfaces package is a set of TypeScript interfaces for 3rd party integrations. The purpose of those interfaces is to ensure same declarative approach and decent developer experience for every platform. It also simlifies learning curve as most of the things could be done the same way in every platform.

There are two types of interfaces:
- `composables` for Vue Composition API functions responsible for interactions with high-level eCommerce entities like products, carts, CMS content etc. For exaple we could use `useProduct` hook to get product(s) based on specific search params.
- `helpers` are meant to simpify operations on big and complicated objects like `product` or `category`. Helper is a pure function that takes object as argument and returns subset of it's data. For example we will use `getProductOptions(product)` to quickly get a list of available product options without digging into product object itseld. 

[More on interfaces](./rfc/interfaces.md)

## Vue Storefront Nuxt Module

VSF Nuxt Mdule is platform-agnostic module for Nuxt that adds some VSF-specific features on top of Nuxtjs (for example URL dispatching and some performance optimizations). It also installs other required Nuxt Modules like `@nuxt/typescript-build` so user can add everything that is required by other packages(like integrations) via single command. It also hides some configuration  etails from the user so it's easier for us to maintain and update it.

## Storefront UI

[Storefront UI](https://storefrontui.io/) is a set of highly customizable, mobile-first and performant UI components specifically crafted for eCommerce storefront.

## Vue Storefront CLI

Vue Storefront CLI is a tool for scaffolding Vue Storefront applications. Through CLI you should be able to:
- Choose eCommerce platform
- Choose CMS platform
- Decide if you want to use a clean installation without templates and CSS or a full project.

It transforms scaffolding theme into a working Nuxt project.

[More on CLI](./rfc/cli.md)

# Platform-specific parts

## API Client

:::warning
If there is already an API client availabel for a given platform VSF-specific API client can be omitted
:::
Tiny abstraction layer over API of a given platform along with [declarative helpers](./integrations.md). API Client should be framework-agnostic tehrefore could be used with any framework (like React) or any JavaScript application.

- API calls are exposed as functions (i.e. `getProduct()`)

Optional naming convention for API clients is: `vsf-{platform}-client`
If package is a part of `@vue-storefront` org `vsf` prefix can be ommited.


**Common elements**: 

- `setup()` (?)

[API Client guide](./rfc/api-client.md)

## Helpers

Decalrative helpers that are pure functions meant to extract certain values from certain data objects.

For example given complex `product` object no matter which platform we are using we can always extract prodyc options through
`getProductOptions(product)`.

**Common elementss**: 

- `helpers` interfaces

[Helpers guide](./rfc/helpers.md)

## Composables

Naming convention for composables  is: `vsf-{platform}-composables`.
If package is a part of `@vue-storefront` org `vsf` prefix can be ommited.

**Common elements**: 
- `composables` interfaces

[Composables guide](./rfc/composables.md)

## Scaffolding Theme 

Nuxt-based theme boilerplate that is consumed by CLI and transformed into a working project theme. Scaffolding theme is slightly different than project one. It includess magic comments and extension points that are used by CLI to include/change some parts of the code and generate project tsheme.

**Common elements**: 

- directory structure
- magic comments/config for CLI addons

[CLI guide](./cli.md)
