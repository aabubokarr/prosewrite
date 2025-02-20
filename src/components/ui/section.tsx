import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  variant?: 'default' | 'dark' | 'darker';
}

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  variant = 'default',
  ...props
}: SectionProps) {
  const bgColor = {
    default: 'bg-white',
    dark: 'bg-zinc-900',
    darker: 'bg-zinc-950',
  }[variant];

  return (
    <section
      className={cn('w-full py-8 sm:py-12 md:py-24 lg:py-32', bgColor, className)}
      {...props}
    >
      <div className={cn('mx-auto w-full max-w-7xl px-4 md:px-6', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn('space-y-3', className)}>
      <h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto max-w-[700px] text-sm text-zinc-400 sm:text-base md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
