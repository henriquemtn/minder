import React from "react";
import Link from "next/link";
import * as motion from "motion/react-client";
import PageWrapper from "@/ui/atoms/PageWrapper";

export default function Hero() {
  return (
    <section className="relative bg-white z-10 border-b border-gray-200">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/hero-background.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-white/50"></div>
      </div>
      <PageWrapper>
        <div className="relative flex flex-col lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="max-w-[590px] text-start flex items-start flex-col py-16"
          >
            <h1 className="text-3xl md:text-5xl text-start font-bold text-gray-900 mb-5">
              Launch your next project with confidence
            </h1>

            <p className="text-base text-gray-500">
              Build stunning landing pages, websites, and dashboards — powered
              by Tailwind CSS and crafted in HTML, React, and Next.js. Skip the
              boilerplate and save weeks of work with a solid foundation built
              for speed and scalability.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                className="inline-flex items-center px-6 py-3 text-gray-50 bg-zinc-800 hover:bg-zinc-900 group shadow-[0px_12px_12px_-6px_rgba(3,7,18,.20)] rounded-lg font-medium transition-colors"
                href="/unlimited-access"
              >
                <span>Get Unlimited Access</span>
                <span className="text-white/60 group-hover:translate-x-0.5 transition-transform ml-1.5">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                  >
                    <path d="M5.977 10.368 4.953 9.354 8.02 6.286H.568V4.805H8.02L4.953 1.742 5.977.723 10.8 5.546z"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </section>
  );
}
