# Slice 1: Place Order

This slice uses an API, service, and data-access layer architecture. The original plan was to include an application layer between the API and service, but this seemed needless as it was just another layer which had no real function. The entirety of the place order functionality deals with the service layer taking data from the placed order, referencing it against the database, and creating a new order and its items. This document focuses on that, with the database operations mentioned but not discussed in too much detail as they are very simple.

The logic accounts in part for the fact that the client supplies only product identity and quantity, while product metadata and pricing are resolved server-side from the database. This prevents client-controlled values such as price from becoming authoritative order data.

## Frontend

The place order button in the cart triggers an event handler which accesses localStorage, which the cart is also derived from. Order data is produced from this and sent to the API.

## API

First is the API. The order data from the request body is stored in the order variable and a validation check is done on it.

The createOrderService function is called and order passed to it.

## Service

In the service, a transaction is started. This is essential as it provides atomicity for the database operations, avoiding situations such as where stock is decremented before the order is placed, and another order takes the last item of stock. The transaction will prove to be problematic later.

The service is structured as multiple smaller functions. The code grouping was done so to make each function obvious. The names too.

### processCustomer

The first, processCustomer, is intended to compare the customer ID sent down with the order. It does this by calling getCustomer_DB_op, which finds the customer in the database with a matching ID. If this fails then of course an error is thrown, meaning the database operation acts as validation and so extra checks aren't needed in the service.

In BFshop's first iteration, the customer ID is hardcoded as always one for simplicity.

Output of the operation is stored in `customer`.

### processProduct

The next function is processProduct and this is more complex. At this point we only have the product ID, so we need to find the real product in the database.

Another database operation, getProduct_DB_op, is called. This gives us an array of the products with corresponding IDs. For each, a variable is created which tests for matching IDs between server-side products and client-side products.

There is a check, in the database operation, to match the new products array length to the product IDs length to act as validation, but this does not correctly handle duplicate product IDs and is marked for replacement during validation hardening.

If successful, the next check is carried out, which makes sure there is adequate stock to match the quantity property of the order item.

Products is returned to the function.

### createOrderItems

Then we create the order items. We have to create them before creating the order as we need them to calculate the order total, but we cannot write them to the database, as they rely on the order ID.

A map function matches product IDs from the order to product IDs from the previously made products variable, and creates one object per ID.

The order item, named backendOrderItem to distinguish it from the items of the incoming order, is created with the properties product_id, line_total, quantity, unit_price, and product_name.

The output is returned to the overall function.

### createOrder and writeOrderItems

In createOrder, aggregation of the created order items is carried out using reduce so we can determine the total of the order.

The rest of order data is formed and passed to the called database operation, WriteOrderDB_op, which writes the order to the order table in the database.

backendOrderItem[] is mapped over in writeOrderItems, and its outputs are passed to the final database operation, WriteOrderItems_DB_op.

createOrder is returned and the transaction ended.

## Architectural decisions

- An application layer was omitted as it was effectively just another API layer.
- Higher quality validation and other specificities were omitted to allow for quicker progress.

## Problems

- The transaction returned a failure code every time despite the programming being correct. By turning off pooling in Neon, the database service in use, this was abated.

## Relevant data entities

```ts
CreateOrderRequest {
  items: OrderItem[];
  customerId: number;
}

// A line within the order
export interface OrderItem {
  productId: number;
  quantity: number;
}

// The necessary properties from the products database
export interface ProductsType {
  id: number;
  title: string;
  price: number;
  stock: number;
}

// The necessary property from the customer database
export interface CustomerType {
  id: number;
}

// The order items to be written to the database
export interface BackendOrderItem {
  product_id: number;
  quantity: number;
  line_total: number;
  unit_price: number;
  product_name: string;
}

// The order to be written
export interface CreatedOrder {
  customer_id: number;
  status: string;
  total: number;
  created_at: Date;
  id: number;
}

// The backend order item once it is to be written to the database
export interface WrittenOrderItems {
  id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  quantity: number;
  unit_price: number;
  line_total: number;
}
```
