import React from 'react'
import Layout from '../components/Layout'
import CompanyCard from '../components/CompanyCard'

export default function companiesCards({data}) {
    




    const filteredData = data.values.filter((company,index)=> company.logo !==null)
    const newData = data.values;
    console.log("filteredData length",filteredData.length)
    return (
        <Layout>
        <section className="filter"></section>

        <section className="cards my-5">
            <div className="container-fluid">
                <div className="card-container">
                    {filteredData?filteredData.map((company,index)=>{
                        return (
                            <CompanyCard company={company} index={index}/>
                        )
                    }):"Loading data..."}
                </div>
            </div>
        </section>

            
        </Layout>
    )
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