import collaborativedocs from "@/assets/images/collaborativedocs.png";
import dialingo from "@/assets/images/dialingo.png";
import basketball from "@/assets/images/basketball.png";
import smartcalculator from "@/assets/images/smartcalculator.png";
import medical from "@/assets/images/medical.png";
import mlproject from "@/assets/images/mlproject.jpg";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Collaborative Docs",
    results: [
      { title: "Built real-time collaborative editing with Liveblocks" },
      { title: "Integrated custom editor using TipTap with extensions" },
      { title: "Implemented user/organisation management with Clerk & Convex" },
    ],
    link: "https://collaborative-docs-fqd7.vercel.app/",
    image: collaborativedocs,
  },
  {
    company: "Personal Project",
    year: "2025",
    title: "Dialingo",
    results: [
      { title: "Enabled real-time messaging & video calling" },
      { title: "Integrated 32 custom UI themes for personalization" },
      { title: "Implemented JWT auth, Zustand state, and screen sharing" },
    ],
    link: "https://dialingo.onrender.com/",
    image: dialingo,
  },
  {
    company: "Research Project",
    year: "2025",
    title: "Basketball Video Analysis",
    results: [
      { title: "Built player & ball detection using YOLO models" },
      { title: "Developed real-time court overlays & event detection" },
      { title: "Implemented team assignment using zero-shot learning" },
    ],
    link: "https://github.com/JKSANJAY27/Basketball-Analysis",
    image: basketball,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "AI Smart Calculator",
    results: [
      { title: "Recognizes handwritten math via AI-powered canvas" },
      { title: "Supports complex calculations with real-time feedback" },
      { title: "Inspired by Apple Notes’ intuitive math input" },
    ],
    link: "https://github.com/JKSANJAY27/Smart-Calculator",
    image: smartcalculator,
  },
  {
    company: "Hackathon Project",
    year: "2024",
    title: "AI Medical Analysis Dashboard",
    results: [
      { title: "Built chatbot for querying patient records with Gemini AI" },
      { title: "Visualized screenings and risk scores with dashboards" },
      { title: "Implemented Kanban, auth, and form digitization" },
    ],
    link: "https://github.com/karthicksaai/Medical",
    image: medical,
  },
  {
    company: "ML Project",
    year: "2025",
    title: "Employee Attrition Prediction",
    results: [
      { title: "Achieved 97.9% accuracy using Random Forest" },
      { title: "Visualized feature importance with Plotly and seaborn" },
      { title: "Applied SMOTE for class balancing and RFE for selection" },
    ],
    link: "https://github.com/JKSANJAY27/Employee-Turnover-and-Employee-Prediction-Models",
    image: mlproject,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="Explore how I've brought ideas to life through collaborative apps, AI analysis, and full-stack solutions." />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card key={project.title} className="px-8 pt-8 pb-0 md:pt-12 lg:pt-16 lg:px-20 md:px-10 sticky" style={{
              top: `calc(64px + ${projectIndex*10}px)`,
            }}>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map(result => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Check It Out!</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
