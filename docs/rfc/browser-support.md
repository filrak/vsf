# Browser Support

By default we support all major browsers that are supporting ES6. 

For older browsers (like IE11) we should ship separate  bundle with all transpilations and polyfills that will be automatically downloaded when lack of modern features support is detected.

On library level we want to use [vue-cli modern mode](https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode) to achieve this behavior. 

It's also [available in Nuxt](https://nuxtjs.org/api/configuration-modern/) for on a project level.