"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import UpdateCard from "@/components/UpdateCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";

interface Update {
  id: number;
  blog_category: string;
  title: string;
  image: string;
  date_time: string;
}

export default function LatestUpdatesPage() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [filteredUpdates, setFilteredUpdates] = useState<Update[]>([]);
  const [category, setCategory] = useState("CME/Workshop/Seminar");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const ITEMS_PER_PAGE = 6;
  const [paginatedUpdates, setPaginatedUpdates] = useState<Update[]>([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch("/api/get-latest-updates");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUpdates(data);
        setFilteredUpdates(data);
        setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };
    fetchUpdates();
  }, []);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  useEffect(()=>{
    setPaginatedUpdates(filteredUpdates.slice(start, end));
  }, [page, updates, totalPages, filteredUpdates, end, start]);

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
    const filtered = updates.filter((update: any) => {
      return (
        update.blog_category === category &&
        update.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredUpdates(filtered);
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    setPage(1); 
    setPaginatedUpdates(filtered.slice(0, ITEMS_PER_PAGE));
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
  }, [updates, category, searchTerm]);

  // Categories 
  const categories = [
    "CME/Workshop/Seminar",
    "Students",
    "Counselling",
    "NEET",
    "News",
  ];

  return (
    <div className="mt-20 flex flex-col min-h-screen">
      {/* Banner */}
      <Banner
        title="Latest B.A.M.S. Notifications"
        subtitle="Stay informed with the newest developments in BAMS education"
        imageUrl="https://images.unsplash.com/photo-1624269305548-1527ef905ff6?q=80&w=3042&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            {/* Featured Update */}
            <div className="md:mb-12 rounded-lg overflow-hidden shadow-md">
              <div className="relative aspect-[21/9]">
                <Image
                  src={`https://ayufinders.com/jeni/superera/media/banner/${updates[0]?.image}`}
                  alt="Featured Update"
                  width={1280}
                  height={720}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 max-md:bg-gradient-to-b bg-gradient-to-t from-gray-600/80 md:from-gray-600/90 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-primary">Featured</Badge>
                    <Badge className="bg-primary/20 text-primary bg-gray-100">
                      {updates[0]?.blog_category}
                    </Badge>
                    
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {updates[0]?.title}
                  </h2>
                  
                  <Button size="sm">Read Full Article</Button>
                </div>
              </div>
            </div>

            {/* Categories Tabs */}
            <Tabs defaultValue="CME/Workshop/Seminar" onValueChange={setCategory} className="mt-10">
              <SectionHeading
              title="Select Category"
              className="max-md:mb-0 mb-4"
              />
              <TabsList className="max-md:mb-16 mb-6 max-md:flex-wrap bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger className="bg-gray-100 m-1" key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {paginatedUpdates.map((update: any) => (
                      <UpdateCard key={update.id} {...update} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
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
          <div className="w-full md:w-1/3">
            {/* Search Box */}
            <div className="max-md:hidden w-full md:mb-8 mb-2">
              <Card>
                <CardHeader>
                  <CardTitle>Find Update</CardTitle>
                  <CardDescription>Search by keyword</CardDescription>
                </CardHeader>
                <CardContent>
                  <Input
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    placeholder="Search by keyword..."
                    className="px-4 py-2 rounded-md bg-background border flex-1 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Recent Updates */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Updates</CardTitle>
                  <CardDescription>
                    Explore Recent Updates and Notifications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {updates.slice(0, 5).map((update: any) => (
                      <div
                        key={update.id}
                        className="flex gap-3 pb-4 border-b last:border-b-0 last:pb-0"
                      >
                        <div className="h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={`https://ayufinders.com/jeni/superera/media/banner/${update.image}`}
                            alt={update.title}
                            className="h-full w-full object-cover"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2">
                            {update.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <CalendarDays className="h-3 w-3" />
                            {format(new Date(update.date_time), "dd MMM yyyy")}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                  <CardDescription>Filter by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                  {categories
                      .filter((cat) => cat !== "All")
                      .map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="px-3 py-1 cursor-pointer"
                          onClick={() => setCategory(category)}
                          
                        >
                          {category}
                        </Badge>
                      ))}
                  </div>

                </CardContent>
              </Card>
              
            </div>

            {/* Subscribe */}
            <div className="p-6 bg-primary/5 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter to get the latest updates delivered
                to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-background border w-full mb-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
