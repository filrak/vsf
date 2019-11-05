# API Client package
API client provides a friendly abstraction layer over network calls and their configuration. By using it we can hide implementation details of **how** we get the data and just expose declarative API to be consumed by other apps. With that we can easily do things like switching from ES to GQL without introducing breaking cahnges. Every integration should have it's own API client. 

API client is one of the three parts of eCommerce/CMS integration. Other ones are [Composables](./composables.md) and [helpers](./helpers.md).

As a good practice Vue Storefront API clients should use [axios](https://github.com/axios/axios) to provide decent level of configuration over network calls.

**Every API client is a standalone package that can be used in any JavaScript project.**.

:::warning
If platform you want to integrate with has it's own API client you don't need to create another one.
:::

## Architecture
![Architecture](./assets/api-client.png)

**Input**
- data from Vue Storefront API
- configuration from`setup()` function where you can set basic axios properties and modify endpoints.
- API Client interfaces from core

**Output**
- functions for data resolution (like `getProduct`, `makeOrder` etc)
- `setup` function

## API

### Initialization with `setup()`

API Client should expose `setup()` method to setup axios configuraion (([axios.create()](https://github.com/axios/axios#axioscreateconfig)).

API Client should have default, most optimal configuration setted up out of the box so the only thing that needs to be overwritten by the user is `baseUrl` property.

**Example of usage**

Setting up application just with `baseURL`:

```js
setup({
  baseURL: 'https://some-domain.com/api/'
})
```
Setting up advanced configuration:

```js
setup({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})
```

**Example of implementation**

```js
let apiClient: ApiClient = null;

export const setup = (axiosConfig: AxiosRequestConfig, config?: Config): void => {
  apiClient = new ApiClient(axiosConfig, config)
}
```

#### Example of API Client methods

`getProduct`
- `id`
- `include`
- `exclude`

`getProducts`
- `filters` - based on product attributes (color, size etc)
- `from`
- `to`
- `include`
- `exclude`

`getCategories`
- `filters`
- `from`
- `to`
- `include`
- `exclude`

---

`createCart`
- `token` - guest cart token

`addToCart`
- `items`

`removeFromCart`
- `items` - list of unique id's

`applyCoupon`
- `code`

`removeCoupon`
- `code`

---

`placeOrder`
 - `personalDetails`
 - `shippingMethod`
 - `shippingDetails`
 - `paymentMethod`
 - `paymentDetails`

 ---

 `logIn`
 - `email`
 - `password`

`logOut`
- `token`

`register`
- `login`
- `password`
- `userData`

`forgotPassword`
- `email`

`profile`
- `token`
