# Vue Storefront Interfaces package

Vue Storefront Interfaces package is a set of TypeScript interfaces for 3rd party integrations. The purpose of those interfaces is to ensure same declarative approach and decent developer experience for every platform. It also simlifies learning curve as most of the things could be done the same way in every platform.

We can divide interfaces into two groups:

- [`composables`](./composables.md) for Vue composables exposed by 3rd party integration. We define only name of the composable and data that it returns.
- [`helpers`](./helpers.md) for declarative functions that are meant to extract specific data from objects returned by composables

### Finding a common denominator

We are aware of the fact that data formats between platforms are totally different and making them unified is redundant work that will never end up in optimal result.

This fact implies that we need to create multiple themes for every integration and we can't get rid of this obstackle. 

What we can do however is finding a common "agnostic" denominator that can be shared across all integrations but won't be tied to any platform implementation details. The solution of this problem are high-level interfaces for functions returned by integration packages (`composables`, `helpers`, `api client`).

We can define what objects and functions are returned by Vue composables but their implementation details (for example object properties) will be different depending on a platform. This way we can make maintanance of multiple themes easier and have some shared formats of good practices between each fo them so it's much easier for developers to work with different integrations.

As most of the complexity lies in operations (like adding to cart, removing etc) by using declarative interfaces not tied to implementation details we can make sure that developer experience for every integration is on the same level. declarative way of defining interfaces lets developers build shops on every platform without knowing about it's implementation details.

For example if we want to define `useProduct` composable we can declaire it's interface like this:

```js
export interface UseProduct<PRODUCTS, SEARCH> {
  products: PRODUCTS;
  search: SEARCH,
  loading: Ref<boolean>;
  error: Ref<any>;
}
```

We can agree that `useProduct`  is always returning `product` object, `loading` boolean, `error` message and `search` function. Their implementation details will depend on a platform but "migration" from one platform to another will only require slight changes based on property names and arguments. Logic behind operations stays the same so it's much easier to learn Vue Storefront and keep DX consistance between integrations. 

No matter which platform we use getting product will look more or less like this:

```js
const { product, loading, error, search } = useProduct() // get required data from composable

search({ id: '123' }) // fetch data based on search parameters and populate product object with the result
```
Please note that thanks to generic types we can still have full platform-specifc type-checking and suggestions.

Composables are very useful but if we would rely only on them we couldn't provide consistant developer experience across every platform. Even though we have a common way of getting the data and interacting with it sometimes it's not enough. specifically it's not enough when we want to have a common way of extracting certain information from this data objects. This is exactly what helper interfaces are for. 

We can agree that no matter which platform we use we should have easy way of extracting product options. For this purpose there is a `getProductVariants(product)` helper interface that accepts `product` object and returns it's options.  Same way we can extract other data like images, prices etc.

[Here](https://github.com/filrak/next/blob/master/packages/core/index.ts) you can find current Vue Storefront interfaces.