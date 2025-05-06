"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/Banner";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CalendarDays,
  FileText,
  CheckCircle2,
  AlertCircle,
  Search,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import CTA from "@/components/CTA";

export default function AdmissionsPage() {
  const [colleges, setColleges] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredColleges, setFilteredColleges] = useState<any[]>([]);
  const [selectedRound, setSelectedRound] = useState(
    stateWiseCounsellingData.rounds[0]
  );

  const handleRoundChange = (roundName: any) => {
    const round =
      stateWiseCounsellingData.rounds.find((r) => r.name === roundName) ??
      stateWiseCounsellingData.rounds[0];
    setSelectedRound(round);
  };

  useEffect(() => {
    setColleges(bams_colleges);
    setFilteredColleges(bams_colleges); // Initially, show all colleges
  }, []);

  useEffect(() => {
    // Filter colleges based on the search query
    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredColleges(filtered);
  }, [searchQuery, colleges]);

  return (
    <div className="mt-20 flex flex-col min-h-screen">
      {/* Banner */}
      <Banner
        title="B.A.M.S. Admissions"
        subtitle="Complete guide to admission process, requirements, and important dates"
        imageUrl="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <section className="mb-16">
          <SectionHeading
            title="Introduction to AYUSH UG Counselling"
            subtitle="Understanding the BAMS admission process in India"
            align="left"
          />
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                AYUSH UG Counseling & BAMS Admission 2024
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                AYUSH UG Counseling is conducted by the respective counseling
                bodies for admission into BAMS, BHMS, BUMS, and BSMS. Candidates
                must perform well in a national-level entrance exam. The NEET UG
                exam is the primary entrance exam for most BAMS colleges, and
                candidates must qualify in it.
              </p>
              <p className="mb-4">
                While some top colleges offer admission based on NEET scores,
                there are also management quota seats for direct admission in
                certain colleges. For state-affiliated colleges and
                universities, BAMS admission is offered based on state-level
                counseling, which considers the NEET scores of candidates.
              </p>
              <p className="mb-4">
                <strong>
                  AYUSH Counseling 2024 will be conducted in 2 ways:
                </strong>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>Central Counseling:</strong> By AACCC (Ayush
                    Admissions Central Counseling Committee)
                  </li>
                  <li>
                    <strong>State Level Counseling:</strong> By Dedicated State
                    Counseling Bodies
                  </li>
                </ul>
              </p>
              <h3 className="text-xl font-semibold mb-2">
                AYUSH Admissions Central Counseling Committee (AACCC)
              </h3>
              <p className="mb-4">
                The Ayush Admissions Central Counseling Committee (AACCC) of the
                Ministry of Ayush, Government of India, conducts online
                counseling for allotment of All India Quota (AIQ) seats for
                undergraduate (BAMS/BSMS/BUMS/BHMS) and post-graduate (MD/MS)
                courses. This includes government/government-aided colleges
                (15%), deemed universities (100%), central universities/national
                institutes, and Banaras Hindu University institutional quota
                seats.
              </p>
              <h3 className="text-xl font-semibold mb-2">Abbreviations</h3>
              <div className="max-h-[400px] overflow-scroll mb-6 rounded-lg border shadow-sm">
                <Table>
                  <TableBody>
                    {abbreviations.map((item, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="font-medium">
                          {item.abbreviation}
                        </TableCell>
                        <TableCell>{item.fullForm}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Eligibility Criteria
              </h3>
              <p className="mb-4">
                To be eligible for BAMS admission in 2024, candidates must meet
                the following requirements:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Candidates must have studied Physics, Chemistry, and
                  Biology/Biotechnology as mandatory subjects in their senior
                  secondary education.
                </li>
                <li>
                  They must score at least 50% aggregate marks in their 10+2
                  exams. Candidates from SC, ST, or OBC categories must score at
                  least 40%.
                </li>
                <li>
                  Candidates appearing for Class 12 exams are also eligible to
                  apply for NEET, but they must provide the final passing
                  certificate at the time of admission.
                </li>
                <li>
                  The minimum age limit is 17 years as of December 31, 2023.
                </li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">How to Apply?</h3>
              <p className="mb-4">
                Candidates need to follow these steps to apply for BAMS
                admission:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Visit the official website of the state counseling body for
                  registration and check the registration dates.
                </li>
                <li>
                  Fill out the application form and apply to various colleges as
                  per their preferences.
                </li>
                <li>
                  Visit the official NEET website for registration details, exam
                  dates, mock tests, and other updates.
                </li>
                <li>
                  Ensure an active email address and mobile number to receive
                  notifications and updates during the application process.
                </li>
                <li>
                  Upload necessary documents according to the required format
                  and size. Pay the application fee and keep a printout of the
                  form and payment receipt for future reference.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/** CTA */}
          <CTA />
        </section>

        {/* Overview Section */}
        <section className="mb-4">
          <SectionHeading
            title="Admission Overview"
            subtitle="Learn about the BAMS admission process in India"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  Admission Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  BAMS admissions typically follow this schedule. Dates may vary
                  by state and institution.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>Application Period: May-June</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>Entrance Exams: June-July</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>Counselling: July-August</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                    <span>Classes Begin: September-October</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Basic eligibility requirements for BAMS admission:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>10+2 with Physics, Chemistry, Biology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>
                      Minimum 50% aggregate in PCB (45% for reserved categories)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Valid NEET score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Age: 17 years minimum as of December 31st</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" />
                Important Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Keep these documents ready for the admission process:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>NEET UG-2024 Admit Card and Score Card</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>
                    High school or equivalent mark sheet, certificate, and admit
                    card
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>
                    Intermediate or equivalent mark sheet, certificate, and
                    admit card
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>
                    Original residence certificate as per the prescribed format
                    by the Uttar Pradesh Government
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>
                    Reservation-related certificates as per the prescribed
                    format by competent authorities
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>
                    For 15% All India quota seats in private sector, relevant
                    certificates issued by respective state authorities
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>OBC and EWS certificates issued soon</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>
                    One passport-sized photograph used for NEET UG 2024
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>
                    Identity card (e.g., Driving License, Bank Passbook with
                    photograph, PAN Card, Passport, or college-issued identity
                    card)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  <span>
                    Clear printouts of online registration and fee payment
                    receipts for counseling
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Entrance Exams Section */}
        <section className="mb-16">
          <SectionHeading
            title="Entrance Examinations"
            subtitle="Key exams for BAMS admission across India"
            align="left"
          />

          <div className="overflow-hidden rounded-lg border shadow">
            <Table>
              <TableCaption>
                Overview of entrance exams for BAMS admissions in India
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Exam Name</TableHead>
                  <TableHead>Conducting Body</TableHead>
                  <TableHead>Exam Date</TableHead>
                  <TableHead>Application Period</TableHead>
                  <TableHead>Eligibility</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">NEET-UG</TableCell>
                  <TableCell>National Testing Agency (NTA)</TableCell>
                  <TableCell>May (annually)</TableCell>
                  <TableCell>February-March</TableCell>
                  <TableCell>10+2 with PCB</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">AIAPGET</TableCell>
                  <TableCell>National Testing Agency (NTA)</TableCell>
                  <TableCell>June (annually)</TableCell>
                  <TableCell>April-May</TableCell>
                  <TableCell>BAMS Graduate (for PG)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">State AYUSH CET</TableCell>
                  <TableCell>Respective State Authorities</TableCell>
                  <TableCell>Varies by State</TableCell>
                  <TableCell>Varies by State</TableCell>
                  <TableCell>10+2 with PCB</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-8 bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">About NEET for BAMS</h3>
            <p className="text-muted-foreground mb-4">
              The National Eligibility cum Entrance Test (NEET) is now mandatory
              for admission to BAMS courses across India. This standardized test
              evaluates candidates on Physics, Chemistry, and Biology (Botany &
              Zoology).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-card p-4 rounded-lg">
                <h4 className="font-semibold">Exam Pattern</h4>
                <p className="text-sm text-muted-foreground">
                  180 multiple-choice questions
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <h4 className="font-semibold">Duration</h4>
                <p className="text-sm text-muted-foreground">
                  3 hours (180 minutes)
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <h4 className="font-semibold">Marking Scheme</h4>
                <p className="text-sm text-muted-foreground">
                  +4 for correct, -1 for incorrect
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg">
                <h4 className="font-semibold">Total Marks</h4>
                <p className="text-sm text-muted-foreground">720 marks</p>
              </div>
            </div>
            <div className="mt-6">
              <Button>NEET Preparation Resources</Button>
            </div>
          </div>
        </section>

        {/* Admission Process Section */}
        <section className="mb-16">
          <SectionHeading
            title="Admission Process"
            subtitle="Step-by-step guide to securing your BAMS seat"
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ol className="relative border-l border-primary/30 space-y-8 pl-6">
                <li className="relative">
                  <div className="absolute -left-[55px] z-40 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    NEET Examination
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Take the NEET-UG examination conducted by NTA. This is
                    mandatory for all BAMS admissions.
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>Tip:</strong> Aim for a high percentile as
                    competition for good colleges is intense.
                  </div>
                </li>

                <li className="relative">
                  <div className="absolute -left-[55px] h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Registration for Counselling
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Register for All India Quota (AIQ) counselling and/or
                    state-level counselling based on your preferences.
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>Remember:</strong> 15% seats are filled through AIQ
                    while 85% through state quotas.
                  </div>
                </li>

                <li className="relative">
                  <div className="absolute -left-[55px] h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Document Verification
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Attend the document verification process with all original
                    documents and their photocopies.
                  </p>
                </li>

                <li className="relative">
                  <div className="absolute -left-[55px] h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Seat Allotment</h3>
                  <p className="text-muted-foreground mb-2">
                    Seats are allotted based on your NEET rank, choices filled,
                    and availability of seats.
                  </p>
                </li>

                <li className="relative">
                  <div className="absolute -left-[55px] h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                    <span className="text-primary font-bold">5</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Fee Payment</h3>
                  <p className="text-muted-foreground mb-2">
                    Pay the required admission fees to confirm your seat at the
                    allotted college.
                  </p>
                </li>

                <li className="relative">
                  <div className="absolute -left-[55px] h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
                    <span className="text-primary font-bold">6</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Reporting to College
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Report to your allotted college with all original documents
                    within the specified timeframe.
                  </p>
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Counselling Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    BAMS admission counselling is typically conducted in
                    multiple rounds:
                  </p>
                  <ul className="space-y-4">
                    <li className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold">Round 1</h4>
                      <p className="text-sm">
                        Initial seat allotment based on merit and preferences
                      </p>
                    </li>
                    <li className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold">Round 2</h4>
                      <p className="text-sm">
                        For candidates who didn&apos;t get a seat or want to upgrade
                      </p>
                    </li>
                    <li className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold">Mop-up Round</h4>
                      <p className="text-sm">
                        Fills vacant seats after the first two rounds
                      </p>
                    </li>
                    <li className="p-3 bg-muted rounded-lg">
                      <h4 className="font-semibold">Stray Vacancy Round</h4>
                      <p className="text-sm">
                        Final round to fill any remaining vacant seats
                      </p>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Required Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Fee structure varies between government and private
                    institutions:
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Government Colleges</span>
                      <span className="font-semibold">
                        ₹25,000 - ₹50,000 per year
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Private Colleges</span>
                      <span className="font-semibold">
                        ₹1,00,000 - ₹5,00,000 per year
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span>Hostel Fees (approx.)</span>
                      <span className="font-semibold">
                        ₹50,000 - ₹1,00,000 per year
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Books & Other Expenses</span>
                      <span className="font-semibold">
                        ₹15,000 - ₹30,000 per year
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/** CTA */}
        <CTA />
        </section>

        

        {/* Requirements for Counselling */}
        <section className="mb-16">
          <SectionHeading
            title="Required Percentile for Counselling"
            subtitle="Eligibility criteria for BAMS counselling"
            align="left"
          />
          <Card className="mb-8 shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">
                🎯 Minimum Percentile Required (Category-Wise)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Required Percentile</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>General (UR)</TableCell>
                    <TableCell>50th Percentile</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      SC/ST/OBC (including PwD of SC/ST/OBC)
                    </TableCell>
                    <TableCell>40th Percentile</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>UR – PwD</TableCell>
                    <TableCell>45th Percentile</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* NEET 2024 Cut-Off Card */}
          <Card className="shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">
                📉 NEET 2024 Category-Wise Cut-Off Marks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Category</TableHead>
                    <TableHead>Qualifying Criteria</TableHead>
                    <TableHead>NEET UG 2024 Cut-Off Marks</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>UR / EWS</TableCell>
                    <TableCell>50th Percentile</TableCell>
                    <TableCell>720 – 162</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>OBC</TableCell>
                    <TableCell>40th Percentile</TableCell>
                    <TableCell>161 – 127</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SC</TableCell>
                    <TableCell>40th Percentile</TableCell>
                    <TableCell>161 – 127</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ST</TableCell>
                    <TableCell>40th Percentile</TableCell>
                    <TableCell>161 – 127</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>UR / EWS – PwD</TableCell>
                    <TableCell>45th Percentile</TableCell>
                    <TableCell>161 – 144</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>OBC – PwD</TableCell>
                    <TableCell>40th Percentile</TableCell>
                    <TableCell>161 – 144</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SC – PwD</TableCell>
                    <TableCell>40th Percentile</TableCell>
                    <TableCell>143 – 127</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ST – PwD</TableCell>
                    <TableCell>40th Percentile</TableCell>
                    <TableCell>143 – 127</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Note */}
          <p className="text-sm text-gray-600 mt-6">
            ✅ <strong>Note:</strong> Only candidates meeting these minimum
            requirements are eligible to participate in AACCC-UG or State AYUSH
            counseling rounds.
          </p>
        </section>

        {/* Counselling Process Section */}
        <section className="mb-16">
          <SectionHeading
            title="Counseling Process: Detailed Overview"
            subtitle="Understanding the BAMS counseling process in India"
            align="left"
          />
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>AACCC Counseling Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-md space-y-4">
              <p>
                The Ayush Admissions Central Counseling Committee (AACCC), under
                the Ministry of Ayush, Government of India, conducts online
                counseling for BAMS/BSMS/BUMS/BHMS undergraduate courses.
              </p>
              <p>
                AACCC manages 100% AIQ seat allotment in Govt./Govt.
                Aided/Central Universities/National Institutes/Deemed
                Universities based on NEET-UG results. It has been the
                regulating body since 2019.
              </p>
              <p>
                Admission is strictly based on NEET (UG)–2024 scores conducted
                by NTA.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>All India Quota (AIQ) Seats under AACCC</CardTitle>
            </CardHeader>
            <CardContent className="text-md space-y-2">
              <ul className="list-disc ml-6">
                <li>
                  15% AIQ UG seats of Govt./Govt. Aided institutes in all
                  states/UTs (except J&K)
                </li>
                <li>100% BAMS seats at BHU, Varanasi</li>
                <li>100% BAMS seats at ITRA, Jamnagar (except nominated)</li>
                <li>100% BAMS seats at NIA, Jaipur (except nominated)</li>
                <li>100% BHMS seats at NIH, Kolkata (except nominated)</li>
                <li>100% UG seats in all Deemed Universities</li>
                <li>50% BUMS seats at AMU, Aligarh</li>
                <li>50% BAMS/BHMS seats at NEIA&H, Shillong</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Postgraduate (PG) AIQ Seats</CardTitle>
            </CardHeader>
            <CardContent className="text-md space-y-2">
              <ul className="list-disc ml-6">
                <li>
                  15% AIQ PG seats under Govt./Govt. Aided ASU&H institutes
                </li>
                <li>100% PG seats at BHU (AIQ + Institutional Quota)</li>
                <li>100% PG seats at National Institutes</li>
                <li>100% PG seats at Deemed Universities</li>
                <li>100% PG seats at Delhi University (50% AIQ + 50% DUQ)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>BAMS Admission – 15% AIQ Govt./Govt. Aided</CardTitle>
            </CardHeader>
            <CardContent className="text-md space-y-4">
              <p>
                NEET (UG) 2024 qualified candidates (except J&K) are eligible.
              </p>
              <p>AACCC conducts 4 rounds of online counseling:</p>
              <ul className="list-disc ml-6">
                <li>Round 1</li>
                <li>Round 2</li>
                <li>3rd/Mop-Up Round</li>
                <li>Stray Vacancy Round</li>
              </ul>
              <p>
                Unfilled seats after Mop-Up Round are filled in the Stray
                Vacancy Round. No seats are reverted to institutes after
                counseling ends.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>
                BAMS Admission – Central Universities / National Institutes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-md space-y-4">
              <p>
                Eligible for all NEET (UG) 2024 qualified candidates (except
                J&K).
              </p>
              <p>
                Same 4 rounds of online counseling as above. No seat is reverted
                after Stray Vacancy Round.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>BAMS Admission – 100% Deemed Universities</CardTitle>
            </CardHeader>
            <CardContent className="text-md space-y-4">
              <p>
                All NEET (UG) 2024 qualified candidates including J&K are
                eligible.
              </p>
              <p>4 Rounds of counseling will be held:</p>
              <ul className="list-disc ml-6">
                <li>Round 1</li>
                <li>Round 2</li>
                <li>3rd/Mop-Up Round</li>
                <li>Stray Vacancy Round 1 & 2</li>
              </ul>
              <p>
                AACCC sends the list of registered eligible candidates to the
                Deemed Universities for the stray rounds. Only registered
                candidates are eligible. Central reservation policy does not
                apply (domicile-free).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Important Note</CardTitle>
            </CardHeader>
            <CardContent className="text-md pt-2">
              <p className="text-red-600">
                Without qualifying NEET (UG), BAMS admission in 2024–25 is not
                possible.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* BAMS New Registration Process Section */}
        <section className="mb-16">
          <SectionHeading
            title="BAMS New Registration Process"
            subtitle="Step-by-step guide to register for BAMS counseling"
            align="left"
          />
          {/* Eligibility */}
          <Card className="mb-8 shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">🎯 Eligibility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-md">
                Only <strong>NEET (UG) 2024 qualified</strong> students are
                eligible to apply for <strong>AACCC-UG Counseling</strong>.
              </p>
            </CardContent>
          </Card>

          {/* Process Steps */}
          <Card className="mb-8 shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">🔄 Registration Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2 items-start">
                <CheckCircle className="text-green-600 mt-1" size={18} />
                <p>
                  <strong>Step 1:</strong> Visit{" "}
                  <a
                    href="https://aaccc.gov.in/"
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    https://aaccc.gov.in/
                  </a>{" "}
                  and register for AACCC-UG Counseling.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="text-green-600 mt-1" size={18} />
                <p>
                  <strong>Step 2:</strong> Pay the counseling fee
                  (non-refundable + refundable security). See fee tables below.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="text-green-600 mt-1" size={18} />
                <p>
                  <strong>Step 3:</strong> Fill and lock your preferred choices
                  for colleges/courses.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="text-green-600 mt-1" size={18} />
                <p>
                  <strong>Step 4:</strong> Wait for the publication of seat
                  allotment results.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <CheckCircle className="text-green-600 mt-1" size={18} />
                <p>
                  <strong>Step 5:</strong> Report personally to the allotted
                  college to confirm admission.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Non-Refundable Fees Table */}
          <Card className="mb-8 shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">
                💸 Non-Refundable Registration Fees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Admission Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      AIQ Govt./Aided/Central/National Institute
                    </TableCell>
                    <TableCell>UR/EWS/OBC-NCL</TableCell>
                    <TableCell>₹1,000/-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      AIQ Govt./Aided/Central/National Institute
                    </TableCell>
                    <TableCell>SC/ST/PwBD</TableCell>
                    <TableCell>₹500/-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Deemed University</TableCell>
                    <TableCell>All Categories</TableCell>
                    <TableCell>₹5,000/-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Refundable Security Fees Table */}
          <Card className="shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">
                💰 Refundable Security Fees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Admission Type</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      AIQ Govt./Aided/Central/National Institute
                    </TableCell>
                    <TableCell>All Categories</TableCell>
                    <TableCell>₹20,000/-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Deemed University</TableCell>
                    <TableCell>All Categories</TableCell>
                    <TableCell>₹50,000/-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Important Dates for UP Counselling */}
        <section className="mb-16">
          <SectionHeading
            title="Important Dates for AACCC UG Counseling 2024-2025"
            subtitle="Stay updated with the latest counseling schedule"
            align="left"
          />
          {scheduleData.map((round, idx) => (
            <Card key={idx} className="mb-8 shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl">{round.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Events</TableHead>
                      <TableHead>Date & Schedule</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {round.events.map((event, i) => (
                      <TableRow key={i}>
                        <TableCell>{event.name}</TableCell>
                        <TableCell className="whitespace-pre-line">
                          {event.date}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* State-wise Counselling */}
        <section className="mb-16">
          <SectionHeading
            title="State-wise BAMS Counseling"
            subtitle="Explore the state-specific counseling processes"
            align="left"
          />

          {/* Round Selection Buttons */}
          <div className="flex max-md:flex-wrap justify-start max-md:gap-2 md:space-x-4 mb-6">
            {stateWiseCounsellingData.rounds.map((round) => (
              <Button
                variant="outline"
                key={round.name}
                onClick={() => handleRoundChange(round.name)}
              >
                {round.name}
              </Button>
            ))}
          </div>

          {/* Round Details */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex flex-row gap-2">
                  <FileText className="text-muted-foreground" />
                  {selectedRound.name} Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedRound.schedule.length === 1 &&
                selectedRound.schedule[0].event === "Not Announced Yet" ? (
                  <p className="text-center text-gray-500">
                    {selectedRound.schedule[0].event}
                  </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="px-4 py-2">Event</TableHead>
                        <TableHead className="px-4 py-2">Date & Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedRound.schedule.map((event, index) => (
                        <TableRow key={index}>
                          <TableCell className="px-4 py-2">
                            {event.event}
                          </TableCell>
                          <TableCell className="px-4 py-2">
                            {event.date}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Registration Guide */}
        <section className="mb-16">
          <SectionHeading
            title="Registration Guide"
            subtitle="Step-by-step guide for UP AYUSH counseling registration"
            align="left"
          />
          <Card className="mb-8 shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle>UP AYUSH Counseling Registration Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal ml-6">
                <li className="mb-2">
                  Visit the official UP AYUSH Counseling website:{" "}
                  <a
                    href="upayushcounseling.upsdc.gov.in"
                    target="_blank"
                    className="text-blue-600"
                  >
                    upayushcounseling.upsdc.gov.in
                  </a>
                </li>
                {stateWiseCounsellingData.registrationGuide.map(
                  (step, index) => (
                    <li key={index} className="mb-2">
                      {step}
                    </li>
                  )
                )}
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Security Money Deposit Section */}
        <section className="mb-16">
          <SectionHeading
            title="Security Money and Payment Process"
            subtitle="Important information regarding security money process"
            align="left"
          />
          <Card>
            <CardHeader>
              <CardTitle>💰 Security Money Process</CardTitle>
              <CardContent className="mt-2">
                <p>
                  For government Ayurvedic/Unani/Homeopathy colleges, deposit
                  Rs. 20,000 as security money. For private sector colleges,
                  it&apos;s Rs. 50,000. If applying to both government and private
                  sector, deposit Rs. 50,000. Deposit earnest money during
                  registration.
                </p>
                <Table className="mt-4">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Security Money</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Government Colleges</TableCell>
                      <TableCell>₹20,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Private Colleges</TableCell>
                      <TableCell>₹50,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>For All India Quota/85% State Quota Seats</TableCell>
                      <TableCell>₹50,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </CardHeader>
          </Card>

          {/** CTA */}
          <CTA />
        </section>

        {/* BAMS Colleges Section */}
        <section className="mb-16">
          <SectionHeading
            title="BAMS COLLEGES OF UTTAR PRADESH PARTICIPATING IN COUNSELING 2024"
            subtitle="Get insights into the top BAMS colleges in Uttar Pradesh"
            align="left"
          />
          <div className="mb-4 flex flex-row items-center gap-4">
            <Search strokeWidth="1.5" className="text-muted-foreground" />
            <Input
              type="text"
              placeholder="What college are you looking for?"
              className="px-4 py-4 h-12 w-full max-w-md border border-gray-300 rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="md:max-h-[40vh] max-h-[400px] overflow-x-auto rounded-md">
            <Table className="min-w-full table-auto">
              <thead>
                <tr className="bg-primary/10 rounded-md">
                  <th className="py-2 px-4 text-left">College Name</th>
                  <th className="py-2 px-4 text-left">Type</th>
                  <th className="py-2 px-4 text-left w-48">Established Year</th>
                  <th className="py-2 px-4 text-left w-48">Seat Intake</th>
                  <th className="py-2 px-4 text-left">Tuition Fees</th>
                </tr>
              </thead>
              <tbody>
                {filteredColleges.map((college, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"}
                  >
                    <td className="py-2 px-4">{college.name}</td>
                    <td className="py-2 px-4">{college.type}</td>
                    <td className="py-2 px-4">{college.established_year}</td>
                    <td className="py-2 px-4">{college.seat_intake}</td>
                    <td className="py-2 px-4">{college.tuition_fees}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mb-16">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common queries about BAMS admissions answered"
            align="left"
          />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is NEET mandatory for BAMS admission?
              </AccordionTrigger>
              <AccordionContent>
                Yes, NEET-UG is mandatory for admission to BAMS courses across
                all government and private colleges in India. This has been
                implemented to standardize the admission process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What is the duration of the BAMS course?
              </AccordionTrigger>
              <AccordionContent>
                The Bachelor of Ayurvedic Medicine and Surgery (BAMS) is a
                5.5-year program, which includes 4.5 years of coursework and 1
                year of compulsory internship.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                What is the difference between government and private BAMS
                colleges?
              </AccordionTrigger>
              <AccordionContent>
                Government colleges are generally more affordable with annual
                fees ranging from ₹25,000 to ₹50,000, while private colleges
                charge between ₹1,00,000 to ₹5,00,000 per year. Government
                colleges often have better infrastructure and hospital
                facilities, but are more competitive to get into due to limited
                seats.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I practice modern medicine after BAMS?
              </AccordionTrigger>
              <AccordionContent>
                BAMS graduates are legally permitted to practice Ayurvedic
                medicine. The practice of modern medicine by BAMS graduates is
                regulated differently across states, with some states allowing
                limited allopathic practice after additional bridge courses or
                registrations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What are the career prospects after BAMS?
              </AccordionTrigger>
              <AccordionContent>
                BAMS graduates can work as Ayurvedic physicians in government or
                private hospitals, set up their own clinics, join Ayurvedic
                pharmaceutical companies, pursue teaching careers, work in
                wellness centers and spas, or pursue higher education (MD/MS) in
                Ayurveda. There&apos;s also growing demand internationally as
                interest in alternative medicine increases.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                Are there any age restrictions for BAMS admission?
              </AccordionTrigger>
              <AccordionContent>
                As per the regulations, candidates must be at least 17 years of
                age as of December 31st of the admission year. There is
                typically no upper age limit for BAMS admissions, but it&apos;s
                advisable to check the latest guidelines from the National
                Commission for Indian System of Medicine (NCISM).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <CTA />
      </div>
    </div>
  );
}

const bams_colleges = [
  {
    name: "State Ayurvedic College & Hospital, Lucknow",
    type: "Government",
    established_year: 1954,
    seat_intake: 75,
    tuition_fees: "Rs. 10,000/-",
  },
  {
    name: "Lalit Hari State P.G. Ayurvedic College & Hospital, Pilibhit",
    type: "Government",
    established_year: 1899,
    seat_intake: 63,
    tuition_fees: "Rs. 10,000/-",
  },
  {
    name: "Bundelkhand Govt. Ayurvedic College & Hospital, Jhansi",
    type: "Government",
    established_year: 1934,
    seat_intake: 40,
    tuition_fees: "Rs. 10,000/-",
  },
  {
    name: "Government Ayurvedic College & Hospital Atarra",
    type: "Government",
    established_year: 1955,
    seat_intake: 60,
    tuition_fees: "Rs. 10,000/-",
  },
  {
    name: "S.R.M. Govt. Ayurvedic College, Bareilly",
    type: "Government",
    established_year: 1966,
    seat_intake: 75,
    tuition_fees: "Rs. 10,000/-",
  },
  {
    name: "Swami Kalyandev Government Ayurved College, Muzaffarnagar",
    type: "Government",
    established_year: 1978,
    seat_intake: 75,
    tuition_fees: "Rs. 10,000/-",
  },
  {
    name: "Shri Lal Bahadur Shastri Smarak Govt. Ayurvedic College & Hospital, Allahabad",
    type: "Government",
    established_year: 1977,
    seat_intake: 75,
    tuition_fees: "Rs. 10,000/-",
  },
  {
    name: "Sham-E-Ghausia Minority Ayurvedic Medical College & Hospital, Ghazipur",
    type: "Private",
    established_year: 1994,
    seat_intake: 60,
    tuition_fees: "Rs. 1,98,000",
  },
  {
    name: "Aligarh Unani & Ayurvedic Medical College & ACN Hospital, Aligarh",
    type: "Private",
    established_year: 1993,
    seat_intake: 60,
    tuition_fees: "--",
  },
  {
    name: "Vaidya Yagya Dutt Sharma Ayurved Mahavidyalaya, Khurja",
    type: "Private",
    established_year: 2002,
    seat_intake: 100,
    tuition_fees: "Rs. 2,59,100",
  },
  {
    name: "Sri Sai Ayurvedic Medical College & Hospital, Aligarh",
    type: "Private",
    established_year: 2002,
    seat_intake: 100,
    tuition_fees: "Rs. 2,86,300",
  },
  {
    name: "JD Ayurvedic Medical College & Hospital, Bhankari, Aligarh",
    type: "Private",
    established_year: 2004,
    seat_intake: 100,
    tuition_fees: "--",
  },
  {
    name: "Major S.D. Singh Ayurvedic Medical College & Hospital, Farrukhabad",
    type: "Private",
    established_year: 2006,
    seat_intake: 100,
    tuition_fees: "Rs. 2,93,100",
  },
  {
    name: "Faculty of Ayurveda Institute of Medical Sciences Banaras Hindu University Varanasi",
    type: "Government",
    established_year: 1927,
    seat_intake: 75,
    tuition_fees: "Rs. 33,214",
  },
  {
    name: "Govt. Ayurvedic College & Hospital, Sampoornanand Sanskrit University, Varanasi",
    type: "Government",
    established_year: 1965,
    seat_intake: 75,
    tuition_fees: "Rs. 10,000/-",
  },
  {
    name: "Shri Dhanwantri Ayurvedic Medical College & Research Centre, Mathura",
    type: "Private",
    established_year: 2009,
    seat_intake: 100,
    tuition_fees: "Rs. 2,54,200",
  },
  {
    name: "Bharat Ayurved Medical College, Hospital & Research Centre, Muzaffarnagar",
    type: "Private",
    established_year: 2009,
    seat_intake: 100,
    tuition_fees: "Rs. 2,50,000",
  },
  {
    name: "Prabudha Ayurvedic Medical College, Hospital & Research Centre, Lucknow",
    type: "Private",
    established_year: 2014,
    seat_intake: 50,
    tuition_fees: "Rs. 2,78,600",
  },
  {
    name: "Santushti Ayurvedic Medical College & Hospital, Mirzapur",
    type: "Private",
    established_year: 2014,
    seat_intake: 100,
    tuition_fees: "Rs. 2,92,400",
  },
  {
    name: "Pacific College of Ayurveda & Research Centre, Gorakhpur",
    type: "Private",
    established_year: 2014,
    seat_intake: 60,
    tuition_fees: "",
  },
  {
    name: "Gangasheel Ayurvedic Medical College & Hospital, Bareilly",
    type: "Private",
    established_year: 2015,
    seat_intake: 100,
    tuition_fees: "Rs. 2,94,900",
  },
  {
    name: "Shivalik Ayurvedic Medical College & Hospital, Azamgarh",
    type: "Private",
    established_year: 2012,
    seat_intake: 60,
    tuition_fees: "Rs. 2,55,800",
  },
  {
    name: "Shri Krishna Ayurvedic Medical College & Hospital, Varanasi",
    type: "Private",
    established_year: 2011,
    seat_intake: 60,
    tuition_fees: "Rs. 2,69,800",
  },
  {
    name: "Kunwar Shekhar Vijendra Ayurved Medical College & Research Center, Saharanpur",
    type: "Constituent College of University",
    established_year: 2014,
    seat_intake: 100,
    tuition_fees: "Rs. 2,52,100",
  },
  {
    name: "Shanti Institute of Medical & Higher studies, Shanti Ayurvedic Medical College & Hospital, Majhauli-Ballia",
    type: "Private",
    established_year: 2014,
    seat_intake: 60,
    tuition_fees: "Rs. 2,15,900",
  },
  {
    name: "Shaheed Narender Kumar Ayurveda Medical College & R.K.M.S. Cheritable Hospital, Aligarh",
    type: "Private",
    established_year: 2015,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,000",
  },
  {
    name: "Dr. Krishna Gopal Dwivedi Ayurvedic Medical College & Hospital Jhansi",
    type: "Private",
    established_year: 2015,
    seat_intake: 50,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Shri Babu Singh Dadduji Ayurvedic Medical College & Hospital, Farrukhabad",
    type: "Private",
    established_year: 2013,
    seat_intake: 100,
    tuition_fees: "Rs. 2,52,900",
  },
  {
    name: "Sri Babu Singh Jay Singh Ayurvedic Medical College & Hospital Bhaupur, Farrukhabad",
    type: "Private",
    established_year: 2015,
    seat_intake: 100,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Jeevan Jyoti Ayurvedic Medical College & Hospital, Aligarh",
    type: "Private",
    established_year: 2013,
    seat_intake: 60,
    tuition_fees: "Rs. 2,54,200",
  },
  {
    name: "Sanjeevani Ayurvedic Medical College, Amroha",
    type: "Private",
    established_year: 2015,
    seat_intake: 100,
    tuition_fees: "Rs. 2,50,900",
  },
  {
    name: "Prem Raghu Ayurvedic Medical College and Hospital Hathras",
    type: "Private",
    established_year: 2014,
    seat_intake: 60,
    tuition_fees: "Rs. 2,38,900",
  },
  {
    name: "Glocal College of Ayurvedic Medical Science & Research Centre, Saharanpur",
    type: "Constituent College of University",
    established_year: 2016,
    seat_intake: 60,
    tuition_fees: "Rs. 1,00,000",
  },
  {
    name: "Vivek College of Ayurvedic Sciences & Hospital, Moradabad",
    type: "Private",
    established_year: 2016,
    seat_intake: 100,
    tuition_fees: "Rs. 2,50,000",
  },
  {
    name: "R.B. Ayurvedic Medical College & Hospital, Agra",
    type: "Private",
    established_year: 2013,
    seat_intake: 100,
    tuition_fees: "Rs. 2,52,400",
  },
  {
    name: "Dhanvantari Ayurvedic Medical College & Hospital, Bareilly",
    type: "Private",
    established_year: 2014,
    seat_intake: 60,
    tuition_fees: "Rs. 2,54,200",
  },
  {
    name: "Bapu Ayurvedic Medical College Evam Hospital, Mau",
    type: "Private",
    established_year: 1996,
    seat_intake: 100,
    tuition_fees: "Rs. 2,48,000",
  },
  {
    name: "Shree Ram Ayurvedic Medical College and Hospital, Meerut",
    type: "Private",
    established_year: 2015,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "K.V. Ayurvedic Medical College & Dev Hospital, Agra",
    type: "Private",
    established_year: 2015,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Institute of AYUSH Medical Sciences, Vimalarjun Nagar, Lucknow",
    type: "Private",
    established_year: 2015,
    seat_intake: 100,
    tuition_fees: "Rs 2,51,200",
  },
  {
    name: "Mahaveer Ayurvedic Medical College & Hospital, Meerut",
    type: "Private",
    established_year: 2006,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "WTM Ayurvedic Medical College & Hospital, Village Amroha",
    type: "Private",
    established_year: 2016,
    seat_intake: 60,
    tuition_fees: "Rs. 2,51,100",
  },
  {
    name: "Prakash Institute of Ayurvedic Medical Sciences and Research, Bulandshehar",
    type: "Private",
    established_year: 2016,
    seat_intake: 60,
    tuition_fees: "",
  },
  {
    name: "S.R.S. Ayurvedic Medical College and Hospital, Agra",
    type: "Private",
    established_year: 2010,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "G.S. Ayurveda Medical College & Hospital, Hapur",
    type: "Private",
    established_year: 2014,
    seat_intake: 100,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "R.K. Ayurvedic Medical College & Hospital, Azamgarh",
    type: "Private",
    established_year: 2016,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Dr. Vijay Ayurvedic Medical College, Hospital & Research Centre, Varanasi",
    type: "Private",
    established_year: 2004,
    seat_intake: 100,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Divya Jyoti Ayurvedic Medical College & Hospital, Niwari Road, Ghaziabad",
    type: "Private",
    established_year: 2015,
    seat_intake: 100,
    tuition_fees: "Rs 204600/-",
  },
  {
    name: "SAS Ayurvedic Medical College & Hospital, Harhua",
    type: "Private",
    established_year: 2013,
    seat_intake: 60,
    tuition_fees: "Rs. 2,55,500",
  },
  {
    name: "SKS Ayurvedic Medical College & Hospital, Mathura",
    type: "Private",
    established_year: 2017,
    seat_intake: 100,
    tuition_fees: "Rs. 204600",
  },
  {
    name: "APEX Institute of Ayurvedic Medicine & Hospital, Mirzapur",
    type: "Private",
    established_year: 2016,
    seat_intake: 100,
    tuition_fees: "Rs. 2,30,600",
  },
  {
    name: "F.S Ayurvedic Medical College & Hospital, Firozabad",
    type: "Private",
    established_year: 2015,
    seat_intake: 60,
    tuition_fees: "",
  },
  {
    name: "KVS Institute of Ayurvedic Medical Science & Research Centre, Ghazipur",
    type: "Private",
    established_year: 2010,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Ankerite Ayurvedic Medical College & Hospital, Lucknow",
    type: "Private",
    established_year: 2017,
    seat_intake: 100,
    tuition_fees: "Rs. 2,28,800",
  },
  {
    name: "Doon Ayurvedic Medical College & Hospital, Saharanpur",
    type: "Private",
    established_year: 2016,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Chandra Shekhar Singh Ayurvedic Sansthan, Kaushambi",
    type: "Private",
    established_year: 2015,
    seat_intake: 60,
    tuition_fees: "Rs. 2,59,000",
  },
  {
    name: "SCPM Ayurvedic Medical College & Hospital, Haripur Gonda",
    type: "Private",
    established_year: 2007,
    seat_intake: 100,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Shri Satya Ayurvedic Medical College & Hospital, Moradabad",
    type: "Private",
    established_year: 2014,
    seat_intake: 100,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Kalawati Ayurvedic Medical College & Research Centre & Hospital, Gorha, Kasganj",
    type: "Private",
    established_year: 2017,
    seat_intake: 60,
    tuition_fees: "Rs. 2,35,700/-",
  },
  {
    name: "Ishan Ayurved Medical College & Research Centre, Greater Noida",
    type: "Private",
    established_year: 2017,
    seat_intake: 60,
    tuition_fees: "Rs. 2,54,000",
  },
  {
    name: "ITM Ayurvedic Medical College, Maharajganj",
    type: "Private",
    established_year: 2016,
    seat_intake: 100,
    tuition_fees: "",
  },
  {
    name: "Sanskriti Ayurvedic Medical College & Hospital, Mathura",
    type: "Private",
    established_year: 2016,
    seat_intake: 100,
    tuition_fees: "Rs. 2,60,900",
  },
  {
    name: "Dr. Anar Singh Ayurvedic Medical College & Hospital, Farrukhabad",
    type: "Private",
    established_year: 1981,
    seat_intake: 100,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Bhagwant Ayurvedic College & Hospital, Muzaffarnagar",
    type: "Private",
    established_year: 2017,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Bhartiya Ayurvedic Medical College, Amroha",
    type: "Private",
    established_year: 2017,
    seat_intake: 60,
    tuition_fees: "Rs. 2,49,300",
  },
  {
    name: "M.D. Ayurvedic College & Hospital, Agra",
    type: "Private",
    established_year: 2016,
    seat_intake: 60,
    tuition_fees: "Rs. 2,48,000",
  },
  {
    name: "SNSK Ayurvedic Medical College Hospital, Ghazipur",
    type: "Private",
    established_year: 2016,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Sardar Patel Institute of Ayurvedic Medical Science & Research Centre, Lucknow",
    type: "Private",
    established_year: 2016,
    seat_intake: 100,
    tuition_fees: "Rs. 2,55,700",
  },
  {
    name: "Charak Ayurvedic Medical College, Hospital and Research Centre, Meerut",
    type: "Private",
    established_year: 2015,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Rama Ayurvedic Medical College & Hospital, Kanpur",
    type: "Private",
    established_year: 2015,
    seat_intake: 100,
    tuition_fees: "Rs. 2,36,500",
  },
  {
    name: "Baba Vishwanath Ayurvedic Medical College & Hospital Azamgarh",
    type: "Private",
    established_year: 2004,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Naiminath Ayurvedic Medical College, Hospital and research centre, Agra",
    type: "Private",
    established_year: 2016,
    seat_intake: 100,
    tuition_fees: "Rs. 2,49,500",
  },
  {
    name: "Guru Gorakshnath Institute of Medical Sciences, Gorakhpur",
    type: "Private",
    established_year: 2021,
    seat_intake: 100,
    tuition_fees: "Rs.2,65,800",
  },
  {
    name: "Babu Yugraj Singh Ayurvedic Medical College & Hospital, Lucknow",
    type: "Private",
    established_year: 2017,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Rohilkhand Ayurvedic Medical College & Hospital, Bareilly International University campus Bareilly",
    type: "Private",
    established_year: 2016,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "Amarapali Ayurvedic Medical College, Unnao",
    type: "Private",
    established_year: "2021-2022",
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600",
  },
  {
    name: "IIMT Ayurvedic Medical College & Hospital, Meerut",
    type: "Private",
    established_year: "2021-2022",
    seat_intake: 60,
    tuition_fees: "Rs 2,39,200",
  },
  {
    name: "Kritika Ayurvedic College & Hospital, Bareilly",
    type: "Private",
    established_year: "2021-2022",
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600/-",
  },
  {
    name: "C.S. Ayurvedic Medical College & Hospital, Etah",
    type: "Private",
    established_year: 2017,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600/-",
  },
  {
    name: "Future Institute of Ayurvedic Medical sciences, Bareilly",
    type: "Private",
    established_year: "2021-2022",
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600/-",
  },
  {
    name: "Mangalayatan Ayurveda Medical College and Research Aligarh",
    type: "Private",
    established_year: 2020,
    seat_intake: 60,
    tuition_fees: "Rs. 2,04,600/-",
  },
  {
    name: "Dronacharya Ayurvedic Educational Institute & Hospital, Saharanpur",
    type: "Private",
    established_year: 2016,
    seat_intake: 60,
    tuition_fees: "2,04,600/-",
  },
];

const abbreviations = [
  {
    abbreviation: "AACCC",
    fullForm: "Ayush Admissions Central Counseling Committee",
  },
  {
    abbreviation: "NCISM",
    fullForm: "National Commission for Indian System of Medicine",
  },
  { abbreviation: "AIQ", fullForm: "All India Quota" },
  { abbreviation: "AIQG", fullForm: "All India Quota Government" },
  { abbreviation: "AIQGA", fullForm: "All India Quota Government Aided" },
  {
    abbreviation: "BAMS",
    fullForm: "Bachelor of Ayurvedic Medicines and Surgery",
  },
  { abbreviation: "BSMS", fullForm: "Bachelor of Siddha Medicine and Surgery" },
  {
    abbreviation: "BHMS",
    fullForm: "Bachelor of Homoeopathic Medicine and Surgery",
  },
  { abbreviation: "BUMS", fullForm: "Bachelor of Unani Medicine & Surgery" },
  { abbreviation: "GEN-EWS", fullForm: "General-Economically Weaker Section" },
  {
    abbreviation: "ITRA",
    fullForm: "Institute of Teaching and Research in Ayurveda",
  },
  { abbreviation: "NCH", fullForm: "National Commission for Homoeopathy" },
  { abbreviation: "NEET", fullForm: "National Eligibility Entrance Test" },
  {
    abbreviation: "NEIA&H",
    fullForm: "North Eastern Institute of Ayurveda & Homoeopathy",
  },
  { abbreviation: "NI", fullForm: "National Institute" },
  { abbreviation: "NIA", fullForm: "National Institute of Ayurveda" },
  { abbreviation: "NIH", fullForm: "National Institute of Homoeopathy" },
  { abbreviation: "NTA", fullForm: "National Testing Agency" },
  { abbreviation: "OBC", fullForm: "Other Backward Classes" },
  {
    abbreviation: "OBC-NCL",
    fullForm: "Other Backward Classes – Non Creamy Layer",
  },
  { abbreviation: "PwBD", fullForm: "Person with Benchmark Disabilities" },
  { abbreviation: "SC", fullForm: "Scheduled Caste" },
  { abbreviation: "ST", fullForm: "Scheduled Tribe" },
  { abbreviation: "UR", fullForm: "Unreserved" },
  { abbreviation: "UT", fullForm: "Union Territory" },
  { abbreviation: "UG", fullForm: "Undergraduate" },
  { abbreviation: "PG", fullForm: "Post-Graduate" },
  { abbreviation: "BHU", fullForm: "Banaras Hindu University" },
  { abbreviation: "AMU", fullForm: "Aligarh Muslim University" },
  { abbreviation: "AIIA", fullForm: "All India Institute of Ayurveda" },
  { abbreviation: "NIS", fullForm: "National Institute of Siddha" },
  { abbreviation: "ASU & H", fullForm: "Ayurveda, Siddha, Unani & Homeopathy" },
  { abbreviation: "DUQ", fullForm: "Delhi University Quota" },
];

const scheduleData = [
  {
    title: "🟢 First Round",
    events: [
      {
        name: "Registration & Payment",
        date: "28/08/2024 to 2/09/2024 till 2 P.M.",
      },
      {
        name: "Payment Facility",
        date: "Till 5 P.M. of 2/09/2024 (Server Time)",
      },
      {
        name: "Choice Filling/Locking",
        date: "29/08/2024 to 2/09/2024 till 11.55 P.M.\nLocking: 2.00 P.M. to 11.55 P.M. on 2/09/2024",
      },
      { name: "Seat Allotment", date: "03/09/2024 to 04/09/2024" },
      { name: "Declaration of Result", date: "05/09/2024" },
      {
        name: "Reporting at Allotted Institute",
        date: "06/09/2024 to 11/09/2024",
      },
      {
        name: "Verification by AACCC/NCISM/NCH",
        date: "12/09/2024 to 13/09/2024",
      },
    ],
  },
  {
    title: "🟡 Second Round",
    events: [
      {
        name: "Registration & Payment",
        date: "18/09/2024 to 23/09/2024 till 2 P.M.",
      },
      {
        name: "Payment Facility",
        date: "Till 5 P.M. of 23/09/2024 (Server Time)",
      },
      {
        name: "Choice Filling/Locking",
        date: "19/09/2024 to 23/09/2024 till 11.55 P.M.\nLocking: 2.00 P.M. to 11.55 P.M. on 23/09/2024",
      },
      { name: "Seat Allotment", date: "24/09/2024 to 25/09/2024" },
      { name: "Declaration of Result", date: "26/09/2024" },
      {
        name: "Reporting at Allotted Institute",
        date: "27/09/2024 to 3/10/2024",
      },
      {
        name: "Verification by AACCC/NCISM/NCH",
        date: "4/10/2024 to 5/10/2024",
      },
    ],
  },
  {
    title: "🟠 Third Round",
    events: [
      {
        name: "Registration & Payment",
        date: "09/10/2024 to 14/10/2024 till 2 P.M.",
      },
      {
        name: "Payment Facility",
        date: "Till 5 P.M. of 14/10/2024 (Server Time)",
      },
      {
        name: "Choice Filling/Locking",
        date: "10/10/2024 to 14/10/2024 till 11.55 P.M.\nLocking: 2.00 P.M. to 11.55 P.M. on 14/10/2024",
      },
      { name: "Seat Allotment", date: "15/10/2024 to 16/10/2024" },
      { name: "Declaration of Result", date: "17/10/2024" },
      {
        name: "Reporting at Allotted Institute",
        date: "18/10/2024 to 22/10/2024",
      },
      {
        name: "Verification by AACCC/NCISM/NCH",
        date: "23/10/2024 to 24/10/2024",
      },
    ],
  },
  {
    title: "🔵 Stray Vacancy Round 1",
    events: [
      {
        name: "Registration & Payment",
        date: "28/10/2024 to 31/10/2024 till 2 P.M.",
      },
      {
        name: "Payment Facility",
        date: "Till 5 P.M. of 31/10/2024 (Server Time)",
      },
      {
        name: "Choice Filling/Locking",
        date: "29/10/2024 to 31/10/2024 till 11.55 P.M.\nLocking: 2.00 P.M. to 11.55 P.M. on 31/10/2024",
      },
      { name: "Seat Allotment", date: "01/11/2024" },
      { name: "Declaration of Result", date: "02/11/2024" },
      {
        name: "Reporting at Allotted Institute",
        date: "03/11/2024 to 07/11/2024",
      },
      {
        name: "Verification by AACCC/NCISM/NCH",
        date: "08/11/2024 to 09/11/2024",
      },
    ],
  },
  {
    title: "🔴 Stray Vacancy Round 2",
    events: [
      {
        name: "Procedure",
        date: "No Registration and No Choice Filling.\nChoices from SVR-1 will be considered.",
      },
      { name: "Seat Allotment", date: "11/11/2024" },
      { name: "Declaration of Result", date: "12/11/2024" },
      {
        name: "Reporting at Allotted Institute",
        date: "13/11/2024 to 18/11/2024",
      },
      {
        name: "Verification by AACCC/NCISM/NCH",
        date: "19/11/2024 to 20/11/2024",
      },
    ],
  },
];

const stateWiseCounsellingData = {
  rounds: [
    {
      name: "Round 1",
      schedule: [
        {
          event: "Online registration and documents upload",
          date: "From 10:00 AM on 25/09/2024 to 11:00 AM on 28/09/2024",
        },
        {
          event: "Fee deposition",
          date: "From 10:00 AM on 25/09/2024 to 4:00 PM on 28/09/2024",
        },
        {
          event: "Publication of merit list (State Merit List)",
          date: "By 6:00 PM on 28/09/2024",
        },
        {
          event: "Online choice filling and seat locking",
          date: "From 10:00 AM on 29/09/2024 to 2:00 PM on 01/10/2024",
        },
        {
          event: "Provisional seat allotment",
          date: "By 5:00 PM on 01/10/2024",
        },
        {
          event: "Document verification at nodal centre",
          date: "From 03/10/2024 to 07/10/2024 (10:00 AM to 05:00 PM)",
        },
        {
          event: "Last date for downloading allocation letter and admission",
          date: "From 03/10/2024 to 09/10/2024 by 05:00 PM",
        },
        {
          event: "Consent for upgradation submission",
          date: "Until 11:59 PM on 09/10/2024",
        },
        {
          event: "Upgradation results announcement",
          date: "Until 01:00 PM on 10/10/2024",
        },
        {
          event: "Document verification for upgradation",
          date: "From 09:00 AM to 05:00 PM on 11/10/2024",
        },
        {
          event: "Last date for downloading upgraded allocation letter",
          date: "From 11/10/2024 to 14/10/2024 by 05:00 PM",
        },
      ],
    },
    {
      name: "Round 2",
      schedule: [
        {
          event: "Not Announced Yet",
          date: "",
        },
      ],
    },
    {
      name: "Round 3",
      schedule: [
        {
          event: "Not Announced Yet",
          date: "",
        },
      ],
    },
    {
      name: "Stray Vacancy",
      schedule: [
        {
          event: "Not Announced Yet",
          date: "",
        },
      ],
    },
  ],
  registrationGuide: [
    "Login using your NEET PG 2024 roll number and application number.",
    "Pay the registration fee of ₹2,000 (online payment).",
    "The registration fee is required only once and covers participation in all rounds of counseling. It is non-refundable.",
    "If you wish to participate in a specific counseling round, fill in your preferences for that round.",
    "Unregistered candidates must pay the registration fee to participate in the advanced rounds.",
  ],
};
