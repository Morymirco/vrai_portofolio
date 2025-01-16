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
    <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                       dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text 
                       mb-12 text-center">
          Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden 
                       hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <Link href={`/blog/${post.id}`} className="flex flex-col flex-grow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 
                             group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 
                                   dark:text-blue-200 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 
                               dark:text-white dark:group-hover:text-blue-400">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 
                                border-t dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium dark:text-white">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                      </svg>
                      <span className="text-sm">{post.readTime} min</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </main>
  );
} 