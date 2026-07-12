import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '../hizmet-sayfalari.module.css';

export const metadata: Metadata = {
  title: 'İzmir İlkokul Matematik Özel Ders | Yüksel Akademi Gülçin Demir',
  description: 'İzmir\'de ilkokul öğrencileri için kişiselleştirilmiş matematik özel dersleri. Buca, Bornova, Karşıyaka ve tüm ilçelerde, Gülçin Demir eşliğinde matematiği sevdiren metotlar.',
};

export default function IlkokulHizmetPage() {
  const data = {
    title: 'İzmir İlkokul Matematik Özel Ders | Yüksel Akademi Gülçin Demir',
    heroTitle: 'İzmir İlkokul Matematik Özel Ders – Matematiğin Eğlenceli Dünyasını Keşfedin!',
    heroSubtitle: 'Buca, Bornova, Karşıyaka ve İzmir genelinde birebir derslerle, ilkokul öğrencilerimizin matematik temelini oyunlaştırılmış ve kalıcı yöntemlerle güçlendiriyoruz.',
    curriculum: [
      'Sayıları Tanıma ve Temel Dört İşlem Becerileri',
      'Mantıksal Akıl Yürütme ve Problem Çözme Stratejileri',
      'Geometrik Şekiller, Ölçme ve Uzamsal İlişkiler',
      'Yeni Nesil Sorulara Erken Uyum Çalışmaları',
      'Dikkat Geliştirme ve Matematiksel Odaklanma Egzersizleri'
    ],
    faqs: [
      {
        question: 'İlkokul düzeyinde matematik özel dersi neden önemlidir?',
        answer: 'Matematik temelleri ilkokulda atılır. Bu dönemde kazanılan olumlu tutum ve sağlam temel, öğrencinin ortaokul, LGS ve sonraki tüm eğitim hayatındaki başarısını doğrudan etkiler. Derslerimizde ezbercilikten uzak, mantıksal kavrayışa dayalı bir yol izliyoruz.'
      },
      {
        question: 'Dersler nerelerde ve nasıl yapılıyor?',
        answer: 'İzmir genelinde (Buca, Bornova, Karşıyaka ve diğer ilçelerde) velimizin tercihine göre öğrencinin evinde konforlu bir ortamda ya da online olarak interaktif araçlarla gerçekleştirilmektedir.'
      },
      {
        question: 'İlkokul öğrencileri için ders süresi ne kadardır?',
        answer: 'Öğrencinin dikkat süresi göz önünde bulundurularak dersler genellikle 40+40 dakika veya 60 dakikalık bloklar halinde planlanır. Oyunlaştırılmış aktivitelerle dikkat dağınıklığının önüne geçilir.'
      },
      {
        question: 'Gülçin Demir hocanın yaklaşımı nasıldır?',
        answer: 'Gülçin Demir, öğrencilerin bireysel öğrenme hızını ve ilgi alanlarını tespit ederek dersleri kişiselleştirir. Matematiği korkulan bir ders olmaktan çıkarıp, merak uyandıran eğlenceli bir serüvene dönüştürür.'
      }
    ]
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'İzmir İlkokul Matematik Özel Ders',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Yüksel Akademi',
      'image': 'https://yukselakademi.com/images/logo.png',
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
                  <h3>Matematik Temellerini İzmir'in En İyi Eğitmeniyle Güçlendirin</h3>
                  <p>İlkokul dönemi, çocukların akademik hayatlarındaki en kritik virajlardan biridir. Bu süreçte karşılaşılan matematik kavramları, gelecekteki LGS ve YKS gibi büyük sınavların temel taşlarını oluşturur. <strong>İzmir ilkokul matematik özel ders</strong> arayışınızda, Yüksel Akademi kurucusu tecrübeli eğitmenimiz Gülçin Demir liderliğinde çocuklarınıza matematiği sevdirmeyi hedefliyoruz. Buca, Bornova, Karşıyaka gibi İzmir'in her köşesinden öğrencilerimize özel hazırladığımız müfredat ile onların soyut kavramları somutlaştırarak öğrenmelerini sağlıyoruz.</p>

                  <h3>Kişiselleştirilmiş Öğrenme Metotları ve Dikkat Gelişimi</h3>
                  <p>Her çocuğun öğrenme hızı ve bilişsel gelişimi farklıdır. Klasik sınıf ortamlarında gözden kaçabilen eksikler, birebir özel derslerde hızla tespit edilerek kapatılır. İzmir genelindeki özel derslerimizde, öğrencimizin analitik düşünme becerisini artırmak için görsel materyaller, eğitici matematik oyunları ve günlük hayatla ilişkilendirilmiş problemler kullanıyoruz. Bornova ilkokul matematik özel ders ve Buca matematik özel ders programlarımız sayesinde öğrencilerin derse olan odağı en üst seviyeye çıkarılmaktadır.</p>

                  <h3>İzmir'in Seçkin İlçelerinde Evinizde veya Online Eğitim Konforu</h3>
                  <p>Özellikle ilkokul çağındaki çocukların kendi güvenli alanlarında ders çalışmaları verimliliği doğrudan artırır. Karşıyaka ilkokul matematik özel ders seçeneklerimiz başta olmak üzere, İzmir'in dört bir yanında velilerimizin taleplerine uygun çalışma ortamları sunuyoruz. Gülçin Demir yönetimindeki ders süreçlerimizde sadece akademik başarıyı değil, aynı zamanda öğrencilerin özgüven kazanmalarını ve problem çözme cesareti göstermelerini de önemsiyoruz.</p>

                  <h3>Yeni Nesil Sorulara Erken Yaşta Hazırlık</h3>
                  <p>Eğitim sistemimizin ve merkezi sınavların temelini oluşturan yeni nesil sorular, okuduğunu anlama ve mantık yürütme becerisini ölçmektedir. İlkokul seviyesinde bu becerileri kazanmak, ortaokula geçişte öğrencilere muazzam bir avantaj sağlar. Birebir rehberlik desteğimizle velilerimizi de sürecin içerisine katarak düzenli geri bildirimler paylaşıyor ve öğrencimizin gelişimini adım adım izliyoruz. Yüksel Akademi farkıyla çocuklarınızın matematik dersini bir yük olarak değil, keyifli bir bulmaca gibi görmesini sağlayın.</p>
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
                  Tanışma Dersi Planla
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
            <h2>Çocuğunuzun Matematik Temelini Şansa Bırakmayın</h2>
            <p>Gülçin Demir rehberliğinde matematiği sevdiren eğitim metotlarımızla hemen tanışın.</p>
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
