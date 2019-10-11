# Nuxt Theme

Nuxt theme is just a **scaffolding** template for out of the box working Vue Storefront shop. We should be able to generate themes from CLI.

In CLI people should be able to choose (from official modules)
- eCommerce platform, 
- features like multistore
- payment methods 
- cms
- If they want to use Storefront UI or just leave templates empty (just pull data)

We can use templating engine like [handlebars](https://handlebarsjs.com) or [ejs](https://ejs.co/) to conditionally generate parts of the template based on CLI options.

We want to do sam scaffolding that [vue cli 2](https://github.com/vuejs-templates/webpack) had. 
```js
// from vue cli 2
{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
```
## Developers preview

In developers preview there will be only option to generate Theme, without choosing options of what we want to have there.