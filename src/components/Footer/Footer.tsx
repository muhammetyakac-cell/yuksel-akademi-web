import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="iletisim" className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoYk}>Y<span className={styles.gold}>K</span></span>
            <div className={styles.logoText}>
              <span className={styles.title}>YÜKSEL AKADEMİ</span>
              <span className={styles.subtitle}>MATEMATİK BLOĞU</span>
            </div>
          </Link>
          <p className={styles.brandDesc}>
            Gülçin Demir ile yeni nesil matematik özel ders ve eğitim danışmanlığı. Başarıya giden yolda güvenilir rehberiniz.
          </p>
        </div>
        
        <div className={styles.links}>
          <h3>Hızlı Linkler</h3>
          <ul>
            <li><Link href="#hakkimda">Hakkımda</Link></li>
            <li><Link href="#hizmetler">Özel Ders Programları</Link></li>
            <li><Link href="#neden-biz">Neden Biz?</Link></li>
            <li><Link href="/blog">Matematik Blogu</Link></li>
          </ul>
        </div>
        
        <div className={styles.contact}>
          <h3>İletişim</h3>
          <ul>
            <li>
              <span className={styles.icon}>📍</span>
              İzmir / Türkiye
            </li>
            <li>
              <span className={styles.icon}>✉️</span>
              <a href="mailto:info@yukselakademi.blog">info@yukselakademi.blog</a>
            </li>
            <li>
              <span className={styles.icon}>📞</span>
              <a href="tel:+905464749802">+90 (546) 474 98 02</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Yüksel Akademi Matematik Bloğu. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
