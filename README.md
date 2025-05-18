# DevPortfolio

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/mcronje912/DevPortfolio?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/mcronje912/DevPortfolio?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

<h3>A professional portfolio showcasing full-stack development projects including IoT integrations, mobile applications, and web dashboards.</h3>

[Live Demo](https://portfolio.yourwebsite.com) • [Report Bug](https://github.com/mcronje912/DevPortfolio/issues) • [Request Feature](https://github.com/mcronje912/DevPortfolio/issues)

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Featured Projects](#-featured-projects)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Contact](#-contact)

## 🔭 Overview

<div align="center">
  <img src="path/to/screenshot.png" alt="DevPortfolio Screenshot" width="80%">
</div>

DevPortfolio is a modern, responsive portfolio website built with React, TypeScript, and Hero UI. It showcases my technical skills and projects, with a focus on full-stack development, IoT systems, and mobile applications.

The portfolio features interactive device mockups to demonstrate both mobile applications and web dashboards, creating an engaging experience for visitors.

## 🚀 Featured Projects

<details>
<summary><b>Etamax Solar Monitoring System</b></summary>

<div align="center">
  <img src="path/to/etamax-screenshot.png" alt="Etamax Project Screenshot" width="70%">
</div>

Etamax is an intelligent solar geyser monitoring system that helps users optimize their solar energy usage. I developed both the cross-platform mobile application and the React-based management dashboard.

**Key Technologies:**
- Flutter for cross-platform mobile development
- React for management dashboard
- IoT integration for real-time monitoring
- BLE communications for device connectivity

</details>

<details>
<summary><b>React Learning Quiz App</b></summary>

<div align="center">
  <img src="path/to/quiz-app-screenshot.png" alt="Quiz App Screenshot" width="70%">
</div>

A cross-platform learning application to help developers master React concepts through interactive quizzes and challenges.

**Key Technologies:**
- Flutter
- Dart
- Firebase for backend services
- Responsive design for multiple devices

</details>

## 💻 Tech Stack

<div align="center">

| Frontend | Backend | Tools & Deployment |
|----------|---------|-------------------|
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) | ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | ![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) |
| ![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white) | ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black) | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) |
| ![Hero UI](https://img.shields.io/badge/Hero_UI-5E5CE6?style=for-the-badge&logo=react&logoColor=white) | ![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white) | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) |

</div>

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Device Mockups**: Showcase mobile and web applications in realistic device frames
- **Project Gallery**: Filterable portfolio of past projects
- **Interactive UI**: Smooth animations and transitions for a polished user experience
- **Performance Optimized**: Fast load times and smooth performance
- **SEO Friendly**: Structured data and optimized meta tags
- **Accessibility**: WCAG compliant and screen reader friendly

## 🚦 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/mcronje912/DevPortfolio.git
   cd DevPortfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📂 Project Structure

```
DevPortfolio/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layout components
│   ├── pages/            # Application pages
│   ├── config/           # Configuration files
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # Project documentation
```

## 🚀 Deployment

This project is configured for easy deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

For manual deployment:

```bash
npm run build
# or
yarn build
```

This will generate a production-ready build in the `dist` directory.

## 🎨 Customization

### Changing Content

Edit the content in `src/config/site.ts` to update:
- Personal information
- Project details
- Skills and technologies
- Contact links

### Styling

- Global styles are in `src/styles/globals.css`
- Component-specific styles use Tailwind CSS
- Theme configuration is in `tailwind.config.js`

## 📫 Contact

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/marco-cronje/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:marcocronje@gmail.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://your-portfolio-url.com)

</div>

---

<div align="center">
  <sub>Built with ❤️ by Marco Cronje.</sub>
</div>