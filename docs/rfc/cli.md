# Vue Storefront CLI

Vue Storefront CLI is a command-line interface for scaffolding Vue storefront apps.

After answering series of questions this tool will set up new Vue Storefront application for you.

## Options

First phase:
- eCommerce integration (and API URL)
- CMS integration (and API URL)
- Storefront UI (yes/no)
Second phase:
- Internationalization (yes/no)
- SEO-friendly URLs (yes/no)


## Under the hood

Under the hood during project generation CLI will generate a working Nuxt project for you with below steps:

1. First it will take theme of your eCommerce integration as a base.
2. Then it will inject CMS of your choice in special places defined by eCommerce integration author
3. If needed it will remove all template/script parts as well as storefront UI itself from your project
4. It will remove all magic comments, merge js files with vue files and output a working project for you.