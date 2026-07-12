import Link from 'next/link';
import styles from './Services.module.css';

const services = [
  {
    title: 'İlkokul Matematik',
    icon: '✏️',
    description: 'Matematiğin temellerini sevdirerek atan, oyunlaştırılmış ve görsel destekli özel ders programı.',
    features: ['Temel Kavramlar', 'Zihinsel İşlem Becerisi', 'Görsel Matematik'],
    link: '/hizmetler/ilkokul-matematik-ozel-ders'
  },
  {
    title: 'Ortaokul & LGS',
    icon: '🎯',
    description: 'Okul başarısını artırmaya yönelik ve LGS yeni nesil soru tiplerine tam uyumlu yoğunlaştırılmış çalışma.',
    features: ['Yeni Nesil Sorular', 'Okul Sınavlarına Hazırlık', 'LGS Stratejileri'],
    highlighted: true,
    link: '/hizmetler/lgs-ortaokul-matematik-ozel-ders'
  },
  {
    title: 'Lise & YKS',
    icon: '🚀',
    description: 'TYT ve AYT müfredatına tam hakimiyet, analitik düşünme becerisini geliştiren ileri seviye matematik.',
    features: ['TYT-AYT Hazırlık', 'Analitik Geometri', 'Deneme Çözümleri'],
    link: '/hizmetler/yks-lise-matematik-ozel-ders'
  }
];

export default function Services() {
  return (
    <section id="hizmetler" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>ÖZEL DERS PROGRAMLARI</div>
          <h2>Her Seviyede <span className="text-gradient">Zirveye</span> Ulaşın</h2>
          <p className={styles.subtitle}>
            Öğrencinin seviyesine ve hedeflerine özel olarak planlanmış, tamamen kişiselleştirilmiş eğitim modelleri.
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${service.highlighted ? styles.highlighted : ''}`}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>
              
              <ul className={styles.featureList}>
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Link href={service.link} className={styles.cardBtn}>
                Detaylı Bilgi
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
