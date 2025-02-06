# Streamify - Music Analytics Dashboard

## Overview

Streamify is a sleek and modern music analytics dashboard built with React.js, TypeScript, and TailwindCSS. It provides key insights through interactive charts, data tables, and smooth UI animations. The application follows best practices for modular, scalable, and maintainable code.

![Screenshot (6)](https://github.com/user-attachments/assets/4c9317d5-d9b5-4b52-bf21-ee4a0b26f708)

## Thought Process

I built Streamify with a focus on responsiveness, performance, and maintainability. The tech stack was chosen to ensure a smooth development experience while keeping the UI intuitive and performant. Here’s how I approached the development:

- Key Metrics Display: Used a reusable Card component for clean code. The cards are displayed in a grid layout, adapting to various screen sizes.
- Data Visualization: Integrated the Recharts library to display:
    - A bar chart for popular songs.
    - A line chart for user growth.
    - A pie chart for revenue distribution.
    - The entire application uses mock data for demonstration.
- Reusable Data Table: Created a flexible, TypeScript-powered table that can accept any shape of data and display it accordingly.
- State Management for Sorting, Filtering & Pagination:
    - Used URL search parameters (searchParams) to persist state across renders.
    - Implemented pagination using searchParams to track the current page, updating it when navigating through pages.
    - Similarly, sorting and filtering are applied dynamically based on the URL state.
- Performance Enhancements:
    - Suspense & Error Boundaries for improved UX.
    - Code-splitting to reduce initial load times.
- Scalability & Maintainability: Followed a modular project structure with TypeScript for type safety and clean, reusable code.

## Key Features

✔Modern & Sleek UI
✔ Fully Responsive
✔ Key Metrics Display (Cards)
✔ Interactive Charts (Bar, Line, Pie)
✔ Data Table for Recent Streams
✔ Sorting, Filtering & Pagination
✔ Smooth Animations & Transitions
✔ Organized File & Folder Structure

## Extra Features

- Pagination for easier data navigation
- Animations for a smooth user experience

## Tech Stack

- React.js – Frontend library
- TailwindCSS – Styling framework
- TypeScript – Type safety & better developer experience
- Vite – Fast build tool
- React Router DOM – For handling search parameters & navigation
- Lucide React – Icon library
- Recharts – For interactive charts & data visualization
- usehooks-ts – For media query-based computations

## Getting Started

- Clone the repository
  ```bash
  git clone https://github.com/sougata-github/streamify-dashboard
  cd streamify-dashboard
  ```
- Install dependencies
   ```bash
  npm install
  ```
- Run the development server
  ```bash
  npm run dev
  ```






