# Composables

Every integration should expose `vsf-{platform}-composables` package. It's a set of [Vue Composables](https://github.com/vuejs/composition-api) based on [Vue Storefront TypeScript Interfaces](./interfaces.md). This is the actual API layer of platform integration that can be used in Nuxt Theme or any other Vue app.

You can think about composables as tiny, injectable micro-apps providing **declarative** way of interaction with given data objects like `product`, `category` etc.

Below you can see simple example of `useProduct` composable usage in Vue component:

```js
import { useProduct } from 'vsf-commerce-tools-composables'
import { computed } from '@vue/composition-api'

export default {
  setup () {
    // Destructure data and functions that we want from this composable
    const { products, search, loading, error } = useProduct()

    // Search for a certain product(s). 
    // This will automatically populate 'products' variable with the results.
    search({ id: '123' })

    // Since we specifically looked for only one product via it's id we can assign it to `product` variable
    const product = computed(() => products[0].value)

    return {
      product,
      loading,
      error
    }
  }
}
```

Another example  which shows a little bit better "app-iness" of composables. Let's say we want to create a very simple cart component with `useCart` hook.

```html
<template>
  <div>
    <ul>
      <li v-for="product in cart.items" :key="product.id">
        <b>{{ product.name }} ({{ product.price }})</b>
        <button @click="removeFromCart(product)">Remove</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { useCart } from 'vsf-commerce-tools-composables'

export default {
  setup () {
    const { cart, removeFromCart } = useCart()

    return {
      cart,
      removeFromCart
    }
  }
}
</script>
```

As you probably noticed composables are stateful. Every time `removeFromCart` function will be executed `cart` object will change and automatically synchronize it's state with the backend.

Sometimes additional configuration needs to provided to a package. Suggested way of doing this is through `setup()` function:
```js
import { setup } from `vsf-commerce-tools-composables`

setup({
  configOption: 'value'
})
```

Please note that `setup` method for composables is optional. Usually the configuration is needed for `api client` package but sometimes both of them need to have dedicated configurations.

## Internals

Under the hood composables should use API client dedicated for it's platform. Simplified implementation of `useCart` composable could look like this:

```js
import ApiClient from 'vsf-commerce-tools-client'

export default useCart() {
  const cart = ref([])

  async function addToCart (product) {
    let newProduct = await ApiClient.post('/cart/add/' + product.id)
    cart.value.push(newProduct)
  }

  async function removeFromCart (product) {
    let toRemove = ApiClient.post('/cart/remove/' + product.id)
    cart.value = cart.value.filter(prodyct => product !== toRemove)
  }

  return {
    cart,
    addToCart,
    removeFromCart
  }
}
```