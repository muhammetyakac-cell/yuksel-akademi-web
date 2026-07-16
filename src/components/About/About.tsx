import styles from './About.module.css';

export default function About() {
  return (
    <section id="hakkimda" className={styles.about}>
      <div className={`container ${styles.content}`}>
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageDecoration}></div>
            <div className={styles.teacherImage}></div>
            
            <div className={styles.experienceBadge}>
              <span className={styles.years}>3+</span>
              <span className={styles.text}>Yıllık<br/>Tecrübe</span>
            </div>
          </div>
        </div>
        
        <div className={styles.textColumn}>
          <div className={styles.badge}>EĞİTİMCİ PROFİLİ</div>
          <h2>Matematiği Sevdirerek Öğreten <span className="text-gradient">Uzman</span></h2>
          
          <p className={styles.lead}>
            Merhaba! Ben Gülçin Demir. Dokuz Eylül Üniversitesi İlköğretim Matematik Öğretmenliği bölümünden dereceyle mezun oldum.
          </p>
          
          <p className={styles.description}>
            Matematiğin sadece formüllerden ibaret sıkıcı bir ders olmadığını; hayatın her alanında karşımıza çıkan eğlenceli bir bulmaca olduğunu göstermeyi amaçlıyorum. Öğrencilerimin matematiğe karşı olan önyargılarını kırarak onlara analitik düşünme becerisi kazandırıyor, okul derslerinde ve ulusal sınavlarda en yüksek başarıyı elde etmelerine yardımcı oluyorum.
          </p>
          
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.icon}>🎓</div>
              <div>
                <h4>Akademik Temel</h4>
                <p>Dokuz Eylül Üniversitesi Eğitimi</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.icon}>🧠</div>
              <div>
                <h4>Yeni Nesil Yaklaşım</h4>
                <p>Analitik ve Mantıksal Çözümleme</p>
              </div>
            </div>
            
            <div className={styles.feature}>
              <div className={styles.icon}>🎯</div>
              <div>
                <h4>Birebir Takip</h4>
                <p>Kişiye Özel Gelişim Programı</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
