import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../hizmet-sayfalari.module.css';

export const metadata: Metadata = {
  title: 'İzmir YKS & Lise Matematik Özel Ders | Yüksel Akademi',
  description: 'İzmir YKS matematik özel ders ve Bornova AYT matematik takviyesi için tecrübeli eğitmen Gülçin Demir (Dokuz Eylül Üniversitesi mezunu) ile birebir matematik İzmir dersleri.',
  alternates: {
    canonical: 'https://www.yukselakademi.blog/hizmetler/yks-lise-matematik-ozel-ders',
  },
  openGraph: {
    title: 'İzmir YKS & Lise Matematik Özel Ders | Yüksel Akademi',
    description: 'İzmir YKS matematik özel ders ve Bornova AYT matematik takviyesi için tecrübeli eğitmen Gülçin Demir (Dokuz Eylül Üniversitesi mezunu) ile birebir matematik İzmir dersleri.',
    url: 'https://www.yukselakademi.blog/hizmetler/yks-lise-matematik-ozel-ders',
    siteName: 'Yüksel Akademi',
    locale: 'tr_TR',
    type: 'website',
  }
};

export default function YksHizmetPage() {
  const data = {
    title: 'İzmir YKS & Lise Matematik Özel Ders | Yüksel Akademi',
    heroTitle: 'YKS ve Lise Matematikte Başarıyı Keşfedin',
    heroSubtitle: 'Dokuz Eylül Üniversitesi mezunu öğretmen Gülçin Demir liderliğindeki Yüksel Akademi ile İzmir genelinde birebir matematik özel ders ve sınav stratejileri.',
    curriculum: [
      'TYT Matematik Temel Kavramlar ve Sayı Kümeleri',
      'Problemler ve Yeni Nesil Soru Çözüm Stratejileri',
      'Fonksiyonlar, Polinomlar ve İkinci Dereceden Denklemler',
      'Trigonometri ve Birim Çember Analizi',
      'Limit, Süreklilik, Türev ve İntegral Kampı',
      'Analitik Geometri ve Üçgen Bağıntıları'
    ],
    faqs: [
      {
        question: 'YKS matematik özel dersleri nerede gerçekleştiriliyor?',
        answer: 'Derslerimiz öğrencinin tercihine göre Bornova\'daki modern eğitim merkezimizde yüz yüze veya İzmir genelinde online olarak gerçekleştirilmektedir.'
      },
      {
        question: 'Özel ders programı nasıl hazırlanıyor?',
        answer: 'Öğrenciyle yapılan ilk görüşmede ücretsiz bir seviye tespiti gerçekleştirilir. Eksik olunan konular belirlendikten sonra öğrencinin hedeflerine ve öğrenme hızına özel haftalık bir program hazırlanır.'
      },
      {
        question: 'Gülçin Demir\'in eğitim geçmişi ve tecrübesi nedir?',
        answer: 'Öğretmenimiz Gülçin Demir, Dokuz Eylül Üniversitesi Matematik Öğretmenliği mezunu olup, lise müfredatı ve YKS hazırlık süreçlerinde uzun yıllara dayanan deneyime sahiptir.'
      }
    ]
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'İzmir YKS & Lise Matematik Özel Ders',
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
                  <p>Lise yılları, öğrencilerin akademik geleceklerini şekillendirdikleri en kritik dönemdir. Özellikle üniversiteye giriş sınavı olan YKS (TYT-AYT) sürecinde matematik, en belirleyici ders olarak öne çıkmaktadır. Kalabalık sınıflarda her öğrencinin öğrenme hızı ve anlama biçiminin farklı olması sebebiyle birçok öğrenci matematik konularında geride kalabilmektedir. Bu durum, <strong>İzmir YKS matematik özel ders</strong> ihtiyacını kaçınılmaz kılmaktadır. Yüksel Akademi bünyesinde, öğrencilerin bireysel ihtiyaçlarına göre şekillendirilen ders programlarıyla bu açığı kapatıyoruz.</p>
                  
                  <h3>Gülçin Demir ile Birebir Eğitim Ayrıcalığı</h3>
                  <p>Dokuz Eylül Üniversitesi Matematik Öğretmenliği mezunu olan tecrübeli eğitmenimiz <strong>Gülçin Demir</strong> liderliğinde yürütülen derslerimiz, öğrencilerin sadece formülleri ezberlemesini değil, matematiğin mantığını kavramasını hedefler. Özellikle <strong>Bornova AYT matematik</strong> derslerinde sunduğumuz derinlemesine konu analizleri ve pratik soru çözüm teknikleri ile öğrencilerin zorlu konularda bile tam başarı elde etmesini sağlıyoruz. Birebir eğitim modelimiz sayesinde her öğrenci, kendi öğrenme hızında ilerleyerek eksiklerini en verimli şekilde tamamlar.</p>
                  
                  <h3>Sınav Stratejileri ve Analitik Düşünme Becerileri</h3>
                  <p>YKS hazırlığı sadece konuyu bilmekle sınırlı değildir; zaman yönetimi ve sınav psikolojisi de başarının temel taşlarındandır. Yüksel Akademi'de, öğrencilerimize <strong>birebir matematik İzmir</strong> programları kapsamında deneme sınavlarında zaman kazandıracak turlama tekniği ve yeni nesil soru analiz yöntemleri kazandırıyoruz. Her hafta düzenli olarak yapılan deneme takip analizleri ile öğrencinin gelişimi izlenir ve yanlış yapılan sorular üzerinden nokta atışı telafiler gerçekleştirilir. Böylece sınav kaygısı başarı motivasyonuna dönüştürülür.</p>
                  
                  <h3>Geleceğin Kapılarını Güvenle Aralayın</h3>
                  <p>Matematikte kazanılacak başarı, mühendislikten tıbba kadar pek çok prestijli mesleğin kapısını aralamaktadır. Yüksel Akademi olarak sunduğumuz nitelikli eğitim ve rehberlik desteğiyle, öğrencilerimizin hedeflerine giden yolda en güvenilir rehberi oluyoruz. Siz de YKS ve lise derslerinde fark yaratmak, netlerinizi kısa sürede artırmak ve hayalinizdeki üniversiteyi kazanmak için İzmir genelinde sunduğumuz özel ders olanaklarımızdan yararlanabilirsiniz.</p>
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
                  YKS Planlaması Yap
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
            <h2>YKS Matematikte Hedeflerinizi Şansa Bırakmayın</h2>
            <p>Gülçin Demir liderliğinde üniversite hedeflerinize giden yolu birlikte çizelim.</p>
            <a href="tel:+905464749802" className={styles.bottomCtaBtn}>
              Bizimle İletişime Geçin
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
