"use client";

import CTA from "@/components/CTA";
import GeneralSkeleton from "@/components/Loader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, MapPin, Briefcase, CalendarDays, Phone } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const JobDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(true)

  const [job, setJob] = useState<Job | null>(null);
  const [relatedJobs, setRelatedJobs] = useState<Job[]>([]);

  useEffect(() => {
    try{
      const fetchJob = async () => {
        const res = await fetch(`/api/get-job-by-id?id=${id}`);
        const data = await res.json();
        setJob(data[0]);
      };
      fetchJob();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    const fetchRelatedJobs = async () => {
      const res = await fetch(`/api/get-jobs`);
      const data = await res.json();
      setRelatedJobs(data);
    };
    fetchRelatedJobs();
  }, [job]);

  if (loading) return <GeneralSkeleton count={3} classname="container mx-auto mt-20 py-20 px-8"/>

  return (
    <main className="mt-20 lg:py-16 min-h-screen">
      {/* Header with Back Button */}
      <div className="w-full mb-4 px-4 container mx-auto flex flex-row gap-6 items-center justify-start max-lg:sticky top-0 max-sm:z-50 max-sm:py-6 bg-gray-50">
        <Button
          variant={"outline"}
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-4 w-4 text-gray-600" /> Back
        </Button>
        <SectionHeading
          className="my-0 py-0 max-lg:text-3xl"
          title="Job Notification Overview"
          align="left"
        />
      </div>

      <div className="mx-auto container px-4 py-8 lg:py-16 flex flex-col gap-8">
        <div className="w-full grid grid-cols-[0.8fr_2fr] max-lg:flex max-lg:flex-col-reverse gap-6">

          {/* Related Jobs Section */}
          <div className="lg:sticky top-24 max-h-[80vh]">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">More Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2 overflow-y-scroll max-h-[60vh] text-sm">
                  {relatedJobs.map((job) => (
                    <div
                      key={job.id}
                      onClick={() => router.push(`/job-updates/${job.id}`)}
                      className="border-b py-2 cursor-pointer hover:text-primary transition"
                    >
                      {job.job_title}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Details Section */}
          <div>
            <Card className="border-blue-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">{job?.job_title}</CardTitle>
                <CardDescription className="flex gap-2 items-center mt-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  {job?.job_type} &nbsp;&bull;&nbsp;
                  <MapPin className="w-4 h-4" />
                  {job?.job_location}
                </CardDescription>

                
              </CardHeader>

              <CardContent className="max-w-[95vh] lg:max-w-[60vw] space-y-4 text-[15px]">
                <div className="text-gray-700">
                  <div className="flex items-center gap-2 font-semibold text-muted-foreground">
                    <CalendarDays className="w-4 h-4" />
                    Last Date: {job?.last_date}
                  </div>
                </div>

                <div
                  className="prose prose-blue custom-strong-tag custom-blog-table"
                  dangerouslySetInnerHTML={{ __html: job?.job_description || "" }}
                />

                <div className="flex flex-col md:flex-row justify-end gap-4 mt-6">
                  <Button variant={"link"} className="rounded-full px-4">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                  <Button variant={"outline"} className="rounded-full px-6">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <CTA/>
      </div>
    </main>
  );
};

interface Job {
  id: string;
  job_title: string;
  job_description: string;
  job_salary: string;
  education: string;
  experience: Date;
  job_location: string;
  job_type: string;
  job_vacancies: string;
  last_date: string;
  meta_title: string;
  meta_tag: string;
  meta_description: string;
  meta_keyword: string;
  image?: string;
}

export default JobDetailsPage;
