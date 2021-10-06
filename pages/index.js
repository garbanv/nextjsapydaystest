import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home({data}) {
  console.log(data)
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className="homeCards" >
      {data.map((row,index)=>{
        return (
         
          <div href="https://nextjs.org/docs" className="card" key={index}>
          <img src={`https://dummyimage.com/400x400/000/fff&text=${row.name}`} alt=""/>
            </div> 
          
        )
      })}
       </div>

          

          
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:3000/api/sheets`)
  const data = await res.json()
console.log("data from server", data)
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }
  }
}