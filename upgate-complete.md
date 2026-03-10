# UpGate API Documentation - Complete Reference

> Source: https://docs.upgate.com/openapi
> Combined documentation for LLM reference

---

# UpGate API documentation

UpGate is a world-class payment orchestration platform. 
Our mission is to simplify payments and make it easier for merchants to reach global customers. 
We use the latest technologies to help you achieve better conversions and global user monetization.

Version: 1.2

## Servers

Sandbox UpGate API
```
https://api.sandbox.upgate.com/v1
```

Production UpGate API
```
https://api.upgate.com/v1
```

## Security

### X-Api-Key

Type: apiKey
In: header
Name: X-Api-Key

## Download OpenAPI description

[UpGate API documentation](https://docs.upgate.com/_bundle/openapi.yaml)

---

# Changelog

### [1.1.53] - 2026-01-12
#### Added
- New field last_transacion_id to subscription payment

### [1.1.52] - 2026-01-02
#### Added
- New response code '2910 Routing rule not found'

### [1.1.51] - 2025-12-24
#### Added
- New fields transaction_tax_exempt_amount to postback payment
- New fields transaction_tax_exempt_amount to postback subscription

### [1.1.50] - 2025-12-09
#### Added
- New field rrn to postback transaction details
- New field payment_method_reference_type to postback transaction details
- New field payment_method_reference_number to postback transaction details

### [1.1.49] - 2025-12-08
#### Added
- New payment method PAY_BY_BANK_JAPAN

### [1.1.48] - 2025-11-19
#### Added
- New response code added '2104 Invalid network token expiry date'
- New response code added '2147 Missing network token cryptogram'
- New response code added '2148 Invalid network token cryptogram'
- New response code added '2149 Invalid network token ECI'
- New response code added '2150 Invalid network token'

### [1.1.47] - 2025-10-09
#### Added
- New refund request Refund transaction by id
- Field transaction_amount has been added to data in transaction postbacks
- Field transaction_currency_code has been added to data in transaction postbacks

### [1.1.46] - 2025-09-17
#### Added
- New response codes added '3901 Processor Communication Error'

### [1.1.45] - 2025-09-10
#### Added
- New request Fetch transactions by filters

### [1.1.44] - 2025-08-13
#### Added
- New payout method BANK_TRANSFER

### [1.1.43] - 2025-08-04
#### Changed
- New payment method added
- New response codes added

### [1.1.42] - 2025-07-09
#### Changed
- New payment methods added

### [1.1.41] - 2025-07-03
#### Added
- Field card_bin_country_name has been added to data in transaction postbacks
- Field card_bin_country_code has been added to data in transaction postbacks
- Field card_bin_type has been added to data in transaction postbacks

### [1.1.40] - 2025-07-02
#### Added
- New endpoint cit-sale

### [1.1.39] - 2025-07-01
#### Changed
- New payment methods added
- FAQ updated

### [1.1.38] - 2025-06-20
#### Added
- New response code '2120 Invalid amount'

### [1.1.37] - 2025-05-29
#### Added
- Add new response code group 'PENDING'
#### Changed
- Response code 1200 moved to group 'PENDING'

### [1.1.36] - 2025-05-26
#### Added
- New fields transaction_fee_amount, transaction_tax_amount, transaction_tax_type, transaction_tax_label, transaction_tax_percentage to postback payment
- New fields rebill_transaction_fee_amount, rebill_transaction_fee_currency_code, rebill_transaction_tax_amount, rebill_transaction_tax_currency_code to postback products
- New fields transaction_fee_amount, transaction_fee_currency_code, transaction_tax_amount, transaction_tax_currency_code, transaction_tax_type, transaction_tax_label, transaction_tax_percentage to postback subscription
- New fields transaction_fee_amount, transaction_tax_amount, transaction_tax_type, transaction_tax_label, transaction_tax_percentage to response payment
- New fields rebill_transaction_fee_amount, rebill_transaction_fee_currency_code, rebill_transaction_tax_amount, rebill_transaction_tax_currency_code to response products
- New fields transaction_fee_amount, transaction_fee_currency_code, transaction_tax_amount, transaction_tax_currency_code, transaction_tax_type, transaction_tax_label, transaction_tax_percentage to response subscription

### [1.1.35] - 2025-05-23
#### Added
- New response code '2016 Crypto address is invalid'

### [1.1.34] - 2025-05-19
#### Added
- `taxOverride` object was added to Checkout request

### [1.1.33] - 2025-04-25
#### Added
- New response code '2908 Payment token is not valid'

### [1.1.32] - 2025-04-14
#### Added
- New payment methods added

### [1.1.31] - 2025-04-03
#### Added
- New fields rebill_transaction_amount, rebill_transaction_currency_code to transaction product postback & response

### [1.1.30] - 2025-04-07
#### Added
- New payment methods added

### [1.1.29] - 2025-03-05
#### Added
- New field customer_selected_country_code to postback payment details

### [1.1.28] - 2025-02-24
#### Added
- New transaction types: RDR and RDR_REVERSAL

### [1.1.27] - 2025-02-17
#### Added
- New fields customer_phone_number, customer_email, customer_first_name, customer_last_name, payment_token_type to postback payment details
- New fields processor_response_text, cascade_attempt, has_been_cascaded to postback transaction details

### [1.1.26] - 2025-01-28
#### Added
- New response code '2907 Payment type not supported for payment method'

### [1.1.25] - 2025-01-27
#### Changed
- Updated the page structure

### [1.1.24] - 2025-01-15
#### Added
- `paymentFormOverride` object was added to Checkout request
- Override theme chapter

### [1.1.23] - 2024-12-15
#### Added
- New response code '2309 Customer blacklisted'

### [1.1.22] - 2024-11-26
#### Added
- Field version has been added to data in transaction postbacks
- Field version has been added to data in subscription postbacks

### [1.1.21] - 2024-10-16
#### Removed
- Payment detail card_token_id has been removed from data.transactions.payment_details in postbacks
- Payment detail card_token_id has been removed from data.transactions.payment_details in response to synchronous mit-sale and mit-authorize

### [1.1.20] - 2024-10-03
#### Changed
- Field **payment_token_id** as a required for MIT Sale Request and MIT Authorize Request
- Field **methods** as an optional field for Checkout Request
- Field **shop_name** max length from 64 to 128 characters in Checkout Request
- Field **merchant_product_id** max length from 64 to 128 characters in Checkout Request

#### Updated
- Postback IP addresses
- Response codes
- Supported APM methods
- Supported card payment methods

### [1.1.19] - 2024-09-17
#### Changed
- Changed max length for field **success_url** from 2048 to 512
- Changed max length for field **failure_url** from 2048 o 512

### [1.1.18] - 2024-07-23
#### Added
- Added request subscription by transaction ID

### [1.1.17] - 2024-04-12
#### Added
- Added Subscription state request by subscription id

### [1.1.16] - 2024-04-10
#### Added
- For callback added fields **transaction_amount**, **transaction_currency_code** and **product_transaction_price**

### [1.1.15] - 2024-04-04
#### Changed
- Update response codes

### [1.1.14] - 2024-02-20
#### Added
- Added Direct payment flow section
- Added Checkout flow section
- Added Checkout request examples
- Added description of Embedded flow for Checkout
- Added new APM payment methods

### [1.1.13] - 2023-12-12
#### Added
- Added fields **shop_name** and **shop_url**
- For subscription added fields **retry_at**, **retry_count** and **created_at**
- Added new APM payment methods
#### Changed
- Update response codes

### [1.1.12] - 2023-09-05
#### Added
- Create token endpoint
#### Changed
- Update response codes

### [1.1.11] - 2023-03-05
#### Changed
- For subscription renamed field **customer_id** to **merchant_customer_id**
- For subscription renamed field **is_enabled** to **is_rebill_enabled**
- Changed max length for field **success_url** from 64 to 2048
- Changed max length for field **failure_url** from 64 to 2048
- Changed max length for field **email** from 64 to 320
- Changed that the amount for Authorize can be 0
#### Removed
- Required header X-Merchant-ID from all requests

---

# Introduction

## Merchant callback URL

URL for callback's (postback's) should be set with the merchant account (during the registration) & can be updated in any time using admin panel

## Domains

| environment | domain |
| --- | --- |
| Sandbox | api.sandbox.upgate.com |
| Prod | api.upgate.com |

## Postback IP addresses

| production | sandbox |
| --- | --- |
| 18.195.228.88 | 35.159.56.107 |
| 3.68.255.126 | 18.153.214.226 |
| 3.127.95.240 | 18.194.246.210 |
| 18.198.146.231 | 52.28.150.254 |

---

# Demo payment page

[Checkout Overview](https://checkout.upgate.com/demo)

---

# Sale request

This endpoint allows the creation of a single, one-time payment. Upon successful completion, the system will return a payment token in the callback response.
This token can later be used to initiate subsequent Merchant-Initiated Transactions (MIT) or Customer-Initiated Transactions (CIT) associated with the original payment.

Endpoint: POST /checkout
Version: 1.2
Security: X-Api-Key

## Header parameters:

  - `X-Idempotency-Key` (string)
    The system supports the query deduplication mechanism. 
Any system-wide merchant's request after the first one with 
the same X-Idempotency-Key will return an error.
For example, if you have retrying mechanism for payouts and you want 
to avoid double sending, you can put header with value payout_{your_payout_id}

## Request fields (application/json):

  - `payment_data` (any, required)

  - `customer` (object, required)

  - `customer.merchant_customer_id` (string, required)

  - `customer.email` (string)

  - `customer.language` (string)

  - `customer.country_code` (string)
    Country Code (ISO 3166-2)

  - `callback` (object, required)
    Specifies the URLs to which the customer will be redirected after completing a payment transaction. The success_url is used for redirection upon successful payment, and the failure_url is used in case of payment failure.

  - `callback.success_url` (string, required)

  - `callback.failure_url` (string, required)

  - `products` (array, required)

  - `products.merchant_product_id` (string)

  - `products.type` (string, required)
    Enum: "SALE"

  - `products.price` (number, required)

  - `products.name` (string, required)

  - `products.description` (string)

  - `additional_info` (object)

  - `additional_info.payment_token_id` (string)

  - `additional_info.crypto_network` (string)

  - `additional_info.crypto_address` (string)

  - `additional_info.crypto_withdrawal_address` (string)

  - `additional_info.customer_full_name` (string)

  - `additional_info.phone` (string)

  - `payment_form_override` (object)
    Customizing Payment Form Appearance. All these parameters will override existing configuration in Upgate back office if any

  - `payment_form_override.color` (string)
    Override the color for the payment form.

  - `payment_form_override.theme_type` (string)
    Override the theme for the payment form.
    Enum: "LIGHT", "DARK", "BROWSER"

  - `payment_form_override.theme_variables` (object)
    Override CSS variables for the payment form.

  - `payment_form_override.theme_rules` (object)
    Override CSS rules for the payment form.

  - `tax_override` (object)
    All these parameters will override existing Tax Rules configuration in Upgate back office

  - `tax_override.percentage` (string)
    Override Tax percentage

  - `tax_override.type` (string)
    Override Tax type
    Enum: "INCLUDED", "ON_TOP"

  - `tax_override.label` (string)
    Override Tax label
    Enum: "TAX", "VAT", "GST", "SALES_TAX"

## Response 200 fields (application/json):

  - `id` (string, required)

  - `created_at` (string, required)

  - `merchant_id` (string, required)

  - `session` (object, required)

  - `session.created_at` (string, required)
    UTC date time format

  - `session.expires_at` (string, required)
    UTC date time format

  - `session.redirect_url` (string, required)

  - `payment_data` (any, required)

  - `customer` (object, required)

  - `callback` (object, required)

  - `products` (array, required)

## Response 400 fields (application/json):

  - `errors` (array)

  - `errors.error_code` (string, required)
    Enum: "INVALID_REQUEST_PARAMETER", "INVALID_REQUEST", "INTERNAL_ERROR", "TOO_MANY_REQUESTS", "NOT_FOUND"

  - `errors.error_message` (string, required)

## Response 401 fields (application/json):

  - `errors` (array)

## Response 429 fields (application/json):

  - `errors` (array)

## Response 500 fields (application/json):

  - `errors` (array)

---

# Subscription request

This endpoint allows you to create a subscription within the Upgate system. Once the subscription is successfully created, the user will be charged automatically according to the schedule specified in the request.
You can also combine recurring (rebill) payments with a one-time payment in the same flow. Refer to the Use Cases section for detailed examples and implementation guidance.
After a successful request, you will receive two callback notifications, one for the initial transaction (TRANSACTION type) snd one for the subscription update (SUBSCRIPTION type)

Endpoint: POST /checkout 
Version: 1.2
Security: X-Api-Key

## Header parameters:

  - `X-Idempotency-Key` (string)
    The system supports the query deduplication mechanism. 

## Request fields (application/json):

  - `payment_data` (object, required)

  - `payment_data.type` (string, required)
    Enum: "AUTHORIZE", "RECURRING"

  - `payment_data.methods` (array)
    Supported Payment methods can be found for cards and for alternative payment methods.
Please note that the payment methods can be empty, in this case payment methods would be taken from the back office configuration.
In case you are using Google Pay or Apple Pay, Card method needs to be included as well, e.g. "APPLE_PAY", "CARD" or "GOOGLE_PAY", "CARD"

  - `payment_data.amount` (number, required)

  - `payment_data.currency_code` (string, required)
    Currency code (ISO 4217)

  - `payment_data.forced_3d` (boolean)

  - `payment_data.shop_name` (string)

  - `payment_data.shop_url` (string)

  - `payment_data.merchant_payment_id` (string)

  - `customer` (object, required)

  - `customer.merchant_customer_id` (string, required)

  - `customer.email` (string)

  - `customer.language` (string)

  - `customer.country_code` (string)
    Country Code (ISO 3166-2)

  - `callback` (object, required)

  - `callback.success_url` (string, required)

  - `callback.failure_url` (string, required)

  - `products` (array, required)

  - `products.merchant_product_id` (string)

  - `products.price` (number, required)

  - `products.name` (string, required)

  - `products.description` (string)

  - `products.charge` (object, required)

  - `products.charge.value` (integer)

  - `products.charge.interval` (string)
    Enum: "DAY"

  - `products.trial` (object)

---

# Update subscription by merchant product id

Endpoint: PATCH /subscription
Version: 1.2
Security: X-Api-Key

## Query parameters:

  - `merchant_product_id` (string, required)
    Example: "2JZGULPNK27K2"

## Request fields (application/json):

  - `is_rebill_enabled` (boolean, required)

## Response 200 fields (application/json):

  - `type` (string)
    Enum: "SUBSCRIPTION"

  - `data` (object)

  - `data.version` (number)

  - `data.initial_transaction_id` (string)

  - `data.subscription_id` (string)

  - `data.created_at` (string)
    UTC date time format

  - `data.subscription_status` (string)

  - `data.expires_at` (string)
    UTC date time format

  - `data.merchant_id` (string)

  - `data.merchant_product_id` (string)

  - `data.merchant_payment_id` (string)

  - `data.merchant_customer_id` (string)

  - `data.payment_method` (string)
    Enum: "CARD"

  - `data.currency_code` (string)

  - `data.amount` (string)

  - `data.transaction_currency_code` (string)

  - `data.transaction_amount` (string)

  - `data.transaction_fee_currency_code` (string)

  - `data.transaction_fee_amount` (string)

  - `data.transaction_tax_currency_code` (string)

  - `data.transaction_tax_amount` (string)

  - `data.transaction_tax_type` (string)

  - `data.transaction_tax_label` (string)

  - `data.transaction_tax_percentage` (string)

  - `data.transaction_tax_exempt_amount` (string)

  - `data.is_trial` (boolean)

  - `data.charge_interval` (string)
    Enum: "DAY"

  - `data.charge_interval_value` (number)

  - `data.is_rebill_enabled` (boolean)

  - `data.trial_interval` (string)
    Enum: "DAY"

  - `data.trial_interval_value` (number)

  - `data.payment_id` (string)

  - `data.product_id` (string)

  - `data.retry_at` (string)
    UTC date time format

  - `data.retry_count` (number)

  - `data.retry_total_count` (number)
    Total count of attempts to rebill

  - `data.shop_name` (string)
    Shop name from original payment

  - `data.shop_url` (string)
    Shop URL from original payment

---

# Get subscription by transaction ID

Endpoint: GET /subscription
Version: 1.2
Security: X-Api-Key

## Query parameters:

  - `transaction_id` (string)
    Example: "2U5T2MIX22EK3"

  - `page` (integer)
    Example: 1

  - `size` (integer)
    Example: 100

## Response 200 fields (application/json):

  - `type` (string, required)
    Enum: "SUBSCRIPTION"

  - `data` (array, required)

  - `meta` (object, required)

  - `meta.pageNumber` (integer, required)

  - `meta.pageSize` (integer, required)

---

# Get subscription by subscription id

Endpoint: GET /subscription/{subscriptionId}
Version: 1.2
Security: X-Api-Key

## Path parameters:

  - `subscriptionId` (string, required)
    Example: "2E2CL5R3KC7K3"

---

# Update subscription by subscription id

Endpoint: PATCH /subscription/{subscriptionId}
Version: 1.2
Security: X-Api-Key

## Path parameters:

  - `subscriptionId` (string, required)
    Example: "2E2CL5R3KC7K3"

## Request fields (application/json):

  - `is_rebill_enabled` (boolean, required)

---

# MIT Sale request

This endpoint allows you to create a subsequent transaction using an existing payment token. It is typically used when you want to manage recurring or rebill payments on your side, or when you want to enable one-click payments for your customers without requiring them to re-enter their payment details.
To initiate a subsequent transaction, provide the payment token ID received from a previous Sale request.

Endpoint: POST /mit-sale
Version: 1.2
Security: X-Api-Key

## Query parameters:

  - `mode` (string)
    Enum: "SYNC", "ASYNC"

## Request fields (application/json):

  - `payment_token_id` (string, required)
    Token from original payment

  - `payment_method` (string, required)

  - `merchant_payment_id` (string)
    Optional field, might be used as a reference from the merchant side

  - `merchant_customer_id` (string, required)

  - `email` (string, required)

  - `amount` (string, required)
    can't be zero for SALE | MIT_SALE

  - `language` (string)
    required only for SALE | AUTHORIZE | RECURRING

  - `country_code` (string, required)
    Country Code (ISO 3166-2)

  - `currency_code` (string, required)
    Currency code (ISO 4217)

  - `success_url` (string)
    required only for SALE | AUTHORIZE | RECURRING

  - `failure_url` (string)
    required only for SALE | AUTHORIZE | RECURRING

  - `shop_name` (string)
    Shop name

  - `shop_url` (string)
    Shop URL with protocol HTTP or HTTPS

  - `products` (array, required)
    Expected at least 1 product

---

# MIT Authorize request

Endpoint: POST /mit-authorize
Version: 1.2
Security: X-Api-Key

## Query parameters:

  - `mode` (string)
    Enum: "SYNC", "ASYNC"

## Request fields (application/json):

  - `payment_token_id` (string, required)
    Token from original payment

  - `payment_method` (string, required)

  - `merchant_payment_id` (string)

  - `merchant_customer_id` (string, required)

  - `email` (string, required)

  - `amount` (string, required)

  - `language` (string)

  - `country_code` (string, required)
    Country Code (ISO 3166-2)

  - `currency_code` (string, required)
    Currency code (ISO 4217)

  - `success_url` (string)

  - `failure_url` (string)

  - `shop_name` (string)

  - `shop_url` (string)

  - `products` (array, required)

---

# CIT Sale request

This endpoint allows you to create a subsequent transaction that triggers a 3-D Secure (3DS) authentication flow for your users. It can be used when you want customers to actively confirm and provide consent for the charge, ensuring additional security and compliance with authentication requirements.
Similar to the standard subsequent transaction, this endpoint enables you to manage rebills on your end or offer one-click payments without requiring users to re-enter their card details.
Use the payment token ID received from the original Sale request to initiate this transaction.

Endpoint: POST /cit-sale
Version: 1.2
Security: X-Api-Key

## Query parameters:

  - `mode` (string)
    Enum: "SYNC", "ASYNC"

## Request fields (application/json):

  - `payment_token_id` (string, required)
    Token from original payment

  - `payment_method` (string, required)

  - `merchant_payment_id` (string)

  - `merchant_customer_id` (string, required)

  - `email` (string, required)

  - `amount` (string, required)

  - `language` (string)

  - `country_code` (string, required)
    Country Code (ISO 3166-2)

  - `currency_code` (string, required)
    Currency code (ISO 4217)

  - `forced_3d` (boolean)
    If needs to initiate 3d secure from merchant side.

  - `success_url` (string)

  - `failure_url` (string)

  - `shop_name` (string)

  - `shop_url` (string)

  - `products` (array, required)

---

# Fetch transactions by filters

When you request a list of transactions, the response is limited to the maximum number of records you specified in the query. If there are more transactions available beyond that limit, you don't need to start over. Instead, you can continue fetching results from where you left off by including the prev_id parameter in your next request.

Endpoint: GET /transaction
Version: 1.2
Security: X-Api-Key

## Query parameters:

  - `created_at_from` (string)
    Filter transactions created after this date (inclusive). Format: ISO 8601.
    Example: "2024-02-15T13:38:47.173Z"

  - `created_at_to` (string)
    Filter transactions created before this date (inclusive). Format: ISO 8601.
    Example: "2024-02-15T13:38:47.173Z"

  - `limit` (integer)
    Maximum number of transactions to return (default is 100, maximum is 1000, minimum is 1).
    Example: "100"

  - `prev_id` (string)
    Fetch transactions with IDs less than this value for pagination.
    Example: "2JWZGUKDK2DK2"

  - `response_code` (integer)
    Filter transactions by response code for more specific results.
    Example: "1000, 2000"

  - `transaction_type` (string)
    Filter transactions by type. Multiple types can be specified, separated by commas. Supported types include TOKEN, THREE_DS, SALE, AUTHORIZE, PAYOUT, CHARGEBACK, CHARGEBACK_REVERSAL, RDR, RDR_REVERSAL, REFUND, VOID and FRAUD_ALERT.
    Example: "SALE,THREE_DS,REFUND"

## Response 200 fields (application/json):

  - `type` (string, required)
    Enum: "TRANSACTION"

  - `data` (array, required)

  - `data.transaction_id` (string, required)

  - `data.transaction_type` (string, required)
    Enum: "TOKEN", "THREE_DS", "SALE", "AUTHORIZE", "PAYOUT", "CHARGEBACK", "CHARGEBACK_REVERSAL", "RDR", "RDR_REVERSAL", "REFUND", "VOID", "FRAUD_ALERT"

  - `data.transaction_status` (string, required)
    Enum: "SUCCESS", "DECLINE", "ERROR"

  - `data.created_at` (string, required)
    UTC date time format

  - `data.response_code` (number, required)
    Code from response codes

  - `data.response_text` (string, required)
    Message from response codes

  - `data.transaction_details` (object, required)

  - `data.payment_context` (object)

  - `data.payment_details` (object, required)

  - `data.payment` (object, required)

  - `meta` (object, required)

  - `meta.next_prev_id` (string)

---

# Refund request

Request to refund transaction

Endpoint: POST /refund
Version: 1.2
Security: X-Api-Key

## Request fields (application/json):

  - `transaction_id` (string, required)

  - `reason` (string)

  - `initiated_by` (string)

  - `amount` (string)
    Amount to refund, if not provided, full remaining amount will be refunded

  - `currency_code` (string)
    Currency code (ISO 4217), should be present if amount is provided

## Response 200 fields (application/json):

  - `type` (string, required)
    Enum: "REFUND"

  - `data` (object, required)

  - `data.transaction_id` (string, required)

  - `data.reason` (string)
    Optional field

  - `data.initiated_by` (string)
    Optional field

---

# Token request

This endpoint retrieves a payment token for a customer's card. Before using this endpoint, ensure that the corresponding setting is enabled in the UpGate Backoffice. The payment token returned by this endpoint can be used in subsequent and card payout requests.

Endpoint: POST /token
Version: 1.2
Security: X-Api-Key

## Request fields (application/json):

  - `payment_method` (string, required)
    Enum: "CARD"

  - `merchant_payment_id` (string)
    Optional field, might be used as a reference from the merchant side

  - `merchant_customer_id` (string, required)

  - `email` (string, required)

  - `language` (string, required)

  - `country_code` (string, required)
    Country Code (ISO 3166-2)

  - `success_url` (string, required)

  - `failure_url` (string, required)

  - `prefilled_card_holder` (string)
    Card holder name to show on payment form

## Response 200 fields (application/json):

  - `type` (string, required)
    Enum: "PAYMENT"

  - `data` (object, required)

  - `data.payment_id` (string, required)

  - `data.payment_type` (string, required)
    Enum: "TOKEN"

  - `data.payment_method` (string, required)
    Enum: "CARD"

  - `data.created_at` (string, required)
    UTC date time format

  - `data.session` (object, required)

  - `data.session.expires_at` (string, required)
    UTC date time format

  - `data.session.redirect_url` (string, required)

---

# Payout request

Endpoint: POST /payout
Version: 1.2
Security: X-Api-Key

## Request fields (application/json):

  - `payment_method` (string, required)
    Enum: "CARD", "CRYPTO", "SEPA", "PAXUM", "BANK_TRANSFER"

  - `merchant_payment_id` (string, required)
    Field, might be uniq for every request (deduplication check)

  - `merchant_customer_id` (string, required)

  - `amount` (string, required)

  - `currency_code` (string, required)
    Currency code (ISO 4217), KRW for BANK_TRANSFER method

  - `payment_details` (any, required)

  - `description` (string)
    Description (Required field for BANK_TRANSFER payout type)

## Response 200 fields (application/json):

  - `type` (string, required)
    Enum: "PAYMENT"

  - `data` (object, required)

  - `data.payment_id` (string, required)

  - `data.payment_type` (string, required)
    Enum: "PAYOUT"

  - `data.created_at` (string, required)
    UTC date time format

  - `data.merchant_id` (string, required)

  - `data.base_amount` (string, required)

  - `data.base_currency_code` (string, required)
    Currency code (ISO 4217)

  - `data.payment_method` (string, required)
    Enum: "CARD", "CRYPTO", "SEPA", "PAXUM", "BANK_TRANSFER"

---

# Use cases

## 1. How to combine recurring transactions with a one-time extra payment

For example, you would like to have a subscription that costs 10 Euros monthly, but you would like to have a one time extra payment. This can be solved by including 2 products into a sale request, one SALE product and one RECURRING product.

```json
{
  "payment_data": {
    "merchant_payment_id": "P_001",
    "methods": ["CARD"],
    "type": "SALE",
    "amount": 25.0,
    "currency_code": "EUR"
  },
  "customer": {
    "merchant_customer_id": "U_001"
  },
  "callback": {
    "success_url": "https://example.com/success",
    "failure_url": "https://example.com/failure"
  },
  "products": [
    {
      "type": "SALE",
      "name": "One-time fee",
      "description": "One-time fee",
      "price": 15.0
    },
    {
      "type": "SUBSCRIPTION",
      "name": "Monthly fee",
      "description": "Monthly fee",
      "price": 10.0,
      "charge": {
        "value": 30,
        "interval": "DAY"
      }
    }
  ]
}
```

## 2. How to skip checkout form for APM methods

UpGate allows you to skip the checkout form for APM methods. If all the requested information is provided in the checkout sale request, the checkout form for gathering the customer data will be skipped.

Enable the direct flow: Go to Payment Operations -> Payment Firm Settings -> Checkout Form

```json
{
  "payment_data": {
    "merchant_payment_id": "P_001",
    "methods": ["KAKAO_PAY"],
    "type": "SALE",
    "amount": 9.99,
    "currency_code": "EUR"
  },
  "customer": {
    "merchant_customer_id": "U_001",
    "email": "eka@upgate.com"
  },
  "callback": {
    "success_url": "https://example.com/success",
    "failure_url": "https://example.com/failure"
  },
  "additional_info": {
    "email": "eka@gmail.com",
    "phone": "+34 611643310",
    "customer_full_name": "EKA"
  },
  "products": [
    {
      "type": "SALE",
      "name": "Test product name",
      "description": "Test product description",
      "price": 9.99
    }
  ]
}
```

Please include the customer email address in the customer object as well, as this would be displayed in UpGate backoffice.

## 3. Where to find a list of supported country codes?

The list of supported country codes is sourced from the official ISO website.

## 4. Where are the exchange rates sourced from?

Exchange rates are sourced from ECB (European Central Bank).

## 5. How to verify postback signatures?

The postback signature is generated using HMAC-SHA256 algorithm with the secret key provided by UpGate.

---

# Google Pay™

Google Pay integration documentation is available through the UpGate platform.

---

# Override theme

Customizing Payment Form Appearance documentation is available for theming the checkout form.

---

# Embedded flow

Embedded flow documentation for integrating checkout within your application.

---

# Authorize request (deprecated)

Endpoint: POST /authorize
Version: 1.2
Security: X-Api-Key

## Request fields (application/json):

  - `payment_method` (string, required)

  - `merchant_payment_id` (string)

  - `merchant_customer_id` (string, required)

  - `email` (string, required)

  - `amount` (string, required)

  - `language` (string)

  - `country_code` (string, required)
    Country Code (ISO 3166-2)

  - `currency_code` (string, required)
    Currency code (ISO 4217)

  - `forced_3d` (boolean)

  - `success_url` (string)

  - `failure_url` (string)

  - `shop_name` (string)

  - `shop_url` (string)

  - `products` (array, required)

## Response 200 fields (application/json):

  - `type` (string, required)
    Enum: "PAYMENT"

  - `data` (object, required)

  - `data.payment_id` (string, required)

  - `data.initial_subscription_id` (string)

  - `data.payment_type` (string, required)
    Enum: "SALE", "AUTHORIZE", "MIT_SALE", "MIT_AUTHORIZE", "RECURRING"

  - `data.payment_method` (string, required)

  - `data.created_at` (string, required)

  - `data.session` (object)

  - `data.session.expires_at` (string, required)

  - `data.session.redirect_url` (string, required)

  - `data.products` (array, required)

---

# Recurring transaction

Endpoint: POST /recurring
Version: 1.2
Security: X-Api-Key

## Request fields (application/json):

  - `payment_method` (string, required)

  - `merchant_payment_id` (string)

  - `merchant_customer_id` (string, required)

  - `email` (string, required)

  - `amount` (string, required)

  - `language` (string)

  - `country_code` (string, required)
    Country Code (ISO 3166-2)

  - `currency_code` (string, required)
    Currency code (ISO 4217)

  - `forced_3d` (boolean)

  - `success_url` (string)

  - `failure_url` (string)

  - `shop_name` (string)

  - `shop_url` (string)

  - `products` (array, required)

---

# Sale request (deprecated)

Endpoint: POST /sale
Version: 1.2
Security: X-Api-Key

## Request fields (application/json):

  - `payment_method` (string, required)

  - `merchant_payment_id` (string)

  - `merchant_customer_id` (string, required)

  - `email` (string, required)

  - `amount` (string, required)

  - `language` (string)

  - `country_code` (string, required)
    Country Code (ISO 3166-2)

  - `currency_code` (string, required)
    Currency code (ISO 4217)

  - `forced_3d` (boolean)

  - `success_url` (string)

  - `failure_url` (string)

  - `shop_name` (string)

  - `shop_url` (string)

  - `products` (array, required)

---

# Error Response Format

All error responses follow this format:

```json
{
  "errors": [
    {
      "error_code": "INVALID_REQUEST_PARAMETER",
      "error_message": "Description of the error"
    }
  ]
}
```

Error codes:
- `INVALID_REQUEST_PARAMETER`
- `INVALID_REQUEST`
- `INTERNAL_ERROR`
- `TOO_MANY_REQUESTS`
- `NOT_FOUND`

---

# Common Response Codes

| Code | Status | Description |
|------|--------|-------------|
| 200 | Success | Request processed successfully |
| 400 | Bad Request | Invalid request parameters |
| 401 | Unauthorized | Invalid or missing API key |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Error | Server error |

---

*End of UpGate API Documentation*