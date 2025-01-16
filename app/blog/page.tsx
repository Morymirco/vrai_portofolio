'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

export default function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: "Les meilleures pratiques pour le développement Flutter en 2024",
      excerpt: "Découvrez les techniques et patterns les plus efficaces pour développer des applications Flutter performantes et maintenables.",
      date: "15 Mars 2024",
      readTime: "5 min",
      category: "Mobile",
      image: "/blog/flutter-dev.jpg",
      author: {
        name: "Mory Koulibaly",
        avatar: "/profile-photo.jpg"
      }
    },
    {
      id: '2',
      title: "Comment optimiser les performances de votre application Next.js",
      excerpt: "Un guide complet sur l'optimisation des performances dans Next.js, de la gestion du state au rendu côté serveur.",
      date: "10 Mars 2024",
      readTime: "8 min",
      category: "Web",
      image: "/blog/nextjs-perf.jpg",
      author: {
        name: "Mory Koulibaly",
        avatar: "/profile-photo.jpg"
      }
    },
    {
      id: '3',
      title: "L'importance de l'UI/UX dans le développement d'applications",
      excerpt: "Pourquoi l'expérience utilisateur est cruciale pour le succès de votre application et comment l'améliorer.",
      date: "5 Mars 2024",
      readTime: "6 min",
      category: "Design",
      image: "/blog/ui-ux.jpg",
      author: {
        name: "Mory Koulibaly",
        avatar: "/profile-photo.jpg"
      }
    }
  ];

  const categoryColors: { [key: string]: string } = {
    Mobile: 'bg-purple-100 text-purple-800',
    Web: 'bg-blue-100 text-blue-800',
    Design: 'bg-pink-100 text-pink-800',
    Backend: 'bg-green-100 text-green-800'
  };

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                         text-transparent bg-clip-text mb-4">
            Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez mes articles sur le développement web, mobile et les dernières 
            tendances technologiques.
          </p>
        </div>

        {/* Filtres de catégories */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.keys(categoryColors).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                        ${categoryColors[category]} hover:opacity-80`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl 
                         transition-all duration-300 flex flex-col"
            >
              {/* Image de l'article */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 
                           hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                                  ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Contenu de l'article */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{post.author.name}</p>
                    <p className="text-sm text-gray-500">
                      {post.date} · {post.readTime} de lecture
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 
                             transition-colors line-clamp-2">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blog/${post.id}`}
                  className="mt-auto inline-flex items-center text-blue-600 
                           hover:text-blue-800 transition-colors group"
                >
                  Lire la suite
                  <svg 
                    className="w-5 h-5 ml-2 transform transition-transform 
                             group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center gap-2">
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600
                           hover:border-blue-600 hover:text-blue-600 transition-colors">
            Précédent
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-600 text-white
                           hover:bg-blue-700 transition-colors">
            Suivant
          </button>
        </div>
      </motion.div>
    </main>
  );
} 