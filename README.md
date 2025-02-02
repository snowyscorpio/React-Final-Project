# React Node Project

This repository contains a full-stack project using React for the frontend and Node.js for the backend. It demonstrates the creation of a basic web application with multiple pages, showcasing React components, routing, and integration with Node.js.

## Features

1. **React Frontend**:
   - Three main pages: 
     - **Home**: A welcoming page displaying a list of floral bouquets.
     - **About**: Information about the creators and the vision behind MOON's Flower Shop.
     - **Contact**: A form for users to get in touch with the creators.
   - Dynamic routing between pages using `react-router-dom`.
   - Styled components for a clean and visually appealing user experience.

2. **Node.js Backend**:
   - Handles server-side logic and API endpoints to support the React frontend.

3. **Dynamic Content**:
   - The `Home` page displays a list of bouquets and houseplants with details dynamically rendered from an array of objects.
   - Individual product pages show extended descriptions, care instructions, and pricing.

4. **Header & Footer Components**:
   - `Header.jsx`: Navigation bar with links to Home, About, and Contact pages, featuring the store's logo.
   - `Footer.jsx`: Displays attribution to the creators.

5. **Title Component**:
   - `Title.jsx` has been introduced to provide a consistent page title and branding across components.
   - Displays the store's logo and name.

6. **Dynamic Flower & Plant Pages**:
   - Individual pages for each bouquet and plant are dynamically rendered using `react-router-dom` and the `SinglePage` component.
   - Product details are passed to the `SinglePage` component through the route state.

## Project Structure

```plaintext
├── React-Node-Project/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── MyRoutes.jsx
│   │   │   ├── SinglePage.jsx
│   │   │   ├── Title.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
├── .gitignore
├── package.json
├── README.md
```

## How to Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the application**:
   ```bash
   npm start
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`.

---

## Notes

- This project is designed to demonstrate fundamental skills in React and Node.js.
- The focus is on functionality and project structure; advanced styling can be added as needed.
- A folder with screenshots of all pages is also included.

---

## Acknowledgments

Images were sourced from Pinterest.


Have a great day ♡

![CUTECAT](https://github.com/user-attachments/assets/e0a1f793-2aad-4b65-9102-23d40a738d52)


