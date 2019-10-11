# Nuxt Module

Most of Vue Storefront features that are beyond simple data operations requires Nuxt. We make those features available through Nuxt module.

## Responsibility and use case

Core responsibility of Nuxt module is to provide Nuxt-specific features for Vue Storefront. What kind of features? Every build-time and router/vuex specific operations so things like multistore, Storefront UI overriding mechanism etc.

## Architecture

Every lib should have it's own entry point in core so they are treeshakeable. They can be configured through Nuxt config.