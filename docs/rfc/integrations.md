# Integrations

:::tip tl;dr
Vue Storefront integration as name suggests is a 3rd party integration.

It's exposing Vue hooks as it's public API (and in some cases heleprs if needed).

To build integration you need to build API client for your platform to get the data from REST/GQL API. API client should use axios and expose `setup()` function with axios configuration.

Once you have API Client you can use it to build modules with Vue hooks. You're API are those hooks.

API client can be skipped but is recommended.
::: 