# Helpers package

Every integration should expose `vsf-{platform}-helpers` package.

Helpers are meant to provide easy extraction of certain subproperties from large data obejcts such as `product` or `category`.

Below you can see example of a composable that gets product data:
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
The problem that users may encounter is that extracting certain informations from `product` can be either easy or hard depending on a backend platform. It will for sure require good knowledge of platforms data formats. We could provide some helper methods like `getProductVariants` or `getProductImages` that take `product` as argument and return specific information. That way we have not only same way of extracting data across multiple paltforms but also speed this extraction up. Instead of extracting `product.something.something[0].images` we can just write `getProductImages(product)`.

```js
import { useProduct } from 'vsf-commerce-tools-composables'
import { getProductImages, getProductPrices, getProductVariants } from 'vsf-commerce-tools-heleprs'
import { computed } from '@vue/composition-api'

export default {
  setup () {
    const { products, search, loading, error } = useProduct()

    search({ id: '123' })

    const product = computed(() => products[0].value)

    const productImages = computed(() => getProductImages(product))
    const productPrices = computed(() => getProductPrices(product))
    const productVariants = computed(() => getProductvariants(product))

    return {
      product,
      productImages,
      productPrices,
      productVariants,
      loading,
      error
    }
  }
}
```