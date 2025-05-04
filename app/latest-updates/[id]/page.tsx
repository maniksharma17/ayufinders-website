"use client";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CollegeDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`/api/get-latest-update-by-id?id=${id}`);
      const data = await res.json();
      setBlog(data[0]);
      
    };

    fetchBlog();
  }, [id]);
  console.log(blog?.desc_notification)

  useEffect(() => {
    const fetchRelatedColleges = async () => {
      const res = await fetch(
        `/api/get-latest-updates`
      );
      const data = await res.json();
      setRelatedBlogs(data);
    };
    fetchRelatedColleges();
  }, [blog]);

  return (
    <main className="mt-20 lg:py-16 min-h-screen">
      <div className="w-full mb-4 px-4 container mx-auto flex flex-row gap-6 items-center justify-start max-lg:sticky top-0 max-sm:z-50 max-sm:py-6 bg-gray-50">
        <Button
          variant={"outline"}
          onClick={() => {
            router.back();
          }}
        >
          <ChevronLeft className="h-4 w-4 text-gray-600" /> Back
        </Button>
        <SectionHeading
          className="my-0 py-0 max-lg:text-3xl"
          title="Notification Overview"
          align="left"
        />
      </div>

      <div className="mx-auto container px-4 flex flex-col gap-8">
        <div className="w-full grid grid-cols-[0.8fr_2fr] max-lg:flex max-lg:flex-col-reverse gap-6">
          {/* Related Blogs */}
          <div className="lg:sticky top-24 max-h-[60vh]">
          <Card>
            <CardHeader>
              <CardTitle>Read more updates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 overflow-y-scroll max-h-[60vh]">
                {relatedBlogs.map((blog) => {
                  return <div onClick={()=>{router.push(`/latest-updates/${blog?.id}`)}} key={blog?.id} className="border-b cursor-pointer">{blog?.title}</div>
                })}
              </div>
            </CardContent>
          </Card>
            
          </div>

          {/* Blog Section */}
          <div className="">
            <Card>
              <CardHeader>
                <CardTitle>{blog?.title}</CardTitle>
                <CardDescription>{blog?.blog_category}</CardDescription>
                <div>
                  <Image
                  src={`https://ayufinders.com/jeni/superera/media/banner/${blog?.image}`}
                  alt={blog?.title as string}
                  height={400}
                  width={600}
                  className="w-full h-full object-cover rounded-xl mt-6"
                  />
                </div>
              </CardHeader>
              <CardContent className="max-w-[95vh] lg:max-w-[60vw] overflow-y-scroll">
              <div
                className="overflow-y-scroll prose custom-strong-tag custom-blog-table break-words overflow-scroll"
                dangerouslySetInnerHTML={{ __html: blog?.desc_notification as string }}
              />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help with Your BAMS Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
            Our team of experts is ready to guide you through the process of
            finding the right college, preparing for admissions, and planning your
            career in Ayurvedic medicine.
          </p>
          <Button size="lg" className="rounded-full px-8">
            Get Expert Counselling
          </Button>
        </section>

      </div>

      
      
    </main>
  );
};

interface Blog {
  id: string;
  blog_category: string;
  desc_notification: string;
  title: string;
  image: string;
  date_time: Date;
  title_url: string;
  meta_title: string;
  meta_tag: string;
  meta_description: string;
  meta_keyword: string
}

export default CollegeDetailsPage;
