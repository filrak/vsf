# Extendibility
:::tip tl;dr
Thanks to low complexity and decoupled logic we can rely on Vue ecosystem and our own integrations system.

New integrations - integrations.

New features, components - Nuxt modules and Vue plugins.

If you want to extend integrations since we rely on data formats as APIs you can extend them in any way you want. For example;
- by creating new hook that calls base hook underneath
- by writing a network/response itnerceptor in `setup` function
- create dedicated fork of vue-storefront-api, everything else will remain upgradable
:::