import React from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "../../public/loader.gif";

export default function CompanyDetails({ data }) {
  const router = useRouter();
  const { id } = router.query;

  const selectedCompany = data.filter((company) => company.id === parseInt(id));
  const {
    name,
    logo,
    description,
    twitter,
    linkedin,
    crunchbase,
    repositories,
    chart1,
    chart2,
    headquarters,
    category,
  } = selectedCompany[0];

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5">
            <div className="d-flex justify-content-center">
              {" "}
              <Image
                src={logo}
                alt="Picture of the author"
                width={100}
                height={100}
    
              />
              
            </div>
            <p>{description}</p>
            <h3 className="fw-black text-center fw-bold">{name}</h3>
          </div>
          <div className="col-md-6 videoWrapper">
          <div  dangerouslySetInnerHTML={{ __html: chart1 }}></div>
          </div>
          <div className="col-md-6 videoWrapper" >
          <div  dangerouslySetInnerHTML={{ __html: chart2 }}></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://nextjsapydaystest-3fkvistej-garbanv.vercel.app/api/companies`);
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
