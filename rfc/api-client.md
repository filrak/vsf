# API Client package

Vue Storefront API client is a client-side micro-application built to consume APIs. In our case it's a Vue Storefront API but any integration should use it's own API client. It provides a friendly abstraction layer over network calls and their params to make them easier to consume by other parts of the system.  **It's a standalone package that can be used in any JavaScript project.**.

You can think about API client as enhanced data resolever from 1.x. API Client should be consumed by VS modules and configured by hosting project enviroment (usually Nuxt).

**API client is just a complementary layer of API. To ensure that every integration is configurable we should promote writing dedicated API clients as a good practice**

API client will use [axios](https://github.com/axios/axios) as it's the best HTTP Client lib out there providing decent configuration capabilities. It can use either GQL API and REST API and is really good documented so we don't need to reinvent the wheel and spend time on docs.

API client is using API client interface (only for `setup`) from Vue Storefront core

## Responsibility and use case

API client responsibility is just to make an abstraction over API data operations and it's configuration.

## Features

API client is very simple and focuses on resolving data from the API and returning them in a fiendly format along with high-level configuration.

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

**NOTE** `setup()` is needed only if you want to use API Client standalone. For Nuxt apps those options are hoisted into Nuxt config.
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