/* const { google } = require("googleapis");
const sheets = google.sheets("v4");


const all = {}
const values = [
  {
    name:"Alexei",
    married:true
  },
  {
    name:"Maria",
    married:true
  }
];

export default async function handler(req, res) {

  if (req.method === "GET") {
   res.status(200).json(all)
    
  }

}


const categories = ["banks","fintechs","internationals"]

all.categories=categories
all.values=values
 */

const { google } = require("googleapis");
const sheets = google.sheets("v4");

const sheetValues = {
  values:[],
  categories:[]
};

export default async function handler(req, res) {
   await main();
  if (req.method === "GET") {
   res.status(200).json(sheetValues)
    
  }

}

async function main() {
  const authClient = await authorize();
  const request = await {
    spreadsheetId: "1IpiS6OF9vMLuUaPprUV5U1hQYpyKnK2zYzeihvNW42I",
    range: "Hoja 1!A2:BE",
    valueRenderOption: "FORMATTED_VALUE",
    dateTimeRenderOption: "FORMATTED_STRING",
    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.values.get(request)).data;

    const allData =  response.values;
   allData.forEach((company, index) => {
      const item = {};
        item.id=index
        item.name=company[0]
        item.type=company[1] || null
        item.url=company[2] || null
        item.parentCategorySlug=company[3] || null
        item.subcategory=company[4] || null
        item.logo=company[5] || null
        item.description=company[6] || null
        item.crunchbase=company[7] || null
        item.linkedin=company[8] || null
        item.twitter=company[9] || null
        item.yearFounded=company[10] || null
        item.numberOfFounders=company[11] || null
        item.founderNames=company[12] || null
        item.headquartersCountry=company[13] || null
        item.headquartersCity=company[14] || null
        item.diversitySpotlight=company[15] || null
        item.womanInManagement=company[16] || null
        item.nonWhitePeopleInManagement=company[17] || null
        item.headcount=company[18] || null
        item.numberOfPositionsVacantInPastYear=company[19] || null
        item.estimatedRevenueRange=company[20] || null
        item.knownIndustriesWorkingIn=company[21] || null
        item.numbersOfCustomers=company[22] || null
        item.namesOfActualCustomersAsPerWebsite=company[23] || null
        item.urlOfContentAdressingFinancialServices=company[24] || null
        item.urlOfContentAdressingHealthSector=company[25] || null
        item.urlOfContentAdressingGovernment=company[26] || null
        item.urlOfContentAdressingSustainability=company[27] || null
        item.totalNumberOfNewProducFeaturesInLastYear=company[28] || null
        item.totalProductsActive=company[29] || null
        item.patentsGranted=company[30] || null
        item.acquisitions=company[31] || null
        item.securityIssues=company[32] || null
        item.privacySpecificFeaturesIncluded=company[33] || null
        item.privacyBreaches=company[34] || null
        item.knownPartnerships=company[35] || null
        item.avergaeNumberOfBlogsPerQuarter=company[36] || null
        item.monthlyWebsiteVisits=company[37] || null
        item.monthlyWebsiteVisitsGrowth=company[38] || null
        item.participationInApidays=company[39] || null
        item.activeTechCount=company[40] || null
        item.itSpend=company[41] || null
        item.totalFunding=company[42] || null
        item.lastFundingDate=company[43] || null
        item.top5Investors=company[44] || null
        item.numberLeadOfInvestors=company[45] || null
        item.acquiredBy=company[46] || null
        item.acquisitionPrice=company[47] || null
        item.acquisitionType=company[48] || null
        item.ipoDate=company[49] || null
        item.moneyRaisedAtIpo=company[50] || null
        item.valuationAtIpo=company[51] || null
    

      sheetValues.values.push(item);
    })
  } catch (err) {
    console.error(err);
  }
}

async function categories() {
  const authClient = await authorize();
  const request = await {
    spreadsheetId: "1IpiS6OF9vMLuUaPprUV5U1hQYpyKnK2zYzeihvNW42I",
    range: "Hoja 2!A2",
    valueRenderOption: "FORMATTED_VALUE",
    dateTimeRenderOption: "FORMATTED_STRING",
    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.values.get(request)).data;

    const allData =  response.values;
   sheetValues.length === 0 ? allData.forEach((company, index) => {
      const item = {};
        item.id=index
        
    

      sheetValues.push(item);
    }): null
  } catch (err) {
    console.error(err);
  }
}


async function authorize() {
  let authClient = await process.env.NEXT_PUBLIC_GOOGLE_KEY;
  if (authClient == null) {
    throw Error("authentication failed");
  }
  return authClient;
}


