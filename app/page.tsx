'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Électricité",
      subtitle: "Installation & Rénovation",
      content: "Installation électrique complète, rénovation de tableaux électriques, mise aux normes et dépannage avec garantie décennale.",
      image: "/image-client/electricite.jpeg"
    },
    {
      title: "Placo Peinture",
      subtitle: "Intérieur & Extérieur",
      content: "Travaux de plâtrerie et peinture intérieure et extérieure, préparation des supports, finitions soignées et conseils couleurs.",
      image: "/image-client/placo.jpeg"
    },
    {
      title: "Menuiserie",
      subtitle: "Bois & Aménagement",
      content: "Pose de portes, fenêtres, placards sur mesure, parquet et tous travaux de menuiserie intérieure et extérieure.",
      image: "/image-client/menuiserie.jpeg"
    },
    {
      title: "Cuisine & Salle de bains",
      subtitle: "Conception & Rénovation",
      content: "Rénovation complète de cuisines et salles de bains, pose de meubles, électroménager, plomberie, carrelage et sanitaires avec finitions soignées.",
      image: "/image-client/salle de bain.jpeg"
    },
    {
      title: "Rénovation globale",
      subtitle: "Projets Complets",
      content: "Rénovation complète d'appartements et maisons, coordination de tous les corps de métier pour un projet clé en main avec garantie décennale.",
      image: "/image-client/cuisine.jpeg"
    },
    {
      title: "Sols Carrelage",
      subtitle: "Revêtements & Finitions",
      content: "Pose de carrelage, parquet, vinyle, ragréage et préparation des supports pour tous types de revêtements de sol.",
      image: "/image-client/sol.jpeg"
    }
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
      alt: "Rénovation cuisine moderne",
      title: "Cuisine moderne - Paris 16ème"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      alt: "Salle de bain contemporaine",
      title: "Salle de bain - Neuilly"
    },
    {
      src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=800&fit=crop",
      alt: "Extension maison",
      title: "Extension - Boulogne"
    },
    {
      src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=800&fit=crop",
      alt: "Rénovation salon",
      title: "Salon design - Levallois"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      alt: "Terrasse aménagée",
      title: "Terrasse - Vincennes"
    },
    {
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop",
      alt: "Combles aménagés",
      title: "Combles - Saint-Cloud"
    }
  ];

  const partnerLogos = [
    {
      src: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop",
      alt: "Partenaire 1",
      name: "Partner 1"
    },
    {
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      alt: "Partenaire 2", 
      name: "Partner 2"
    },
    {
      src: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop",
      alt: "Partenaire 3",
      name: "Partner 3"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop",
      alt: "Partenaire 4",
      name: "Partner 4"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop",
      alt: "Partenaire 5",
      name: "Partner 5"
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=100&fit=crop",
      alt: "Partenaire 6",
      name: "Partner 6"
    }
  ];

  const teamMembers = [
    {
      name: "Olege",
      position: "Artisan du bâtiment",
      description: "Spécialisés en électricité, peinture et plâtrerie en Île-de-France. Notre équipe de 3 collaborateurs qualifiés intervient dans un rayon de 100km avec garantie décennale. Nous nous engageons à fournir des prestations de qualité avec des finitions soignées.",
      photo: "/image-client/client.jpg"
    }
  ];

  const contactInfo = {
    address: "Île-de-France\nFrance",
    phone: "06 05 59 88 97",
    email: "exfactor.fr@gmail.com",
    hours: "Lundi - Vendredi: 8h00 - 18h00\nSamedi: 8h00 - 12h00",
    mapEmbedUrl: "https://maps.google.com/maps?q=Île-de-France,France&t=&z=10&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <div id="expertise">
        <AboutSection
          smallTitle={config.about.sections[0].smallTitle}
          title={config.about.sections[0].title}
          subtitle={config.about.sections[0].subtitle}
          content={config.about.sections[0].content}
          image="/image-client/chantier/huit.jpeg"
          gradientFrom={config.about.sections[0].gradientFrom}
          gradientTo={config.about.sections[0].gradientTo}
          buttonText={config.about.sections[0].buttonText}
          buttonHref={config.about.sections[0].buttonHref}
          reversed={config.about.sections[0].reversed}
        />
      </div>
      <div id="services">
        <ServicesSection title="Nos Services" subtitle="Découvrez notre gamme complète de prestations" cards={servicesData} />
      </div>
      <div id="realisations">
        <ProjectGallery config={config.gallery} />
      </div>
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image="/image-client/chantier/vinght-trois.jpeg"
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection title="Notre Équipe" subtitle="3 collaborateurs qualifiés au service de vos projets" config={config.team} />
      <ContactSection contactInfo={contactInfo} />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
