import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-10",
        {
          "text-left": align === 'left',
          "text-center": align === 'center',
          "text-right": align === 'right',
        },
        className
      )}
    >
      <h2 className="md:text-3xl text-xl font-bold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-2 md:text-lg text-sm text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;