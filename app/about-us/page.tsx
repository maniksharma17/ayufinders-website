"use client";

import Banner from "@/components/Banner";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Search, Target, CheckCircle } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-8 mt-20 bg-white">
      <Banner
        title="About Us"
        subtitle="Read about AyuFinders, India's first technology-driven platform guiding students to the right Ayurveda colleges."
        imageUrl="https://images.unsplash.com/photo-1566112718365-4c8ccbedc3d9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="container mt-10 mx-auto px-4 space-y-10">
        {/* WHO WE ARE */}
        <Card>
          <CardHeader>
            <CardTitle>Who are we?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              AYUFINDERS is India’s first technology and authentic data-driven
              one-stop Ayurvedic website for students, and parents. Ayufinders
              was founded in the year 2022 with the aim to help students to find
              the right Ayurveda College for them.
            </p>
            <p>
              Ayufinders objective is to provide the latest information about
              entrance examinations, counseling sessions, admissions,
              infrastructure, facilities, etc of Ayurveda colleges across the
              nation.
            </p>
            <p>
              The key to uplifting Ayurveda rests in shaping Ayurvedic students
              by providing them with the right guidance and resources, enabling
              them to become proficient practitioners. As the future
              torchbearers of Ayurveda, students must be nurtured and equipped
              with the knowledge and skills necessary to take Ayurveda to new
              heights, building upon the rich heritage of this ancient practice.
            </p>
          </CardContent>
        </Card>

        {/* WHAT WE DO */}
        <Card>
          <CardHeader>
            <CardTitle>What we do?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We, at Ayufinders guide students at each step—student profiling,
              application filling, counseling notifications, and college
              shortlisting—to reach their “right” higher education center.
            </p>
            <p>
              Also, with our college predictor, the students can shortlist
              Ayurveda colleges as per marks obtained in NEET and their choice
              of city to study.
            </p>
            <p>
              The students can also compare the colleges across the nation on
              the basis of fee structure, intake capacity, facilities, etc.
              while sitting at their homes.
            </p>
          </CardContent>
        </Card>

        <section>
          <SectionHeading title="How we do it?" align="left" />
          <div className="container grid md:grid-cols-4 grid-cols-1 gap-6">
            {items.map(item => {
              return <Card key={item.title} className="p-4">
                <CardTitle
                className="flex flex-row gap-2 items-center mb-4"
                >
                  {item.icon} <p>{item.title}</p>
                </CardTitle>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            })}
          </div>
          
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help with Your BAMS Journey?</h2>
          <p className="max-w-2xl mx-auto mb-6 text-muted-foreground">
            Our team of experts is ready to guide you through the process of finding the right college, 
            preparing for admissions, and planning your career in Ayurvedic medicine.
          </p>
          <Button size="lg" className="rounded-full px-8">
            Get Expert Counselling
          </Button>
        </section>

      </div>
    </section>
  );
}


const items =[
  {
    "title": "COUNSELING",
    "icon": <MapPin className="text-blue-500" strokeWidth={1}/>, 
    "iconColor": "blue",
    "description": "We guide students through NEET AYUSH counseling step by step."
  },
  {
    "title": "SHORTLIST",
    "icon": <Search className="text-green-500" strokeWidth={1}/>, 
    "iconColor": "green",
    "description": "We help students shortlist colleges based on NEET score & preferences."
  },
  {
    "title": "TARGET",
    "icon": <Target className="text-orange-500" strokeWidth={1}/>, 
    "iconColor": "orange",
    "description": "We help students define realistic and suitable college targets."
  },
  {
    "title": "ACHIEVE",
    "icon": <CheckCircle className="text-purple-500" strokeWidth={1}/>, 
    "iconColor": "purple",
    "description": "With the right strategy and support, students achieve their dream seats."
  }
]
