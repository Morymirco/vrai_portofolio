'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Competences() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Technologies Frontend",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      skills: [
        { name: "React.js", level: 90, icon: "/skills/react.svg" },
        { name: "Next.js", level: 85, icon: "/skills/nextjs.svg" },
        { name: "HTML/CSS", level: 95, icon: "/skills/html5.svg" },
        { name: "Tailwind CSS", level: 90, icon: "/skills/tailwind.svg" },
      ]
    },
    {
      title: "Technologies Backend",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
        </svg>
      ),
      skills: [
        { name: "Django", level: 85, icon: "/skills/django.svg" },
        { name: "Express.js", level: 80, icon: "/skills/express.svg" },
        { name: "Laravel", level: 75, icon: "/skills/laravel.svg" },
        { name: "Node.js", level: 85, icon: "/skills/nodejs.svg" },
      ]
    },
    {
      title: "Bases de données",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
        </svg>
      ),
      skills: [
        { name: "MySQL", level: 85, icon: "/skills/mysql.svg" },
        { name: "PostgreSQL", level: 80, icon: "/skills/postgresql.svg" },
        { name: "Firebase", level: 85, icon: "/skills/firebase.svg" },
        { name: "MongoDB", level: 75, icon: "/skills/mongodb.svg" },
      ]
    },
    {
      title: "Développement Mobile",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      skills: [
        { name: "Flutter", level: 85, icon: "/skills/flutter.svg" },
        { name: "React Native", level: 80, icon: "/skills/react.svg" },
      ]
    },
    {
      title: "Design & UI/UX",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
      ),
      skills: [
        { name: "Figma", level: 85, icon: "/skills/figma.svg" },
        { name: "Adobe XD", level: 80, icon: "/skills/adobe-xd.svg" },
        { name: "Adobe Photoshop", level: 75, icon: "/skills/photoshop.svg" },
        { name: "Adobe Illustrator", level: 70, icon: "/skills/illustrator.svg" },
        { name: "UI Design", level: 85, icon: "/skills/ui-design.svg" },
        { name: "UX Design", level: 80, icon: "/skills/ux-design.svg" },
        { name: "Design System", level: 75, icon: "/skills/design-system.svg" },
        { name: "Responsive Design", level: 90, icon: "/skills/responsive.svg" },
      ]
    },
    {
      title: "Outils & Méthodologies",
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      skills: [
        { name: "Git & GitHub", level: 90, icon: "/skills/github.svg" },
        { name: "Méthodologie Agile", level: 85, icon: "/skills/agile.svg" },
        { name: "Jira", level: 80, icon: "/skills/jira.svg" },
        { name: "Notion", level: 85, icon: "/skills/notion.svg" },
        { name: "Trello", level: 90, icon: "/skills/trello.svg" },
        { name: "VS Code", level: 95, icon: "/skills/vscode.svg" },
      ]
    }
  ];

  const SkillBar = ({ name, level, icon }: Skill) => (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300
                    transform hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-3">
        <div className="relative w-8 h-8">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-grow flex justify-between items-center">
          <span className="font-medium">{name}</span>
          <span className="text-blue-600 font-semibold">{level}%</span>
        </div>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                       text-transparent bg-clip-text mb-12 text-center">
          Mes Compétences
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                {category.icon}
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </main>
  );
} 