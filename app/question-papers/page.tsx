"use client";
import React from 'react';
import Banner from '@/components/Banner';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FileText, Download, Clock, Calendar, BookOpen } from 'lucide-react';

export default function QuestionPapersPage() {

  const [universities, setUniversities] = React.useState([]);
  React.useEffect(() => {
    const fetchUniversities = async () => {
      const response = await fetch('/api/get-universities-for-question-papers');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setUniversities(data);
    };
    fetchUniversities();
  }, []);


  const [years, setYears] = React.useState([]);
  React.useEffect(()=>{
    const fetchYears = async () => {
      const response = await fetch('/api/get-years');
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setYears(data);
    }
    fetchYears()
  }, [])

  const [uniId, setUniId] = React.useState<string|undefined>(undefined);
  const [year, setYear] = React.useState<string|undefined>(undefined);
  const [yearOfStudy, setYearOfStudy] = React.useState<string|undefined>(undefined);

  const [questionPapers, setQuestionPapers] = React.useState([]);
  React.useEffect(()=>{
    const fetchQuestionPapers = async () => {
      const res = await fetch(`/api/get-question-papers?university_id=${encodeURIComponent(uniId as string)}&year=${encodeURIComponent(year as string)}&year_of_study=${encodeURIComponent(yearOfStudy as string)}`)
      const data = await res.json();
      setQuestionPapers(data);
    }

    fetchQuestionPapers();
  }, [year, yearOfStudy, uniId])

  return (
    <div className="mt-20 flex flex-col min-h-screen">
      {/* Banner */}
      <Banner 
        title="B.A.M.S. Question Papers"
        subtitle="Access previous years' question papers to prepare better for your exams"
        imageUrl="https://images.pexels.com/photos/374820/pexels-photo-374820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Filters */}
        <SectionHeading
        title='Select Filters to view PYQs'
        align='left'
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
            {years.length > 0 ?
              years.map((year: any) => {
                return <SelectItem key={year.id} value={year.id}>{year.year}</SelectItem>
              })
            : <div className='h-4 bg-gray-100 rounded-md'></div>
            }
            </SelectContent>
          </Select>
          
          <Select value={uniId} onValueChange={setUniId}>
            <SelectTrigger>
              <SelectValue placeholder="Select University" />
            </SelectTrigger>
            <SelectContent>
              {universities.length > 0 ?
              universities.map((uni: any) => {
                return <SelectItem key={uni.id} value={uni.id}>{uni.university}</SelectItem>
              })
            : <div className='h-4 bg-gray-100 rounded-md'></div>
            }
              
            </SelectContent>
          </Select>
          
          <Select value={yearOfStudy} onValueChange={setYearOfStudy}>
            <SelectTrigger>
              <SelectValue placeholder="Select Year of Study" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="First">First Year</SelectItem>
              <SelectItem value="Second">Second Year</SelectItem>
              <SelectItem value="Third">Third Year</SelectItem>
            </SelectContent>
          </Select>
          
         
        </div>

        <div>
          <SectionHeading
            title='Previour Year Question Papers'
            subtitle='Explore BAMS subject-wise question papers'
            />
        

          {/* Question Papers Grid **/}
          {
            questionPapers.length 
            ? 
            <div>
              <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-3 gap-y-6'>
                {questionPapers.map((qp: any) => {
                  return <QuestionPaperCard 
                  key={qp.id}
                  title={qp.question_type}
                  university={qp.university}
                  year={qp.year}
                  yearOfStudy={qp.paper_semester_year}
                  downloadLink={qp.question_upload}
                  />
                })}
              </div>
            </div>
            : 
              (!uniId || !year || !yearOfStudy) 
              ? 
              <div className='w-fit mx-auto md:px-8 md:py-4 p-4 bg-primary/5 border border-primary text-gray-700 text-center rounded-xl'>
                <p>Select all the above filters to get question papers</p>
              </div>
              : 
              <div className='w-fit mx-auto md:p-8 p-2 font-light bg-red-100 border border-red-300 text-red-600 text-center rounded-xl'>
                <p>No question papers available for specified filters</p>
              </div>
          }
        </div>
        
        
        
        {/* Helpful Resources */}
        <section className="mt-20">
          <SectionHeading 
            title="Exam Preparation Resources" 
            subtitle="Additional resources to help you prepare for your exams"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Study Techniques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn effective study techniques specifically designed for BAMS students dealing with vast syllabus.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Memory techniques for Sanskrit terms</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Time management strategies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Active recall methods</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Guide</Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Exam Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Approaches for tackling different question formats in BAMS exams efficiently.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Answering descriptive questions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>MCQ solving techniques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Diagram preparation tips</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Revision Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customizable revision schedules based on exam dates and syllabus complexity.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>30-day revision plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Last-minute preparation guide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>Subject prioritization method</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Download Templates</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="mt-16 bg-card shadow-sm rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Need Specific Question Papers?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            If you&apos;re looking for specific question papers that aren&apos;t available on our website, 
            our team can help you find them.
          </p>
          <Button>Contact Our Academic Team</Button>
        </section>
      </div>
    </div>
  );
}

interface QuestionPaperCardProps {
  title: string;
  university: string;
  year: string;
  yearOfStudy: string;
  duration?: string;
  marks?: string;
  isModelPaper?: boolean;
  downloadLink: string
}

const QuestionPaperCard: React.FC<QuestionPaperCardProps> = ({
  title,
  university,
  year,
  yearOfStudy,
  duration,
  marks,
  isModelPaper = false,
  downloadLink
}) => {
  return (
    <Card className="hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <span>{title}</span>
          </CardTitle>
          {isModelPaper && (
            <div className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 text-xs px-2 py-1 rounded-full">
              Model Paper
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-sm text-muted-foreground">{university}</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{yearOfStudy}</span>
          </div>
          
        </div>
      </CardContent>
      <CardFooter>
        <a href={`https://ayufinders.com/jeni/superera/media/banner/${downloadLink}`} download target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full flex items-center gap-2" variant="outline">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

