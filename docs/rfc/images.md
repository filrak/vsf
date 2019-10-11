# Dealing with images

Images should be handled as any other integration. This way we can freely use any 3rd party service to handle them.

They should be extracted on theme level, so we can imagine that building a product page component with images could look like this:


```js
import { getProduct } from 'vsf-magento`
// other code
setup () {
  // get product
  const { product } = getProduct(42)
  const { image } = usecloudinary({ id: 42 })

  return {
    
  }
}