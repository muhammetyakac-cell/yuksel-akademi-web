import styles from './WhyUs.module.css';

const reasons = [
  {
    title: 'Yeni Nesil Soru Hakimiyeti',
    desc: 'LGS, TYT ve AYT sınavlarındaki yeni nesil analitik soruların çözüm teknikleri ve pratik yöntemleri.'
  },
  {
    title: 'Öğrenci Koçluğu',
    desc: 'Sadece ders anlatımı değil, aynı zamanda motivasyon, sınav stresi yönetimi ve çalışma programı takibi.'
  },
  {
    title: 'Görsel ve Somut Öğretim',
    desc: 'Matematiği soyut bir kavram olmaktan çıkarıp, günlük hayatla ilişkilendiren özel öğretim yöntemleri.'
  },
  {
    title: 'Düzenli Veli Bilgilendirmesi',
    desc: 'Öğrencinin gelişim süreci, eksiklikleri ve başarı grafiği hakkında düzenli ve şeffaf raporlama.'
  }
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className={styles.whyUs}>
      <div className={`container ${styles.content}`}>
        <div className={styles.header}>
          <div className={styles.badge}>FARKIMIZ</div>
          <h2>Neden Yükselİn Akademi?</h2>
          <p className={styles.subtitle}>
            Klasik ezberci eğitimin ötesinde, matematiğin mantığını kavratan ve kalıcı başarı sağlayan ayrıcalıklarımız.
          </p>
        </div>
        
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardNumber}>0{index + 1}</div>
              <h3>{reason.title}</h3>
              <p>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
