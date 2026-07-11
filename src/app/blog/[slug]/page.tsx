import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './blog-detail.module.css';
import { notFound } from 'next/navigation';

// Mock data
const blogPosts: Record<string, any> = {
  'yeni-nesil-sorular-nasil-cozulur': {
    title: 'Yeni Nesil Matematik Soruları Nasıl Çözülür?',
    date: '10 Temmuz 2026',
    category: 'Sınav Stratejileri',
    image: 'https://images.unsplash.com/photo-1632524316719-79a0ebfde538?q=80&w=1200&auto=format&fit=crop',
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
  // We can add the other posts if we want, but for mock purposes one is fine, we'll use a fallback.
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts[resolvedParams.slug] || {
    title: 'Örnek Blog Yazısı',
    date: 'Tarih',
    category: 'Kategori',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
    content: '<p>Bu sayfa henüz yapım aşamasındadır veya içerik bulunamamıştır.</p>'
  };

  return (
    <>
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
