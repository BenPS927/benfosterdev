'use client';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function HomePageDesktop() {
  return (
    <main
      id="home"
      className="min-h-screen bg-[linear-gradient(180deg,#f5f5f5_0%,#ececec_100%)] px-4 py-8 text-neutral-950 md:px-6 md:py-10 lg:px-8 lg:py-12"
    >
      <section className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
        <div className="order-last flex flex-col justify-center py-2 lg:order-first lg:py-6">
          <div>
            <h1 className="font-bebas text-4xl leading-[0.92] tracking-wide md:text-6xl lg:text-7xl">
              Building AI Enhanced Business Systems
            </h1>

            <div className="mt-6 space-y-4 font-inter text-base leading-relaxed text-gray-600 md:text-lg">
              <p>Hi, I&apos;m Ben, a web developer and IT manager based in Bristol</p>
              <p>By day I manage IT infrastructure.</p>
              <p>By night I build modern web systems that integrate automation and AI</p>
              <p>
                I&apos;m not just interested in flashy designs - I&apos;m here to build systems
                and solutions that integrate AI and automation. I&apos;ve built a simple
                expense tracker and am now working on a full stack E-commerce store.
                Scroll down to explore the projects.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:gap-4">
            <span className="rounded-full border border-[#FFA500]/45 bg-[#FFA500]/10 px-4 py-2 font-inter text-sm font-medium text-[#FFA500]">
              Passionate about tech
            </span>

            <a
              href="https://www.linkedin.com/in/ben-foster-94394135a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 px-4 py-2 font-inter text-sm text-gray-600 transition hover:border-[#0A66C2]/40 hover:text-[#0A66C2]"
            >
              <LinkedInIcon sx={{ fontSize: 18 }} />
              LinkedIn
            </a>

            <a
              href="https://github.com/BenPS927"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-900/15 px-4 py-2 font-inter text-sm text-gray-600 transition hover:border-neutral-900/40 hover:text-neutral-950"
            >
              <GitHubIcon sx={{ fontSize: 18 }} />
              GitHub
            </a>
          </div>
        </div>

        <div className="order-first flex items-center justify-center p-2 md:p-4 lg:order-last lg:p-6">
          <img
            src="/profilephoto2.png"
            alt="Ben Foster - React Developer and AI Chatbot Specialist"
            className="h-56 w-56 rounded-[1.75rem] object-cover md:h-72 md:w-72 lg:h-[24rem] lg:w-[24rem]"
          />
        </div>
      </section>
    </main>
  )
}
