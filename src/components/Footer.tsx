import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-700 bg-zinc-900 py-6">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-2">
          <p className="text-center text-sm text-zinc-400 sm:text-xs">
            Copyright © {new Date().getFullYear()} ProseWrite, LLC. All rights reserved.
          </p>
          <nav className="flex flex-col items-center gap-4 sm:ml-auto sm:flex-row sm:gap-6">
            <Link
              className="text-sm text-zinc-400 underline-offset-4 hover:underline sm:text-xs"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-zinc-400 underline-offset-4 hover:underline sm:text-xs"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-zinc-400 underline-offset-4 hover:underline sm:text-xs"
              href="#"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
