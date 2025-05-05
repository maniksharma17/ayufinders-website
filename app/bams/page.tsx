import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText } from "lucide-react";

export default function BamsSyllabusPage() {
  return (
    <div className="container mt-20 py-16 mx-auto p-6 space-y-12">
      {/* Header Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Bachelor of Ayurvedic Medicine and Surgery</h1>
        <p>
          Bachelor of Ayurvedic Medicine and Surgery is an undergraduate degree programme under which Ayurveda with the
          knowledge of modern science is incorporated into the curriculum.
        </p>
        <p>
          Ayurveda is one of the Traditional Indian Medicines under the Ministry of AYUSH. The essence of Ayurveda is
          “swasthasya swastha rakshanama aturasya vikara prashamanama” which means it focuses on maintaining health of
          healthy and treating the diseased as well. Therefore, Ayurveda can contribute to every section of our society.
        </p>

        <Card className="overflow-auto shadow-md">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Degree</TableCell>
                <TableCell>Undergraduate</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Duration</TableCell>
                <TableCell>4 and half years of Academics with 1-year Internship</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Eligibility</TableCell>
                <TableCell>Class 12th with Physics, Chemistry, and Biology (Medical Stream)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Subject Requirement</TableCell>
                <TableCell>Physics, Chemistry and Biology</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Frequency of Exam</TableCell>
                <TableCell>End of Professional Year (18 Months)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Admission/ Selection Process</TableCell>
                <TableCell>NEET Counselling</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Entrance Exam</TableCell>
                <TableCell>NEET</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Average Course Fee</TableCell>
                <TableCell>INR 2,50,000 per year</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Job Roles</TableCell>
                <TableCell>
                  Ayurvedic Doctor, Business Development Officer, Research Fellow, Resident Medical Officer,
                  Jr. Clinical Trial Coordinator, Medical Representative, Medical Coding, Medical Underwriting,
                  Pharmaceutical Jobs Etc
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Areas of Employment</TableCell>
                <TableCell>
                  Own Clinic, Government/Private Hospitals, Nursing Homes, Ayurvedic Clinics, Pharmaceutical Companies,
                  Own Businesses, Wellness Centres, Corporate Companies, MNCs
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>

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
      </section>

      {/* Syllabus Table */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold">BAMS Syllabus</h2>
        <Card className="shadow-md">
          <CardContent className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Professional BAMS</TableHead>
                  <TableHead>Duration (Months)</TableHead>
                  <TableHead>Subjects</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1st</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>
                    Samskritam evam Ayurved Ithihas, Padartha Vigyan, Kriya Sharira, Rachana Sharira, Samhita Adhyayan,
                    Electives (Minimum Three)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2nd</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>
                    Dravyaguna Vigyan, Rasashastra evam Bhaishajyakalpana, Roga Nidan evam Vikriti Vigyan, Agad Tantra
                    evam Vidhi Vaidyaka, Samhita Adhyayan, Swasthavritta evam Yoga, Electives (Minimum Three)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3rd</TableCell>
                  <TableCell>18</TableCell>
                  <TableCell>
                    Kayachikitsa, Panchakarma, Shalakya Tantra, Prasuti Tantra evam Stree Roga, Kaumarabhritya, Research
                    Methodology and Medical-statistics, Electives (Minimum Three)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Internship</TableCell>
                  <TableCell>12</TableCell>
                  <TableCell>Ayurveda and modern internship</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Timeline Cards */}
      <section className="space-y-6 border-l-2 md:pl-8 pl-2 border-primary">
        {sections.map((section, i) => (
          <Card key={i} className="relative shadow-sm">
            <div className="absolute md:-left-12 -left-8 bg-primary border-primary-2 rounded-full w-8 h-8 flex items-center justify-center">
              <p className="font-bold text-primary-foreground">{i + 1}</p>
            </div>
            <CardHeader>
              <CardTitle className="flex md:flex-row flex-col md:items-center gap-2">
                <FileText className="inline text-primary" strokeWidth={1} /> <h3>{section.title}</h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-2">
              <p>{section.description}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

const sections = [
  {
    title: "SAMHITA SIDDHANTA (AYURVEDA CLASSICAL TEXTS)",
    description: `The Maulik Siddhanta department in Ayurveda is considered the foundational department of BAMS. It is responsible for teaching the fundamental principles of Ayurveda as described in the classical texts, known as Ayurved Samhitas, which are written in Sanskrit. Since Sanskrit is regarded as a divine language, this department also teaches the language to enable a deeper understanding of the Samhitas. Maulik Siddhanta is integral to Ayurveda's practical application, as it teaches students how to apply these concepts in diagnosis and treatment planning, as well as the evaluation and judgment skills required to make informed decisions. Exposure to the Gurukul tradition, which emphasizes close teacher-student relationships and a holistic approach to learning, enhances students' professional development in this department.`
  },
  {
    title: "PADARTHA VIJNANA (FUNDAMENTAL PRINCIPLES OF AYURVEDA AND QUANTUM MECHANICS)",
    description: `Padartha Vijnanam is a crucial subject that must be studied in order to learn about Ayurveda. This subject is a blend of science and philosophy, as they are both necessary for understanding the principles of Ayurveda. It can be said that science and philosophy are two sides of the same coin, with science exploring the external world and philosophy examining the inner world. Therefore, Padartha Vijnanam forms an essential foundation for Ayurveda education, as a strong foundation leads to a strong building. Studying Padartha Vijnanam not only helps students understand Ayurveda better, but it also promotes the development of moral values and personal growth. As highlighted in the graduate attributes, this subject helps students become effective communicators and self-directed learners who strive to advance their knowledge and skills to improve healthcare and social well-being.`
  },
  {
    title: "KRIYA SHARIRA (HUMAN PHYSIOLOGY)",
    description: `Kriya Sharir deals with the study of the body's physiological norms, specifically the functioning of the human body in its normal state. This subject encompasses both the Ayurveda and Modern medical science physiology and biochemistry of human body. According to Ayurveda, the three pillars of an individual's health are dosha, dhatu, and mala, and Kriya Sharir primarily focuses on these aspects. Understanding the basic concepts, knowledge, and applicability of Tridosha (Vata, Pitta, Kapha), Sapta Dhatus (Rasa, Rakta, Mamsa, Meda, Asthi, Majja, Shukra), and Trimala (Mutra, Purish, Sweda) is critical for comprehending diseases. Additionally, Kriya Sharir covers topics such as Prakriti, Strotas, Kostha, Agni, Oja, Mana, Aahar (Basic principles of food), shatkriyakal, system-wise study of contemporary science. A thorough understanding builds a rooted system for undergraduates which is further explores in para-clinical and clinical subjects.`
  },
  {
    title: "RACHANA SHARIRA (HUMAN ANATOMY)",
    description: `Rachana Sharira is a subject that focuses on the study of the basic structure of the human body. This subject is a combination of Ayurvedic and modern knowledge of the human body's bones, muscles, joints, organs, and organ systems. Various aspects of the human body are covered in Ayurveda, including srotas sharira, pramana sharira, kala sharira, indriya sharira, etc. Clinical Anatomy is a crucial aspect of Rachana Sharira, where undergraduate students study anatomical abnormalities to better understand radiological findings. Additionally, this subject also covers the intrauterine development of the human body. Cadaveric dissection is used for gross anatomy, while human histological slides are prepared for cellular-level study to ensure better comprehension.`
  },
  {
    title: "DRAVYA GUNA VIJNANA (PHARMACOLOGY & MATERIA MEDICA)",
    description: `Ayurveda has a crucial component called Dravyaguna, which covers a wide range of information about medicinal herbs and their application in treatment. The subject matter encompasses the understanding of the taste, quality, potency, post-digestive effect, and therapeutic properties of the herbs, which are key to pharmacokinetics and pharmacodynamics. Dravyaguna also includes the methods of identifying, gathering, storing, and preserving plant-based raw materials. Moreover, the discipline aims to advance research methods for Ayurvedic Pharmacology & Materia Medica by integrating Classical and Contemporary knowledge. The conservation and cultivation of medicinal plants are also a significant focus, as well as providing household medicinal plants to cater to the healthcare needs of people. From a modern perspective, Dravyaguna emphasizes the mechanism of drug-body interaction, enabling the classification of drugs needed for various treatments.`
  },
  {
    title: "RASA SHASTRA EVUM BHAISHAJYA KALPANA",
    description: `Rasashastra is a vital branch of Ayurveda that focuses on the use of "Rasa dravyas" or minerals, especially mercury-based products, in Ayurvedic therapeutics. This comprehensive branch provides a detailed study of various aspects related to the discipline. Ayurvedic Pharmaceutics is focused on the production and utilization of herbal and mineral drugs. This branch of Ayurveda covers a wide range of topics including the characteristics of various drugs, their processing techniques, properties and therapeutic uses. Additionally, it involves the study of different apparatus, furnaces, heating devices and schedules used in the preparation of these drugs. The process of producing any drug in Ayurveda involves several steps, starting from the identification and collection of genuine raw materials, standardizing processing techniques and ensuring the production of high-quality drugs. Finally, the produced drugs are packed and stored, which may include churna, vati, guggulu kalpa, siddha tail, ghruta, avaleha, and other formulations.`
  },
  {
    title: "AGAD TANTRA EVUM VIDHI VAIDYAKA (TOXICOLOGY AND MEDICAL JURISPRUDENCE)",
    description: `Agada Tantra is an essential branch of Ayurveda that focuses on toxicology. It deals with the study of toxins, their effects on the body, clinical manifestations, diagnosis, and management of acute, chronic, and cumulative toxicity. The concept of cumulative toxicity is crucial, as it involves the build-up of toxins in the body due to the consumption of unhealthy and processed foods. Agada Tantra covers various natural and artificial toxic substances and poisons in detail, along with their antidotes, signs and symptoms. It also addresses the legal aspects of medical ethics and standards related to toxicology.

Forensic science plays a vital role in modern criminal investigations, helping to uncover evidence, identify suspects, and ultimately solve crimes. It encompasses a wide range of specialties, including DNA analysis, toxicology, ballistics, document analysis, and digital forensics.

Forensic scientists work closely with law enforcement agencies, lawyers, and judges, providing expert testimony in court and helping to ensure that justice is served`
  },
  {
    title: "ROGA NIDANA EVUM VIKRITI VIJNANA (PATHOLOGY)",
    description: `The branch of Ayurveda known as "Roga Nidana" is concerned with the diagnosis, etiology, and pathology of diseases. In Ayurveda, the first step in treating a disease is to identify its causative factor or "Nidana". The field of Roga Nidana addresses the causative factors, pathology, and diagnosis of diseases at both clinical and laboratory levels, using both Ayurvedic and modern perspectives. The Nidan Panchak, which forms the basis of Roga Nidana, is a set of principles used to diagnose diseases in Ayurveda. By utilizing these principles, practitioners can intervene and halt the progression of a disease before it becomes too advanced.`
  },
  {
    title: "SWASTHAVRITTA (PREVENTIVE AND SOCIAL MEDICINE)",
    description: `Ayurveda strongly emphasizes the importance of prevention over cure, and advocates for four key pillars of health: Dinacharya (daily regimen), Ritucharya (seasonal regimen), Sadvritta and Achara Rasayana (moral codes of conduct). The discipline aims to create awareness about lifestyle disorders and promote healthy living practices among the masses. The department also includes a unit dedicated to yoga, which is used for both maintaining health and therapeutic purposes. Another unit focuses on pathya (dietetics) based on Ayurvedic principles. Overall, Ayurveda is not just a system of medicine for treating diseases, but a way of life that provides guidelines for an ideal lifestyle to achieve and maintain good health.`
  },
  {
    title: "KAYACHIKITSA (INTERNAL MEDICINE)",
    description: `Ayurveda adopts a holistic approach to life, focusing on the treatment of body, mind, and soul. The first branch of Ashtanga Ayurveda, Kayachikitsa, deals with general medicine, where "kaya" refers to “the body” and "chikitsa" refers to “treatment”. The concept of Agni, which refers to the body's digestive fire, is fundamental to Ayurvedic therapeutics, and the management of Agni is the basic line of treatment for most diseases. Kayachikitsa also places great importance on Rasayana (rejuvenation) and Vajikaran (aphrodisiac) therapies. Rasayana therapy is useful for promoting health, while Vajikaran therapy is beneficial for the procreation of an ideal progeny. Additionally, Kayachikitsa recognizes the role of the mind in the causation and cure of diseases and emphasizes strict mental discipline and adherence to moral values. For this purpose, Manasroga (mental disorders) is described in Kayachikitsa.`
  },
  {
    title: "PANCHKARMA",
    description: `The treatment of diseases can be achieved through two approaches - Shaman (pacification) and Shodhana (purification/detoxification) chikitsa. Shaman chikitsa pacifies the morbid doshas, while Shodhana chikitsa expels the accumulated doshas. Panchakarma is a form of Shodhan that employs five methods of body purification. These methods are used to prevent diseases and enhance immunity in healthy individuals, as well as to treat a variety of diseases in the sick. Not only this, it includes various upkarmas for the treatment of numerous diseases. This is a widely accepted modality for joint disorders, skin disorders, and lifestyle disorders.`
  },
  {
    title: "SHALYA TANTRA (SURGERY)",
    description: `Ayurveda played a significant role in pioneering surgery in ancient India. One of the most important branches of Ayurvedic science is Shalya Chikitsa, which deals with surgical treatments. The Father of Surgery is the renowned Ayurveda surgeon- Acharya Susruta . The classical text Susruta Samhita, details the sophisticated surgical methods practiced in India thousands of years ago and the methodology described by him is even practiced to date by modern surgeons across the world. The text covers a wide range of surgical procedures, including treatment for tumours, internal and external injuries, bone fractures, complications during pregnancy and delivery, and intestinal obstructions. Acharya Susruta is also credited with developing cosmetic surgery in Ayurveda, particularly for the treatment of trichiasis. In this section of Ayurveda, with the use of Shastra, Yantra and Anushastra numerous procedures are carried out along with amalgamation with the modern types of equipment.`
  },
  {
    title: "SHALAKYA TANTRA (OPTHALMOLOGY, ORO-DENTAL AND E.N.T)",
    description: `Shalakya, also known as urdhwanga chikitsa, is a branch of Ayurveda that focuses on diagnosing and treating diseases of the organs present above the collarbone. The term "shalakya" is derived from the word "shalaka," which refers to a probe or blunt instrument used for diagnosing head-related ailments such as those affecting the nose, eyes, ears, throat, and other parts. The branch is primarily dedicated to the diseases of the head and neck region through medicines and surgical approaches.`
  },
  {
    title: "STRI ROGA EVUM PRASUTI TANTRA (GYNECOLOGY AND OBSTETRICS)",
    description: `The branch of Ayurveda known as Stri Roga (Gynaecology) and Prasuti Tantra (Obstetrics) is dedicated to the management of various diseases and disorders that affect women throughout their lives. This includes gynaecological and obstetric care, as well as attention to both physical and mental ailments, with the goal of promoting overall health and well-being. This branch of Ayurveda addresses health issues related to every stage of a woman's life, including pre-reproductive, reproductive, and post-reproductive phases.`
  },
  {
    title: "KAUMARBHRITYA (PEDIATRICS)",
    description: `Kaumarbhritya is a significant branch of Ayurveda that primarily deals with the prenatal and postnatal care of infants and children, as well as the care of the mother before and during pregnancy. The term "Kumar" refers to the period of life from conception to the age of 16 years, and "Bhritya" means servant. This branch provides an in-depth understanding of various diseases that affect children and their mothers, along with their treatment. Additionally, it also emphasizes the importance of a healthy diet, exercise, and immunity-boosting methods for children. This branch aims to provide a holistic approach to nursing and raising newborns, infants, and children for the betterment of society and to promote a healthy progeny.`
  },
  {
    title: "RESEARCH METHODOLOGY AND STATISTICS",
    description: `Currently, the focus in Ayurvedic medicine is on the importance, scope, and usefulness of research. Ayurveda is considered a divinely originated science, deeply intertwined with ancient knowledge sources such as the Vedas. It is widely accepted that there are no deficiencies in this field, as it has existed since the dawn of humanity and remains closely linked to Indian philosophy and culture. Nevertheless, with advances in science and the refinement of existing theories, it has become essential to subject this ancient yet widely practiced holistic system of medicine to scientific scrutiny. To achieve this, research must be integrated into Ayurvedic medicine. The objective of research in Ayurveda is to provide a scientific understanding of the concepts and theories found in ancient texts, while making necessary modifications while preserving fundamental principles. The challenge, therefore, is to align Ayurveda with modern progressive sciences through rigorous research activities.`
  }
];