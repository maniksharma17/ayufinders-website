"use client";
import React, { useEffect, useState } from 'react';
import Banner from '@/components/Banner';
import SectionHeading from '@/components/SectionHeading';
import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Briefcase, MapPin, Building, CalendarClock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Job {
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

export default function JobUpdatesPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const ITEMS_PER_PAGE = 15;
  const [paginatedJobs, setPaginatedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/get-jobs");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJobs(data);
        setFilteredJobs(data);
        setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };

    fetchJobs();
  }, []);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  useEffect(()=>{
    setPaginatedJobs(filteredJobs.slice(start, end));
  }, [page, jobs, totalPages, filteredJobs]);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    const locationSearch = location.toLowerCase();
  
    const filtered = jobs.filter((job: Job) => {
  
      const matchesSearch =
        job.job_title?.toLowerCase().includes(lowerSearch) ||
        job.job_description?.toLowerCase().includes(lowerSearch) ||
        job.job_type?.toLowerCase().includes(lowerSearch) ||
        job.education?.toLowerCase().includes(lowerSearch) ||
        job.experience?.toLowerCase().includes(lowerSearch);
      
      const matchesLocation =
        job.job_location?.toLowerCase().includes(locationSearch);
  
      return matchesSearch && matchesLocation;
    });
  
    setFilteredJobs(filtered);
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    setPage(1);
    setPaginatedJobs(filtered.slice(0, ITEMS_PER_PAGE));
  }, [jobs, searchTerm, location]);
  
  
  return (
    <div className="mt-20 flex flex-col min-h-screen">
      {/* Banner */}
      <Banner 
        title="BAMS Job Updates"
        subtitle="Explore the latest job opportunities for Ayurvedic practitioners across India"
        imageUrl="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-8">
          {/* Main Content */}
          <div className="w-full">
            {/* Featured Job */}
          <div className='grid md:grid-cols-2 w-full md:gap-8'>
            <div className="mb-12 p-6 bg-primary/5 rounded-lg border border-primary/10">
              <Badge className="mb-4">Latest Vacancy</Badge>
              <h2 className="text-2xl font-bold mb-2">{jobs[0]?.job_title}</h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span dangerouslySetInnerHTML={{__html: jobs[0]?.job_description.slice(0,110)}}></span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{jobs[0]?.job_location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarClock className="h-4 w-4" />
                  <span>Deadline: {jobs[0]?.last_date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>{jobs[0]?.job_salary}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button>View Details</Button>
                <Button variant="outline">Apply Now</Button>
              </div>
            </div>

            {/* Job Search */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Search Jobs</CardTitle>
                  <CardDescription>Search by job title, description or location</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium block mb-2">Keywords</Label>
                  <Input 
                    type="text" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    placeholder="Job title or keywords" 
                    className="px-4 py-2 rounded-md bg-background border w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium block mb-2">Location</Label>
                  <Input 
                    type="text" 
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                    placeholder="City or state" 
                    className="px-4 py-2 rounded-md bg-background border w-full focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                </div>
                </CardContent>
              </Card>
              </div>
            

            </div>

            {/* Job Tabs */}
            <div className='mt-10'>
              <SectionHeading 
                title="Latest Job Openings" 
                subtitle="Find the latest job openings in the Ayurvedic field"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-6">
                {paginatedJobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))}
              </div>
            </div>
            
            
            {/* Pagination */}
            <div className="md:mb-10 flex justify-center mt-10">
              <nav className="flex items-center space-x-2">
                <button 
                  onClick={handlePrev}
                  disabled={page === 1}
                  className="px-4 py-2 text-sm border rounded-md"
                > Previous
                </button>
                <span>{page} / {totalPages}</span>
                <button 
                  onClick={handleNext}
                  disabled={page === totalPages}
                  className="px-4 py-2 text-sm border rounded-md">
                  Next
                </button>
              </nav>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full grid md:grid-cols-2 md:gap-8">
                        
            {/* Job Alerts */}
            <div className="mb-8 p-6 bg-card rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Get Job Alerts</h3>
              <p className="text-muted-foreground mb-4">
                Receive personalized job alerts matching your skills and preferences directly in your inbox.
              </p>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="px-4 py-2 rounded-md bg-background border w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to receive job alerts and can unsubscribe at any time.
                  </label>
                </div>
                <Button className="w-full">Subscribe to Alerts</Button>
              </div>
            </div>
            
            {/* Career Resources */}
            <div>
              <Card className='bg-primary/5'>
                <CardHeader>
                  <CardTitle>Career Resources</CardTitle>
                  <CardDescription>Enhance your skills and knowledge with our curated resources</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Resume Building</h4>
                    <p className="text-sm text-muted-foreground">Tips to create an effective BAMS resume</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Interview Preparation</h4>
                    <p className="text-sm text-muted-foreground">Common interview questions for Ayurvedic doctors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Career Paths</h4>
                    <p className="text-sm text-muted-foreground">Explore different career options after BAMS</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Skill Enhancement</h4>
                    <p className="text-sm text-muted-foreground">Additional certifications to boost your profile</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">Explore Resources</Button>
              </div>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </div>
        
        {/* Career Insights Section */}
        <section className="mt-20">
          <SectionHeading 
            title="BAMS Career Insights" 
            subtitle="Exploring different career paths and opportunities in Ayurvedic medicine"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Government Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Medical Officers in AYUSH departments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>National Institutes and Research Centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Public Health Programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Teaching positions in Government Colleges</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="font-medium mb-2">Typical Salary Range:</h4>
                  <p className="text-muted-foreground">₹50,000 - ₹1,20,000 per month</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Private Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Ayurvedic Hospitals and Clinics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Wellness Centers and Spas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Private Ayurvedic Practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Pharmaceutical Companies</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="font-medium mb-2">Typical Salary Range:</h4>
                  <p className="text-muted-foreground">₹40,000 - ₹2,00,000 per month</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Research & Academia</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Research Scientists in Ayurvedic Institutes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Professors and Lecturers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Medical Writers and Content Creators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></span>
                    <span>Clinical Trial Investigators</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="font-medium mb-2">Typical Salary Range:</h4>
                  <p className="text-muted-foreground">₹45,000 - ₹1,50,000 per month</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Skill Development CTA */}
          <div className="mt-12 p-8 rounded-lg bg-card shadow-sm text-center">
            <h3 className="text-xl font-bold mb-4">Enhance Your Employability</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Develop additional skills to stand out in the competitive job market. Our partners offer specialized 
              courses for BAMS graduates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>Explore Courses</Button>
              <Button variant="outline">Career Counselling</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}