const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_b1e6ebfa88674ac6b61b426ee9631ee7'
};
//b39829dc-4142-4cd4-b812-54c5b2475ef2
const data = {
  name: 'My Destination',
  to_url: 'https://3453-2409-4050-dbe-f4ca-dafa-8f18-eb1f-a2f4.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));