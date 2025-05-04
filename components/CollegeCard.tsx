"use client";
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Calendar, School } from 'lucide-react';
import Image from 'next/image';

interface CollegeCardProps {
  id: number;
  college: string;
  title: string;
  state_name: string;
  image: string;
  city_id: string;
  title_url: string;
}

const CollegeCard: React.FC<CollegeCardProps> = ({
  id,
  college,
  state_name,
  image,
  title,
}) => {
  return (
    <Card className="max-md:flex-row max-md:flex border-none overflow-hidden transition-all shadow md:shadow-md hover:shadow-lg">
      <div className="max-md:w-1/3 aspect-video bg-gray-100 relative overflow-hidden">
        <Image
          src={`https://ayufinders.com/jeni/superera/media/banner/${image}`}
          width={500}
          height={300}
          alt={college}
          loading='lazy'
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <div className='max-md:w-2/3'>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg line-clamp-2">{college ?? title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{state_name}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/colleges/${id}`} className="w-full" onClick={()=>{
          sessionStorage.setItem("scrollPosition", window.scrollY.toString());
        }}>
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </CardFooter>
      </div>
    </Card>
  );
};

export default CollegeCard;