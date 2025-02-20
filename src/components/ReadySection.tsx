import * as React from 'react';
import { Button } from './ui/button';
import { Section, SectionHeader } from './ui/section';

export function ReadySection() {
  return (
    <Section variant="dark">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">
        <SectionHeader
          title="Ready to Start Dictating?"
          description="Join more than 500 writers who ProseWrite to dictate and save time writing with automatic editing."
        />
        <div className="w-full max-w-sm space-y-3">
          <Button
            className="h-11 w-full bg-pw-highlight hover:bg-pw-highlight-600 sm:text-base"
            size="lg"
          >
            Try ProseWrite Free
          </Button>
          <p className="text-xs text-pw-text-600">
            No credit card required. Get 60 minutes of free transcription time.
          </p>
        </div>
      </div>
    </Section>
  );
}
