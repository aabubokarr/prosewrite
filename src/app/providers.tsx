'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect, ReactNode } from 'react';

interface PHProviderProps {
  children: ReactNode;
}

export function PHProvider({ children }: PHProviderProps) {
  useEffect(() => {
    posthog.init(
      process.env.NEXT_PUBLIC_POSTHOG_KEY || 'phc_KPivcay4egXJgqekDACg9q1LrWjGSS5fUvZTXhm2odL',
      {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
      }
    );
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
