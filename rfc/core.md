# Vue Storefront Core package

Core should contain **only** features that **glue** other functionalities (similarly to [Nuxt.js core](https://github.com/nuxt/nuxt.js/tree/dev/packages/core)) and export interfaces for data Hooks.

Core complexity should be reduced to bare minimum.

## Responsibility and use case

Core responsibility is to make sure that other parts of the ecosystem (not Nuxt ones) are working well together as well as defining interfaces for various parts of the ecosystem (especially )

### Architecture

In simple words `@vue-storefront/core` is just a set of abstractions, libraries and interfaces. 

**Input**

none

**Output**
- core libraries
- interfaces for API Client
- interfaces for Hooks

### Interfaces

We are aware of the fact that data formats between platforms are totally different and making them unified is redundant work that will never end up in optimal result.

This fact implies that we need to create multiple themes for every integration and we can't get rid of this obstackle. 

What we can do however is finding a common "agnostic" denominator that can be shared across all integrations but won't be tied to any platform implementation details. The solution of this problem are high-level interfaces for hooks output and API clients. 

We can define what objects are rreturned by hooks but their properties will be different depending on a platform. This way we can make maintanance of multiple themes easier and have some shared formats between each fo them so it's much easier for developers to work with different integrations.

For exampel we can agree that `useProduct` hook is always returning `product`, `category` `childProducts` and `parentProduct` objects (some of them can be `null`). Their properties will be different depending on a platform but "migration" will only require changing property names between the same entities.

Same for API Clients - we can expect them to utilize axios so we have a common way of configuring them [via `setup` method](./api-client.md#api) but returned entities can be different for every integration.

You can read more about interfaces and integrations [here](./integrations.md)

### Interfaces API

#### API Client

Should expose `setup` method letting configure API client with axios setup configuration.

TBD

### Hooks

TBD