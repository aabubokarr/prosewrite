import * as React from 'react';
import { CheckCircle2, Play } from 'lucide-react';
import { Button } from './ui/button';

export function FeaturesSection() {
  return (
    <section id="features" className="w-full bg-pw-bg-600 py-8 sm:py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-[1fr,400px] xl:grid-cols-[1fr,600px]">
          <div className="flex flex-col items-start justify-center space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-bold tracking-tighter text-pw-text-500 sm:text-3xl md:text-4xl lg:text-5xl">
                Transform Your Writing Process
              </h2>
              <p className="max-w-[600px] text-sm text-pw-text-600 sm:text-base md:text-xl">
                ProseWrite automatically converts your natural speech into polished text, so you can
                edit less and create more.
              </p>
            </div>
            <ul className="w-full space-y-4 text-sm text-pw-text-500 sm:text-base">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-pw-highlight" />
                <span>
                  <span className="font-semibold">Dictate without Disruption:</span> Focus on your
                  ideas while ProseWrite handles punctuation and grammar automatically.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-pw-highlight" />
                <span>
                  <span className="font-semibold">Save on Editing:</span> Speed up your writing
                  process with automatic editing and avoid expensive services.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-pw-highlight" />
                <span>
                  <span className="font-semibold">Preserve Your Style:</span> Use style-specific
                  personas to refine your writing while keeping your unique voice intact.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-pw-highlight" />
                <span>
                  <span className="font-semibold">Stay Organized:</span> ProseWrite automatically
                  structures your sections and drafts, so you can focus on writing.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-pw-highlight" />
                <span>
                  <span className="font-semibold">Work Securely:</span> Your work is encrypted,
                  compliant with global privacy standards, and backed up automatically.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-pw-bg-700 sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-pw-highlight-200/20 to-transparent" />
              <div className="relative h-full w-full p-4">
                <div className="h-full rounded-lg bg-pw-bg-600 p-4 shadow-xl">
                  <div className="flex items-center space-x-2 border-b border-pw-bg-700 pb-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded bg-pw-highlight-200/20" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-3/4 rounded bg-pw-bg-700" />
                        <div className="h-4 w-1/2 rounded bg-pw-bg-700" />
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded bg-pw-highlight-200/20" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-5/6 rounded bg-pw-bg-700" />
                        <div className="h-4 w-2/3 rounded bg-pw-bg-700" />
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded bg-pw-highlight-200/20" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-4/5 rounded bg-pw-bg-700" />
                        <div className="h-4 w-3/5 rounded bg-pw-bg-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-pw-highlight p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Play className="h-5 w-5 text-pw-bg-500" />
                    <span className="text-sm font-medium text-pw-bg-500">Watch Demo</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-pw-bg-500 hover:bg-pw-highlight-600"
                  >
                    Play
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
