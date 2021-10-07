import React, { useEffect } from "react";
import Head from "next/head";
import Link from 'next/link';
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";

export default function Home({ data }) {
  return (
    <Layout>
      <div className="">
        <Head>
          <title>Apidays landscape</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main>
          <section className="hero heroBg">
            <HomeHero/>
          </section>

          <section className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center fw-bold mt-5">APIs are eating the world</h3>
              <div className="text-center fw-bold mb-5"><svg  width="71px" height="11px"> <path fill-rule="evenodd" d="M59.669,10.710 L49.164,3.306 L39.428,10.681 L29.714,3.322 L20.006,10.682 L10.295,3.322 L1.185,10.228 L-0.010,8.578 L10.295,0.765 L20.006,8.125 L29.714,0.765 L39.428,8.125 L49.122,0.781 L59.680,8.223 L69.858,1.192 L70.982,2.895 L59.669,10.710 Z"></path></svg></div>
              <div className="homeCards">
                {data.map((row, index) => {
                  return (
                    <div
                      href="https://nextjs.org/docs"
                      className="card"
                      key={index}
                    >
                      <Link href={`/company/${row.id}`}>
                      <img
                        src={`https://dummyimage.com/400x400/000/fff&text=${index}`}
                        alt=""
                      />
                      </Link>
                      {/* <p className="sm-text text-center">{row.name}</p> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          </section>


        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:3000/api/companies`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
