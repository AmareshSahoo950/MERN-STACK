# Product Listing App (React + React Router + Tailwind CSS)

## Deployement Link :- https://using-react-router-dom-for-routing.netlify.app/

---

## 📌 Project Overview
This project is a **React single-page application** built using **React Router v6.4+ data APIs** and styled with **Tailwind CSS**.  
It features:
- A **Home** page that fetches and displays product data from an external API.
- An **About Us** page displaying company information, team mission, expertise, and dynamically fetched profile data from the GitHub API.
- A responsive layout with a fixed background capability.

The aim is to demonstrate **React Router loaders**, **`useLoaderData()`** for data fetching, **responsive design** in Tailwind CSS, and dynamic content rendering.

---

## 🚀 Tech Stack
- **React** (v18+)
- **React Router DOM** (v6.4+ with loader support)
- **Tailwind CSS** (v3+)
- **JavaScript (ES6)** / JSX
- **Font Awesome** for icons
- External APIs:
  - Products API for product data
  - [GitHub API](https://api.github.com/users/AmareshSahoo950) for profile data

---

## ✨ Features
- **Home Page**
  - Fetches and displays product list from EscuelaJS API.
  - Grid-based responsive layout.
  - Product images, titles, and optional details.

- **About Us Page**
  - Two-column responsive layout:
    - **Left Column**: Our Mission & Our Expertise sections.
    - **Right Column**: Dynamic profile section (GitHub data) and contact info.
  - Uses `useLoaderData()` to fetch GitHub profile dynamically.
  - Fully mobile-friendly (stacks vertically on smaller screens).

- **Routing**
  - Built with `createBrowserRouter` and `RouterProvider`.
  - Routes configured with `loader` functions for data fetching before rendering.

- **Styling**
  - Tailwind CSS utility classes for rapid, responsive styling.
  - Support for hover and dark mode variants if needed.
  - Transparent backgrounds and neutral gray palette.

---

## 📂 Folder Structure
```
src/
├── components/
│ └── ContactItem.jsx # Reusable contact info item with icon and label
│
├── pages/
│ ├── AboutUs.jsx # About Us page with loader
│ ├── Home.jsx # Home page displaying products
│
├── main.jsx # Router and app setup
├── index.css # Tailwind CSS import and global styles
└── App.jsx # App wrapper (if used)
```
---
## ⚙️ Getting Started

### 1. Clone this repo:
```bash 
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

### 3. Start the dev server:
```bash
npm run dev
```
or

```bash
yarn dev
```

### 4. Open your browser:
http://localhost:5173

---

