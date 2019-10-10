# Integrations

:::tip tl;dr
Vue Storefront integration module as name suggests is a 3rd party integration. 

It's exposing Vue hooks as it's public API along with it's configuration via `setup()` method.

To build integration you need to build API client for your platform to get the data from REST/GQL API. API client should use axios and expose `setup()` function with axios configuration.

Once you have API Client you can use it to build modules with Vue hooks. You're API are those hooks, setup method and possibly.

API client can be skipped but is recommended.
::: 

### Responsibilities

### Architecture

TBD 

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
import { getContent } from 'vsf-wordpress'

export default {
  setup () {
    const { title } = getContent(42) // we want post with id 42

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
import { ContentHook } from '@vue-storefront/core' // TS interface for CMS Content Hook
import { onCreated, ref } from '@vue/composition-api' // Vue 3 composition API plugin for Vue 2

export function setup (config) {
  const post = wordpressAPIClient.setup(config.wordpressApiConfig)
}

export async function getContent(id): ContentHook {
  const title = ref(null)
  const content = ref(null)
  const originalPrice = ref(null)

  const result = await wordpressAPIClient.getContent(id) 

  return {
    title: result.data.title,
    content: result.data.post_content,
    originalPost: result.data
  }
}
```


Lets review what happened here line by line:
1. First we are importing Wordpress API Client that connects directly to Wordpress API. This is something we need to write by ourselves.
2. Next we are importing CMS data Hook interface from Vue Storefront core. It's a standardized API for data Hooks in Vue Storefront. It's purpose is to provide similarities between different paltform integrations. With such similarities it's easeir to learn Vue Storefront, maintain multiple integrations and migrate from one to another.
3. At the end we are importing parts of Vue composition API because we want to return Vue Hooks.
4. We create setup function which should be called by user of this module. Along with passed configuration user should specify [axios config](https://github.com/axios/axios#axioscreateconfig) which is just a configuration for HTTP client. User can pass other properties to the config if Integration author is willing to make use of them. Setup function is running `wordpressAPIClient.setup` function which will configure underlying `wordpressAPIClient` properties like `baseURL`.
5. Next we create a Vue Hook `getContent` it's based on standardized interface from Vue Storefront core that requires it do return `title`, `content` and `originalPost` fields.
6. Voila.

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
