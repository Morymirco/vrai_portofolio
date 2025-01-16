'use client';

import { motion } from 'framer-motion';

const contactIcons = {
  phone: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  ),
  email: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  ),
  location: (
    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>
  ),
  whatsapp: (
    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  send: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
    </svg>
  )
};

export default function Contact() {
  return (
    <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 
                       text-transparent bg-clip-text mb-12 text-center">
          Me Contacter
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire et Coordonnées */}
          <div className="space-y-8">
            {/* Formulaire de contact */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 
                             focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg 
                           hover:bg-blue-700 transition-colors flex items-center 
                           justify-center gap-2 group"
                >
                  <span>Envoyer</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    {contactIcons.send}
                  </span>
                </button>
              </form>
            </motion.section>

            {/* Carte des disponibilités */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Disponibilité
              </h2>
              <p className="text-gray-600">
                Je suis disponible du lundi au vendredi, de 9h à 18h (GMT).
                Je réponds généralement aux messages dans les 24 heures.
              </p>
            </div>
          </div>

          {/* Carte et Coordonnées */}
          <div className="space-y-8">
            {/* Coordonnées */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-6">Mes Coordonnées</h2>
              <div className="space-y-6">
                <a href="tel:+224666666666" 
                   className="flex items-center gap-4 text-gray-600 hover:text-blue-600 
                            transition-colors p-4 rounded-lg hover:bg-blue-50 group">
                  {contactIcons.phone}
                  <div>
                    <p className="font-medium group-hover:text-blue-600">Téléphone</p>
                    <p>+224 66 66 66 666</p>
                  </div>
                </a>

                <a href="mailto:contact@morykoulibaly.com"
                   className="flex items-center gap-4 text-gray-600 hover:text-blue-600 
                            transition-colors p-4 rounded-lg hover:bg-blue-50 group">
                  {contactIcons.email}
                  <div>
                    <p className="font-medium group-hover:text-blue-600">Email</p>
                    <p>contact@morykoulibaly.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-600 p-4 rounded-lg">
                  {contactIcons.location}
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p>Conakry, Guinée</p>
                    <p>Quartier Kaporo, Commune de Ratoma</p>
                  </div>
                </div>

                <a href="https://wa.me/224666666666"
                   target="_blank"
                   rel="noopener noreferrer" 
                   className="flex items-center gap-4 text-gray-600 hover:text-blue-600 
                            transition-colors p-4 rounded-lg hover:bg-blue-50 group">
                  {contactIcons.whatsapp}
                  <div>
                    <p className="font-medium group-hover:text-blue-600">WhatsApp</p>
                    <p>+224 66 66 66 666</p>
                  </div>
                </a>
              </div>
            </motion.section>

            {/* Carte Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-4 rounded-xl shadow-lg overflow-hidden h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.454786128526!2d-13.6868085!3d9.5357003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd6de25e86b27%3A0x5c429789fa8506af!2sKaporo%2C%20Conakry!5e0!3m2!1sfr!2sgn!4v1709667149413!5m2!1sfr!2sgn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
} 