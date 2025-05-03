"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  college: string;
  year: string;
  testimony: string;
  rating: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <TestimonialCard testimonial={testimonial} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-6">
        <CarouselPrevious className="static" />
        <CarouselNext className="static" />
      </div>
    </Carousel>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-yellow-400 flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < testimonial.rating ? "fill-yellow-400" : ""
              }`}
            />
          ))}
        </div>
        
        <div className="relative mb-4 flex-1">
          <Quote className="absolute -top-2 -left-2 h-6 w-6 text-primary/20 rotate-180" />
          <p className="text-sm text-muted-foreground relative z-10 pl-4">
          &quot;{testimonial.testimony}&quot;
          </p>
        </div>
        
        <div className="flex items-center gap-3 mt-4">
          
          <div>
            <h4 className="font-medium">{testimonial.name}</h4>
            <p className="text-xs text-muted-foreground">{testimonial.college}</p>
            <p className="text-xs text-muted-foreground">{testimonial.year}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialSlider;