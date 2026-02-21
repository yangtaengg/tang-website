"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { Reveal } from "@/components/reveal";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-24">
      <Reveal>
        <h2 id="faq-title" className="text-2xl font-bold text-white md:text-3xl">
          FAQ
        </h2>
      </Reveal>

      <div className="mt-6 space-y-3">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <Reveal key={item.q} delay={idx * 0.04}>
              <div className="glass overflow-hidden rounded-xl">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="focus-ring flex w-full items-center justify-between px-4 py-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                >
                  <span className="text-sm font-semibold text-white md:text-base">{item.q}</span>
                  <span className="ml-3 text-cyan-200" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div id={`faq-panel-${idx}`} hidden={!isOpen} className="border-t border-white/10 px-4 py-4 text-sm leading-6 text-white/75">
                  {item.a}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
