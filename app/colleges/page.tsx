"use client";
import React, { useEffect, useState } from "react";
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

interface College {
  id: number;
  college: string;
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
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setRating] = useState("All");
  const [region, setRegion] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const ITEMS_PER_PAGE = 12;
  const [paginatedColleges, setPaginatedColleges] = useState<College[]>([]);

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
  }, [page, colleges, totalPages, filteredColleges]);

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
  
      const matchesRating = rating === "All" || college.review === Number(rating);

      const matchesRegion =
        region === "All" ||
        college.direction_name?.toLowerCase() === region.toLowerCase();
  
      return matchesCategory && matchesSearch && matchesRating && matchesRegion;
    });
  
    setFilteredColleges(filtered);
    setPage(1);
    setPaginatedColleges(filtered.slice(0, ITEMS_PER_PAGE));
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
  }, [colleges, category, searchTerm, rating, region]);
  

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
        <div className="flex flex-col items-start gap-8">
          {/* Filters Section */}
          <div className="w-full">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row w-full gap-x-6 justify-around">
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
                    >
                    </Input>
                  </div>

                  <div className="w-full">
                    <Label className="text-sm text-gray-700 font-medium block mt-2 mb-1">
                      Region
                    </Label>
                    <Select onValueChange={setRegion}>
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
                    <Select onValueChange={setRating}>
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
              <TabsList className="max-md:mb-12 mb-6 max-md:bg-transparent max-md:flex-wrap">
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
                  {paginatedColleges.length === 0 && <div className="mx-auto w-full text-gray-700 font-medium">No colleges found</div>}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3">
                    {paginatedColleges.map((college: any) => (
                      <CollegeCard key={college.id} {...college} />
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
    </div>
  );
}
