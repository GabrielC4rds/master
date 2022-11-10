import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Form from '../components/Form'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Garupa</title>
        <meta name="description" content="Test made by Gabriel Cardoso" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <Form/>
    </div>
  )
}
