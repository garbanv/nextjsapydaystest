import React from 'react'
import Layout from '../components/Layout'
import CompanyCard from '../components/CompanyCard'

export default function companiesCards({data}) {
    


    const filteredData = data.values.filter((company,index)=> company.logo !==null)
    console.log("filteredData",filteredData) 
    return (
        <Layout>
        <section className="filter"></section>

        <section className="cards my-5">
            <div className="container">
                <div className="card-container">
                    {filteredData?filteredData.map((company,index)=>{
                        return (
                            <CompanyCard company={company} index={index}/>
                        )
                    }):"Loading data..."}
                </div>
            </div>
        </section>
        <section className="cards">

        <div class="container">
    <div class="card-container">
      <div class="company-card shadow rounded">
          <div class="card-top">
            <div class="card-logo">
              <img src="https://logo.clearbit.com/clickatell.com" alt=""/>
            </div>
            <div class="card-description">
              <h3> Bankable</h3>
              <span>http:www.bankable.com</span>
              <div class="card-founded-container">
                <div class="founded-icon">
                  <img src="https://cdn-icons.flaticon.com/png/512/819/premium/819814.png?token=exp=1635018815~hmac=b3116b19da6aea1639bfc27c6479be86" alt="" class="icon"/>
                </div>
                <div class="founded-year">
                  <p>2010</p>
                </div>
              </div> {/*  <!--card founded--> */}
              <div class="card-founded-container">
                <div class="founded-icon">
                  <img src="https://cdn-icons.flaticon.com/png/512/819/premium/819814.png?token=exp=1635018815~hmac=b3116b19da6aea1639bfc27c6479be86" alt="" class="icon" />
                </div>
                <div class="founded-year">
                  <p>London ,UK</p>
                </div>
              </div>  {/* <!--card founded--> */}
            </div>
          </div>{/*  <!--cardtop--> */}
        <div class="card-middle">
          <span class="card-tag-color">Aplication Platform as a Service</span>
          <span class="card-tag-color2">Integration Platform as a Service</span>
          <span class="card-tag-color">Aplication Platform as a Service</span>
          <span class="card-tag-color2">Integration Platform as a Service</span>
        </div>{/* <!--card middle--> */}
        <div class="card-bottom">
          <div class="card-bottom-left">
            <span>Headcount</span>
            <p>11</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
            
          </div> {/* <!--card-bottom -left--> */}
          <div class="card-bottom-center">
             <span>Headcount</span>
            <p>$10M</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
          </div> {/* <!--card-bottom -center--> */}
          <div class="card-bottom-right">
             <span>Estimated Revenue</span>
            <p>$1M - $10M</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
          </div> {/* <!--card-bottom -right--> */}
        </div> {/* <!--card-bottom --> */}
      </div>{/* <!--company-card--> */}
      
      <div class="company-card shadow rounded">
        <div class="card-top">
            <div class="card-logo">
              <img src="https://logo.clearbit.com/clickatell.com" alt=""/>
            </div>
            <div class="card-description">
              <h3> Bankable</h3>
              <span>http:www.bankable.com</span>
              <div class="card-founded-container">
                <div class="founded-icon">
                  <img src="https://cdn-icons.flaticon.com/png/512/819/premium/819814.png?token=exp=1635018815~hmac=b3116b19da6aea1639bfc27c6479be86" alt="" class="icon" />
                </div>
                <div class="founded-year">
                  <p>2010</p>
                </div>
              </div> {/*  <!--card founded--> */}
              <div class="card-founded-container">
                <div class="founded-icon">
                  <img src="https://cdn-icons.flaticon.com/png/512/819/premium/819814.png?token=exp=1635018815~hmac=b3116b19da6aea1639bfc27c6479be86" alt="" class="icon"/>
                </div>
                <div class="founded-year">
                  <p>London ,UK</p>
                </div>
              </div>  {/* <!--card founded--> */}
            </div>
          </div>{/*  <!--cardtop--> */}
        <div class="card-middle">
          <span class="card-tag-color">Integration Platform as a Service</span>
          <span class="card-tag-color2">Integration Platform as a Service</span>
          <span class="card-tag-color2">Integration Platform as a Service</span>

        </div>{/* <!--card middle--> */}
        
        <div class="card-bottom">
          <div class="card-bottom-left">
            <span>Headcount</span>
            <p>11</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon"/>
            
          </div> {/* <!--card-bottom -left--> */}
          <div class="card-bottom-center">
             <span>Headcount</span>
            <p>$10M</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
          </div> {/* <!--card-bottom -center--> */}
          <div class="card-bottom-right">
             <span>Estimated Revenue</span>
            <p>$1M - $10M</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
          </div> {/* <!--card-bottom -right--> */}
        </div> {/* <!--card-bottom --> */}
            
      </div>{/* <!--company-card--> */}
      <div class="company-card shadow rounded">
        <div class="card-top">
            <div class="card-logo">
              <img src="https://logo.clearbit.com/clickatell.com" alt="" />
            </div>
            <div class="card-description">
              <h3> Bankable</h3>
              <span>http:www.bankable.com</span>
              <div class="card-founded-container">
                <div class="founded-icon">
                  <img src="https://cdn-icons.flaticon.com/png/512/819/premium/819814.png?token=exp=1635018815~hmac=b3116b19da6aea1639bfc27c6479be86" alt="" class="icon" />
                </div>
                <div class="founded-year">
                  <p>2010</p>
                </div>
              </div> {/*  <!--card founded--> */}
              <div class="card-founded-container">
                <div class="founded-icon">
                  <img src="https://cdn-icons.flaticon.com/png/512/819/premium/819814.png?token=exp=1635018815~hmac=b3116b19da6aea1639bfc27c6479be86" alt="" class="icon" />
                </div>
                <div class="founded-year">
                  <p>London ,UK</p>
                </div>
              </div>  {/* <!--card founded--> */}
            </div>
          </div> {/* <!--cardtop--> */}
        <div class="card-middle">
          <span class="card-tag-color">Integration Platform as a Service</span>
          <span class="card-tag-color2">Integration Platform as a Service</span>
          <span class="card-tag-color2">Integration Platform as a Service</span>
           <span class="card-tag-color">Integration Platform as a Service</span>
          <span class="card-tag-color">Integration Platform as a Service</span>
        </div>{/* <!--card middle--> */}
        
        <div class="card-bottom">
          <div class="card-bottom-left">
            <span>Headcount</span>
            <p>11</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
            
          </div>{/*  <!--card-bottom -left--> */}
          <div class="card-bottom-center">
             <span>Headcount</span>
            <p>$10M</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon"/>
          </div> {/* <!--card-bottom -center--> */}
          <div class="card-bottom-right">
             <span>Estimated Revenue</span>
            <p>$1M - $10M</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
          </div> {/* <!--card-bottom -right--> */}
        </div> {/* <!--card-bottom --> */}
      
      </div>{/* <!--company-card--> */}

  
    </div>{/* <!--card container--> */}
  </div> {/* <!--container--> */}

        </section> {/* cards */}
            
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