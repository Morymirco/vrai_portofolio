'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  client: string;
  duration: string;
  completionDate: string;
  technologies: string[];
  features: string[];
  images: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  results: {
    title: string;
    description: string;
  }[];
  testimonial?: {
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
  };
  links: {
    live?: string;
    github?: string;
    playstore?: string;
    appstore?: string;
  };
}

export default function ProjectDetail() {
  const params = useParams();

  // Exemple de données de projet (à remplacer par vos données réelles)
  const project: ProjectDetail = {
    id: '1',
    title: "Geniusclass.com",
    description: "Plateforme d'apprentissage en ligne 100% guinéenne",
    longDescription: `Geniusclass est une plateforme éducative innovante conçue pour 
    démocratiser l'accès à l'éducation en Guinée. Le projet vise à fournir des ressources 
    pédagogiques de qualité aux étudiants, où qu'ils soient dans le pays.`,
    category: "Web & SaaS",
    client: "GeniusClass Education",
    duration: "6 mois",
    completionDate: "Décembre 2023",
    technologies: [
      "WordPress",
      "Firebase",
      "Firebase Storage",
      "PHP",
      "MySQL",
      "React Native"
    ],
    features: [
      "Système de gestion des cours en ligne",
      "Interface utilisateur intuitive",
      "Tableau de bord administratif",
      "Système de paiement intégré",
      "Suivi des progrès des étudiants",
      "Chat en direct avec les enseignants"
    ],
    images: [
      "/projects/geniusclass/dashboard.jpg",
      "/projects/geniusclass/courses.jpg",
      "/projects/geniusclass/mobile.jpg"
    ],
    challenges: [
      {
        title: "Accessibilité",
        description: "Optimisation pour une utilisation avec une connexion internet limitée"
      },
      {
        title: "Scalabilité",
        description: "Architecture évolutive pour gérer la croissance des utilisateurs"
      }
    ],
    results: [
      {
        title: "Impact",
        description: "Plus de 5000 étudiants actifs sur la plateforme"
      },
      {
        title: "Performance",
        description: "Temps de chargement réduit de 60% après optimisation"
      }
    ],
    testimonial: {
      name: "Mariama Diallo",
      role: "Directrice",
      company: "GeniusClass Education",
      content: "Une solution qui répond parfaitement à nos besoins et à ceux de nos étudiants.",
      avatar: "/testimonials/mariama.jpg"
    },
    links: {
      live: "https://geniusclass.com",
      github: "https://github.com/username/geniusclass"
    }
  };

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* En-tête du projet */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm
                           font-medium inline-block mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Galerie d'images */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {project.images.map((image, index) => (
            <div key={index} className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {/* Description détaillée */}
            <section className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">À propos du projet</h2>
              <p className="text-gray-600 whitespace-pre-line">
                {project.longDescription}
              </p>
            </section>

            {/* Fonctionnalités */}
            <section className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Fonctionnalités principales</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" 
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Défis et Solutions */}
            <section className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-6">Défis et Solutions</h2>
              <div className="space-y-6">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Résultats */}
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Résultats</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 text-blue-800">
                      {result.title}
                    </h3>
                    <p className="text-gray-700">{result.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-8"
          >
            {/* Informations du projet */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-4">Détails du projet</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Client</p>
                  <p className="font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Durée du projet</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date de livraison</p>
                  <p className="font-medium">{project.completionDate}</p>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-4">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Liens */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-4">Liens du projet</h3>
              <div className="space-y-3">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 
                             transition-colors group"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    <span>Voir le projet en ligne</span>
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 
                             transition-colors group"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>Code source</span>
                  </a>
                )}
              </div>
            </div>

            {/* Témoignage */}
            {project.testimonial && (
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Témoignage client</h3>
                <div className="flex items-start gap-4">
                  <Image
                    src={project.testimonial.avatar}
                    alt={project.testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="italic text-gray-600 mb-2">"{project.testimonial.content}"</p>
                    <p className="font-medium">{project.testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {project.testimonial.role}, {project.testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.aside>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            href="/projets"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 
                     transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M15 19l-7-7 7-7"/>
            </svg>
            Retour aux projets
          </Link>
        </div>
      </motion.article>
    </main>
  );
} 