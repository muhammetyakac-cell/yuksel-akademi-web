'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoYk}>Y<span className={styles.gold}>A</span></span>
          <div className={styles.logoText}>
            <span className={styles.title}>YÜKSELİN AKADEMİ</span>
            <span className={styles.subtitle}>MATEMATİK BLOĞU</span>
          </div>
        </Link>
        
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
          <Link href="/#hakkimda" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Hakkımda</Link>
          <Link href="/#hizmetler" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Özel Ders</Link>
          <Link href="/#neden-biz" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Neden Biz?</Link>
          <Link href="/blog" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <a href="/#iletisim" className={styles.ctaBtn} onClick={() => setMobileMenuOpen(false)}>
            İletişime Geç
          </a>
        </nav>
        
        <button 
          className={styles.mobileToggle} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menüyü Aç"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ''}`}></span>
        </button>
      </div>
    </header>
  );
}
