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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { ChevronLeft, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CollegeDetailsPage = () => {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(true)

  const [college, setCollege] = useState<College | null>(null);
  const [relatedColleges, setRelatedColleges] = useState([]);
  const [images, setImages] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(college?.image);


  useEffect(() => {
    setLoading(true)
    const fetchCollege = async () => {
      try{
        const res = await fetch(`/api/get-college-by-id?id=${id}`);
        const data = await res.json();
        setCollege(data[0]);
        const gallery = [
          data[0].image,
          data[0].gallery1,
          data[0].gallery2,
          data[0].gallery3,
          data[0].gallery4,
          data[0].gallery5,
        ];
        setImages(gallery);
        setSelectedImage(gallery[0]);
      } catch (e){
        console.log(e)
      } finally {
        setLoading(false)
      }
      
    };

    fetchCollege();
  }, [id]);

  useEffect(() => {
    const fetchRelatedColleges = async () => {
      const res = await fetch(
        `/api/get-related-colleges?state_id=${college?.state_id}&category_id=${college?.cat_id}&city_id=${college?.city_id}`
      );
      const data = await res.json();
      setRelatedColleges(data);
    };
    fetchRelatedColleges();
  }, [college]);

  if (loading) return <GeneralSkeleton count={3} classname="container mx-auto mt-20 py-20 px-8"/>

  return (
    <main className="mt-20 lg:px-4 lg:py-12 py-8 flex flex-col gap-y-8 min-h-screen">
      <div className="w-full px-4 container mx-auto flex flex-row gap-6 items-center justify-start max-lg:sticky top-0 max-sm:z-50 max-sm:py-6 bg-gray-50">
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
          title="College Overview"
          align="left"
        />
      </div>

      <div className="container px-4 mx-auto lg:grid-cols-2 lg:grid gap-12">
        <section className="w-full lg:sticky top-32 max-h-screen">
          <div className="space-y-2">
            <div className="lg:w-full grid grid-cols-1 gap-3">
              <div className="aspect-video lg:w-full flex-1">
                <Image
                  src={`https://ayufinders.com/jeni/superera/media/banner/${selectedImage}`}
                  alt={college?.title || "College Image"}
                  className="w-full h-full rounded-lg object-cover"
                  height={400}
                  width={800}
                  priority
                />
              </div>
              <div className="flex flex-row flex-wrap gap-2">
                {selectedImage != college?.image && (
                  <div
                    className="cursor-pointer aspect-video w-36 h-24"
                    onClick={() => setSelectedImage(college?.image)}
                  >
                    <Image
                      src={`https://ayufinders.com/jeni/superera/media/banner/${college?.image}`}
                      alt={""}
                      className="w-full h-full rounded-lg object-cover"
                      height={30}
                      width={30}
                      onError={(e) => {
                        const parent = e.currentTarget.parentElement;
                        if (parent) parent.style.display = "none";
                      }}
                    />{" "}
                  </div>
                )}

                {images?.map((img: any) =>
                  img != "" && !(images[0] === img) && selectedImage != img ? (
                    <div
                      className="cursor-pointer aspect-video w-36 h-24"
                      key={img}
                      onClick={() => setSelectedImage(img)}
                    >
                      <Image
                        src={`https://ayufinders.com/jeni/superera/media/banner/${img}`}
                        alt={""}
                        className="w-full h-full rounded-lg object-cover"
                        height={30}
                        width={30}
                        onError={(e) => {
                          const parent = e.currentTarget.parentElement;
                          if (parent) parent.style.display = "none";
                        }}
                      />
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
          <Card className="my-4 max-lg:hidden">
            <CardHeader>
              <CardTitle>View on Map</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src={college?.google_map}
                width="100%"
                height="100%"
                className="rounded-lg h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="my-4">
            <CardHeader className="bg-gray-100 mb-4 rounded-t-lg">
              <CardTitle>{college?.title}</CardTitle>
              <CardDescription>{college?.category_name}</CardDescription>
              <div className="flex flex-row gap-2 items-center">
                <span className="text-md font-semibold text-gray-700">
                  {college?.review}
                </span>
                {Array.from({ length: college?.review as number }).map(
                  (item, index) => {
                    return (
                      <Star
                        key={index}
                        className="h-4 w-4 text-yellow-400"
                        fill="currentColor"
                      />
                    );
                  }
                )}
              </div>
            </CardHeader>
            <CardContent>
              <Tabs className="mt-8" defaultValue="college_info">
                <TabsList>
                  <TabsTrigger value="college_info">Description</TabsTrigger>
                  {college?.fees_info && (
                    <TabsTrigger value="fees_info">Fees</TabsTrigger>
                  )}
                  {college?.facilites && (
                    <TabsTrigger value="facilites">Facilities</TabsTrigger>
                  )}
                  {college?.faculty && (
                    <TabsTrigger value="faculty">Faculty</TabsTrigger>
                  )}
                </TabsList>

                <TabsContent value="college_info">
                  <div
                    className="custom-html-desc-table lg:custom-html-table leading-relaxed my-4"
                    dangerouslySetInnerHTML={{
                      __html: college?.college_info as string,
                    }}
                  ></div>
                </TabsContent>

                <TabsContent value="fees_info">
                  <div
                    className="custom-html-table leading-relaxed my-4"
                    dangerouslySetInnerHTML={{
                      __html: college?.fees_info as string,
                    }}
                  ></div>
                </TabsContent>

                <TabsContent value="facilites">
                  <div
                    className="custom-html-table leading-relaxed my-4"
                    dangerouslySetInnerHTML={{
                      __html: college?.facilites as string,
                    }}
                  ></div>
                </TabsContent>

                <TabsContent value="faculty">
                  <div
                    className="custom-html-table leading-relaxed my-4"
                    dangerouslySetInnerHTML={{
                      __html: college?.faculty as string,
                    }}
                  ></div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card className="my-4 lg:hidden">
            <CardHeader>
              <CardTitle>View on Map</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                src={college?.google_map}
                width="100%"
                height="100%"
                className="rounded-lg h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>

          <div></div>
        </section>
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-6 max-lg:px-4">
        <Card>
          <CardHeader>
            <CardTitle>Students also viewed</CardTitle>
          </CardHeader>
          <CardContent>
            {relatedColleges.map((college: any, index: number) => {
              return (
                <Link key={college.id} href={`/colleges/${college.id}`}>
                  <div
                    className="border-b flex flex-row gap-4 py-2 hover:text-primary cursor-pointer"
                  >
                    <p className="font-bold text-primary">{index+1} </p><p>{college.title}</p>
                  </div>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      </div>
      {/** CTA */}
      <CTA />
    </main>
  );
};

interface College {
  id: string;
  college: string;
  status: string;
  title_url: string;
  image: string;
  top: number;
  title: string;
  college_info: string;
  course_info: string;
  fees_info: string;
  faculty: string;
  facilites: string;
  review: number;
  admissions: string;
  gallery1: string;
  gallery2: string;
  gallery3: string;
  gallery4: string;
  gallery5: string;
  url_slug: string;
  meta_tag: string;
  meta_title: string;
  meta_keyword: string;
  meta_description: string;
  added_on: string;
  google_map: string;
  state_name: string;
  city_name: string;
  category_name: string;
  state_id: string;
  city_id: string;
  cat_id: string;
}

export default CollegeDetailsPage;
