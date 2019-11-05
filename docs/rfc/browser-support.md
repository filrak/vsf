# Browser Support

By default we support all major browsers that are supporting ES6. 

For older browsers (like IE11) we should ship separate  bundle with all transpilations and polyfills that will be automatically downloaded when lack of modern features support is detected.

This feature is [available out of the box in Nuxt](https://nuxtjs.org/api/configuration-modern/).