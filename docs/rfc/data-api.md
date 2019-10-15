# Data API

:::tip tl;dr
Data API is a backend service for vue-storefront that provides data access to product catalog (via ElasticSearch) and allows users to place orders into order queue (by default it's Redis queue supported via kqueue library).
:::


## API

### Catalog

`[GET] /catalog/products`
- Return codes
  - `200` _returns products list_
  - `500` _something went wrong_
- Query params
  - _[attribute name]: value_
  - eg. color=blue&size=34
  - page=[number of page]


`[GET] /catalog/categories`
- Return codes
  - `200` _returns categories list_
  - `500` _something went wrong_
- Query params
  - _[attribute name]: value_
  - eg. color=blue&size=34
  - page=[number of page]

`[GET] /catalog/product/stock`
- Return codes
  - `200` _returns information about product stock_
  - `500` _something went wrong_
- Query params
  - `sku`

### Cart

`[GET] /cart`
- Return codes
  - `200` _returns current cart
  - `500` _something went wrong_
- Query params
  - `token` _user token that is currently logged in_
  - `cartId` _the id of the cart_

`[POST] /cart/create`
- Return codes
  - `200` _returns cartId_
  - `500` _something went wrong_
- Body
  - `token` _user token that is currently logged in_

`[POST] /cart/add`
- Return codes
  - 200 _returns product that was added_
  - 500 _something went wrong_
- Query params
  - `token` _user token that is currently logged in_
  - `cartId` _the id of the cart_
- Body
  - sku
  - qty

`[POST] /cart/remove`
- Return codes
  - 200 _product was removed_
  - 500 _something went wrong_
- Query params
  - `token` _user token that is currently logged in_
  - `cartId` _the id of the cart_
- Body
  - sku

`[POST] /cart/coupon/apply`
- Return codes
  - 200 _coupon was applied successfully_
  - 500 _something went wrong_
- Query params
  - `token` _user token that is currently logged in_
  - `cartId` _the id of the cart_
- Body
  - `couponCode`

`[POST] /cart/coupon/remove`
- Return codes
  - 200 _coupon was removed successfully_
  - 500 _something went wrong_
- Query params
  - `token` _user token that is currently logged in_
  - `cartId` _the id of the cart_
- Body
  - `couponCode`


### Attributes

`[GET] /attributes`
- Return codes
  - 200 _returns the list of attributes_
  - 500 _something went wrong_
- Query params
  - _[attribute name]: value_
  - eg. color=blue&size=34

### Checkout

`[POST] /checkout/place-order`
- Return codes
  - 200 _order sent_
  - 500 _something went wrong_
- Body
  - `personalDetails`
  - `shippingMethod`
  - `shippingDetails`
  - `paymentMethod`
  - `paymentDetails`

### User

`[POST] /user/register`
- Return codes
  - 200 _returns user token_
  - 500 _something went wrong_
- Body
  - `login`
  - `password`
  - `userData`

`[POST] /user/login`
- Return codes
  - 200 _returns user token_
  - 500 _something went wrong_
- Body
  - `email`
  - `password`

`[POST] /user/logout`
- Return codes
  - 200 _user was logged out_
  - 500 _something went wrong_
- Body
  - `token`

`[GET] /user/profile`
- Return codes
  - 200 _returns user profile data_
  - 500 _something went wrong_
- Body
  - `token`
