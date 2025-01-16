'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const icons = {
  education: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 14l9-5-9-5-9 5 9 5z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 14l9-5-9-5-9 5 9 5z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 14v7"/>
    </svg>
  ),
  experience: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  ),
  values: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  ),
  objectives: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  ),
  innovation: (
    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>
  ),
  collaboration: (
    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
    </svg>
  ),
  excellence: (
    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
    </svg>
  ),
  dot: (
    <svg className="w-2 h-2 text-blue-600" fill="currentColor" viewBox="0 0 8 8">
      <circle cx="4" cy="4" r="3"/>
    </svg>
  )
};

export default function APropos() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="space-y-12"
      >
        {/* En-tête */}
        <motion.div variants={fadeIn} className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                         text-transparent bg-clip-text mb-6">
            À Propos de Moi
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              Je suis Mory Koulibaly, passionné par le développement web et mobile, 
              avec une expertise dans la création de sites e-commerce, d'applications SaaS, 
              et de solutions personnalisées. Je combine créativité, efficacité et maîtrise 
              technique pour répondre aux besoins de mes clients.
            </p>
          </div>
        </motion.div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section Formation */}
          <motion.section 
            variants={fadeIn}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              {icons.education}
              Formation
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-lg">Licence en Développement de Logiciels</h3>
                <p className="text-gray-600">Université Gamal Abdel Nasser de Conakry</p>
                <p className="text-gray-500 text-sm">2018 - 2021</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-lg">Certifications Professionnelles</h3>
                <ul className="text-gray-600 list-disc ml-4 space-y-2">
                  <li>Développement Web Full Stack</li>
                  <li>Flutter & Dart Development</li>
                  <li>Gestion de Projet Agile</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section Expérience */}
          <motion.section 
            variants={fadeIn}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              {icons.experience}
              Expérience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Développeur Full Stack Freelance</h3>
                <p className="text-gray-600 mb-2">2021 - Présent</p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start gap-2">
                    {icons.dot}
                    Développement d'applications web et mobiles sur mesure
                  </li>
                  <li className="flex items-start gap-2">
                    {icons.dot}
                    Création de sites e-commerce et solutions SaaS
                  </li>
                  <li className="flex items-start gap-2">
                    {icons.dot}
                    Consultation technique et gestion de projets
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Section Valeurs */}
          <motion.section 
            variants={fadeIn}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              {icons.values}
              Mes Valeurs
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                {icons.innovation}
                <div>
                  <h3 className="font-semibold">Innovation</h3>
                  <p className="text-gray-600">Recherche constante de solutions créatives et efficaces</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                {icons.collaboration}
                <div>
                  <h3 className="font-semibold">Collaboration</h3>
                  <p className="text-gray-600">Travail d'équipe et communication transparente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                {icons.excellence}
                <div>
                  <h3 className="font-semibold">Excellence</h3>
                  <p className="text-gray-600">Engagement envers la qualité et les résultats</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section Objectifs */}
          <motion.section 
            variants={fadeIn}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              {icons.objectives}
              Objectifs
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Contribuer au développement numérique en Guinée en créant des solutions 
                innovantes et accessibles. Mon objectif est de participer activement à 
                la transformation digitale de notre société.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                  Innovation Technologique
                </span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                  Impact Social
                </span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                  Excellence Technique
                </span>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </main>
  );
} 