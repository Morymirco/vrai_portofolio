'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectDetail() {
  const params = useParams();
  
  // Exemple de données de projet (à remplacer par vos données réelles)
  const project = {
    title: "Kambily",
    description: "Site e-commerce développé sous WordPress, avec un projet en cours pour développer une application mobile Flutter.",
    longDescription: `
      Kambily est une plateforme e-commerce complète qui permet aux utilisateurs de découvrir 
      et d'acheter des produits locaux guinéens. Le projet comprend à la fois un site web 
      et une application mobile en cours de développement.
    `,
    technologies: ["WordPress", "Flutter", "WooCommerce", "PHP", "MySQL"],
    image: "/projects/kambily.png",
    category: "web",
    link: "#",
    github: "#",
    features: [
      "Interface utilisateur intuitive et responsive",
      "Système de paiement sécurisé",
      "Gestion des stocks en temps réel",
      "Panel d'administration personnalisé",
      "Intégration avec les API de paiement locales",
      "Système de notifications automatiques"
    ],
    challenges: [
      "Optimisation des performances pour une utilisation avec connexion limitée",
      "Intégration des méthodes de paiement locales",
      "Adaptation aux spécificités du marché local"
    ],
    results: [
      "Augmentation de 150% des ventes en ligne",
      "Réduction de 40% du temps de traitement des commandes",
      "Satisfaction client de 4.8/5"
    ],
    screenshots: [
      "/projects/kambily-1.png",
      "/projects/kambily-2.png",
      "/projects/kambily-3.png"
    ]
  };

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-16 dark:bg-gray-900">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-center mb-8 bg-gradient-to-r 
                     from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 
                     text-transparent bg-clip-text"
          >
            {project.title}
          </motion.h1>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="aspect-video relative rounded-xl overflow-hidden shadow-lg mb-8"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Description</h2>
                  <p className="text-gray-600 dark:text-gray-300">{project.longDescription}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Fonctionnalités</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Défis & Solutions</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4 dark:text-white">Résultats</h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {project.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.aside 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">Détails du projet</h2>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-gray-500 dark:text-gray-400">Catégorie</dt>
                    <dd className="font-medium dark:text-white capitalize">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 dark:text-gray-400">Technologies</dt>
                    <dd className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 
                                   dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">Liens</h2>
                <div className="space-y-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 
                               hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                      <span>Voir le site</span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 
                               hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>Code source</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.aside>
          </div>

          {/* Galerie de captures d'écran */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold mb-6 dark:text-white">Captures d'écran</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden 
                                          shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.article>
    </main>
  );
} 