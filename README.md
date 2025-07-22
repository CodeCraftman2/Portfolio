# Portfolio Project

A modern, responsive portfolio site built with ReactJS and plain CSS. This project showcases multiple personal and professional projects, features a qualification timeline, and includes interactive components such as sliders and contact forms.

## Live Demo

[Your live site link here](https://www.codecraftman.dev/)

---

## Projects Showcased

### 1. Multi-Cloud Storage API
- **Description:** API for managing files across multiple cloud storage providers.
- **Repo:** [Multi-Cloud Storage API](https://github.com/CodeCraftman2/Project-MultiCloud_Storage_api.git)

### 2. Trading AI
- **Description:** AI tool for market trend prediction and trading analysis.
- **Repo:** [Trading AI](https://github.com/CodeCraftman2/Trade-analysis.git)

### 3. Website (Renderverse)
- **Description:** Responsive website for Renderverse services and portfolio.
- **Live:** [renderverse.in](https://renderverse.in/)

### 4. Scrap AI
- **Description:** AI-powered app for waste detection and reporting.
- **Live:** [thedare.tech](https://www.thedare.tech/)

### 5. SnapStream
- **Description:** App for recording, uploading, and sharing screen videos.
- **Live:** [SnapStream](https://snap-stream-tan.vercel.app/sign-in)

---

## Features
- Fully responsive layout
- Fixed navigation bar
- Pop-up modals
- Tab panels
- Project slider with pagination
- Contact form with EmailJS integration
- Scroll to top button
- Qualification timeline (education & experience)

---

## Getting Started

### Prerequisites
- Node.js (v14 or above recommended)
- npm (v6 or above)

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd Portfolio
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Build for production:
   ```sh
   npm run build
   ```

---

## Dependencies

All dependencies are listed in `package.json`. Key dependencies include:

- **react** ^18.2.0
- **react-dom** ^18.2.0
- **react-scripts** 5.0.1
- **react-icons** ^4.7.1
- **lucide-react** ^0.483.0
- **react-intersection-observer** ^9.16.0
- **swiper** ^8.4.5
- **@emailjs/browser** ^3.12.1
- **emailjs-com** ^3.2.0
- **@heroicons/react** ^2.2.0
- **prop-types** ^15.8.1
- **build** ^0.1.4
- **@testing-library/jest-dom** ^5.16.5
- **@testing-library/react** ^13.4.0
- **@testing-library/user-event** ^13.5.0
- **web-vitals** ^2.1.4
- **firebase-tools** ^11.21.0 (dev dependency)

---

## Notable Packages & Usage

- **React Icons:**
  - Used for UI icons. [React-Icons Documentation](https://react-icons.github.io/react-icons/)
- **Lucide React & Intersection Observer:**
  - For animated icons and scroll-based animations.
  - Install: `npm install lucide-react react-intersection-observer`
- **Swiper:**
  - For project/testimonial sliders. [SwiperJS Docs](https://swiperjs.com/react)
  - Install: `npm install swiper`
- **EmailJS:**
  - For contact form email integration. [EmailJS Docs](https://www.emailjs.com/docs/examples/reactjs/)
  - Install: `npm install @emailjs/browser`
- **Heroicons React:**
  - Used for UI icons in the Skills & Services section.
  - Install: `npm install @heroicons/react`
- **Prop Types:**
  - Used for component prop validation.
  - Install: `npm install prop-types`

---

## Skills & Services Section

This project includes a modern Skills & Services section, which displays your technical expertise and service offerings in an interactive, modal-based UI. Each service card shows a list of relevant skills and details when clicked.

**Features:**
- Three main service areas: Web API Development, Mobile App Development, Frontend Development
- Modal pop-up with detailed skills and service information
- Uses icons from @heroicons/react and lucide-react
- Fully responsive and visually appealing

**How to Use:**
- The component is located at `src/components/skills/SkillsServices.jsx`.
- Import and use `<SkillsServices />` in your main skills or home page:
  ```jsx
  import SkillsServices from './components/skills/SkillsServices';
  // ...
  <SkillsServices />
  ```

**Required Dependencies:**
- @heroicons/react
- lucide-react

Install them with:
```sh
npm install @heroicons/react lucide-react
```

---

## Deployment

To deploy a production build, you can use any static hosting service (Vercel, Netlify, Firebase Hosting, etc.).

For Firebase Hosting:
1. Install Firebase CLI (if not already):
   ```sh
   npm install -g firebase-tools
   ```
2. Build your app:
   ```sh
   npm run build
   ```
3. Deploy:
   ```sh
   firebase deploy
   ```

---

## License

This project is licensed under the MIT License.
