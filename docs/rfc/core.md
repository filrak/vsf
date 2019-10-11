# Vue Storefront Core package

:::tip tl;dr
Core should contain **only** features that **glue** other functionalities (similarly to [Nuxt.js core](https://github.com/nuxt/nuxt.js/tree/dev/packages/core)) without having a business logic by itself. It's exposing interfaces for Vue Hooks and API client. Core package will also contain some tiny core libraries.

Core complexity should be reduced to bare minimum.
:::
## Responsibilities

Vue Storefront core is just a set of interfaces that will be used by
- Vue Hooks (Product, Category, CMS etc) to provide common denominator between multiple platforms
- API clients to provide common approach to APIs and standarized way of configuration

## Architecture

**Input**

none

**Output**
- core libraries
- interfaces for API Client
- interfaces for Hooks
0 interfaces for integrations

## Interfaces

You can read more about interfaces and integrations [here](./integrations.md)

### Interfaces API

#### API Client

Should expose `setup` method letting configure API client with axios setup configuration.

#### Hooks

```js
interface UseProduct<T, U = any, V = (configuration: any) => void> {
  product: T
  configuration: U,
  configure: V

const { name, description, configure } = useProduct({ id: 42 })
```

```ts
interface UseCategory<T, U, V = () => any, X = () => any> {
  category: T
  appliedFilters: U,
  applyFilter: V
  clearFilters: X
}
```

```ts
interface UseContent<T> {
  content: T
}
```

```ts
interface UseCart
<
  T,
  U = () => any, 
  V = () => any,
  X = () => any
  Y = () => any
  Z = () => any
>
{
  cart: T,
  addToCart: U
  removeFromCart: V
  clearCart: X
  coupon: any
  applyCoupon: Y
  removeCoupon: Z
}
```

```ts
interface UseWishlist
<
  T,
  U = () => any, 
  V = () => any,
  X = () => any
  Y = () => any
  Z = () => any
>
{
  wishlist: T,
  addToWishlist: U
  removeFromWishlist: V
  clearWishlist: X
}
```
```ts
interface UseCompare
<
  T,
  U = () => any, 
  V = () => any,
  X = () => any
  Y = () => any
  Z = () => any
>
{
  compare: T,
  addToCompare: U
  removeFromCompare: V
  clearCompare: X
}
```
```ts
interface UseCheckout 
<
  ...
>
{
  paymentMethods: ..
  shippingMethods: ..
  personalDetails: ..
  shippingDetails: ..
  choosenPaymentMethod: ..
  choosenShippingMethod: ..
  setPersonalDetails: ..
  setPaymentMethod: ..
  setShippingMethod: ..
  placeOrder: ..
}
```

```ts
interface UseUser 
<

>
{
  user: ..
  token: string
  logIn: ..
  logOut: ..
  register: ..
  remindPassword: ..
}
```