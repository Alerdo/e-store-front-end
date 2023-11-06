# E-Commerce Store Front-End

## Project Overview

This e-commerce store front end is crafted using React, designed to provide a seamless and intuitive shopping experience from user authentication to product management and order processing.

## Key Features

- **User Authentication:** Implements secure login and registration processes for users.
- **Product Browsing:** Allows users to view products, with full Create, Read, Update, and Delete (CRUD) operations on cart items.
- **Shopping Cart Management:** Provides a dynamic and user-specific shopping cart experience.
- **Responsive Design:** Adopts Bootstrap to ensure a mobile-friendly user interface that adapts to different screen sizes.
- **Real-time Cart Updates:** The cart contents update in real-time, reflecting changes immediately without page reloads.
- **Seamless Navigation:** Utilizes React Router for smooth and efficient navigation between different components without losing state.
- **State Management:** Employs React state hooks to manage and persist state throughout the application, ensuring a consistent user experience.
- **Modular Structure:** The codebase is structured in a modular fashion, facilitating ease of maintenance and scalability.


## Technologies Used

- **React.js:** Core framework for building the user interface.
- **React Router:** Manages routing for the single-page application.
- **Reactstrap:** Provides Bootstrap 4 components in React.
- **Passport.js:** Handles user authentication.
- **PostgreSQL:** Database for storing all persistent data.

## Component Explanation

### React Components

Utilize `useState` for state management within components and `useEffect` for side effects like data fetching or direct DOM manipulation.

### React Router Components

- **useNavigate:** Enables programmatic navigation.
- **Routes:** Renders the first matching route that is defined within it.
- **Route:** Renders UI when the path matches the current location.
- **NavLink:** A special version of `Link` that can be styled as "active".

### Reactstrap Components

Bootstrap components such as `Dropdown`, `DropdownToggle`, `DropdownMenu`, `DropdownItem` for a rich, interactive UI.

## Project Details


This E-Commerce Platform is a comprehensive web application designed to provide an immersive online shopping experience. At the core of its functionality is React, with stateful components and React Router enabling dynamic content rendering without page reloads.

The `App.js` serves as the heart of the application, orchestrating various components to create a cohesive user experience:

- **Navigation Bar**: A persistent navigation bar is present, which includes links to different sections of the store, such as products, about us, cart, checkout, and user profile. It features reactive icons that enhance visual interaction.

- **Dynamic Cart Indicator**: In the navigation bar, the cart link dynamically displays the number of items present, providing immediate feedback to the user as items are added or removed from the cart.

- **User Dropdown**: A user-specific dropdown is available, offering quick access to login, registration, and logout functionality, facilitating easy user account management.

- **Routing**: The `Routes` component from React Router manages the application's routing, defining the different pages that users can navigate to, such as the home page, login, cart, and profile.

- **Product Management**: The product page displays available items, and users can add these to their cart, with the `fetchCartItems` function ensuring the cart's state is updated across components.

- **State Management**: The application leverages React's `useState` and `useEffect` hooks for managing and persisting state across user sessions, especially for cart items and authentication status.

- **User Authentication and Profile**: Secure user authentication is implemented, with components for login and registration that handle user credentials and provide feedback accordingly.


## Challenges and Solutions

During the development process, I encountered and resolved several key challenges:

### Cart Functionality
- **Issue:** Difficulty in adding items to the cart with the correct data structure.
- **Solution:** Ensured the correct setup of routes and updated the database interaction logic.

### CORS and Session Configuration
- **Issue:** CORS policy and session setup prevented proper communication between front and back end.
- **Solution:** Configured CORS and session middleware in the Express app to allow for credential sharing.

## Cart Item Count Management

### Challenge
The cart item count did not update in real time after user login or logout, because it was tied to the `CartItems` component's mount state.

### Solution
To ensure the cart item count is current and responsive to user actions:

- **State Lifting:** Moved the cart item count state to `App.js` for global management.
- **Prop Passing:** Provided `fetchCartItems` function as a prop to `Login` and `Logout` routes. 
