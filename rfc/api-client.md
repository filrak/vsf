# API Client package

Vue Storefront API client is a client-side micro-application built to consume Vue Storefront API. It provides a friendly abstraction layer over network calls and their params to make them easier to consume by other applications. It gets the data from Vue Storefront API and relies on this layer (or something in exchange of it) to work. **It's a standalone package that can be used in any JavaScript project.**.

You can think about API client as enhanced data resolever from 1.x. API Client will be consumed by VS modules.

**API client is just a complementary layer of Vue Storefront API. It shouldn't be used to add new API endpoints. Instead we suggest creating dedicated modules for new features.**

API client should use [axios](https://github.com/axios/axios) as it's the best HTTP Client lib out there. It can use either GQL API and REST API and is really good documented so we don't need to reinvent the wheel and spend time on docs.

## Features

API client is very simple and focuses only on resolving data from the API and returning them in a fiendly format.

## Architecture
![Architecture](./assets/api-client.png)

**Input**
- **gets** data from Vue Storefront API
- **exposes** `setup()` function where you can set basic axios properties and modify endpoints.

**Output**
- **exposes** functions for data resolution (like `getProduct`, `makeOrder` etc)


## API

### Initialization with `setup()`

With this method we can setup global configuration for every request. You can pass every `axios.create()` ([ref](https://github.com/axios/axios#axioscreateconfig)) option here.

API Client ships with default configuration that can be overwritten by the user (so usually the only thing you add is `baseURL`)

**NOTE** Not certain yet
There is also `resolvers` object letting users modify every axios request to VS API. Every resolver is in a form of [axios request](https://github.com/axios/axios#request-config).

**Examples**

Setting up application just with `baseURL`
```js
setup({
  baseURL: 'https://some-domain.com/api/'
})
```
Setting up advanced configuration and overriding (for future versions)

```js
setup({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
  // Not decided yet, won't be in Develoeprs preview
  resolvers: {
    getProduct: {
      method: 'post',
      url: '/user/12345',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone'
      },
      transformRequest: [function (data, headers) {
        return data;
      }],
      transformResponse: [function (data) {
        return data;
      }]
    }
  }
})
```

### Getting data

Every request is just a axios request. You can override any request params just by passing axios properties to method arguments.

#### Available methods

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
 - `emaloginil`
 - `password`

`logOut`
- `login`

`register`
- `login`
- `password`
- `userData`

`forgotPassword`
- `email`

`profile`
- `token`


**Examples**

Get all categories (default behavior)
```js
import { getCategories } from '@vue-storefront/api-client'

let categories;

getCategories()
  .then({ data } => 
    categories = data
  )
```

Modify request to get categories
```js
import { getCategories } from '@vue-storefront/api-client'

let categories;

getCategories({ params: { 
    filter: { 
      id: 123 
      }
  }})
  .then({ data } => 
    categories = data
  )
```