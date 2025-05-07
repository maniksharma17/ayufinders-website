"use client";
import { 
  getStudentTestimonials,
} from '@/lib/data';
import Banner from '@/components/Banner';
import SectionHeading from '@/components/SectionHeading';
import CollegeCard from '@/components/CollegeCard';
import UpdateCard from '@/components/UpdateCard';
import JobCard from '@/components/JobCard';
import LocationCard from '@/components/LocationCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SearchComponent from '@/components/SearchComponent';
import CTA from '@/components/CTA';
import { useEffect, useState } from 'react';
import GeneralSkeleton from '@/components/Loader';

export default function Home() {

  const [loading, setLoading] = useState(true)

  const [latestJobsResult, setLatestJobsResult] = useState([]);
  const [latestUpdatesResult, setLatestUpdatesResult] = useState([]);
  const [topCollegesResult, setTopCollegesResult] = useState([]);
  const [topLocationsResult, setTopLocationsResult] = useState([]);
  const [testimonials, setTestimonials] = useState<{ id: number; name: string; college: string; year: string; testimony: string; rating: number; }[]>([]);

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const jobsResponse = await fetch('/api/get-jobs-home');
        const jobs = await jobsResponse.json();
        setLatestJobsResult(jobs)
  
        const updatesResponse = await fetch('/api/get-updates-home');
        const updates = await updatesResponse.json();
        setLatestUpdatesResult(updates);
  
        const collegesResult = await fetch('/api/get-colleges-home');
        const colleges = await collegesResult.json();
        setTopCollegesResult(colleges);
  
        const locationsResult = await fetch('/api/get-locations-home');
        const locations = await locationsResult.json();
        setTopLocationsResult(locations);
  
        const testimonials = getStudentTestimonials();
        setTestimonials(testimonials);
      } catch (e){
        console.log(e);
      } finally {
        setLoading(false)
      }
      
    }

    fetchData();
  }, [])

  if(loading) return <GeneralSkeleton count={3} classname={"mt-20 container mx-auto py-20"} />
  return (
    <div className="mt-20 flex flex-col min-h-screen">
      {/* Hero Banner */}
      <Banner 
        className='max-md:h-[70vh]'
        title="Unlock Your Future in B.A.M.S. – Start Here"
        subtitle="Discover top colleges, stay updated on job openings, get admission tips, and everything you need to thrive in your BAMS journey."
        imageUrl="https://images.unsplash.com/photo-1683792337566-e305745c15ee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <SearchComponent />
      </Banner>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Job Updates Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <SectionHeading 
              title="Latest Job Updates" 
              subtitle="Explore the newest BAMS job opportunities across India"
              align="left"
              className="mb-0"
            />
            <Link href="/job-updates" className='max-md:mt-4'>
              <Button variant="outline" className='rounded-full group md:text-lg font-medium flex flex-row items-center gap-2 border-primary text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-200'>
                <span className='border-primary md:inline group-hover:mr-3 md:text-sm transition-all duration-200'>View All Jobs</span>
                <ChevronRight className='h-5 w-5'/>
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {latestJobsResult.map((job: any) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
            <SectionHeading 
              title="Latest Updates" 
              subtitle="Stay informed with the newest developments in BAMS education"
              align="left"
              className="mb-0"
            />
            <Link href="/latest-updates" className='max-md:mt-4'>
              <Button variant="outline" className='rounded-full group md:text-lg font-medium flex flex-row items-center gap-2 border-primary text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-200'>
                <span className='border-primary md:inline group-hover:mr-3 md:text-sm transition-all duration-200'>View All Updates</span>
                <ChevronRight className='h-5 w-5'/>
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestUpdatesResult.map((update: any) => (
              <UpdateCard key={update.id} {...update} />
            ))}
          </div>
        </section>

        {/* Top Colleges Section */}
        <section className="shadow-lg max-md:py-10 max-md:px-4 mb-20 max-lg:bg-primary lg:bg-gradient-to-b lg:to-primary lg:via-primary/60 lg:from-primary/5 border md:p-12 rounded-2xl">
          <SectionHeading 
            title="Top BAMS Colleges" 
            subtitle="Discover India's premier institutions for Ayurvedic medicine"
            className=''
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {topCollegesResult.map((college: any) => (
              <CollegeCard key={college.id} {...college} />
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Link href="/colleges">
              <Button size="lg" className='bg-black px-10 py-2 font-normal text-lg hover:bg-black/80'>Explore All Colleges</Button>
            </Link>
          </div>
        </section>

        {/* Top Study Locations */}
        <section className="mb-20 max-md:p-4 shadow-lg bg-gradient-to-b from-gray-100 to-gray-400 via-gray-300 md:p-12 rounded-2xl">
          <SectionHeading 
            title="Top Places to Study" 
            subtitle="Explore the best regions in India for pursuing BAMS education"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {topLocationsResult.map((location: any) => (
              <LocationCard key={location.id} {...location} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <SectionHeading 
            title="What Our Students Say" 
          />
          
          <TestimonialSlider testimonials={testimonials} />
        </section>

        {/* CTA Section */}
        <CTA />
      </div>
    </div>
  );
}