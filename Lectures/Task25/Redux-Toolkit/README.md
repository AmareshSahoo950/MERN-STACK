# Redux Toolkit Shopping Cart

This project is a simple shopping cart application built with React and Redux Toolkit. It demonstrates how to manage cart state globally using Redux Toolkit’s `createSlice`, including adding items, updating quantities, and removing items from the cart.

---

## Deployment Link :- https://using-redux-toolkit-for-app.netlify.app/

---

## Features

- Add products to the cart
- Increment product quantity if item already exists in cart
- Decrement product quantity or remove item if quantity reaches zero
- View cart items with updated quantities and prices
- Calculate total price dynamically

---

## Technologies Used

- React
- Redux Toolkit
- React-Redux
- React Router (for navigation)
- Immer (built into Redux Toolkit for immutable updates)
- CSS for styling

---

## Setup Instructions

1. **Clone the repository:**

```bash
git clone <repository-url>
cd <repository-folder>
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the app:**

``` bash
npm start
```

---

## Folder Structure

```
/src
/components > React components > (Product list, Cart, CartItem)
/redux > Redux slice and store configuration
/styles > CSS styles
products.json > Sample products data
```

---

## Redux Setup Details

- Used `createSlice` to create a cart slice with reducers:
  - `addToCart` adds an item or increments quantity if item exists
  - `removeFromCart` decrements quantity or removes item if quantity hits zero
- Used `useDispatch()` and `useSelector()` React-Redux hooks to dispatch actions and read state in components

---

## Usage

- Browse products and click **Add to Cart** to add an item or increment its quantity
- Hence all items are added in the cart
- Adjust quantities using **+** and **-** buttons or remove items completely

---

## Learnings

This project helps understand:

- Global state management with Redux Toolkit
- React Redux hooks for state and dispatch
- Separation of UI components and state logic.

---

