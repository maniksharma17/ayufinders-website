import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface BannerProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  children?: React.ReactNode;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  imageUrl,
  children,
  className,
}) => {
  return (
    <div className="max-md:px-4 bg-primary py-12">
      <div
        className={cn(
          "banner shadow-lg md:shadow-none rounded-2xl container mx-auto flex flex-col md:flex-row justify-center overflow-hidden",
          className
        )}
      >
        {/* Image Section */}
        <div className="w-full md:h-auto h-1/2 md:w-1/2 relative">
          <Image
            src={imageUrl}
            className="w-full h-full object-cover"
            width={800}
            height={500}
            alt={title}
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 md:px-20 px-4 h-1/2 md:h-full flex flex-col justify-center bg-slate-50">
          <div className="max-w-2xl">
            <h1 className="text-3xl text-primary md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                {subtitle}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
