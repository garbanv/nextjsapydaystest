const {google} = require('googleapis');
const sheets = google.sheets('v4');


const sheetValues = []

async function main () {
  const authClient = await authorize();
  const request = await  {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: process.env.NEXT_PUBLIC_SHEET_ID,  // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    range: 'A2:N',  // TODO: Update placeholder value.

    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    valueRenderOption: 'FORMATTED_VALUE',  // TODO: Update placeholder value.

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    dateTimeRenderOption: 'FORMATTED_STRING',  // TODO: Update placeholder value.

    auth: authClient,
  };

  try {
    const response = (await sheets.spreadsheets.values.get(request)).data;
    // TODO: Change code below to process the `response` object:
/*     console.log(JSON.stringify(response, null, 2)); */
   
   
const allData = await response.values;
allData.forEach((value,index)=>{
    const item = {}
    item.name=value[0]
    item.description=value[1]
    sheetValues.push(item)
   
})



  } catch (err) {
    console.error(err);
  }
}
main();

async function authorize() {
  let authClient =  await process.env.NEXT_PUBLIC_GOOGLE_KEY;
  if (authClient == null) {
    throw Error('authentication failed');
  }
  return authClient;
}


  export default function handler(req, res) {
    if (req.method === 'GET') {
      sheetValues ? res.status(200).json(sheetValues) : res.json({data:"Something failed"})
      
    } 
  }