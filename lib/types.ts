export interface College {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  establishedYear: number;
  affiliatedTo: string;
}

export interface JobUpdate {
  id: number;
  title: string;
  organization: string;
  location: string;
  salary: string;
  postedDate: string;
  deadline: string;
  type: string;
}

export interface LatestUpdate {
  id: number;
  title: string;
  snippet: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface StudyLocation {
  id: number;
  name: string;
  description: string;
  colleges: number;
  imageUrl: string;
  popularity: string;
}

export interface Testimonial {
  id: number;
  name: string;
  college: string;
  year: string;
  testimony: string;
  imageUrl: string;
  rating: number;
}