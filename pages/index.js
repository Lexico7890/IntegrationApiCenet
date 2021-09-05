import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import AppLayout from  '../components/AppLayout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Manual De Integracion API Cenet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Link href="/prueba">
          <a>Go Pagina de prueba</a>
        </Link>
      </AppLayout>
    </div>
  );
}
