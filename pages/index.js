import React, { useContext,useEffect,useState,useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import { CompanyContext } from "../context/CompanyContext";
import { useRouter } from "next/router";
import ReactTooltip from 'react-tooltip';

export default function Home({ data }) {
  const [company, setCompany] = useContext(CompanyContext);
  const [businessANDMessaginAPis,setBusinessANDMessaginApis] = useState([]) 
  const [businessANDKYC,setBusinessANDKYC] = useState([]) 

  const router = useRouter();

  const handleCompany = (company) => {
    setCompany(company);
    router.push(`/company/${company.id}`);
  };


  const categories = [
'API Lifecycle Platform',
'API standards and Protocols',
'Backend Building Tools/MBaaS',
'Business processes as an API/API-as a Product',
'Business processes as an API/API-as a Products',
'Integration Platform as a Service',
'Vertical API Abstraction'
  ]

  const subcategories= [
    "Access Level and Identity Management",
    "API Analytics/Monitoring",
    "API Design/Documentation Platforms",
    "API Developer Portals",
    "API Documentation",
    "API Industry Specifications",
    "API Management/API Gateway",
    "API Oriented IT Consulting Firms",
    "API Testing",
    "IoT Platforms/Networks/Devices APIs",
    "Streaming APIs",
    "AsyncAPI",
    "FIDO",
    "GraphQL",
    "gRPC",
    "Open API Specs",
    "OpenID",
    "PSD2 API Abstractions",
    "STET Berlin Group",
    "Blockchain APIs",
    "Infrastructure/Cloud/Serverless APIs",
    "MBaas",
    "Data Management APIs",
    "Data-as-a-service",
    "E-commerce APIs",
    "E-mail APIs",
    "Fax/Mail/Voice",
    "Headless E-commerce APIs",
    "Human as a service APIs",
    "Human Resources APIs",
    "IoT APIs",
    "KYC APIs",
    "Messaging APIs/Cpass",
    "Online Forms",
    "Open Banking APIs",
    "Payment APIs",
    "Search Engine APIs",
    "Video",
    "Accounting APIs",
    "AI APIs",
    "API Aggregators",
    "API Deployment/Back-end Building",
    "Data (B2B, B2C)",
    "Automation/Orchestration APIs",
    "Bank-as-a-service",
    "Database-as-a-service",
    "Insurance-as-a-service",
    "IPaaS",
    "Horizontal API Abstractions",
    "Cloud Storage API",
    "Delivery APIs",
    "Headless CMS API",
    "Healthcare",
    "LastPass",
    "Login APIs",
    "Marketing/Analytics",
    "Smart Home",
  ]

/*   const APILifecyclePlatformANDAccessLevelandIdentityManagement =data.values.filter((company,index)=>{
    return company.parentCategorySlug==="API Lifecycle Platform" && company.subcategory=== "API Developer Portals"
  })  */


  

  const b1 =  data.values.filter((company,index)=>company.parentCategorySlug==="Business processes as an API/API-as a Product" && company.subcategory==="Messaging APIs/Cpass" && company.logo !==null)
  const b2 =  data.values.filter((company,index)=>company.parentCategorySlug==="Business processes as an API/API-as a Product" && company.subcategory==="E-mail APIs" && company.logo !==null)

  let cleanB1 = [...new Set(b1)];
  
  let cleanB2 = [...new Set(b2)];

  async function getBusinessANDMessaginApis(arr){
  const data = await arr.values.filter((company,index)=>company.parentCategorySlug==="Business processes as an API/API-as a Product" && company.subcategory==="Messaging APIs/Cpass" && company.logo !==null)
  let cleandata = [...new Set(data)];
  setBusinessANDMessaginApis(cleandata)
}

async function getBusinessANDKYC(arr){
  const data = await arr.values.filter((company,index)=>company.parentCategorySlug==="Business processes as an API/API-as a Product" && company.subcategory==="KYC APIs" && company.logo !==null)
  let cleandata = [...new Set(data)];
  setBusinessANDMessaginApis(cleandata)
}



const isInitialMount = useRef(true);

useEffect(() => {
  if (isInitialMount.current) {
    setBusinessANDMessaginApis(cleanB1)
    setBusinessANDKYC(cleanB2)
     isInitialMount.current = false;
    
  } else {
    
  }


},[]);


  
  return (
    <Layout>
      <div className="">
        <Head>
          <title>Apidays landscape</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main>
          <section className="hero heroBg">
            <HomeHero />
          </section>

          <section className="home-landscape mt-5">
            <div className="container">
        
              <div className="row ">
                <div className="col-md-6 ">
                
               
                  {/* <p className="bg-primary2 py-1 m-0 text-center rounded-top">Category</p> */}
                  <div className="main-box-container bg-landscape-box d-flex">
                  {/* <div className="category-name  py-5"><span>Business processes as an API/API as a Product</span></div> */}
                  <div class="test">Business processes as an API/API-as a Product</div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Messaging APIs/Cpass</h3>
                        <div className="homeCards">
                          {businessANDMessaginAPis?businessANDMessaginAPis.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                    <div className="category-name d-flex py-5"><span className="block-space"></span></div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Online Forms</h3>
                        <div className="homeCards">
                          {b1?b1.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                 
                    <div className="category-name d-flex py-5"><span className="block-space"></span></div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Open Banking APIs</h3>
                        <div className="homeCards">
                          {b1?b1.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-md-6 d-flex">
                          
                          {/* <p className="bg-primary2 py-1 m-0 text-center rounded-top">Category</p> */}
                  <div className="main-box-container bg-landscape-box d-flex">
                  {/* <div className="category-name  py-5"><span>Business processes as an API/API as a Product</span></div> */}
                  <div class="test">API Standards and Protocols</div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Payment APIs</h3>
                        <div className="homeCards">
                          {businessANDMessaginAPis?businessANDMessaginAPis.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                    <div className="category-name d-flex py-5"><span className="block-space"></span></div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Search Engine APIs</h3>
                        <div className="homeCards">
                          {b1?b1.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                 
                    <div className="category-name d-flex py-5"><span className="block-space"></span></div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Accounting APIs</h3>
                        <div className="homeCards">
                          {b1?b1.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                  </div>
               
                </div>
              </div>


              <div className="row my-2">
                <div className="col-md-6 ">
                
               
                  {/* <p className="bg-primary2 py-1 m-0 text-center rounded-top">Category</p> */}
                  <div className="main-box-container bg-landscape-box d-flex">
                  {/* <div className="category-name  py-5"><span>Business processes as an API/API as a Product</span></div> */}
                  <div class="test">Backend Building Tools/MBaaS</div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Data (B2B, B2C)</h3>
                        <div className="homeCards">
                          {businessANDMessaginAPis?businessANDMessaginAPis.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                    <div className="category-name d-flex py-5"><span className="block-space"></span></div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Automation/Orchestration APIs</h3>
                        <div className="homeCards">
                          {b1?b1.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                 
                    <div className="category-name d-flex py-5"><span className="block-space"></span></div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Insurance-as-a-service</h3>
                        <div className="homeCards">
                          {b1?b1.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-md-6 d-flex">
                          
                          {/* <p className="bg-primary2 py-1 m-0 text-center rounded-top">Category</p> */}
                  <div className="main-box-container bg-landscape-box d-flex">
                  {/* <div className="category-name  py-5"><span>Business processes as an API/API as a Product</span></div> */}
                  <div class="test">Integration Platform as a Service</div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Messaging APIs/Cpass</h3>
                        <div className="homeCards">
                          {businessANDMessaginAPis?businessANDMessaginAPis.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                    <div className="category-name d-flex py-5"><span className="block-space"></span></div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Messaging APIs/Cpass</h3>
                        <div className="homeCards">
                          {b1?b1.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                 
                    <div className="category-name d-flex py-5"><span className="block-space"></span></div>
                    <div className="col d-flex">
                      <div className="box bg-white border py-2 px-2 col">
                        <h3 className="landscape-subcategory-title text-center mb-3">Messaging APIs/Cpass</h3>
                        <div className="homeCards">
                          {b1?b1.slice(0, 10).map((row, index) => {
                            return (
                              <div
                                href="https://nextjs.org/docs"
                                className="landscape-card mb-3"
                                key={index}
                              >
                                <div onClick={() => handleCompany(row)} data-tip={row.name}>
                                <ReactTooltip backgroundColor="#04a5b6" textColor="#fff"/>
                                  <img
                                    src={row.logo}
                                    alt=""
                                  />
                                </div>
                             
                              </div>
                            );
                          }):null}
                        </div>
                      </div>
                    </div>
                  </div>
               
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
   /* const res = await fetch(`https://apidaysapp.vercel.app/api/sheets`); */
  const res = await fetch(`https://platformableapidays.herokuapp.com/`);
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
