# Installation Guide

This document provides step-by-step instructions for setting up and running the portfolio website.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14 or later)
- npm or yarn

## Installation Steps

1. **Clone the repository** (if you haven't already)

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

3. **Run the development server**

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

## Static Export

To create a static export of the website:

```bash
npm run export
# or
yarn export
```

This will generate a static version of the website in the `out` directory, which can be deployed to any static hosting service.

## Customization

1. Update personal information in the components
2. Replace placeholder images with your own in the `/public` directory
3. Modify color scheme in `tailwind.config.js`
4. Add your own projects to the projects data in `components/Projects.js`

## Troubleshooting

If you encounter any issues during installation or running the project:

1. Make sure you have the correct Node.js version installed
2. Delete the `.next` folder and `node_modules` directory, then reinstall dependencies
3. Check for any error messages in the console and search for solutions online
4. Create an issue on the GitHub repository if the problem persists