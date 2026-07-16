import type { Metadata } from 'next';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './blog.module.css';
import sql from '@/lib/db';

export const metadata: Metadata = {
  title: 'Matematik Hazırlık ve Özel Ders Blogu | Yükselİn Akademi',
  description: 'LGS, YKS, Geometri ve popüler matematik kültürüne dair en güncel makaleler, çalışma taktikleri ve İzmir yerel özel ders önerileri.',
  alternates: {
    canonical: 'https://www.yukselakademi.blog/blog',
  },
  openGraph: {
    title: 'Matematik Hazırlık ve Özel Ders Blogu | Yükselİn Akademi',
    description: 'LGS, YKS, Geometri ve popüler matematik kültürüne dair en güncel makaleler, çalışma taktikleri ve İzmir yerel özel ders önerileri.',
    url: 'https://www.yukselakademi.blog/blog',
    siteName: 'Yükselİn Akademi',
    locale: 'tr_TR',
    type: 'website',
  }
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

// Fallback mock posts in case of database error or empty database
const fallbackPosts: BlogPost[] = [
  {
    slug: 'yeni-nesil-sorular-nasil-cozulur',
    title: 'Yeni Nesil Matematik Soruları Nasıl Çözülür?',
    excerpt: 'LGS ve YKS\'de karşımıza çıkan yeni nesil analitik sorulara nasıl yaklaşmalıyız? Temel stratejiler ve ipuçları.',
    date: '10 Temmuz 2026',
    category: 'Sınav Stratejileri',
    image: 'https://images.unsplash.com/photo-1632524316719-79a0ebfde538?q=80&w=600&auto=format&fit=crop'
  },
  {
    slug: 'matematik-korkusunu-yenmek',
    title: 'Matematik Korkusunu Yenmek İçin 5 Adım',
    excerpt: 'Öğrencilerde sıkça görülen matematik fobisinin nedenleri ve bu korkuyu aşmak için uygulanabilecek pratik yöntemler.',
    date: '5 Temmuz 2026',
    category: 'Rehberlik',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop'
  },
  {
    slug: 'ortaokuldan-liseye-gecis',
    title: 'Ortaokuldan Liseye Geçişte Matematik',
    excerpt: 'Lise matematiği ortaokuldan neden farklıdır? 9. sınıfta zorlanmamak için yaz tatilinde neler yapılmalı?',
    date: '28 Haziran 2026',
    category: 'Eğitim',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop'
  }
];

export default async function BlogPage() {
  let blogPosts: BlogPost[] = [];
  
  try {
    blogPosts = await sql`SELECT slug, title, excerpt, date, category, image FROM posts` as BlogPost[];
  } catch (error) {
    console.error('Error fetching blog posts list from database:', error);
  }

  // Fallback if database fetch fails or returns empty list
  if (!blogPosts || blogPosts.length === 0) {
    blogPosts = fallbackPosts;
  }

  return (
    <>
      <Header />
      <main className={styles.blogMain}>
        <div className={styles.hero}>
          <div className="container">
            <h1>Matematik <span className="text-gradient">Blogu</span></h1>
            <p>Eğitim, sınav stratejileri ve matematiğe dair her şey.</p>
          </div>
        </div>

        <div className={`container ${styles.content}`}>
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <article key={post.slug} className={styles.card}>
                <Link href={`/blog/${post.slug}`}>
                  <div className={styles.imageWrapper}>
                    <div 
                      className={styles.image} 
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className={styles.category}>{post.category}</div>
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.date}>{post.date}</span>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <span className={styles.readMore}>Yazıyı Oku →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

