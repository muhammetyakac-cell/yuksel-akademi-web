import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './blog-detail.module.css';
import { notFound } from 'next/navigation';
import sql from '@/lib/db';
import type { Metadata } from 'next';

interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
}

// Fallback Mock data in case database fetch fails or is empty
const fallbackBlogPosts: Record<string, any> = {
  'yeni-nesil-sorular-nasil-cozulur': {
    title: 'Yeni Nesil Matematik Soruları Nasıl Çözülür?',
    date: '10 Temmuz 2026',
    category: 'Sınav Stratejileri',
    image: 'https://images.unsplash.com/photo-1632524316719-79a0ebfde538?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'LGS ve YKS de karşımıza çıkan yeni nesil analitik sorulara nasıl yaklaşmalıyız? Temel stratejiler ve ipuçları.',
    content: `
      <p>Son yıllarda LGS ve YKS gibi sınavlarda matematikte büyük bir değişim yaşandı. Artık sadece işlem yeteneği değil, aynı zamanda okuduğunu anlama, analiz etme ve mantıksal çıkarım yapma becerileri test ediliyor. Bu sorular "yeni nesil" olarak adlandırılıyor.</p>
      
      <h3>1. Soruyu Değil, Hikayeyi Okuyun</h3>
      <p>Yeni nesil sorular genellikle uzun bir hikaye ile başlar. Soruyu çözerken yapılan en büyük hata, hikayeyi hızlıca geçip doğrudan sayılara odaklanmaktır. Oysa ki hikaye, sorunun çözüm mantığını barındırır. Okurken önemli yerlerin altını çizin ve hikayeyi zihninizde canlandırın.</p>
      
      <h3>2. Verileri Şemalaştırın</h3>
      <p>Karmaşık görünen bir problemi basitleştirmenin en iyi yolu onu çizmektir. Zihninizdeki karmaşayı kağıda dökerek, parçalar arasındaki ilişkiyi daha net görebilirsiniz. Venn şemaları, tablolar veya basit çizgiler bile büyük fark yaratır.</p>
      
      <h3>3. Adım Adım İlerleyin</h3>
      <p>Yeni nesil sorular birden fazla işlem adımı gerektirir. Tüm soruyu tek seferde çözmeye çalışmak yerine, parçalara bölün. Her bir cümlenin matematiksel karşılığını bularak ilerleyin.</p>
      
      <p>Unutmayın, matematik bir ezber dersi değil, düşünme sanatıdır. Düzenli pratik yaparak ve farklı soru tiplerini görerek bu sanatta ustalaşabilirsiniz.</p>
    `
  },
  'matematik-korkusunu-yenmek': {
    title: 'Matematik Korkusunu Yenmek İçin 5 Adım',
    date: '5 Temmuz 2026',
    category: 'Rehberlik',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Öğrencilerde sıkça görülen matematik fobisinin nedenleri ve bu korkuyu aşmak için uygulanabilecek pratik yöntemler.',
    content: `
      <p>Birok öğrenci için matematik, ders programlarındaki en korkutucu kelimedir. Ancak bu fobi doğuştan gelmez, sonradan kazanılır. İşte matematik korkusunu yenmenizi sağlayacak 5 etkili adım:</p>
      
      <h3>1. Ön Yargılarınızdan Arının</h3>
      <p>"Ben yapamam", "Matematik beynim yok" gibi olumsuz düşünceler öğrenmenin önündeki en büyük engellerdir. Kendinize şans verin ve matematiğin de öğrenilebilir bir beceri olduğunu kabul edin.</p>
      
      <h3>2. Temel Eksiklerinizi Kapatın</h3>
      <p>Matematik kümülatif (birikimli) bir derstir. Rasyonel sayıları tam olarak anlamadan cebirsel ifadeleri çözemezsiniz. Eğer zorlanıyorsanız, geriye dönüp eksik konularınızı tespit edin ve tamamlayın.</p>
      
      <h3>3. Ezberlemeyin, Mantığını Kavrayın</h3>
      <p>Formülleri ezberlemek geçici bir çözümdür. Önemli olan o formülün neden ve nasıl kullanıldığını anlamaktır. "Neden?" sorusunu sormaktan çekinmeyin.</p>
      
      <h3>4. Hata Yapmaktan Korkmayın</h3>
      <p>Matematikte her yanlış cevap, doğruya giden yolda bir adımdır. Yanlış yaptığınız soruların çözümlerini mutlaka öğrenin. Hatalarınız en iyi öğretmenlerinizdir.</p>
      
      <h3>5. Küçük Adımlarla Başlayın ve Düzenli Çalışın</h3>
      <p>Günde saatlerce çalışmak yerine, her gün yarım saat düzenli çalışmak daha verimlidir. Kolay sorulardan başlayarak kendinize olan güveninizi artırın.</p>
    `
  },
  'ortaokuldan-liseye-gecis': {
    title: 'Ortaokuldan Liseye Geçişte Matematik',
    date: '28 Haziran 2026',
    category: 'Eğitim',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Lise matematiği ortaokuldan neden farklıdır? 9. sınıfta zorlanmamak için yaz tatilinde neler yapılmalı?',
    content: `
      <p>LGS maratonunu tamamlayıp liseye adım atan öğrencileri bekleyen en büyük sürprizlerden biri lise matematiğidir. Ortaokula kıyasla daha soyut, daha kapsamlı ve daha analitik bir matematik dünyası başlar.</p>
      
      <h3>Ortaokul ve Lise Matematiği Arasındaki Farklar</h3>
      <p>Ortaokulda sorular genellikle daha somut ve belirli kalıplar üzerinedir. Lise matematiğinde ise mantık, kümeler, fonksiyonlar gibi soyut kavramlar devreye girer. Bu durum ilk başlarda öğrencilere yabancı gelebilir.</p>
      
      <h3>9. Sınıfta Zorlanmamak İçin Ne Yapmalı?</h3>
      <p>Yaz tatilinde hem dinlenip hem de lise yılına hazırlık yapmak mümkündür. Özellikle çarpanlara ayırma, üslü-köklü sayılar ve denklem çözme gibi ortaokulun temel konularını tekrar etmek lise matematiğinde size büyük avantaj sağlayacaktır.</p>
      
      <p>Yeni eğitim öğretim yılında tüm öğrencilerimize başarılar dileriz!</p>
    `
  }
};

async function getPostData(slug: string): Promise<BlogPost | null> {
  let post: BlogPost | null = null;
  try {
    const results = await sql`SELECT title, slug, excerpt, content, category, image, date FROM posts WHERE slug = ${slug}` as BlogPost[];
    if (results && results.length > 0) {
      post = results[0];
    }
  } catch (error) {
    console.error('Error fetching blog post from Neon DB:', error);
  }

  if (!post && fallbackBlogPosts[slug]) {
    const fallback = fallbackBlogPosts[slug];
    post = {
      slug,
      title: fallback.title,
      date: fallback.date,
      category: fallback.category,
      image: fallback.image,
      excerpt: fallback.excerpt || '',
      content: fallback.content
    };
  }

  return post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı | Yükselİn Akademi',
      description: 'Yazı bulunamadı.'
    };
  }

  return {
    title: `${post.title} | Yükselİn Akademi`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.yukselakademi.blog/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Yükselİn Akademi`,
      description: post.excerpt,
      url: `https://www.yukselakademi.blog/blog/${post.slug}`,
      siteName: 'Yükselİn Akademi',
      locale: 'tr_TR',
      type: 'article',
      images: [
        {
          url: post.image,
          alt: post.title,
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostData(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yukselakademi.blog';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${baseUrl}/blog/${post.slug}/#article`,
    'headline': post.title,
    'description': post.excerpt,
    'image': post.image,
    'datePublished': post.date,
    'author': {
      '@type': 'Person',
      'name': 'Gülçin Demir',
      'url': 'https://www.yukselakademi.blog'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Yükselİn Akademi',
      'logo': {
        '@type': 'ImageObject',
        'url': `${baseUrl}/images/logo.png`
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className={styles.postMain}>
        <article className={styles.article}>
          <div className={styles.hero} style={{ backgroundImage: `url(${post.image})` }}>
            <div className={styles.overlay}>
              <div className="container">
                <div className={styles.heroContent}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.date}>{post.date}</span>
                  </div>
                  <h1>{post.title}</h1>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`container ${styles.contentContainer}`}>
            <div 
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <div className={styles.actions}>
              <Link href="/blog" className={styles.backBtn}>
                ← Blog'a Dön
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

