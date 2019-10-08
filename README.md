# Vue Storefront Next (Turbo ^^)

## Reasons behind the project

In short words - currently Vue Storefront is flooded with technical debt, bad architectural decisions that are very hard to redo and unnecesary complexity. We came to the point when it's easier to write a project from scratch and take into account all our learnings there instead of adjusting architecture of 1.x.


## High level goals

Vue Storefront Next should be buuilt the way that will ensure dealing with following challenges (wchich are learnings from 1.x)
- Simple one-command installation
- Seamless updates (!)
- Easy maintanance of core and VS projects
- Ability to quickly build PoCs and standard shops
- Extendibility and ability to build non-standard solutions
- Flexibility in tools/3rd parties to let us swap technologiese
- Scalability 
- Better enviroment for "native" VS integrations (like Shopware)
- "Printing" good practises in a project so it's hard to make a project that doesn't run smooth and has bad performance.
- Not being tied to any 3rd party solution - everything should be optional and replaceable
- Being sure that software works well without heavy manual testing
- Great performance (incl slow 3G)

Before every architectural decision we should make sure that it's making it easier for us to achieve all of those goals.

Vue Storefront 2.x should be a **framework** (so we provide building **blocks**) with theme working as out of the box implementation with basic configuration. It will be extended by dedicated modules for third-party integrations.

## High-level rules for project architecture

We defined set of high-level architectural rules that are meant to fulfill above requirements. Their main purpose is to make sure that project is easy to maintain, extend and every decision is reversable.


- Project should have decoupled, and layered architecture to ensure that every of it's parts is encapsulated and communicates with outside world only via strictly declaired public API. Implementation details of given module shouldn't influence those APIs.
- Every potentially repalceable third party integration API used in core building blocks (api client, core) should be abstracted so we can easily swap it with other solution solving the same problem. Modules and 3rd parties shouldn't be directly used. instead we should use dependency injection with standarized interfaces to make sure that implementation details of any module is not influencing other ones.
- Additional complexity should be avoided whenever possible (including unnecesary abstractions for uncertain future goals!)
- Core package must be tree-shakeable (by feature) which implies multiple ES modules for libraries/modules.
- We group code by **features** not file/entity types so it's easier to add/remove/edit certain capabilities of Vue Storefront.

## High-level architecture

Project should be devided into standalone parts with certain responsibilities. In fact architecture may look very similar to Vue Storefront 1.x but certain parts responsibilities are much different now.

Every layer should expose public API for input/output operations that is not tied to implementation details. Use of every service should be reversable which means we shouldn't base any modules behavior on implementation details of another module.

![Architecture](rfc/assets/vs-high-level-architecture-diagram.png)

We decided to divide project into following parts:

- **Vue Storefront API** is just an API responding with Vue Storefront data formats. It works the same way as in 1.x and it's refactoring is mostly outside of this projects scope except concatenation of certain endpoint to ensure possibly minimal number of network calls for the data.
- [**API Client**](./rfc/api-client.md) is a client-side micro-application built to consume Vue Storefront API.
- [**Vue Storefront Core**](./rfc/core.md) is main package of Vue Storefront. It should expose to the outside world everything that is needded to build fully-functional Vue Storefront application. 
- **Core libraries** are certain functionalities for Vue Storefront core related to client-side runtime processes but **not** related to eCommerce per-se. In other words core libs should be agnostic in terms of used platform. An example of such functionalitiy could be modules system or multistore but not order handling or cms integration. They are consumed by core.
- **Core modules** are complementary to libraries and represent certain eCommerce features like product catalog, cart, order management and thirt-party integrations. They are usually tied to specific domain or system (like Magento, Wordpress etc). They are consumed by core.
- **Nuxt Theme** is ready to use implementation of Vue Storefront. It uses Vue Storefront Core and Storefront UI and bases it's upgradability on this two libraries. Using Nuxt theme is a recommended way of building shops with Vue Storefront as it contains working project out of the box. It can be enhanced with additional functionalities via Vue Storefront Nuxt module, other VS modules (not tied to Nuxt) and thousands of official Nuxt modules.
- **Third party modules** are modules extending Vue Storefront core with additional functionalities (mostly 3rd party integrations) the same way as core modules.
- **Vue Storefront Nuxt Module** is a tool for Vue Storefront projects in Nuxt containing multiple nuxt-related enhancements like theme fallback machanism, Storefront UI overriding system and webpack extensions. It can be also used to install Vue Storefront in new Nuxt project with a single command that will bootstrap a new project based on bottstrap properties in `nuxt.config.js` (so we can specify if module should generate a Theme or not etc).

Such architecture will ensure that Vue Storefront is decoupled and not tied to any specific platform or library. With properly structured public APIs and dependency injection every element of the architecture (library, module, even API client) should be replaceable and can be maintained in spearation without affecting other parts of the system.

Even though using Nuxt Theme with Nuxt Module is recommended way of using Vue Storefront it should be possible to use just Vue Storefront Core in any project (also without ssr) **without additional work**. Every layer should work by itself when layer above it is removed (so core should work without a theme, api client without core etc).

## Core libraries

- `@vue-storefront/modules` - library handling modules feature

## Core modules

TBD

## Problems and solutions

While building Vue Storefront 2 we need to face many challenges known from previous version. Below you can find detailed informations about most important ones:

**NOTE** Some solutions may slightly or highly chance if they fail to serve their purpose or prevent us from reaching any of project goals.

- [Maintainability]()
- [Extendibility]()
- [Updateability]()
- [Performance]()
- [Browser support]()
- [Integrations]()
- [Modules]()
- [Theming]()
- [Configuration]()
- [Coding standards]()
- [Definition of done]()
- [Testing]()
- [Documentation]()

## Ideas

### Unified data formats for CMS/eCommerce

Right now to make best use of the new platform we need to make dedicated integration which implies special theme for every new platform. It's obviously not the bests cenario as we need to provide new theme for every major platform which leads to code duplication and harder maintenance. Ideally we could agree on some common data formats for most common parts of the UI and return them from Hooks. That way it's much easier to maintain multiple integrations.