'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  category: 'web' | 'mobile' | 'backend' | 'ongoing';
  link?: string;
  github?: string;
  id: string;
}

export default function Projets() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const projects: Project[] = [
    // Projets Web et SaaS
    {
      title: "Kambily",
      description: "Site e-commerce développé sous WordPress, avec un projet en cours pour développer une application mobile Flutter.",
      technologies: ["WordPress", "Flutter", "WooCommerce"],
      image: "/projects/kambily.png",
      category: "web",
      link: "#",
      id: "kambily"
    },
    {
      title: "Geniusclass.com",
      description: "Plateforme d'apprentissage en ligne 100% guinéenne, offrant des vidéos de cours et des outils éducatifs.",
      technologies: ["WordPress", "Firebase", "Firebase Storage"],
      image: "/projects/geniusclass.png",
      category: "web",
      link: "https://geniusclass.com",
      id: "geniusclass"
    },
    {
      title: "Bibliothèque en ligne",
      description: "Projet ReactJS pour gérer et consulter une bibliothèque en ligne.",
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      image: "/projects/library.png",
      category: "web",
      github: "https://bibliofinalodc.vercel.app/",
      id: "library"
    },
    {
      title: "Findaara ",
      description: "le site vitrine du projet findaara.Gestion des paramètres d'incubateurs (température, humidité, notifications, journal de bord, etc.).",
      technologies: ["ReactJS", "Node.js", "MongoDB"],
      image: "/projects/findaara.png",
      category: "web",
      github: "https://findaara.vercel.app/",
      id: "findaara"
    },
    {
      title: "Markazgn",
      description: "Plateforme collaborative pour les services numériques et la gestion de communautés.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "/projects/markazgn.png",
      category: "web",
      link: "markazgn.org",
      id: "markazgn"
    },
    {
      title: "Loguifagn",
      description: "Plateforme collaborative pour les services numériques et la gestion de communautés.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      image: "/projects/loguifagn.png",
      category: "web",
      link: "markazgn.org",
      id: "markazgn"
    },
    // Projets Mobile
    {
      title: "Guitour",
      description: "Application mobile présentant les sites touristiques, restaurants et spécialités gastronomiques de Guinée.",
      technologies: ["Flutter", "Firebase"],
      image: "/projects/guitour.png",
      category: "mobile",
      github: "#",
      id: "guitour"
    },
    {
      title: "ZALAMA",
      description: "Application financière permettant aux étudiants et salariés guinéens d'accéder à leurs ressources financières de manière flexible.",
      technologies: ["Flutter", "Django", "Firebase"],
      image: "/projects/zalama.png",
      category: "mobile",
      id: "zalama"
    },
    {
      title: "SEGURGUINEE",
      description: "Application financière permettant aux étudiants et salariés guinéens d'accéder à leurs ressources financières de manière flexible.",
      technologies: ["Flutter", "Django", "Firebase"],
      image: "/projects/findaara.png",
      category: "mobile",
      id: "segurguinee"
    },
    {
      title: "Gestion d'incubateurs",
      description: "Gestion des paramètres d'incubateurs (température, humidité, notifications, journal de bord, etc.).",
      technologies: ["Flutter", "Firebase"],
      image: "/projects/kambily.png",
      category: "mobile",
      id: "incubator"
    },
    // Projets Backend
    {
      title: "Guibank's",
      description: "Application de gestion bancaire permettant de gérer les clients, comptes et agences bancaires.",
      technologies: ["Symfony", "MySQL"],
      image: "/projects/guibank.png",
      category: "backend",
      github: "#",
      id: "guibank"
    },
    {
      title: "APIs Flutter/Django",
      description: "Création d'APIs REST pour connecter des applications Flutter.",
      technologies: ["Django", "PostgreSQL", "DRF"],
      image: "/projects/findaara.png",
      category: "backend",
      github: "#",
      id: "apis"
    },
    // Projets en cours
    {
      title: "Cartographie établissements publics",
      description: "Application web pour localiser et cartographier les établissements publics à travers la Guinée.",
      technologies: ["Django", "Next.js", "Leaflet"],
      image: "/projects/cartographie.png",
      category: "ongoing",
      id: "cartographie"
    },
    {
      title: "Geniusclass Mobile",
      description: "Application mobile pour Geniusclass avec notifications personnalisées et gestion avancée des cours.",
      technologies: ["Firebase", "Flutter"],
      image: "/projects/geniusclass.png",
      category: "ongoing",
      id: "geniusclass-mobile"
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'web', name: 'Web & SaaS' },
    { id: 'mobile', name: 'Applications Mobile' },
    { id: 'backend', name: 'Backend' },
    { id: 'ongoing', name: 'En cours' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                       dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text 
                       mb-8 text-center">
          Mes Projets
        </h1>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300
                ${activeCategory === category.id
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                       hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <Link href={`/projets/${project.id}`} className="flex flex-col flex-grow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 
                             group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 
                                   dark:text-blue-200 rounded-full text-sm font-medium 
                                   border border-blue-200 dark:border-blue-700">
                      {categories.find(cat => cat.id === project.category)?.name}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 
                               dark:text-white dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} 
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 
                                       text-gray-700 dark:text-gray-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t dark:border-gray-700">
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                        <span>Voir les détails</span>
                        <svg 
                          className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
} 