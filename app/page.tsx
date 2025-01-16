'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const icons = {
  contact: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  ),
  projects: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
    </svg>
  ),
  code: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>
  ),
  mobile: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
    </svg>
  ),
  web: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
    </svg>
  )
};

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

export default function Home() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Diallo",
      role: "CEO",
      company: "TechInnovate Guinée",
      image: "/profile-photo.jpg",
      content: "Mory a développé notre plateforme e-commerce avec une expertise remarquable. Son professionnalisme et sa capacité à comprendre nos besoins ont fait toute la différence."
    },
    {
      name: "Ibrahim Camara",
      role: "Directeur",
      company: "EduTech Solutions",
      image: "/profile-photo.jpg",
      content: "La collaboration avec Mory sur notre application mobile a été excellente. Sa maîtrise technique et sa réactivité ont permis de livrer le projet dans les délais."
    },
    {
      name: "Aminata Sylla",
      role: "Fondatrice",
      company: "Digital Academy",
      image: "/profile-photo.jpg",
      content: "Un développeur talentueux qui apporte des solutions innovantes. Son travail sur notre plateforme d'apprentissage en ligne a dépassé nos attentes."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      {/* Section Héro avec padding ajusté */}
      <section className="hero-section min-h-[90vh] py-10 md:py-20">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="profile-container mb-8"
        >
          <Image
            src="/profile-photo.jpg"
            alt="Mory Koulibaly"
            width={200}
            height={200}
            className="rounded-full object-cover"
            priority
          />
        </motion.div>
        
        <div className="space-y-6 mb-12">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-title"
          >
            Mory Koulibaly
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-subtitle"
          >
            Développeur Web & Mobile | Créateur de solutions numériques innovantes
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="hero-description"
          >
            Développer des solutions pour transformer vos idées en réalité numérique
          </motion.p>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        >
          <a href="/contact" 
             className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg 
                      hover:bg-blue-700 transition-all duration-300 
                      shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
          >
            {icons.contact}
            <span>Me contacter</span>
          </a>
          <a href="/projets" 
             className="group flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg 
                      border-2 border-blue-600 hover:bg-blue-50 
                      transition-all duration-300 w-full sm:w-auto justify-center"
          >
            {icons.projects}
            <span>Voir mes projets</span>
          </a>
        </motion.div>
      </section>

      {/* Section Services */}
      <section className="bg-gray-50 py-20">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 
                       to-blue-800 text-transparent bg-clip-text">
            Mes Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                          transition-all duration-300 flex flex-col items-center text-center space-y-4">
              {icons.web}
              <h3 className="text-xl font-semibold">Développement Web</h3>
              <p className="text-gray-600">Sites web modernes et applications web performantes</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                          transition-all duration-300 flex flex-col items-center text-center space-y-4">
              {icons.mobile}
              <h3 className="text-xl font-semibold">Applications Mobiles</h3>
              <p className="text-gray-600">Solutions mobiles cross-platform avec Flutter</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl 
                          transition-all duration-300 flex flex-col items-center text-center space-y-4">
              {icons.code}
              <h3 className="text-xl font-semibold">Solutions Sur Mesure</h3>
              <p className="text-gray-600">Développement personnalisé selon vos besoins</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 
                       to-blue-800 text-transparent bg-clip-text">
            Ce que disent mes clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow
                         flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-blue-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>

                <blockquote className="relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-gray-100"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-gray-600 italic">
                    {testimonial.content}
                  </p>
                </blockquote>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
