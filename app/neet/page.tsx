"use client";

import {
  AlertTriangle,
  Info,
  GraduationCap,
  BookOpenCheck,
} from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";

export default function NEETInfoSection() {
  return (
    <section className="py-8 mt-20">
      <SectionHeading
        title="NATIONAL ELIGIBILTY CUM ENTRANCE TEST (NEET) 2025"
        align="left"
        className="container mx-auto max-lg:sticky w-full p-4 top-0 z-50 bg-slate-50"
      />
      <div className="container mx-auto px-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Info className="text-blue-600" /> <h3>What is NEET UG?</h3>{" "}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-md mb-2">
              The National Eligibility cum Entrance Test (NEET-UG) is a
              national-level entrance exam conducted by the National Testing
              Agency (NTA) for admission to undergraduate medical courses in all
              medical institutions in India. It covers MBBS, BDS, and AYUSH
              courses (BAMS, BHMS, BUMS, BSMS, etc.).
            </p>
            <p className="text-md">
              NEET is the only valid exam for MBBS/BDS/AYUSH admissions in India
              and is also mandatory for admission to AIIMS and JIPMER as per the
              NMC Act, 2019.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <GraduationCap className="text-green-600" />
              <h3>Eligibility Criteria</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 text-md space-y-2">
              <li>
                Must have completed 10+2 or equivalent with Physics, Chemistry,
                Biology/Biotechnology, and English.
              </li>
              <li>
                General category: Minimum 50% in PCB, OBC/SC/ST: 40%, PwD: 45%.
              </li>
              <li>Minimum age: 17 years as of 31st December 2025.</li>
              <li>No upper age limit (as per latest notification).</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <BookOpenCheck className="text-purple-600" />
              <h3>NEET 2025 Exam Pattern</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 text-md space-y-2">
              <li>Mode: Offline (pen and paper-based)</li>
              <li>Duration: 3 hours and 20 minutes</li>
              <li>Subjects: Physics, Chemistry, Biology (Botany & Zoology)</li>
              <li>Total Questions: 200 (180 to be attempted)</li>
              <li>
                Each subject has 2 sections:
                <ul className="list-disc pl-6 space-y-1">
                  <li>Section A: 35 Questions (all compulsory)</li>
                  <li>Section B: 15 Questions (attempt any 10)</li>
                </ul>
              </li>
              <li>Marking: +4 for correct, -1 for incorrect</li>
              <li>Maximum Marks: 720</li>
              <li>
                Languages: 13 including Hindi, English, Urdu, Tamil, Bengali,
                etc.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Info className="text-cyan-600" />
              <h3>NEET 2025 Quick Facts</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-slate-100 text-left">
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-200">
                      Parameter
                    </th>
                    <th className="py-2 px-4 border-b border-gray-200">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="text-md">
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Exam Name</td>
                    <td className="py-2 px-4">NEET UG 2025</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Conducting Body</td>
                    <td className="py-2 px-4">National Testing Agency (NTA)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">
                      Expected Exam Date
                    </td>
                    <td className="py-2 px-4">May 4, 2025 (Tentative)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">
                      Application Period
                    </td>
                    <td className="py-2 px-4">January – March 2025</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">
                      Total Seats (MBBS)
                    </td>
                    <td className="py-2 px-4">
                      ~1,08,000+ (including AIIMS, JIPMER)
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">
                      Admit Card Release
                    </td>
                    <td className="py-2 px-4">Last week of April 2025</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 font-medium">Official Website</td>
                    <td className="py-2 px-4">https://neet.nta.nic.in</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Info className="text-indigo-600" />
              <h3>Seat Distribution Through NEET</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 text-md space-y-2">
              <li>
                15% All India Quota (AIQ) seats (central counseling by MCC /
                AACCC)
              </li>
              <li>85% State Quota seats (counseling by state authorities)</li>
              <li>Deemed and Central Universities (AIIMS, JIPMER, etc.)</li>
              <li>Private colleges (Management, NRI quotas)</li>
              <li>Seats in Armed Forces Medical College (AFMC)</li>
              <li>AYUSH courses: BAMS, BHMS, BUMS, BSMS, BNYS</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Info className="text-pink-600" />
              <h3>NEET Counseling Process</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 text-md space-y-2">
              <li>
                <strong>AIQ Counseling:</strong> Conducted by MCC for 15% AIQ,
                Deemed/Central Universities, ESIC, and AFMC.
              </li>
              <li>
                <strong>AYUSH Counseling:</strong> Conducted by AACCC (AYUSH
                Admissions Central Counseling Committee) for AYUSH AIQ seats.
              </li>
              <li>
                <strong>State Counseling:</strong> Conducted separately by each
                state for 85% state quota seats and private colleges.
              </li>
              <li>
                Allotment based on NEET rank, preferences, and seat
                availability.
              </li>
              <li>Multiple rounds (Round 1, 2, Mop-up, Stray Vacancy).</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
                <Info className="text-pink-600" />
                <h3>NEET Counseling Process</h3>
              </CardTitle>
            </CardHeader>
          <CardContent>
            <p>
              Confused about NEET admission, college selection, or counseling?
              Connect with our experts for free one-on-one guidance.
            </p>
            
          </CardContent>
          <CardFooter>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm">
              Enquire Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
