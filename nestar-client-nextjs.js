// BRR: بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
// NEW CHAPTER: NEXTJS
// LESSON 118

// 🎉 Welcome to the World of NEXTJS! 🎉

// **What is NEXTJS?**
// Next.js is not just any framework; it’s a powerful React framework designed for building full-stack web applications!
// With Next.js, you can harness the power of React components to create stunning user interfaces, while enjoying a plethora of additional features and optimizations.
// Forget the hassle of socket packages for routing in React—Next.js comes with built-in capabilities that make routing a breeze!

// **Routing System of NEXTJS**
// Next.js offers two types of routers to suit your needs:
// 1. **The App Router**: This is the new kid on the block, enabling you to tap into React's latest features, such as Server Components and Streaming.
// 2. **The Pages Router**: The classic option for building server-rendered React applications, which is still supported for legacy projects.

// **File-Based Routing Made Easy**
// Say goodbye to complex routing management! Next.js simplifies this with its file-based routing system:
// - **Pages Routing**: Organize your routes effortlessly using the pages/ directory.
// - **App Routing**: A more robust routing system with layouts, nested routes, and enhanced server-side rendering capabilities.

// **Rendering System of NEXTJS**
// Rendering transforms your code into interactive web pages! This magic can happen on the server or within the user's browser.
// With Next.js, you get the best of both worlds: it supports client-side and server-side rendering.
// By default, App components are server-side rendered, while Page components are client-side rendered. The _document.tsx file orchestrates this server-side rendering dance!

// **UI Frameworks**
// While Tailwind might be Next.js’s default framework, we prefer using Material-UI (MUI) alongside SCSS/SASS to create beautiful, responsive designs.
// And don’t forget, with "lint": "next lint", you can quickly identify and fix coding errors like a pro!

// **TypeScript and Configuration Files**
// Here’s a quick rundown of some key configuration files in a Next.js project:
// - **next-env.d.ts**: This file serves as a TypeScript configuration reference for Next.js features.
// - **next.config.js**: Customize your Next.js app by enabling features and setting environment variables here.
// - **package.json**: This file outlines your project's dependencies and settings.
// - **package-lock.json**: Locks down exact versions of your dependencies for consistency across installations.
// - **README.md**: Think of this as your project’s user guide, explaining setup and contribution guidelines.
// - **tsconfig.json**: Helps the TypeScript compiler generate the right JavaScript files.
// - **yarn.lock**: Ensures consistent package versions across installations—no surprises here!
// - **Yarn**: Your trusty open-source package manager for managing JavaScript dependencies!

// **Understanding File Types**
// Here’s a handy cheat sheet for file extensions you’ll encounter:
// - **.ts**: General TypeScript code.
// - **.tsx**: React components featuring JSX syntax.
// - **_DOCUMENT**: The underscore indicates this is private to the router.
// - **"use client"**: A directive for client-side rendering in app components.

// **Company Preferences and Features**
// Here’s what most companies prefer when it comes to routing in Next.js:
// 1. The pages router system is the favorite choice.
// 2. Supports web-mobile versions, and we utilize hooks for responsiveness.
// 3. Although Next.js can build both backend and frontend, it’s best practice to keep them separate for cleaner architecture.

// **Installation**
// Ready to dive in? Create a new Next.js app with this command:
// `npx create-next-app@latest`

// **Scripts**
// Here are your go-to commands for running and building your app:
// - To run your development server: `"dev": "next dev"`
// - For production, first build with `"build": "next build"`, then start with `"start": "next start"`

// **Page Routing Insights**
// Each folder within the pages directory acts as a root, containing a default index.tsx file.
// If you add additional folders inside, they create new roots, and any tsx files within them become sub-roots.
// Start your project by running: `"yarn run dev"`.

// **Handling Queries in Routing**
// To handle URL queries, utilize the `useRouter` hook! This gives you access to the router object, which holds vital info about the current URL and its query parameters.

// **Example of Using useRouter**
import { useRouter } from "next/router";

const PropertyDetail = () => {
	const router = useRouter();
	const { productId } = router.query;
	return <div>PropertyDetail: {productId}</div>; // Extracting productId from the URL.
};

export default PropertyDetail;

// **App Component Props**
// In the _app.tsx file, **props** refers to properties passed to the App component.
// These props are your bridge to pass data and configuration options from parent components to their children.

// 🎊 Lesson 118 Complete! 🎊
// Get ready for more exciting adventures in the world of Next.js!
