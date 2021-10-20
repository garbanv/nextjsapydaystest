import React,{useContext} from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "../../public/loader.gif";
import { CompanyContext } from "../../context/CompanyContext";

export default function CompanyDetailsName({ data }) {
  const router = useRouter();
  const { slug } = router.query;

  const [company,setCompany]=useContext(CompanyContext)

  console.log("company",company)

  const selectedCompany = data.values.filter((company) => company.name === slug);
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
              <img
                src={logo || "https://dummyimage.com/400x400/000/fff"}
                alt="Picture of the author"
                width={100}
                height={100}
    
              />
              
            </div>
            <p>{description}</p>
            <h3 className="fw-black text-center fw-bold">{name}</h3>
          </div>
        {/*   <div className="col-md-6 videoWrapper">
          <div  dangerouslySetInnerHTML={{ __html: chart1 }}></div>
          </div>
          <div className="col-md-6 videoWrapper" >
          <div  dangerouslySetInnerHTML={{ __html: chart2 }}></div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  /* const res = await fetch(`https://apidaysapp.vercel.app//api/sheets`); */
  /* const res = await fetch(`https://platformableapidays.herokuapp.com/`); */
  const res = await fetch(`http://localhost:5000`)
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
