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
   - The `Home` page displays a list of bouquets with details dynamically rendered from an array of objects.
   - Individual bouquet pages show extended descriptions, care instructions, and pricing.

4. **Footer & Branding**:
   - Features a footer with attribution to the creators.
   - A consistent logo and theme across all pages.

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
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
├── .gitignore
├── package.json
├── README.md
```

- **Frontend Components**:
  - `Footer.jsx`: Displays attribution for the project.
  - `Header.jsx`: Navigation bar with links to Home, About, and Contact pages.
  - `Home.jsx`: Displays a list of bouquets with descriptions and links to individual pages.
  - `About.jsx`: Contains information about the creators and their vision.
  - `Contact.jsx`: A form for user inquiries.
  - `MyRoutes.jsx`: Handles routing between pages.
  - `SinglePage.jsx`: Displays detailed information about a selected bouquet.
  - `App.js`: Main entry point of the React application.
  - `App.css`: Contains global styles for the application.
  - `index.js`: Renders the React application to the DOM.
  - `index.css`: Basic styles for the app.

---

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

---

## Acknowledgments

 Images were sourced from Pinterest.
