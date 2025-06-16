import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import ReactIcon from "@/assets/icons/react.svg";
import PythonIcon from "@/assets/icons/python.svg";
import MongodbIcon from "@/assets/icons/mongodb.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import Image from "next/image";
import ukieri from "@/assets/images/ukieri.jpeg";

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Next.js',
    iconType: NextjsIcon,
  },
  {
    title: 'MongoDB',
    iconType: MongodbIcon,
  },
  {
    title: 'Python',
    iconType: PythonIcon,
  },
  {
    title: 'Git & GitHub',
    iconType: GithubIcon,
  },
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        
        {/* Grid Layout */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Top Left: Internship Experience */}
          <Card className="lg:col-span-1 p-8 min-h-[300px] flex flex-col">
            <CardHeader 
              title="Internship Experience" 
              description="Frontend Developer Intern at Valsco Technology. Built platforms like NoteSwap and School Alumni Portal using ReactJS, improving performance and user experience. Implemented dynamic components, reduced load times by 20%, and collaborated closely with the backend team to ship scalable features." 
            />
          </Card>

          {/* Top Right: Technical Toolkit */}
          <Card className="lg:col-span-1 p-8 min-h-[300px] flex flex-col">
            <CardHeader 
              title="My Technical Toolkit" 
              description="Technologies and tools I regularly use to build performant and scalable software." 
            />
            <div className="mt-6 flex-1 flex items-center">
              <ToolboxItems items={toolboxItems} />
            </div>
          </Card>

          {/* Bottom Left: Problem Solver's Mindset */}
          <Card className="lg:col-span-1 p-8 min-h-[400px] flex flex-col">
            <CardHeader 
              title="Problem Solver's Mindset" 
              description="Whether building collaborative tools or analyzing lab data, I approach challenges with curiosity, structure, and a focus on real-world impact." 
            />
            <div className="mt-6 flex-1 flex flex-col justify-center">
  <div className="aspect-video w-full rounded-lg overflow-hidden">
    <Image 
      src={ukieri} 
      alt="UKIERI Project" 
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </Card>

          {/* Bottom Right: Social Profiles */}
          <Card className="lg:col-span-1 p-8 min-h-[400px] flex flex-col">
            <CardHeader 
              title="Social Profiles" 
              description="Get in touch or explore more of my work:" 
            />
            <div className="mt-6 flex-1 flex flex-col justify-center space-y-3">
              <a href="https://github.com/JKSANJAY27" target="_blank" 
                 className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <GithubIcon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                <span className="text-white/80 group-hover:text-white transition-colors">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/sanjay-j-k/" target="_blank" 
                 className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white/80 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
              <a href="https://leetcode.com/u/SanjayJK/" target="_blank" 
                 className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
                <span className="text-white/80 group-hover:text-white transition-colors">LeetCode</span>
              </a>
              <a href="https://instagram.com/j.k.sanjay" target="_blank" 
                 className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="text-white/80 group-hover:text-white transition-colors">Instagram</span>
              </a>
              <a href="mailto:j.k.sanjay2006@gmail.com" 
                 className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <svg className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/80 group-hover:text-white transition-colors">Email</span>
              </a>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
};