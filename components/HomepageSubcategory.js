import React from "react";
import ReactTooltip from "react-tooltip";

export default function homepageSubcategory({handleCompany,subcategoryName,filteredCategory}) {
  return (
    <>
      <h6 className="text-center sm-text py-2">{subcategoryName}({filteredCategory.length})</h6>
      <div className="homeCards d-flex justify-content-center px-2">
        {filteredCategory
          ? filteredCategory.map((row, index) => {
          /*   console.log("row.logo",index +'-'+row.logo) */
              return (
                <div
                  href="https://nextjs.org/docs"
                  className="landscape-card mb-3"
                  key={index}
                >
                  <div onClick={() => handleCompany(row)} data-tip={row.name}>
               {/*      <ReactTooltip backgroundColor="#04a5b6" textColor="#fff" /> */}
                   {row.logo === "" || null ? <img src={`../apidaysReplacementLogo.png`} alt="" /> : <img src={row.logo} alt="" /> }      
                    {/* <p className="xs-text text-center">{row.name}</p> */}
                  </div>
                </div>
              );
            })
          : "no data"}
      </div>
    </>
  );
}
