

"use client";

import { motion } from 'framer-motion';

export default function WhyContent() {
  return (
    <main className="min-h-screen w-full bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f7_45%,#eaeaea_100%)] px-4 py-6 text-neutral-950 sm:px-5 md:px-6 md:py-8 lg:px-8 mt-20">
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:gap-10 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-12 lg:gap-y-10">
        <div className="flex items-start pt-2 sm:pt-4" >
          <motion.h2
            initial={{ opacity: 0.5, x: 192 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="font-bebas text-5xl leading-[0.92] tracking-wide text-neutral-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)] sm:text-6xl md:text-7xl"
          >
            AI is here and it is here to stay.
          </motion.h2>
        </div>
        <div className="pt-2 sm:pt-4" >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-4 font-inter text-sm leading-relaxed text-gray-600 md:text-base"
          >
            <p>AI is an amazing tool. But the reality is that it has mostly become a novelty.</p>
            <p>Where it has been put to more purposeful use, it has often been underwhelming.</p>
            <p>Customer service chatbots with no useful knowledge, seemingly only there to connect you to a human...</p>
            <p>Picture creation tools that produce six-fingered hands and don&apos;t listen to prompts.</p>
          </motion.div>
        </div>
        <div className="flex items-start pt-2 sm:pt-4" >
           <motion.h2
             initial={{ opacity: 0.5, x: -192 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.12 }}
             transition={{ duration: 0.16, ease: 'easeOut' }}
             className="font-bebas text-5xl leading-[0.92] tracking-wide text-neutral-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)] sm:text-6xl md:text-7xl"
           >
             But it doesn&apos;t have to be a novelty.
           </motion.h2>
        </div>
        <div className="pt-2 sm:pt-4" >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-4 font-inter text-sm leading-relaxed text-gray-600 md:text-base"
          >
            <p>The goal of what I&apos;m doing is to build systems that utilise the incredible capabilities of AI.</p>
            <p>My BFShop project will feature chatbots for both interfaces that will be able to perform actions and provide useful information.</p>
            <p>But this isn&apos;t enough; as we move into a more AI-dominated world, what we need is oversight.</p>
            <p>That&apos;s why I&apos;m building AI Overwatch, an interface that will show AI behaviour and capabilities.</p>
            <p>As I continue, I'll explore more ways to implement AI effectively and responsibly. </p>
          </motion.div>
        </div>

      </section>
    </main>
  )
}