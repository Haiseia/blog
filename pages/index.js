import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Greetings, I'm Karl. My hobbies include playing and learning things. As for my favorite music, it's difficult to decide but if I had to choose one, then it'd be [The Shimmering Voyage Vol. 6] - Transient Tranquility.
          I'm not exactly a picky eater, though Sisig albeit a little unhealthy in excessive amounts is probably my favorite food. I look forwad to seeing myself be a stable man with very good time schedule and revenue/salary in 5 years.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
