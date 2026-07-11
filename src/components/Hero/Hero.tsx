import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundElements}>
        <div className={styles.glowBlob1}></div>
        <div className={styles.glowBlob2}></div>
        <div className={styles.gridOverlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <div className={styles.badge}>Yüksel Akademi Matematik Bloğu</div>
          <h1 className="animate-fade-in-up">
            Matematikte <span className="text-gradient">Yükselmeye</span> Hazır Mısınız?
          </h1>
          <p className={styles.subtitle}>
            İlkokul, Ortaokul ve Lise seviyelerinde, yeni nesil sorularla güçlendirilmiş, kişiye özel profesyonel matematik özel dersi.
          </p>
          <div className={styles.actions}>
            <a href="#iletisim" className={styles.primaryBtn}>
              Ücretsiz Danışmanlık Al
              <span className={styles.btnIcon}>→</span>
            </a>
            <a href="#hizmetler" className={styles.secondaryBtn}>
              Programları İncele
            </a>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>%100</h3>
              <p>Öğrenci Memnuniyeti</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <h3>DEÜ</h3>
              <p>Eğitim Kalitesi</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <h3>+500</h3>
              <p>Çözülen Yeni Nesil Soru</p>
            </div>
          </div>
        </div>
        
        <div className={styles.imageContent}>
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              {/* Note: In a real scenario, an optimized next/image would be used here. For now using a placeholder div styled as an image container. */}
              <div className={styles.teacherImage}>
                <div className={styles.imageOverlay}>
                  <p>Gülçin Demir</p>
                  <span>Matematik Öğretmeni</span>
                </div>
              </div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.iconWrapper}>🎓</div>
              <div className={styles.cardText}>
                <h4>Uzman Eğitmen</h4>
                <p>Dokuz Eylül Üniversitesi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
