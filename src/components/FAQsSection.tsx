import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

export function FAQsSection() {
  return (
    <section className="w-full bg-zinc-800 py-8 sm:py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-[700px] text-sm text-zinc-400 sm:text-base md:text-xl">
              Find answers to common questions about ProseWrite and how it can enhance your writing
              process.
            </p>
          </div>
          <div className="w-full max-w-3xl">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border-zinc-700">
                <AccordionTrigger className="text-left text-sm font-medium text-white sm:text-base">
                  What is ProseWrite, and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400">
                  ProseWrite is an intuitive dictation tool that allows you to speak your thoughts
                  and automatically converts them into text. It also provides editing features that
                  refine your writing as you go, helping you streamline your creative process
                  without disrupting your flow.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-zinc-700">
                <AccordionTrigger className="text-left text-sm font-medium text-white sm:text-base">
                  How accurate is ProseWrite&apos;s transcription?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400">
                  ProseWrite boasts a 90-95% accuracy rate using natural language processing to
                  allow the user to speak naturally. The system automatically adds punctuation and
                  grammar while you dictate, letting you focus on your ideas without interruption.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-zinc-700">
                <AccordionTrigger className="text-left text-sm font-medium text-white sm:text-base">
                  What languages does ProseWrite support?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400">
                  ProseWrite supports over 45 languages and dialects, including 5 separate dialects
                  of English (American, British, Australian, New Zealand, and Indian), plus many
                  European and Asian languages. This gives you the flexibility to work in your
                  preferred language or dialect.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-zinc-700">
                <AccordionTrigger className="text-left text-sm font-medium text-white sm:text-base">
                  What are the pricing plans?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400">
                  We offer three subscription tiers based on dictation hours per month: Basic
                  ($10/month for 3 hours), Standard ($40/month for 15 hours), and Premium
                  ($100/month for 40 hours). You can also purchase additional hours a la carte at
                  $3.50 per hour. New users get 60 minutes free to try the platform.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-zinc-700">
                <AccordionTrigger className="text-left text-sm font-medium text-white sm:text-base">
                  What happens to unused dictation hours?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400">
                  Hours from your subscription plan roll over to the next month, up to a cap of
                  three months of your subscription plan. A la carte hours are tracked separately
                  and never expire.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-zinc-700">
                <AccordionTrigger className="text-left text-sm font-medium text-white sm:text-base">
                  How does ProseWrite preserve my unique writing style?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-zinc-400">
                  ProseWrite offers genre-specific personas and customizable editing options to
                  match your tone and style, ensuring your creative voice remains intact while
                  refining grammar and structure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
