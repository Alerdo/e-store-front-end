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

Throughout the development of this project, several significant challenges were encountered and effectively resolved:

### Cart Functionality
- **Issue:** Initially, there was difficulty in adding items to the shopping cart with the correct data structure.
- **Solution:** This was resolved by ensuring proper routing and updating the logic for database interaction to facilitate the expected behavior.

### CORS and Session Configuration
- **Issue:** Cross-Origin Resource Sharing (CORS) policy restrictions and session management misconfigurations were preventing proper communication between the frontend and backend.
- **Solution:** Adjusted the CORS settings and session middleware within the Express application to allow for the sharing of credentials and sessions across origins.

### Cart Item Count Management
- **Issue:** The number of items in the cart was not updating in real-time after user actions such as login or logout. This issue was due to the count being tied to the `CartItems` component's mounting state.
- **Solution:**
- **State Lifting:** The cart item count state was lifted to `App.js` to allow for global access and manipulation across all components.
- **Prop Passing:** The `fetchCartItems` function was passed as a prop to both `Login` and `Logout` components to trigger an update of the cart count upon user authentication changes.

