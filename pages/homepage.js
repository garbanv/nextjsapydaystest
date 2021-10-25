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

export default function Homepage({ data }) {
  const [company, setCompany] = useContext(CompanyContext);
  const [businessANDMessaginAPis, setBusinessANDMessaginApis] = useState([]);
  const [businessANDKYC, setBusinessANDKYC] = useState([]);

  const router = useRouter();

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


  const APILifecyclePlatformANDAccessLevelandIdentityManagement = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "Access Level and Identity Management" &&
      company.logo !== null
  );
  

  const APILifecyclePlatformANDAPIAnalyticsMonitoring = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Analytics/Monitoring" &&
      company.logo !== null
  );

  const APILifecyclePlatformANDAPIDesignDocumentationPlatforms = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "AAPI Design/Documentation Platforms" &&
      company.logo !== null
  );

  const APILifecyclePlatformANDAPIDeveloperPortals = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Developer Portals" &&
      company.logo !== null
  );

  const APILifecyclePlatformANDAPIDocumentation = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Documentation" &&
      company.logo !== null
  );

  const APILifecyclePlatformANDAPIIndustrySpecifications = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Industry Specifications" &&
      company.logo !== null
  );
  const APILifecyclePlatformANDAPIManagementAPIGateway = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Management/API Gateway" &&
      company.logo !== null
  );

  const APILifecyclePlatformANDAPIOrientedITConsultingFirms = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Oriented IT Consulting Firms" &&
      company.logo !== null
  );

  const APILifecyclePlatformANDAPITesting = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Testing" &&
      company.logo !== null
  );

  const APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "IoT Platforms/Networks/Devices APIs" &&
      company.logo !== null
  );

  const APILifecyclePlatformANDStreamingAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "Streaming APIs" &&
      company.logo !== null
  );
  

  /* API Standards and Protocols */

  const ApiStandardsandProtocolsANDAsyncAPI = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "AsyncAPI" &&
      company.logo !== null
  );

  const ApiStandardsandProtocolsANDFIDO = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "FIDO" &&
      company.logo !== null
  );

  const ApiStandardsandProtocolsANDGraphQL = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "GraphQL" &&
      company.logo !== null
  );

  const ApiStandardsandProtocolsANDGRPC = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "gRPC" &&
      company.logo !== null
  );

  const ApiStandardsandProtocolsANDOpenApiSpecs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "Open API Specs" &&
      company.logo !== null
  );

  const ApiStandardsandProtocolsANDOpenID = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "OpenID" &&
      company.logo !== null
  );

  const ApiStandardsandProtocolsANDPSD2APIAbstractions = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "PSD2 API Abstractions" &&
      company.logo !== null
  );

  const ApiStandardsandProtocolsANDSTETBerlinGroup = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Standards and Protocols" &&
      company.subcategory === "STET Berlin Group" &&
      company.logo !== null
  );


  /* Backend Building Tools/MBaaS */


const ApiStandardsandProtocolsANDBlockchainAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "Backend Building Tools/MBaaS" &&
      company.subcategory === "Blockchain APIs" &&
      company.logo !== null
  );
  const ApiStandardsandProtocolsANDInfrastructureCloudServerlessAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "Backend Building Tools/MBaaS" &&
      company.subcategory === "Infrastructure/Cloud/Serverless APIs" &&
      company.logo !== null
  );
  
  const ApiStandardsandProtocolsANDMBaas = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "Backend Building Tools/MBaaS" &&
      company.subcategory === "MBaaS" &&
      company.logo !== null
  );

/*   Business processes as an API/API-as a Product */
  


const BusinessprocessesasanAPIAPIasaProductANDDataManagementAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Data Management APIs" &&
    company.logo !== null
);


const BusinessprocessesasanAPIAPIasaProductANDDataasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Data-as-a-service" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDEcommerceAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "E-commerce APIs" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDEmailAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "E-mail APIs" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDFaxMailVoice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Fax/Mail/Voice" &&
    company.logo !== null
);
const BusinessprocessesasanAPIAPIasaProductANDHumanasaserviceAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Human as a service APIs" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDHumanResourcesAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Human Resources APIs" &&
    company.logo !== null
);


const BusinessprocessesasanAPIAPIasaProductANDIotAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "IoT APIs" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDKYCAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "KYC APIs" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDMessagingAPIsCpass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Messaging APIs/Cpass" &&
    company.logo !== null
);


const BusinessprocessesasanAPIAPIasaProductANDOnlineForms = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Online Forms" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDOpenBankingApis = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "OpenBankingApis" &&
    company.logo !== null
);
const BusinessprocessesasanAPIAPIasaProductANDPaymentApis = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Payment APIs" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDSearchEngineApis = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Search Engine Apis" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDVideo = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Video" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductANDHeadlessEcommerce = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Product" &&
    company.subcategory === "Headless E-commerce APIs" &&
    company.logo !== null
);



/*   Business processes as an API/API-as a Products */
  


const BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "Accounting APIs" &&
    company.logo !== null
);


const BusinessprocessesasanAPIAPIasaProductsANDAIAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "AI APIs" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIAggregators = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "API Aggregators" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "API Deployment/Back-end Building" &&
    company.logo !== null
);

const BusinessprocessesasanAPIAPIasaProductsANDDataB2 = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Business processes as an API/API-as a Products" &&
    company.subcategory === "Data (B2B, B2C)" &&
    company.logo !== null
);




/* Integration Platform as a service */


const IntegrationPlatformAsAServiceANDAutomationOrchestrationAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Automation/Orchestration APIs" &&
    company.logo !== null
);

const IntegrationPlatformAsAServiceANDBankasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Bank-as-a-service" &&
    company.logo !== null
);

const IntegrationPlatformAsAServiceANDDatabaseasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Database-as-a-service" &&
    company.logo !== null
);

const IntegrationPlatformAsAServiceANDInsuranceasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Insurance-as-a-service" &&
    company.logo !== null
);
const IntegrationPlatformAsAServiceANDIpass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "IPaaS" &&
    company.logo !== null
);

const IntegrationPlatformAsAServiceANDHorizontalAPIAbstractions = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Integration Platform as a service" &&
    company.subcategory === "Horizontal API Abstractions" &&
    company.logo !== null
);

/* Vertical API Abstractions */

const VerticalAPIAbstractionsANDCloudStorageAPI = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Cloud Storage API" &&
    company.logo !== null
);

const VerticalAPIAbstractionsANDDeliveryAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Delivery APIs" &&
    company.logo !== null
);

const VerticalAPIAbstractionsANDHeadlessCMSAPI = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Headless CMS API" &&
    company.logo !== null
);
const VerticalAPIAbstractionsANDHealthcare = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Healthcare" &&
    company.logo !== null
);
const VerticalAPIAbstractionsANDLastPass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "LastPass" &&
    company.logo !== null
);

const VerticalAPIAbstractionsANDLoginAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Login APIs" &&
    company.logo !== null
);

const VerticalAPIAbstractionsANDMarketingAnalytics = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Marketing/Analytics" &&
    company.logo !== null
);

const VerticalAPIAbstractionsANDSmartHome = data.values.filter(
  (company, index) =>
    company.parentCategorySlug ===
      "Vertical API Abstractions" &&
    company.subcategory === "Smart Home" &&
    company.logo !== null
);


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
          <title>Apidays landscape</title>
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


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="title">
                      <span>API Standards <br/>  and Protocols</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="AsyncAPI"
                          handleCompany={handleCompany}
                          filteredCategory={ ApiStandardsandProtocolsANDAsyncAPI}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="FIDO"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDFIDO}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="GraphQL"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDGraphQL}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="gRPC"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDGRPC}
                          />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Open API Specs"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDOpenApiSpecs}
                          />
                          
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="OpenID"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDOpenID}
                          />
                          </div>
                          <div class="landscape-subcategory-box">

                          <HomepageSubcategory 
                          subcategoryName="PSD2 API Abstractions"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDPSD2APIAbstractions}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="STET Berlin Group"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDSTETBerlinGroup}
                          />
                          
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div> {/* col-md-12 */}





                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="title">
                      <span>Backend Building <br /> Tools/MBaaS</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="Blockchain APIs"
                          handleCompany={handleCompany}
                          filteredCategory={ ApiStandardsandProtocolsANDBlockchainAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Infrastructure/Cloud/Serverless APIs"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDInfrastructureCloudServerlessAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="MBaas"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDMBaas}
                          />
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div> {/* col-md-12 */}
                

                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="title">
                      <span>Business processes as an <br /> API/API-as a Product</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="Data Management APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDataManagementAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Data-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDataasaservice}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="E-mail APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEmailAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="Fax/Mail/Voice"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDFaxMailVoice}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="Human as a service APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaserviceAPIs}
                          />
                          </div>
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="Human Resources APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanResourcesAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="IoT APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDIotAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="KYC APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDKYCAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="Messaging APIs/Cpass"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDMessagingAPIsCpass}
                          />
                          </div>
                        </div>
                      </div>


                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="Online Forms"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOnlineForms}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Open Banking APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOpenBankingApis}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="Payment APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDPaymentApis}
                          />
                          </div>
                        </div>
                      </div> {/* landscape container */}

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="Search Engine APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearchEngineApis}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Video"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDVideo}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="Headless E-commerce APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHeadlessEcommerce}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="E-commerce APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEcommerceAPIs}
                          />
                          </div>
                          
                        </div>
                      </div> {/* landscape container */}
                     
                    </div>
                  </div>
                </div> {/* col-md-12 */}
         


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="title">
                      <span>Business processes as an <br /> API/API-as a Products</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="Accounting APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="AI APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAIAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAPIAggregators}
                          />
                          </div>
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="API Deployment/Back-end Building"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Data (B2B, B2C)"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDDataB2}
                          />
                          </div>
                         
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* col-md-12 */}


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="title">
                      <span>Integration Platform as a Service</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="Automation/Orchestration APIs"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDAutomationOrchestrationAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Bank-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDBankasaservice}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="Database-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDDatabaseasaservice}
                          />
                          </div>
                        </div>
                      </div>
                      





                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                         
                          <HomepageSubcategory 
                          subcategoryName="Insurance-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDInsuranceasaservice}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="IPaaS"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDIpass}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Horizontal API Abstractions"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDHorizontalAPIAbstractions}
                          />
                          </div>
                         
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* col-md-12 */}


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="title">
                      <span>Vertical API Abstractions</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          <HomepageSubcategory 
                          subcategoryName="Cloud Storage API"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDCloudStorageAPI}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Delivery APIs"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDDeliveryAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="Headless CMS API"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDHeadlessCMSAPI}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="Healthcare"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDHealthcare}
                          />
                          </div>
                        </div>
                      </div>
 
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          <HomepageSubcategory 
                          subcategoryName="LastPass"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDLastPass}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Login APIs"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDLoginAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          <HomepageSubcategory 
                          subcategoryName="Marketing/Analytics"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDMarketingAnalytics}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          <HomepageSubcategory 
                          subcategoryName="Smart Home"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDSmartHome}
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
