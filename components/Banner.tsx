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
    <div className='max-md:px-4'>
    <div className={cn("md:mt-8 banner shadow-lg md:shadow-xl rounded-2xl container mx-auto flex flex-col md:flex-row justify-center", className)}>
      <div className='w-full h-1/2 md:h-full relative'>
        <Image
          src={imageUrl}
          className="w-full h-full object-cover z-50"
          width={500}
          height={300}
          alt={title}
        />
      </div>
      
      <div className="banner-content tracking-tight bg-gradient-to-b from-slate-100 via-gray-200 md:via-gray-300 to-primary/40 md:to-primary/70">
        <div className='w-full'>
          <h1 className="text-2xl text-gray-700 md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-black md:text-xl max-w-3xl mb-8">
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