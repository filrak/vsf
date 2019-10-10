# Vue Storefront Core package

Core should contain **only** features that **glue** other functionalities (similarly to [Nuxt.js core](https://github.com/nuxt/nuxt.js/tree/dev/packages/core)) and export interfaces for data Hooks.

Core complexity should be reduced to bare minimum.

## Responsibility and use case

Core responsibility is to make sure that other parts of the ecosystem (not Nuxt ones) are working well together as well as defining interfaces for various parts of the ecosystem (especially )

### Architecture

In simple words `@vue-storefront/core` is just a set of abstractiosn and interfaces. It contains

- **Interfaces** to keep common data formats in modules.

- **Dependencies** for most crucial packages like `api-client`

- **Libraries** are core features that can be turned on/off.

### Interfaces

We are aware of the fact that data formats between platforms are totally different and making them unified is redundant work that will never end up in optimal result.

This fact implies that we need to create multiple themes for every integration and we can't get rid of this obstackle. 

What we can do however is finding a common "agnostic" denominator that can be shared across all integrations but won't be tied to any platform implementation details. The solution of this problem are high-level interfaces for hooks output. We can define what objects are rreturned by hooks but their properties will be different depending on a platform. This way we can make maintanance of multiple themes easier and have some shared formats between each fo them so it's much easier for developers to work with different integrations.

For exampel we can agree that `useProduct` hook is always returning `product`, `category` `childProducts` and `parentProduct` objects (some of them can be `null`). Their properties will be different depending on a platform but "migration" will only require changing property names between the same entities.

You can read more about interfaces and integrations [here](./integrations.md)
