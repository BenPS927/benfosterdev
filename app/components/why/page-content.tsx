

"use client";

import { motion } from 'framer-motion';

export default function WhyContent() {
  return (
    <main className="min-h-screen w-full bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f7_45%,#eaeaea_100%)] px-4 py-6 pt-20 text-neutral-950 sm:px-5 md:px-6 md:py-8 md:pt-24 lg:px-8">
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 sm:gap-10 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-12 lg:gap-y-10">
        <div className="flex items-start pt-2 sm:pt-4" >
          <motion.div
            initial={{ opacity: 0.5, x: 192 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className="card-stack"
          >
            
            <h2 className="font-bebas text-5xl leading-[0.92] tracking-wide text-neutral-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)] sm:text-6xl md:text-7xl">
              Connectivity is Everything
            </h2>
          </motion.div>
        </div>
        <div className="pt-2 sm:pt-4" >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="card-stack text-gray-600"
          >
            <p className="card-body md:text-base">Modern business sytems are a web of different platforms - the site itself, databases, analytics, Microsoft Office, messaging services.</p>
            <p className="card-body md:text-base">The data on these platforms <i>is</i> the business.</p>
            <p className="card-body md:text-base">Website leads, Whatsapp communications, data collection, site performance.</p>
            <p className="card-body md:text-base">The connections between these platforms are what allows the business to run.</p>
          </motion.div>
        </div>
        <div className="flex items-start pt-2 sm:pt-4" >
           <motion.div
             initial={{ opacity: 0.5, x: -192 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.12 }}
             transition={{ duration: 0.16, ease: 'easeOut' }}
             className="card-stack"
           >
             
             <h2 className="font-bebas text-5xl leading-[0.92] tracking-wide text-neutral-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.08)] sm:text-6xl md:text-7xl">
               Intelligent systems make the difference
             </h2>
           </motion.div>
        </div>
        <div className="pt-2 sm:pt-4" >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="card-stack text-gray-600"
          >
            <p className="card-body md:text-base">Most businesses already have the information they need. The problem is that it's scattered across disconnected systems.</p>
            <p className="card-body md:text-base">Most users spend hours copying and pasting data, manually entering information, reading stats and metrics.</p>
            <p className="card-body md:text-base">With modern technology we can automate these processes and save users time.</p>
            <p className="card-body md:text-base">Automation moves information. AI gives it context. Together they create systems that can understand, decide and act.</p>
            <p className="card-body md:text-base">The goal at BFdev is to develop personalised systems that do just that.</p>
            
          </motion.div>
        </div>

      </section>
    </main>
  )
}