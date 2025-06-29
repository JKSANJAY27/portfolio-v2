import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

export const AchievementsSection = () => {
  const achievements = [
    {
      title: "UKIERI 2025 Research Scholar",
      description: "One of 9 selected for UK-India Bilateral Research Exchange. Applied CS skills in data analysis and optimization while researching green hydrogen generation at Heriot-Watt University’s Research Centre for Carbon Solutions.",
    },
    {
      title: "Leadership Roles",
      description: "Senior Core Member, CodeChef VIT & TAM-VIT AI/ML Club. Organized coding events, workshops, and mentorship sessions for students.",
    },
    {
      title: "Academic Excellence",
      description: "B.Tech. in Computer Science with a CGPA of 9.39 from Vellore Institute of Technology, Vellore.",
    },
  ];
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader eyebrow="Notable Achievements" title="My Achievements" description="Here's a look at some of my key accomplishments and experiences." />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2).fill(0).map((_,index)=>(
              <Fragment key={index}>
                {achievements.map((achievement) => (
                  <Card key={achievement.title} className="max-w-xs md:p-8 md:max-w-md hover:-rotate-3 transition duration-300">
                    <h3 className="text-xl font-semibold text-emerald-400 mb-4">{achievement.title}</h3>
                    <p className="text-base text-white/80 leading-relaxed">{achievement.description}</p>
                  </Card>
                ))}
              </Fragment>
            ))]}
          </div>
        </div>
      </div>
    </div>
  );
};
