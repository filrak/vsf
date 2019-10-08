# API Client package

Vue Storefront API client is a client-side micro-application built to consume Vue Storefront API. It provides a friendly abstraction layer over network calls and their params to make them easier to consume by other applications. It gets the data from Vue Storefront API and relies on this layer (or something in exchange of it) to work. **It's a standalone package that can be used in any JavaScript project.**.

You can think about API client as enhanced data resolever from 1.x. 

API client is complementary layer of Vue Storefront API. It shouldn't be used to add new API endpoints. Instead we suggest creating dedicated modules for new features.

API client should be just a **treeshakeable** set of typed astync functions returning certain data formats.

## Features

API client is very simple and focuses only on resolving data from the API and returning them in a fiendly format.

## Architecture
![Architecture](./assets/api-client.png)

**Input**
- **gets** data from Vue Storefront API
- **gets** endpoints from `@vue-storefront/config`

**Output**
- **exposes** functions for data resolution (like `getProduct`, `makeorder` etc)
- **exposes** `setup` function to setup endpoints


## Example of usage
- settng configuration
```js
import { setup } from '@vue-storefront/api-client`


setup({
  api: 'https://demo.vuestorefront.io/api`
})
```
- making an order
```js
import { makeOrder } from '@vue-storefront/api-client`


async placeOrder (order) {
  await status = makeOrder(order)
}
```

