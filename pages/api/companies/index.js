const { google } = require("googleapis");
const sheets = google.sheets("v4");

const sheetValues = [];

export default async function handler(req, res) {
   await main();
  if (req.method === "GET") {
   res.status(200).json(sheetValues)
    
  }

}

async function main() {
  const authClient = await authorize();
  const request = await {
    spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,
    range: "A2:N",
    valueRenderOption: "FORMATTED_VALUE",
    dateTimeRenderOption: "FORMATTED_STRING",
    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.values.get(request)).data;

    const allData =  response.values;
   sheetValues.length === 0 ? allData.forEach((value, index) => {
      const item = {};
      item.id=index;
      item.name = value[0];
      item.description = value[1];
      item.logo=value[2]
      item.crunchbase=value[3]
      item.twitter=value[4]
      item.repositories=value[5]
      item.linkedin=value[6]
      item.contributors=value[7]
      item.commits=value[8]
      item.headquarters=value[9]
      item.category=value[10]
      item.chart1=value[12]
      item.chart2=value[13]

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