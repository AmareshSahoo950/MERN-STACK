# React Shopping Cart with Context API

This project is a React-based shopping cart application that demonstrates the use of Context API for state management. It's built with Vite for fast development and includes features like product listing, cart management, and a checkout process.

## Features

- Product listing with the ability to add items to cart
- Dynamic cart that updates as items are added or removed
- Total price calculation in the cart
- Navigation between shopping and payment pages
- Responsive design for various screen sizes

## Project Structure

The project is organized as follows:

- `src/`: Source files
  - `Components/`: React components
    - `Cart.jsx`: Shopping cart component
    - `CartItems.jsx`: Individual cart item component
    - `Header.jsx`: Application header
    - `Products.jsx`: Product listing component
    - `Payment.jsx`: Payment page component
  - `Context/`: Context API setup
    - `context.js`: Defines CartContext and useCart hook
  - `Style/`: CSS files for styling components
  - `Layout.jsx`: Main layout component
  - `main.jsx`: Entry point of the application
- `public/`: Static assets
- `index.html`: HTML template

## Technologies Used

- React
- Vite
- React Router for navigation
- Context API for state management
- CSS for styling

## Getting Started

1. Clone the repository
2. Install dependencies:
    `npm install`
3. Start the development server:
    `npm run dev`
4. Open your browser and navigate to `http://localhost:5173` (or the port Vite is running on)

## Available Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run lint`: Runs ESLint to check for code quality issues
- `npm run preview`: Previews the built app locally

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check issues page if you want to contribute.
