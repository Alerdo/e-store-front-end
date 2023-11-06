# E-Commerce Store Front-End

## Project Overview

This e-commerce store front end is crafted using React, designed to provide a seamless and intuitive shopping experience from user authentication to product management and order processing.

## Key Features

- **User Authentication:** Secure login and registration.
- **Product Browsing:** Full CRUD operations on products.
- **Shopping Cart Management:** A dynamic cart for each user.
- **Order Management:** Full control over order tracking and history.
- **Responsive Design:** Utilizes Bootstrap for a mobile-friendly interface.

## Technologies Used

- **React.js:** Core framework for building the user interface.
- **React Router:** Manages routing for the single-page application.
- **Reactstrap:** Provides Bootstrap 4 components in React.
- **Passport.js:** Handles user authentication.
- **PostgreSQL:** (Assumed) Database for storing all persistent data.

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
