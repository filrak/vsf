# Integrations

:::tip tl;dr
Vue Storefront integration module as name suggests is a 3rd party integration. 

It's exposing Vue hooks as it's public API along with it's configuration via `setup()` method.

To build integration you need to build API client for your platform to get the data from REST/GQL API. API client should use axios and expose `setup()` function with axios configuration.

Once you have API Client you can use it to build modules with Vue hooks. You're API are those hooks.

When making an integration API client can be skipped but we recommend building it so integration can be used with different frameworks than Vue.
::: 
### Finding a common denominator

We are aware of the fact that data formats between platforms are totally different and making them unified is redundant work that will never end up in optimal result.

This fact implies that we need to create multiple themes for every integration and we can't get rid of this obstackle. 

What we can do however is finding a common "agnostic" denominator that can be shared across all integrations but won't be tied to any platform implementation details. The solution of this problem are high-level interfaces for hooks output and API clients. 

We can define what objects and functions are returned by hooks but their implementation details will be different depending on a platform. This way we can make maintanance of multiple themes easier and have some shared formats of good practices between each fo them so it's much easier for developers to work with different integrations.

As most of the complexity lies in operations (like adding to cart, removing etc) by using declarative interfaces not tied to implementation details we can make sure that developer experience for every integration is on the same level. declarative way of defining interfaces lets developers build shops on every platform without knowing about it's implementation details.

For example we can agree that `useProduct` hook is always returning `product` object and `configure` function. Their implementation details will depend on a platform but "migration" from one platform to another will only require slight changes based on property names and arguments. Logic behind operations stays the same so it's much easier to learn Vue Storefront and keep DX consistance between integrations

Same for API Clients - we can expect them to utilize axios so we have a common way of configuring them [via `setup` method](./api-client.md#api) but returned entities can be different for every integration.

### Example

To use Vue Storefront integration user just needs to run it's `setup` function and then start calling Hooks in Vue components.

Let's see an example of a very simple Wordpress integration that only returns post with a given id.

According to above lets initialize the Wordpress integration
```js
// main.js
import { setup } from 'vsf-wordpress' // Vue Storefront integration module for WP

// Initialize the module and pass configuration
setup({
  baseUrl: 'https://mywordpresssite.com/api'
})

```
Once it's initialized we can just use this API in our Vue components:
```html
<template>
 <b> This post is named: {{ title }} </b>
</template>

<script>
import { useContent } from 'vsf-wordpress'

export default {
  setup () {
    const { title } = useContent(42) // we want post with id 42

    return {
      title // now we just need to return title to template
    }
  }
}
</script>
```

Now let's see how we can build such integration:

To integrate Vue Storefront with 3rd party solution you need to:
1. Build [API Client](./api-client.md) as an abstraction over network requests (optional)
2. Integration module that will expose `setup` function for configuration along with Vue Hooks to get data.

Lets start from #2:
```js
// Integration Module
import { wordpressAPIClient} from 'vsf-wordpress-api-client'
import { UseContent } from '@vue-storefront/core' // TS interface for CMS Content Hook
import { onCreated, ref } from '@vue/composition-api' // Vue 3 composition API plugin for Vue 2

export function setup (config) {
  const post = wordpressAPIClient.setup(config)
}

export async function useContent(id): UseContentHook<WordpressContent> {
  const content = ref(null)

  const result = await wordpressAPIClient.getContent(id) 

  return {
    content: result.data.post_content
  }
}
```


Lets review what happened here line by line:
1. First we are importing Wordpress API Client that connects directly to Wordpress API. This is something we need to write by ourselves.
2. Next we are importing CMS data Hook interface from Vue Storefront core. It's a standardized API for data Hooks in Vue Storefront. It's purpose is to provide similarities between different paltform integrations. With such similarities it's easeir to learn Vue Storefront, maintain multiple integrations and migrate from one to another.
3. At the end we are importing parts of Vue composition API because we want to return Vue Hooks.
4. We create setup function which should be called by user of this module. Along with passed configuration user should specify [axios config](https://github.com/axios/axios#axioscreateconfig) which is just a configuration for HTTP client. User can pass other properties to the config if Integration author is willing to make use of them. Setup function is running `wordpressAPIClient.setup` function which will configure underlying `wordpressAPIClient` properties like `baseURL`.
5. Next we create a Vue Hook `getContent` it's based on standardized interface from Vue Storefront core.

Now the API client:
```js
// API Client
import { APIClient } from '@vue-storefront/core' // typings for setup function to ensure that it uses axios config

let HTTPClient;
export function setup (axiosConfig): APIClient {
  HTTPClient = axios.create(axiosConfig});
}

// This example si very easy but such resolver function can do complex operations like concatenating requests ot even constructing GQL query
export function getContent(id) {
  HTTPClient.get({
    url: '/post/' + id,
    method: 'GET'
  })
}

```

