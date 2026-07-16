import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: "Yükselİn Akademi | Gülçin Demir - İzmir Matematik Özel Ders",
  description: "İlkokul, ortaokul ve lise matematik özel ders. Dokuz Eylül Üniversitesi mezunu Gülçin Demir ile LGS, YKS ve okul takviyelerinde başarıyı yakalayın.",
  alternates: {
    canonical: 'https://www.yukselakademi.blog',
  },
  openGraph: {
    title: "Yükselİn Akademi | Gülçin Demir - İzmir Matematik Özel Ders",
    description: "İlkokul, ortaokul ve lise matematik özel ders. Dokuz Eylül Üniversitesi mezunu Gülçin Demir ile LGS, YKS ve okul takviyelerinde başarıyı yakalayın.",
    url: 'https://www.yukselakademi.blog',
    siteName: 'Yükselİn Akademi',
    locale: 'tr_TR',
    type: 'website',
  }
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.yukselakademi.blog/#localbusiness',
    'name': 'Yükselİn Akademi',
    'description': 'İlkokul, ortaokul ve lise matematik özel ders. Dokuz Eylül Üniversitesi İlköğretim Matematik Öğretmenliği mezunu Gülçin Demir ile matematikte yükselişe geçin.',
    'url': 'https://www.yukselakademi.blog',
    'telephone': '+905464749802',
    'email': 'info@yukselakademi.blog',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'İzmir',
      'addressCountry': 'TR'
    },
    'founder': {
      '@type': 'Person',
      'name': 'Gülçin Demir',
      'jobTitle': 'Matematik Öğretmeni',
      'alumniOf': {
        '@type': 'EducationalOrganization',
        'name': 'Dokuz Eylül Üniversitesi'
      }
    },
    'priceRange': '$$'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}

