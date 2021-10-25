import React from 'react'

export default function CompanyCard({company,index}) {


    return (
        <div className="company-card shadow rounded" key={index}>
        <div className="card-top">
            <div className="card-logo">
              <img src={company.logo} alt="" />
            </div>
            <div className="card-description">
              <h6 className="fw-bold"> {company.name}</h6>
              <span className="xs-text">{company.url.length>6? "url":"corta"}</span>
              <div className="card-founded-container">
                <div className="founded-icon">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
                </div>
                <div className="founded-year">
                  <p className="xs-text">{company.yearFounded}</p>
                </div>
              </div> {/*  <!--card founded--> */}
              <div className="card-founded-container">
                <div className="founded-icon">
                <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
                </div>
                <div className="founded-year">
                  <p className="xs-text">{company.headquartersCity},{company.headquartersCountry}</p>
                </div>
              </div>  {/* <!--card founded--> */}
            </div>
          </div> {/* <!--cardtop--> */}
        <div className="card-middle mt-1">
          <span className="card-tag-color">Integration Platform as a Service</span>
          <span className="card-tag-color2">Integration Platform as a Service</span>
          <span className="card-tag-color2">Integration Platform as a Service</span>
           <span className="card-tag-color">Integration Platform as a Service</span>
          <span className="card-tag-color">Integration Platform as a Service</span>
        </div>{/* <!--card middle--> */}
        
        <div className="card-bottom">
          <div className="card-bottom-left">
            <span className="sm-text">Headcount</span>
            <p className="fw-bold">{company.headcount}</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
            
          </div>{/*  <!--card-bottom -left--> */}
          <div className="card-bottom-center">
             <span>Total Funding</span>
            <p className="fw-bold sm-text">${company.totalFunding? company.totalFunding : "BsF.1MM"}</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon"/>
          </div> {/* <!--card-bottom -center--> */}
          <div className="card-bottom-right">
             <span>Estimated Revenue</span>
            <p className="sm-text fw-bold text-center">{company.estimatedRevenueRange}</p>
            <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png" alt="" class="icon" />
          </div> {/* <!--card-bottom -right--> */}
        </div> {/* card-bottom */}
      
      </div> /* company card */
    )
}

