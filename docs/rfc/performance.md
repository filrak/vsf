# Performance

- We follow [RAIL model guidelines](https://developers.google.com/web/fundamentals/performance/rail#lighthouse) 
- Along with compiled version of the package we use raw source in Nuxt Theme. Thanks to this we can ship all polyfills only once instead of once per package.
- We test performance before every merge to master with Lighthouse extension making sure it doesn't make Performance score worse than expected.
- Target PSI and Lighthouse performance score shouldn't be lower than 90 with default configuration and theme.
- Initial sise of downloaded assets per page shouldn't exceed 170 kB
- TTI in 3G shouldn't be worse than 5s
- Integration packages (`api client`, `composables`, `helpers`)

