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
      title: "Peinture et Ravalement",
      subtitle: "Intérieur & Extérieur",
      content: "Spécialisés en peinture générale et ravalement, nous transformons vos espaces avec soin.",
      image: "/image-client/placo.jpeg"
    },
    {
      title: "Électricité et Plomberie",
      subtitle: "Installation & Rénovation",
      content: "Nos experts en électricité et plomberie assurent des installations fiables et conformes aux normes.",
      image: "/image-client/electricite.jpeg"
    },
    {
      title: "Rénovation globale",
      subtitle: "Transformations et Nettoyage",
      content: "Transformations et Nettoyage",
      image: "/image-client/cuisine.jpeg"
    }
  ];

  const galleryImages = [
    {
      src: "/image-client/chantier/1.avif",
      alt: "Réalisation chantier 1 - Bati France",
      title: "Réalisation chantier 1"
    },
    {
      src: "/image-client/chantier/2.avif",
      alt: "Réalisation chantier 2 - Bati France",
      title: "Réalisation chantier 2"
    },
    {
      src: "/image-client/chantier/3.avif",
      alt: "Réalisation chantier 3 - Bati France",
      title: "Réalisation chantier 3"
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
      name: "Équipe Bati France",
      position: "Spécialistes BTP",
      description: "Avec plus de 5 ans d'expérience, notre équipe réalise des chantiers variés, du sinistre à la transformation complète d'appartements. Nous sommes spécialisés dans tous les corps d'état, garantissant qualité et respect des délais pour vos projets.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const contactInfo = {
    address: "17 avenue Gambetta\nParis 75020",
    phone: "+33 6 59 69 94 15",
    email: "batifrance@outlook.fr",
    hours: "Lundi à Samedi",
    mapEmbedUrl: "https://maps.google.com/maps?q=17+avenue+Gambetta,+Paris+75020&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
          image="/image-client/about1.avif"
          gradientFrom={config.about.sections[0].gradientFrom}
          gradientTo={config.about.sections[0].gradientTo}
          buttonText={config.about.sections[0].buttonText}
          buttonHref={config.about.sections[0].buttonHref}
          reversed={config.about.sections[0].reversed}
        />
      </div>
      <div id="services">
        <ServicesSection title="Services de BTP" subtitle="Nous réalisons des travaux de qualité dans divers domaines du bâtiment pour vos projets" cards={servicesData} />
      </div>
      <div id="realisations">
        <ProjectGallery config={config.gallery} />
      </div>
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image="/image-client/about2.avif"
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection title="Notre expertise à votre service" subtitle="Avec plus de 5 ans d'expérience, notre équipe réalise des chantiers variés" config={config.team} />
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
