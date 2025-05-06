import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, MapPin, Calendar, IndianRupee, CalendarIcon, ArrowRight, ChevronRight, ChevronRightCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

interface JobCardProps {
  id: number;
  job_title: string;
  job_description: string;
  job_location: string;
  job_type: string;
  job_vacancies: string;
  job_salary: string;
  education: string;
  experience: string;
  last_date: string;
  created_at: string;
  status: number
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  job_title,
  job_description,
  job_location,
  job_type,
  job_vacancies,
  job_salary,
  education,
  experience,
  last_date,
  created_at,
  status
}) => {
  const jobTitle = job_title.split('-');
  const jobRole = jobTitle[0].trim();
  const jobDivision = jobTitle[1] ? jobTitle[1].trim() : '';
  return (
    <Card className="hover:shadow-md transition-all">
      <CardHeader className="bg-gray-100 rounded-t-md">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">
            {jobRole} - <br></br>
            {jobDivision && <span>{jobDivision}</span>}
            </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2 py-4 md:min-h-[120px]">
        <div dangerouslySetInnerHTML={{ __html: job_description.slice(0,100) }} className="text-sm font-semibold" />
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{job_location}</span>
        </div>
        
        <div className="flex flex-wrap justify-between gap-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            {last_date}
          </div>
        </div>
      </CardContent>
      <CardFooter className='py-3 rounded-b-md'>
        <Link href={`/job-updates/${id}`} className="w-full">
          <Button className="flex flex-row items-center justify-center gap-2 bg-primary text-white text-sm hover:bg-primary/80 w-fit px-4 py-1 font-medium rounded-full duration-300 transition-all"><p>View Job</p> <ChevronRight className='w-4 h-4 duration-300 transition-all hover:text-white inline' strokeWidth={2} /></Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;