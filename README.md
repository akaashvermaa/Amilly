# Ammily

Ammily is a high-performance e-commerce frontend built for a modern clothing brand. The application is developed using Next.js, React, Tailwind CSS, and Framer Motion to deliver a premium, fluid shopping experience with hardware-accelerated animations.

**Live Deployment:** [https://clothing-brand-delta.vercel.app/](https://clothing-brand-delta.vercel.app/)

## Architecture

The main Next.js application is located in the `amilly` directory. The project utilizes the Next.js App Router for server-side structure and optimized image loading.

## Tech Stack

- Framework: Next.js
- Interface: React
- Styling: Tailwind CSS
- Animations: Framer Motion and GSAP

## Local Development

To run the project locally:

1. Navigate to the application directory

   ```bash
   cd amilly
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npm run dev
   ```

4. View the application by opening `https://clothing-brand-delta.vercel.app/` in your browser.

## Vercel Deployment

This project is optimized for deployment on Vercel.

Important Configuration: When importing this repository to Vercel, you must set the **Root Directory** specifically to `amilly` in the project settings. Otherwise, the deployment will fail because the configuration files are not located in the repository root.
