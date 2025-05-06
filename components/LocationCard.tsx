import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, School } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from './ui/badge';

interface LocationCardProps {
  id: number;
  category: string;
  college_count: number;
  image: string;
  title_url: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  id,
  category,
  college_count,
  image,
  title_url,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={`https://ayufinders.com/jeni/superera/media/banner/${image}`}
          width={500}
          height={300}
          alt={"College Image"}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
      </div>
      <CardContent className="pt-2 pb-0 flex-1">
        <div>
          <h3 className="text-xl font-bold">{category}</h3>
        </div>
        <Badge className="bg-transparent border-gray-300 hover:bg-transparent w-fit flex items-center gap-2 mt-3 text-sm">
          <School className="h-4 w-4 text-black" />
          <span className='text-black'>{college_count} Colleges</span>
        </Badge>
        
      </CardContent>
      <CardFooter className="pt-4">
        <Link href={`/colleges?location=${category}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Colleges
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LocationCard;