'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  tags: string[];
}

export default function BlogPost() {
  const params = useParams();
  
  // Exemple d'article (à remplacer par vos données réelles)
  const post: BlogPost = {
    id: '1',
    title: "Les meilleures pratiques pour le développement Flutter en 2024",
    content: `
      <h2>Introduction</h2>
      <p>Le développement d'applications mobiles avec Flutter continue d'évoluer rapidement. 
      Dans cet article, nous allons explorer les meilleures pratiques actuelles pour créer 
      des applications performantes et maintenables.</p>

      <h2>Architecture et Organisation du Code</h2>
      <p>Une bonne architecture est essentielle pour maintenir un projet Flutter à long terme. 
      Voici les points clés à considérer :</p>
      <ul>
        <li>Utilisation du pattern BLoC pour la gestion d'état</li>
        <li>Organisation claire des dossiers</li>
        <li>Séparation des préoccupations</li>
      </ul>

      <h2>Performance et Optimisation</h2>
      <p>La performance est cruciale pour offrir une expérience utilisateur fluide. 
      Voici quelques techniques d'optimisation essentielles :</p>
      <ul>
        <li>Utilisation judicieuse du widget const</li>
        <li>Mise en cache des images</li>
        <li>Lazy loading des données</li>
      </ul>

      <h2>Conclusion</h2>
      <p>En suivant ces bonnes pratiques, vous pourrez développer des applications 
      Flutter robustes et performantes.</p>
    `,
    date: "15 Mars 2024",
    readTime: "5 min",
    category: "Mobile",
    image: "/blog/flutter-dev.jpg",
    author: {
      name: "Mory Koulibaly",
      avatar: "/profile-photo.jpg",
      bio: "Développeur Full Stack spécialisé en Flutter et Next.js"
    },
    tags: ["Flutter", "Mobile", "Développement", "Bonnes pratiques"]
  };

  const relatedPosts = [
    {
      id: '2',
      title: "Comment optimiser les performances de votre application Next.js",
      excerpt: "Un guide complet sur l'optimisation des performances...",
      image: "/blog/nextjs-perf.jpg",
    },
    {
      id: '3',
      title: "L'importance de l'UI/UX dans le développement d'applications",
      excerpt: "Pourquoi l'expérience utilisateur est cruciale...",
      image: "/blog/ui-ux.jpg",
    }
  ];

  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-16 dark:bg-gray-900">
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* En-tête de l'article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 
                          dark:text-blue-200 rounded-full text-sm font-medium">
            {post.category}
          </span>
          <h1 className="text-4xl font-bold mt-6 mb-4 dark:text-white">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {post.readTime} min de lecture
            </span>
            <span>{post.date}</span>
          </div>
        </motion.div>

        {/* Contenu principal et barre latérale */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Image principale */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Contenu de l'article */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                {post.content}
              </div>
            </div>
          </motion.div>

          {/* Barre latérale */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Auteur */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold dark:text-white">{post.author.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Articles connexes */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold mb-4 dark:text-white">Articles connexes</h3>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="block group"
                  >
                    <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 
                                 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-medium dark:text-white group-hover:text-blue-600 
                                 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Section Commentaires */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-4xl mx-auto mt-16 pt-16 border-t dark:border-gray-700"
        >
          <h2 className="text-2xl font-semibold mb-8 dark:text-white">Commentaires</h2>

          {/* Formulaire de commentaire */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-lg font-medium mb-4 dark:text-white">
              Laisser un commentaire
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                  Commentaire
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                           focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Votre commentaire..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                         transition-colors flex items-center gap-2"
              >
                <span>Publier</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </button>
            </form>
          </div>

          {/* Liste des commentaires */}
          <div className="space-y-6">
            {[
              {
                id: 1,
                author: "Jean Dupont",
                date: "Il y a 2 jours",
                content: "Excellent article ! Les conseils sur l'architecture sont particulièrement pertinents.",
                avatar: "/avatars/user1.jpg"
              },
              {
                id: 2,
                author: "Marie Martin",
                date: "Il y a 3 jours",
                content: "Merci pour ces explications détaillées. J'ai particulièrement apprécié la partie sur l'optimisation des performances.",
                avatar: "/avatars/user2.jpg"
              }
            ].map((comment) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={comment.avatar}
                      alt={comment.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{comment.author}</h4>
                      <span className="text-sm text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-600">{comment.content}</p>
                    <div className="mt-3 flex items-center gap-4">
                      <button className="text-sm text-gray-500 hover:text-blue-600 
                                       transition-colors flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
                        </svg>
                        <span>J'aime</span>
                      </button>
                      <button className="text-sm text-gray-500 hover:text-blue-600 
                                       transition-colors flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                        </svg>
                        <span>Répondre</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.article>
    </main>
  );
} 