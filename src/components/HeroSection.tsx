import React from 'react';
import { Button } from './ui/button';
import { Section } from './ui/section';
import { CheckCircle2 } from 'lucide-react';

export function HeroSection() {
  return (
    <Section variant="darker">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="space-y-6">
          <h1 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-6xl">
            <span className="block text-pw-highlight">Dictate with Confidence,</span>
            <span className="block">
              <span className="text-pw-highlight">Save Time</span> With Automated Editing
            </span>
          </h1>
          <div className="space-y-4">
            <p className="mx-auto max-w-[700px] text-sm text-pw-text-500 sm:text-base md:text-xl">
              ProseWrite’s intelligent dictation platform automatically edits your spoken words into
              ready-to-use content, saving you time to focus on what matters most.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-pw-text-500 sm:hidden">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-pw-highlight" />
                <span>10,071+ transcription minutes logged</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-pw-highlight" />
                <span>90-95% transcription accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-pw-highlight" />
                <span>45+ languages + dialects supported</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-sm flex-col space-y-3">
          <Button className="w-full bg-pw-highlight hover:bg-pw-highlight-600" size="lg">
            Try ProseWrite Free
          </Button>
          <p className="text-xs text-zinc-500">
            No credit card required. Get 60 minutes of free transcription time.
          </p>
        </div>
        <div className="mt-8 hidden flex-wrap items-center justify-center gap-8 text-pw-text-700 sm:flex">
          <div className="text-sm font-medium">
            Trusted by bestselling authors like:
            <span className="ml-2 font-bold">Kevin J. Anderson</span>
          </div>
          <div className="text-sm font-medium">
            Recommended by editors at:
            <span className="ml-2 font-bold">Silver Lining Edits</span>
          </div>
          <div className="text-sm font-medium">
            Featured on:
            <span className="ml-2 font-bold">Author Level Up</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
