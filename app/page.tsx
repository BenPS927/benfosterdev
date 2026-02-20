//home page, the main landing page of the app, which includes the home page section, about me section, and project section
//it imports the home page, about me page, and project page components and renders them in order on the page
//next.js treats / as a route

import HomePage from '@/app/components/pages/root-pages/home-page';
import ProjectPage from '@/app/components/pages/desktop-pages/project-page';
import { AboutMePage } from '@/app/components/pages/root-pages/about-me-page';

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutMePage />
      <ProjectPage />
    </main>
  );
}
