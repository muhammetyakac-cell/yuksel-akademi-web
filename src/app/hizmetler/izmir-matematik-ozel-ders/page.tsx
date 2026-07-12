import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../hizmet-sayfalari.module.css';

export const metadata: Metadata = {
  title: 'İzmir Birebir Matematik Ders & Mentörlük | Yüksel Akademi',
  description: 'İzmir genelinde birebir matematik özel ders ve eğitim koçluğu. Dokuz Eylül Üniversitesi mezunu Gülçin Demir ile Bornova ve tüm İzmir\'de LGS, YKS ve okul takviye dersleri.',
  alternates: {
    canonical: 'https://www.yukselakademi.blog/hizmetler/izmir-matematik-ozel-ders',
  },
  openGraph: {
    title: 'İzmir Birebir Matematik Ders & Mentörlük | Yüksel Akademi',
    description: 'İzmir genelinde birebir matematik özel ders ve eğitim koçluğu. Dokuz Eylül Üniversitesi mezunu Gülçin Demir ile Bornova ve tüm İzmir\'de LGS, YKS ve okul takviye dersleri.',
    url: 'https://www.yukselakademi.blog/hizmetler/izmir-matematik-ozel-ders',
    siteName: 'Yüksel Akademi',
    locale: 'tr_TR',
    type: 'website',
  }
};

export default function İzmirGenelHizmetPage() {
  const data = {
    title: 'İzmir Birebir Matematik Ders & Mentörlük | Yüksel Akademi',
    heroTitle: 'İzmir Geneli Birebir Matematik Dersleri ve Mentörlük',
    heroSubtitle: 'Sadece ders anlatımı değil, bütünsel eğitim koçluğu. Gülçin Demir ile hedeflerinizi tasarlayın, adım adım başarıya ulaşın.',
    curriculum: [
      'Kişiselleştirilmiş Haftalık Çalışma ve Takip Planı',
      'Analitik Düşünme ve Problem Çözme Teknikleri',
      'Matematik Temel Oluşturma ve Fobi Yenme Çalışmaları',
      'Deneme Analizleri ve Eksik Giderme Seansları',
      'Zaman Yönetimi ve Sınav Stratejileri Mentörlüğü'
    ],
    faqs: [
      {
        question: 'Birebir derslerin grup derslerinden farkı nedir?',
        answer: 'Birebir derslerde süre tamamen öğrenciye aittir. Öğrencinin anlamadığı konular tekrar edilir, hızı öğrenci belirler ve ders içeriği tamamen onun eksiklerine göre şekillenir.'
      },
      {
        question: 'Mentörlük desteği neleri kapsıyor?',
        answer: 'Haftalık çalışma planı hazırlama, deneme sınavı analizleri, kaynak kitap önerileri, veli bilgilendirme raporları ve sınav motivasyon seanslarını içermektedir.'
      },
      {
        question: 'Dersler hangi semtlerde yapılıyor?',
        answer: 'Bornova başta olmak üzere İzmir\'in tüm semtlerine (Buca, Karşıyaka, Gaziemir, Balçova, Konak, Narlıdere vb.) yönelik yüz yüze veya online ders seçeneklerimiz mevcuttur.'
      }
    ]
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'İzmir Geneli Birebir Matematik Ders & Mentörlük',
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
                  <p>Matematik öğrenimi, yalnızca formüllerin ezberlenmesi ve test çözülmesinden ibaret olmayan, zihinsel bir gelişim sürecidir. Birçok öğrenci için derslerin karmaşıklığı veya sınavların yarattığı stres, bu süreçte ciddi engeller oluşturmaktadır. İzmir'de öğrencilerin bu engelleri aşmasını sağlamak amacıyla kurulan Yüksel Akademi, <strong>birebir matematik İzmir</strong> aramalarında öne çıkan, öğrenci odaklı bir eğitim modelidir. Birebir derslerimizde her öğrencinin kendi hızında ve tarzında öğrenmesini destekleyerek matematik fobisini tamamen ortadan kaldırıyoruz.</p>
                  
                  <h3>Gülçin Demir Rehberliğinde Profesyonel Mentörlük</h3>
                  <p>Dokuz Eylül Üniversitesi mezunu tecrübeli matematik öğretmenimiz <strong>Gülçin Demir</strong> rehberliğinde sunulan derslerimiz, sadece akademik bilgi aktarımı ile sınırlı kalmamaktadır. Eğitim sürecine entegre ettiğimiz mentörlük ve öğrenci koçluğu sistemi sayesinde, öğrencilerin zaman yönetimi, planlı çalışma, sınav kaygısı ile baş etme ve motivasyon yönetimi gibi konularda da gelişimlerini sağlıyoruz. <strong>İzmir YKS matematik özel ders</strong> ihtiyaçlarının yanı sıra LGS ve okul yazılılarına hazırlıkta da bu bütüncül mentörlük yaklaşımımızla fark yaratıyoruz.</p>
                  
                  <h3>Kişiye Özel Kaynak ve Haftalık Takip Sistemi</h3>
                  <p>Bornova başta olmak üzere İzmir'in dört bir yanından gelen öğrencilerimizle yürüttüğümüz bu süreçte, her öğrencimiz için ilk olarak detaylı bir seviye tespiti ve öğrenme stili analizi gerçekleştiriyoruz. Bu analizin ardından kişiye özel kaynak seçimini yapıyor ve haftalık ders programı hazırlıyoruz. Öğrencilerimizin her hafta çözdüğü soru sayıları, deneme netleri ve eksik oldukları konular dijital olarak takip edilmekte ve velilerimize düzenli raporlar halinde sunulmaktadır. Özellikle <strong>Bornova AYT matematik</strong> hazırlığında bu bireysel takip sistemi başarının anahtarı olmaktadır.</p>
                  
                  <h3>Yüksel Akademi ile Matematikte Yeni Bir Dönem</h3>
                  <p>Yüksel Akademi olarak amacımız, sadece sınav kazandırmak değil; analitik düşünebilen, problem çözme becerisi gelişmiş ve kendine güvenen bireyler yetiştirmektir. İzmir genelinde sunduğumuz birebir matematik ve mentörlük programlarımızla, öğrencimizin hedeflerine ulaşmasında en büyük destekçisi oluyoruz. Siz de çocuğunuzun geleceğine doğru bir yatırım yapmak ve onu başarıya ulaştıracak profesyonel bir yol arkadaşı bulmak istiyorsanız, bizimle hemen iletişime geçebilirsiniz.</p>
                `
              }}
            />

            <div className={styles.sidebar}>
              <div className={styles.sidebarCard}>
                <h4>Ders & Mentörlük</h4>
                <ul className={styles.curriculumList}>
                  {data.curriculum.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <a href="#iletisim" className={styles.sidebarCta}>
                  Birebir Mentörlük Başlat
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
            <h2>İzmir'de Başarı İçin Profesyonel Yol Arkadaşı Edinin</h2>
            <p>Gülçin Demir ile hedeflerinize emin adımlarla yürüyün.</p>
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
