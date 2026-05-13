//home page, the main landing page of the app, which includes the home page section, about me section, and project section
//it imports the home page, about me page, and project page components and renders them in order on the page
//next.js treats / as a route

import HomePage from '@/app/components/home/home-page';
import ProjectsPage from '@/app/components/projects/projects-page';
import { Divider2 } from '@/app/components/layout/section-dividers';
import { ContactPage } from '@/app/components/contact/contact-page';
import { Why } from '@/app/components/why/why-page'
import { Blogs2Page } from '@/app/components/blogs2/blogs2-page';

// ...existing code...
export default function Home() {
  return (
    <main>
      <HomePage />
      <Divider2 />
      <ProjectsPage />
      <Why />
      <Blogs2Page />
      <ContactPage />
    </main>
  );
}
// ...existing code...