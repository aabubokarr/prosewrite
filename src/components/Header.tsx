'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { useState } from 'react';
import { SlimIconAlt } from '@/components/logos/SlimIconAlt';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center border-b border-zinc-700 bg-black px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="#">
        <SlimIconAlt className="h-8 w-8 text-pw-highlight-500" />
        <span className="ml-2 text-xl font-bold text-white">ProseWrite</span>
      </Link>

      {/* Mobile menu button */}
      <button
        className="ml-auto flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop navigation */}
      <nav className="ml-auto hidden items-center md:flex">
        <div className="flex gap-6">
          <Link
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            href="#testimonials"
          >
            Testimonials
          </Link>
        </div>
        <div className="ml-6 flex items-center gap-4">
          <Button className="h-9 bg-pw-highlight hover:bg-pw-highlight-600">Sign Up</Button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ zIndex: 40 }}
          />
          <div
            className="absolute left-0 right-0 top-[3.5rem] border-b border-zinc-700 bg-black/95 backdrop-blur-sm md:hidden"
            style={{ zIndex: 41 }}
          >
            <nav className="flex flex-col p-4">
              <Link
                className="py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                href="#features"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                className="py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                className="py-3 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                href="#testimonials"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <div className="mt-4 flex flex-col gap-3 pb-2">
                <Button variant="outline" className="h-10 w-full justify-center">
                  Log In
                </Button>
                <Button className="h-10 w-full justify-center bg-pw-highlight hover:bg-pw-highlight-600">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
