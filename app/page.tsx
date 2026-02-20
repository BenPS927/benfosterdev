//home page, the main landing page of the app, which includes the home page section, about me section, and project section
//it imports the home page, about me page, and project page components and renders them in order on the page
//next.js treats / as a route

import HomePage from '@/app/components/home/home-page';
import ProjectsPage from '@/app/components/projects/projects-page';
import { AboutMePage } from '@/app/components/about/about-me-page';
import { Divider1 } from '@/app/components/layout/section-dividers';
import { Divider2 } from '@/app/components/layout/section-dividers'

export default function Home() {
  return (
    <main>
      <HomePage />
      <Divider2 />
      <ProjectsPage />
      <Divider1 />
      <AboutMePage />
    </main>
  );
}
