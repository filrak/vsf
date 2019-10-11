# Nuxt Theme

Nuxt theme is just a **template** for out of the box working Vue Storefront shop. We should be able to generate themes from CLI.

In CLI people should be able to choose (from official modules)
- eCommerce platform, 
- features like multistore
- payment methods 
- cms
- If they want to use Storefront UI or just leave templates empty (just pull data)

We can use templating engine like [handlebars](https://handlebarsjs.com) or [ejs](https://ejs.co/) to conditionally generate parts of the template based on CLI options.

We want to do sam scaffolding that [vue cli 2](https://github.com/vuejs-templates/webpack) had.
## Developers preview

In developers preview there will be only option to generate Theme, without choosing options of what we want to have there.