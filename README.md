# Personalized Treatment Dashboard

A modern, responsive dashboard application built with React, TypeScript, Vite, and Tailwind CSS. This application provides a clean and intuitive interface for managing and visualizing treatment data.

## Features

- 🚀 Built with Vite for fast development and optimized builds
- ⚛️ React 18 with TypeScript for type safety
- 🎨 Styled with Tailwind CSS for rapid UI development
- 📊 Data visualization with Chart.js and React-ChartJS-2
- 📱 Fully responsive design
- 🛣️ Client-side routing with React Router
- 🎥 Webcam integration with react-webcam
- ✨ Modern UI components with Lucide React icons

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/toayushh/major-project.git
   cd major-project
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5174](http://localhost:5174) in your browser.

### Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
├── src/                  # Source files
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── styles/          # Global styles and Tailwind configuration
│   ├── utils/           # Utility functions and helpers
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Public assets
├── index.html           # Main HTML file
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview the production build locally

## Dependencies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Chart.js & React-ChartJS-2
- Lucide React Icons
- React Webcam

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
