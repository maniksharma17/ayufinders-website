"use client";

import Banner from "@/components/Banner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  BookMarked,
  BrainCircuit,
  Filter,
  UserCheck,
  Star,
  LockKeyhole,
  CalendarClock,
  Rocket,
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-8 mt-20">
      <Banner
        title="Why Choose Us"
        subtitle="Your trusted college-finding partner for a seamless Ayurveda admission journey."
        imageUrl="https://images.unsplash.com/photo-1681505531034-8d67054e07f6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="container mt-16 mx-auto px-4 space-y-10">
        <SectionHeading title="What makes us different?" align="left" />

        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="p-4">
              <CardTitle className="flex flex-row gap-2 items-center mb-4">
                {feature.icon}
                <p>{feature.title}</p>
              </CardTitle>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="container mx-auto mt-20 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Help with Your BAMS Journey?
          </h2>
          <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
            Our team of experts is ready to guide you through the process of
            finding the right college, preparing for admissions, and planning
            your career in Ayurvedic medicine.
          </p>
          <Button size="lg" className="rounded-full px-8">
            Get Expert Counselling
          </Button>
        </section>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Authentic Platform",
    icon: <BookMarked className="text-blue-500" strokeWidth={1} />,
    description:
      "We host the most reliable and up-to-date Ayurveda colleges database—making us your go-to destination for accurate college info.",
  },
  {
    title: "Personalized Guidance",
    icon: <BrainCircuit className="text-green-500" strokeWidth={1} />,
    description:
      "Our smart system suggests colleges based on your interests, academic performance, and city preferences.",
  },
  {
    title: "Simplified Search",
    icon: <Filter className="text-orange-500" strokeWidth={1} />,
    description:
      "Easily filter by location, courses, fee, and facilities—saving you time while helping you make clear decisions.",
  },
  {
    title: "Expert Counselling",
    icon: <UserCheck className="text-purple-500" strokeWidth={1} />,
    description:
      "Get advice from seasoned counselors and Ayurveda doctors to support you with every academic move.",
  },
  {
    title: "Genuine Reviews",
    icon: <Star className="text-yellow-500" strokeWidth={1} />,
    description:
      "Read honest reviews and ratings from real students to gain insights into college life and academics.",
  },
  {
    title: "Secure Platform",
    icon: <LockKeyhole className="text-red-500" strokeWidth={1} />,
    description:
      "We value your privacy—your data is safe, confidential, and handled with care on our secure platform.",
  },
  {
    title: "Deadline Alerts",
    icon: <CalendarClock className="text-cyan-500" strokeWidth={1} />,
    description:
      "Never miss an important deadline again—get timely notifications throughout the admission process.",
  },
  {
    title: "Empowering Your Future",
    icon: <Rocket className="text-pink-500" strokeWidth={1} />,
    description:
      "Our mission is to guide you toward a successful, fulfilling academic journey with the right tools and direction.",
  },
];
