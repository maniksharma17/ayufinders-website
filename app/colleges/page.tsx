"use client";
import React, { useEffect, useRef, useState } from "react";
import Banner from "@/components/Banner";
import CollegeCard from "@/components/CollegeCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SearchComponent from "@/components/SearchComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface College {
  id: number;
  college: string;
  title: string;
  image: string;
  city_name: string;
  state_name: string;
  review: number;
  college_type: string;
  direction_name: string;
  category_name: string;
  title_url: string;
}

export default function CollegesPage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [filteredColleges, setFilteredColleges] = useState<College[]>([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const ITEMS_PER_PAGE = 48;
  const [paginatedColleges, setPaginatedColleges] = useState<College[]>([]);

  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setRating] = useState("All");
  const [region, setRegion] = useState("All");

  useEffect(() => {
    const storedCategory = sessionStorage.getItem("category");
    const storedSearchTerm = sessionStorage.getItem("searchTerm");
    const storedRating = sessionStorage.getItem("rating");
    const storedRegion = sessionStorage.getItem("region");

    if (storedCategory) setCategory(storedCategory);
    if (storedSearchTerm) setSearchTerm(storedSearchTerm);
    if (storedRating) setRating(storedRating);
    if (storedRegion) setRegion(storedRegion);
  }, []);

  // Categories
  const categories = [
    "All",
    "Government ",
    "Government Aided ",
    "Private ",
    "Deemed University ",
    "Central Universities",
    "National Institute ",
  ];

  const isLoadedFromStorage = useRef(false);

  useEffect(() => {
    sessionStorage.setItem("searchTerm", searchTerm);
    sessionStorage.setItem("category", category);
    sessionStorage.setItem("region", region);
    sessionStorage.setItem("rating", rating);
  }, [searchTerm, category, region, rating]);

  useEffect(() => {
    const savedPosition = sessionStorage.getItem("scrollPosition");
    const savedSearch = sessionStorage.getItem("searchTerm");
    const savedRegion = sessionStorage.getItem("region");
    const savedRating = sessionStorage.getItem("rating");
    const savedCategory = sessionStorage.getItem("category");

    isLoadedFromStorage.current = true;

    setTimeout(() => {
      if (savedSearch) setSearchTerm(savedSearch);
      if (savedRegion) setRegion(savedRegion);
      if (savedRating) setRating(savedRating);
      if (savedCategory) setCategory(savedCategory);

      if (savedPosition) {
        window.scrollTo(0, parseInt(savedPosition));
        sessionStorage.removeItem("scrollPosition");
      }
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await fetch("/api/get-colleges");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setColleges(data);
        setFilteredColleges(data);
        setTotalPages(Math.ceil(data.length / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching updates:", error);
      }
    };
    fetchColleges();
  }, []);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;

  useEffect(() => {
    setPaginatedColleges(filteredColleges.slice(start, end));
  }, [page, colleges, totalPages, filteredColleges, end, start]);

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
    scrollTo(0,300)
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
    scrollTo(0,300)
  };

  useEffect(() => {
    if (!isLoadedFromStorage.current) return;
    const filtered = colleges.filter((college: any) => {
      const matchesCategory =
        category === "" ||
        category === "All" ||
        college.category_name?.toLowerCase() === category.toLowerCase();

      const matchesSearch =
        !searchTerm ||
        college.college?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.city_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.state_name?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesRating =
        rating === "All" || college.review === Number(rating);

      const matchesRegion =
        region === "All" ||
        college.direction_name?.toLowerCase() === region.toLowerCase();

      return matchesCategory && matchesSearch && matchesRating && matchesRegion;
    });

    setFilteredColleges(filtered);
    setPage(1);
    setPaginatedColleges(filtered.slice(0, ITEMS_PER_PAGE));
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    scrollTo(0, 500);
  }, [colleges, category, searchTerm, rating, region, isLoadedFromStorage]);

  return (
    <div className="mt-20 flex flex-col min-h-screen">
      {/* Banner */}
      <Banner
        className="max-md:h-[70vh]"
        title="Explore B.A.M.S. Colleges"
        subtitle="Find the perfect institution for your Ayurvedic education journey"
        imageUrl="https://images.unsplash.com/photo-1592066575517-58df903152f2?q=80&w=3098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      >
        <SearchComponent />
      </Banner>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Filters Section */}
          <div className="w-full lg:sticky top-32">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col w-full gap-x-6 justify-around">
                  <div className="w-full">
                    <Label className="text-sm text-gray-700 font-medium block mt-2 mb-1">
                      Search by name, state or city
                    </Label>
                    <Input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    ></Input>
                  </div>

                  <div className="w-full">
                    <Label className="text-sm text-gray-700 font-medium block mt-2 mb-1">
                      College Type
                    </Label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => {
                          return (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-full">
                    <Label className="text-sm text-gray-700 font-medium block mt-2 mb-1">
                      Region
                    </Label>
                    <Select value={region} onValueChange={setRegion}>
                      <SelectTrigger>
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="North">North</SelectItem>
                        <SelectItem value="East">East</SelectItem>
                        <SelectItem value="West">West</SelectItem>
                        <SelectItem value="South">South</SelectItem>
                        <SelectItem value="Central ">Central</SelectItem>
                        <SelectItem value="Northeast ">Northeast</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-full">
                    <Label className="text-sm text-gray-700 font-medium block mt-2 mb-1">
                      Rating
                    </Label>
                    <Select value={rating} onValueChange={setRating}>
                      <SelectTrigger>
                        <SelectValue placeholder="All" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="3">3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Colleges Section */}
          <div className="w-full">
            <Tabs defaultValue="all" className="mb-10">
              <TabsList className="max-md:mb-20 mb-6 max-md:bg-transparent max-md:flex-wrap">
                {categories.map((cat) => (
                  <TabsTrigger
                    key={cat}
                    className="max-md:bg-gray-100 max-md:m-1"
                    value={cat.toLowerCase()}
                    onClick={() => setCategory(cat)}
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* College Cards */}
              {categories.map((cat) => (
                <TabsContent key={cat} value={cat.toLowerCase()}>
                  {paginatedColleges.length === 0 && (
                    <div className="mx-auto w-full text-gray-700 font-medium">
                      No colleges found
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-md:gap-y-3 gap-y-8 gap-x-3">
                    {paginatedColleges.map((college: any) => (
                      <CollegeCard
                        searchTerm={searchTerm}
                        region={region}
                        rating={rating}
                        category={category}
                        key={college.id}
                        {...college}
                      />
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
                >
                  {" "}
                  Previous
                </button>
                <span>
                  {page} / {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={page === totalPages}
                  className="px-4 py-2 text-sm border rounded-md"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <section className="container mx-auto mb-6 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
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
  );
}
