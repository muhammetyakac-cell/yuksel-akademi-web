import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../hizmet-sayfalari.module.css';

export const metadata: Metadata = {
  title: 'İzmir LGS Matematik Özel Ders | Ortaokul Matematik Hazırlık',
  description: 'LGS matematik hazırlığında İzmir\'in en deneyimli hocası Gülçin Demir ile Yüksel Akademi farkını yaşayın. Buca, Bornova, Karşıyaka\'da yeni nesil soru odaklı özel dersler.',
  alternates: {
    canonical: 'https://www.yukselakademi.blog/hizmetler/lgs-ortaokul-matematik-ozel-ders',
  },
  openGraph: {
    title: 'İzmir LGS Matematik Özel Ders | Ortaokul Matematik Hazırlık',
    description: 'LGS matematik hazırlığında İzmir\'in en deneyimli hocası Gülçin Demir ile Yüksel Akademi farkını yaşayın. Buca, Bornova, Karşıyaka\'da yeni nesil soru odaklı özel dersler.',
    url: 'https://www.yukselakademi.blog/hizmetler/lgs-ortaokul-matematik-ozel-ders',
    siteName: 'Yüksel Akademi',
    locale: 'tr_TR',
    type: 'website',
  }
};

export default function LgsHizmetPage() {
  const data = {
    title: 'İzmir LGS Matematik Özel Ders | Ortaokul Matematik Hazırlık',
    heroTitle: 'LGS Matematik Sınavında İzmir\'in Zirvesini Hedefleyin!',
    heroSubtitle: 'Buca, Bornova ve Karşıyaka başta olmak üzere İzmir genelinde yeni nesil soru çözme teknikleri ve birebir mentorlukla LGS\'de tam puanı yakalayın.',
    curriculum: [
      'Çarpanlar ve Katlar, Üslü ve Köklü İfadeler',
      'Veri Analizi ve Basit Olayların Olma Olasılığı',
      'Cebirsel İfadeler, Özdeşlikler ve Doğrusal Denklemler',
      'Eşitsizlikler, Üçgenler ve Geometrik Dönüşümler',
      'Yeni Nesil Soruları Analiz Etme ve Hızlı Çözüm Teknikleri'
    ],
    faqs: [
      {
        question: 'LGS matematik özel dersi almaya ne zaman başlanmalı?',
        answer: 'En ideal süreç 7. sınıfın yaz döneminde veya 8. sınıfın başında derslere başlamaktır. Ancak temel eksikliği olan öğrenciler için 5, 6 ve 7. sınıflarda yapılan takviyeler LGS başarısının asıl anahtarıdır.'
      },
      {
        question: 'Yeni nesil sorulara karşı nasıl bir strateji izliyorsunuz?',
        answer: 'Yeni nesil sorular ezbere değil, okuduğunu anlamaya, analiz etmeye ve mantık yürütmeye dayanır. Derslerimizde öncelikle konunun kavramsal temelini veriyor, ardından aşamalı olarak soruyu analiz etme ve hızlı denklem kurma tekniklerini öğretiyoruz.'
      },
      {
        question: 'Ders takibi ve veli bilgilendirmesi nasıl yapılıyor?',
        answer: 'Her ders sonrasında ödevlendirme yapılır ve öğrencinin performansı düzenli olarak sisteme işlenir. Gülçin Demir, velilerle haftalık gelişim raporları paylaşarak öğrencinin motivasyonunu ve çalışma disiplinini sürekli kılacak rehberliği sunar.'
      },
      {
        question: 'İzmir\'in hangi bölgelerinde özel ders imkanı var?',
        answer: 'Buca, Bornova, Karşıyaka, Gaziemir, Balçova, Konak ve İzmir\'in diğer tüm merkezi ilçelerinde yüz yüze veya Türkiye genelinde yüksek kaliteli online ders seçeneklerimiz mevcuttur.'
      }
    ]
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'İzmir LGS & Ortaokul Matematik Özel Ders',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Yüksel Akademi',
      'image': 'https://www.yukselakademi.blog/images/logo.png',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'İzmir',
        'addressCountry': 'TR'
      }
    },
    'areaServed': 'İzmir',
    'description': data.heroSubtitle
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.serviceMain}>
        <section className={styles.hero}>
          <div className={`container ${styles.heroContent}`}>
            <h1>{data.heroTitle}</h1>
            <p>{data.heroSubtitle}</p>
          </div>
        </section>

        <section className="container">
          <div className={styles.layoutGrid}>
            <div 
              className={styles.mainText}
              dangerouslySetInnerHTML={{
                __html: `
                  <h3>LGS Matematikte Yeni Nesil Soruların Şifresini Çözün</h3>
                  <p>LGS (Liselere Geçiş Sistemi) hazırlık sürecinde öğrencilerin en çok zorlandığı ve sınav sonucunu en çok etkileyen ders tartışmasız matematiktir. <strong>İzmir LGS matematik özel ders</strong> programlarımız, öğrencilerin bu zorluğu aşması ve hedefledikleri fen liseleri ile nitelikli Anadolu liselerini kazanmaları için özel olarak tasarlanmıştır. Yüksel Akademi bünyesinde uzman eğitmenimiz Gülçin Demir liderliğinde, yeni nesil soruların karmaşık yapısını basit adımlara indirgiyor ve öğrencilerimize analitik düşünme yeteneği kazandırıyoruz.</p>

                  <h3>Buca, Bornova ve Karşıyaka'da Başarı Odaklı Birebir Takip</h3>
                  <p>Matematik başarısı sadece ders saatleriyle sınırlı değildir. Doğru kaynak seçimi, düzenli deneme sınavları analizi ve disiplinli bir ödev takibi başarının vazgeçilmez unsurlarıdır. Buca LGS matematik özel ders ve Bornova LGS özel ders çalışmalarımızda, her öğrenciye özel haftalık ders çalışma programı hazırlıyoruz. Öğrencinin eksik olduğu kazanımları nokta atışı tespit ederek, gereksiz zaman kayıplarının önüne geçiyor ve net artışını en kısa sürede gözlemliyoruz.</p>

                  <h3>Sınav Stresi ve Zaman Yönetimi Mentorluğu</h3>
                  <p>LGS sadece bilgiyi değil, aynı zamanda zamanı doğru yönetmeyi ve stres altında doğru karar verebilmeyi ölçer. Karşıyaka LGS matematik özel ders seanslarımızda, ders anlatımının yanı sıra sınav stratejilerine de odaklanıyoruz. Öğrencilerimize turlama tekniği, şık eleme yöntemleri ve sınav anında odaklanmayı sürdürme gibi pratik becerileri kazandırıyoruz. Gülçin Demir'in tecrübeli rehberliğiyle öğrencilerimiz kendilerini yalnız hissetmiyor ve sınava tam bir özgüvenle hazırlanıyor.</p>

                  <h3>Ortaokul Ara Sınıflarında Güçlü Temel Oluşturma</h3>
                  <p>LGS'de yüksek netler hedefleyen öğrencilerin 5, 6 ve 7. sınıflardaki temel konuları çok iyi kavramış olması gerekir. Ara sınıflarda yapılan düzenli takviyeler, 8. sınıfa gelindiğinde LGS müfredatının çok daha rahat ve stressiz öğrenilmesini sağlar. Yüksel Akademi'nin uzman kadrosu ve öğrenci merkezli yaklaşımıyla, İzmir genelindeki velilerimize çocuklarının geleceğini güvence altına alacak profesyonel bir eğitim desteği sunuyoruz. Hayalinizdeki liseye giden yolda ilk ve en sağlam adımı bizimle atın.</p>
                `
              }}
            />

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Ders İçeriği</h4>
                <ul className={styles.curriculumList}>
                  {data.curriculum.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <a href="#iletisim" className={styles.sidebarCta}>
                  LGS Tanışma Dersi Planla
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className={`container ${styles.faqContainer}`}>
            <h2>Sıkça Sorulan Sorular</h2>
            <div className={styles.faqList}>
              {data.faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.bottomCtaSection} id="iletisim">
          <div className="container">
            <h2>LGS Yolculuğunda Çocuğunuzun Başarısını Destekleyin</h2>
            <p>Gülçin Demir rehberliğinde LGS matematiğinde yüksek netleri ve tam puanı hedefleyin.</p>
            <a href="tel:+905464749802" className={styles.bottomCtaBtn}>
              Detaylı Bilgi & İletişim
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
