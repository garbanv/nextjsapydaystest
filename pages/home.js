import React, { useContext, useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import { CompanyContext } from "../context/CompanyContext";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";
import HomepageSubcategory from "../components/HomepageSubcategory";

export default function Home({ data }) {
  const [company, setCompany] = useContext(CompanyContext);
  const [businessANDMessaginAPis, setBusinessANDMessaginApis] = useState([]);
  const [businessANDKYC, setBusinessANDKYC] = useState([]);

  const router = useRouter();

  console.log("data.values.length",data.values.length)

  const handleCompany = (company) => {
    setCompany(company);
    router.push(`/company/${company.name}`);
  };

  const categories = [
    "API Lifecycle Platform",
    "API standards and Protocols",
    "Backend Building Tools/MBaaS",
    "Business processes as an API/API-as a Product",
    "Business processes as an API/API-as a Products",
    "Integration Platform as a Service",
    "Vertical API Abstraction",
  ];

  const subcategories = [
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
  ];


   const  APILifecyclePlatformANDAccessLevelandIdentityManagement =  data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "Access Level and Identity Management" 
  );
  

  const APILifecyclePlatformANDAPIAnalyticsMonitoring = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Analytics/Monitoring"
  );

  const APILifecyclePlatformANDAPIDesignDocumentationPlatforms = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "AAPI Design/Documentation Platforms" 
  );

  const APILifecyclePlatformANDAPIDeveloperPortals = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Developer Portals" 
  );

  const APILifecyclePlatformANDAPIDocumentation = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Documentation" 
  );

  const APILifecyclePlatformANDAPIIndustrySpecifications = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Industry Specifications"
  );
  const APILifecyclePlatformANDAPIManagementAPIGateway = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Management/API Gateway"
  );

  const APILifecyclePlatformANDAPIOrientedITConsultingFirms = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Oriented IT Consulting Firms" 
  );

  const APILifecyclePlatformANDAPITesting = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Testing"
  );

  const APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "IoT Platforms/Networks/Devices APIs"
  );

  const APILifecyclePlatformANDStreamingAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "Streaming APIs"
  );
  

  /* API Standards and Protocols */

  /* const ApiStandardsandProtocolsANDAsyncAPI = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "AsyncAPI"
  );

  const ApiStandardsandProtocolsANDFIDO = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "FIDO"
  );

  const ApiStandardsandProtocolsANDGraphQL = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "GraphQL"
  );

  const ApiStandardsandProtocolsANDGRPC = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "gRPC" 
  );

  const ApiStandardsandProtocolsANDOpenApiSpecs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "Open API Specs" 
  );

  const ApiStandardsandProtocolsANDOpenID = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "OpenID"
  );

  const ApiStandardsandProtocolsANDPSD2APIAbstractions = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "PSD2 API Abstractions"
  );

  const ApiStandardsandProtocolsANDSTETBerlinGroup = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "STET Berlin Group" 
  ); */


  /* Backend Building Tools/MBaaS */

/* 
const ApiStandardsandProtocolsANDBlockchainAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "Backend Building Tools/MBaaS" &&
      company.subcategory === "Blockchain APIs"
  );
  const ApiStandardsandProtocolsANDInfrastructureCloudServerlessAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "Backend Building Tools/MBaaS" &&
      company.subcategory === "Infrastructure/Cloud/Serverless APIs"
  );
  
  const ApiStandardsandProtocolsANDMBaas = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "Backend Building Tools/MBaaS" &&
      company.subcategory === "MBaaS"
  ); */

/*   Business processes as an API/API-as a Product */
  

/* 
const BusinessprocessesasanAPIAPIasaProductANDDataManagementAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Data Management APIs"
);


const BusinessprocessesasanAPIAPIasaProductANDDataasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Data-as-a-service" 
);

const BusinessprocessesasanAPIAPIasaProductANDEcommerceAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "E-commerce APIs"
);

const BusinessprocessesasanAPIAPIasaProductANDEmailAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "E-mail APIs"
);

const BusinessprocessesasanAPIAPIasaProductANDFaxMailVoice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Fax/Mail/Voice"
);
const BusinessprocessesasanAPIAPIasaProductANDHumanasaserviceAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Human as a service APIs"
);

const BusinessprocessesasanAPIAPIasaProductANDHumanResourcesAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Human Resources APIs"
);


const BusinessprocessesasanAPIAPIasaProductANDIotAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "IoT APIs"
);

const BusinessprocessesasanAPIAPIasaProductANDKYCAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "KYC APIs"
);

const BusinessprocessesasanAPIAPIasaProductANDMessagingAPIsCpass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Messaging APIs/Cpass" 
);


const BusinessprocessesasanAPIAPIasaProductANDOnlineForms = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Online Forms" 
);

const BusinessprocessesasanAPIAPIasaProductANDOpenBankingApis = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "OpenBankingApis"
);
const BusinessprocessesasanAPIAPIasaProductANDPaymentApis = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Payment APIs"
);

const BusinessprocessesasanAPIAPIasaProductANDSearchEngineApis = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Search Engine Apis"
);

const BusinessprocessesasanAPIAPIasaProductANDVideo = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Video"
);

const BusinessprocessesasanAPIAPIasaProductANDHeadlessEcommerce = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Headless E-commerce APIs"
);
 */


/*   Business processes as an API/API-as a Products */
  

/* 
const BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "Accounting APIs" 
);


const BusinessprocessesasanAPIAPIasaProductsANDAIAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "AI APIs" 
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIAggregators = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "API Aggregators" 
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "API Deployment/Back-end Building" 
);

const BusinessprocessesasanAPIAPIasaProductsANDDataB2 = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "Data (B2B, B2C)" 
); */




/* Integration Platform as a service */


/* const IntegrationPlatformAsAServiceANDAutomationOrchestrationAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Automation/Orchestration APIs" 
);

const IntegrationPlatformAsAServiceANDBankasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Bank-as-a-service" 
);

const IntegrationPlatformAsAServiceANDDatabaseasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Database-as-a-service" 
);

const IntegrationPlatformAsAServiceANDInsuranceasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Insurance-as-a-service" 
);
const IntegrationPlatformAsAServiceANDIpass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "IPaaS" 
);

const IntegrationPlatformAsAServiceANDHorizontalAPIAbstractions = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Horizontal API Abstractions" 
);
 */
/* Vertical API Abstractions */

/* const VerticalAPIAbstractionsANDCloudStorageAPI = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Cloud Storage API" 
);

const VerticalAPIAbstractionsANDDeliveryAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Delivery APIs" 
);

const VerticalAPIAbstractionsANDHeadlessCMSAPI = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Headless CMS API" 
);
const VerticalAPIAbstractionsANDHealthcare = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Healthcare" 
);
const VerticalAPIAbstractionsANDLastPass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "LastPass" 
);

const VerticalAPIAbstractionsANDLoginAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Login APIs" 
);

const VerticalAPIAbstractionsANDMarketingAnalytics = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Marketing/Analytics" 
);

const VerticalAPIAbstractionsANDSmartHome = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Smart Home" 
); */


  const isInitialMount = useRef(true);

/*   useEffect(() => {
    if (isInitialMount.current) {
      getBusinessANDMessaginApis(data);
      getBusinessANDKYC(data);
      isInitialMount.current = false;
    } else {
    }
  }, []); */

  return (
    <Layout>
      <div className="">
        <Head>
          <title>apidays landscape</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main>
          <section className="hero heroBg">
            <HomeHero />
          </section>

          <section className="intro-text">
          <div className="container ">
            <h3 className="text-white text-center py-5 m-0">A comprehensive view of all stakeholders creating the programmable economy</h3>
          </div>
          </section>
          
          <section className="home-landscape">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 mb-1">
                  <div class="home-main-container ">
                    <div class="title">
                      <span>API Lifecycle <br/>Platform</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          <HomepageSubcategory 
                          subcategoryName="Access Level and Identity Management"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAccessLevelandIdentityManagement}
                          />
            
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="API Analytics/Monitoring"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIAnalyticsMonitoring}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          
                          <HomepageSubcategory 
                          subcategoryName="AAPI Design/Documentation Platforms"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                          />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="API Developer Portals"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="API Documentation"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDocumentation}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          
                          <HomepageSubcategory 
                          subcategoryName="API Industry Specifications"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIIndustrySpecifications}
                          />
                         
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="API Management/APIGateway"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIManagementAPIGateway}
                          />
                          </div>
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box"> 
                          <HomepageSubcategory 
                          subcategoryName="API Oriented IT Consulting Firms"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIOrientedITConsultingFirms}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="API Testing"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPITesting}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          
                          <HomepageSubcategory 
                          subcategoryName="IoT Platforms/Networks/Devices APIs"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          
                          <HomepageSubcategory 
                          subcategoryName="Streaming APIs"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDStreamingAPIs}
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* col-md-12 */}

              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const res = await fetch(`https://apidaysserver-svmwd.ondigitalocean.app` || `http://localhost:5000`);
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
