# Portfolio Website

A responsive portfolio website built using React, TailwindCSS, Framer Motion, and React Router. The project features a dynamic sidebar, a sticky header, and smooth scrolling sections, with functionality to scroll to the appropriate section upon URL navigation (e.g., `http://localhost:5173/#education`).

## Features

- **Responsive Sidebar**: Collapsible sidebar with toggle functionality.
- **Sticky Header**: Header dynamically aligns with the sidebar.
- **Smooth Scrolling**: Navigate through sections smoothly with Framer Motion.
- **Dynamic URL Navigation**: Automatically scrolls to the correct section when a URL hash is provided.
- **React Router Integration**: Supports routing and hash-based navigation.

---

## Installation

This project uses `pnpm` as the package manager. Follow the steps below to set up the project:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shaik-noor/resume-v2.git
   cd resume-v2
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   ```

3. **Start the Development Server**:
   ```bash
   pnpm dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173` in your browser.

---

## File Structure

```
src/
├── App.tsx                  # Main application entry
├── components/              # Reusable components
│   ├── Sidebar.tsx          # Sidebar with toggle functionality
│   ├── Header.tsx           # Sticky header component
│   ├── Content.tsx          # Main content area with sections
│   └── sections/            # Individual section components
│       ├── Home.tsx         # Home section
│       ├── Education.tsx    # Education section
│       └── Skills.tsx       # Skills section
└── index.css                # Global TailwindCSS styles
```

---

## Scripts

- **`pnpm dev`**: Start the development server.
- **`pnpm build`**: Build the project for production.
- **`pnpm preview`**: Preview the production build.

---

## Dependencies

- **React**: Library for building user interfaces.
- **React Router**: Routing and navigation.
- **TailwindCSS**: Utility-first CSS framework.
- **Framer Motion**: Animations and transitions.
- **pnpm**: Fast, disk space-efficient package manager.

---

## Key Features Implemented

### 1. Dynamic Sidebar
- Collapsible and expandable using a toggle button.
- Integrates seamlessly with the header and content.
- Automatically highlights the current section based on URL hash.

### 2. Sticky Header
- Adjusts position dynamically based on sidebar state.
- Provides a clean and consistent navigation experience.

### 3. Smooth Scrolling
- Sections scroll smoothly into view with Framer Motion.
- Automatically scrolls to the appropriate section on page refresh or URL hash navigation.

---

## Customization

- **Add New Sections**:
    1. Create a new component in `src/components/sections/`.
    2. Add the new section to the `sections` array in `Content.tsx`.

- **Adjust Sidebar Behavior**:
  Update the `Sidebar.tsx` logic for toggle or design enhancements.

- **Update Styles**:
  Modify `index.css` or extend the TailwindCSS configuration.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

