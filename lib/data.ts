export function getStudentTestimonials() {
  try {
    // For demo purposes, return hardcoded data
    return [
      {
        id: 1,
        name: "Priya Sharma",
        college: "National Institute of Ayurveda, Jaipur",
        year: "Final Year",
        testimony:
          "AyuFinders helped me find the perfect college for my BAMS studies. Their detailed information about each college and admission process made my decision much easier.",
        rating: 5,
      },
      {
        id: 2,
        name: "Rahul Patel",
        college: "Institute of Teaching and Research in Ayurveda, Jamnagar",
        year: "Third Year",
        testimony:
          "The counselling services provided by AyuFinders were invaluable. They guided me through the entire admission process and helped me secure a seat in one of the top Ayurvedic colleges.",
        rating: 5,
      },
      {
        id: 3,
        name: "Ananya Singh",
        college: "All India Institute of Ayurveda, New Delhi",
        year: "Graduate",
        testimony:
          "Thanks to AyuFinders, I found a great job opportunity right after completing my BAMS. Their job updates section is a treasure trove for Ayurvedic graduates.",
        rating: 4,
      },
      {
        id: 4,
        name: "Vijay Kumar",
        college: "Government Ayurvedic College, Thiruvananthapuram",
        year: "Second Year",
        testimony:
          "The study materials and question papers available on AyuFinders have been extremely helpful for my exams. It's a one-stop resource for all BAMS students.",
        rating: 5,
      },
      {
        id: 5,
        name: "Sneha Verma",
        college: "Rajiv Gandhi Government Post-Graduate Ayurvedic College",
        year: "Graduate",
        testimony:
          "I found my dream college through AyuFinders. Their detailed profiles of colleges helped me make an informed decision. Now I'm working as an Ayurvedic physician.",
        rating: 5,
      },
      {
        id: 6,
        name: "Manish Rathi",
        college: "Shri Dhanwantri Ayurvedic College, Chandigarh",
        year: "Final Year",
        testimony:
          "From college reviews to mock counselling, AyuFinders has made my BAMS journey smooth and stress-free. Highly recommended!",
        rating: 5,
      },
      {
        id: 7,
        name: "Pooja Mehra",
        college: "Tilak Ayurved Mahavidyalaya, Pune",
        year: "Second Year",
        testimony:
          "I regularly visit AyuFinders for the latest updates on BAMS courses and competitive exams. The content is always accurate and helpful.",
        rating: 4,
      },
      {
        id: 8,
        name: "Rohit Sinha",
        college: "Ayurvedic College, Patna",
        year: "Third Year",
        testimony:
          "The guidance I received from AyuFinders was crucial in shortlisting my college choices. Their blogs are insightful and student-focused.",
        rating: 5,
      },
      {
        id: 9,
        name: "Isha Kapoor",
        college: "Dayanand Ayurvedic College, Jalandhar",
        year: "Graduate",
        testimony:
          "Whether it’s internships or PG options, AyuFinders provided me with valuable direction during every step of my career.",
        rating: 5,
      },
      {
        id: 10,
        name: "Amit Deshmukh",
        college: "R.A. Podar Ayurved Medical College, Mumbai",
        year: "First Year",
        testimony:
          "Being a new student, AyuFinders gave me clarity on what to expect from BAMS. Their orientation resources were extremely helpful.",
        rating: 4,
      },
    ];
  } catch (error) {
    console.error("Error fetching student testimonials:", error);
    throw error;
  }
}
