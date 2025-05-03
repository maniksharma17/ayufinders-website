import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface UpdateCardProps {
  id: number;
  blog_category: string;
  title: string;
  desc_notification: string;
  image: string;
  date_time: Date;
  title_url: string;
  meta_title: string;
  status: number;
  meta_tag: string;
  meta_description: string;
  meta_keyword: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({
  id,
  blog_category,
  title,
  desc_notification,
  image,
  date_time,
  title_url,
  meta_title,
  status,
  meta_tag,
  meta_description,
  meta_keyword,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all">
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={`https://ayufinders.com/jeni/superera/media/banner/${image}`}
          alt={title}
          width={500}
          height={300}
          loading={'lazy'}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <Badge className='w-fit mb-1'>{blog_category}</Badge>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <CalendarDays className="h-4 w-4" />
          {format(new Date(date_time), 'dd MMM yyyy')}
        </div>
        <CardTitle className="line-clamp-2 text-lg">{title}</CardTitle>
      </CardHeader>
      
      <CardFooter>
        <Link href={`/latest-updates/${id}`} className="w-full">
          <Button variant="outline" className="w-full">
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default UpdateCard;