//75ba19df-f16a-478b-b34a-d01055698868
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_b1e6ebfa88674ac6b61b426ee9631ee7'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICczQmIwZDc2Y2RiNTQ3YzhBZjVmMjVCYjkwY2ZjMTExYTkzZGE0MEQxJykgJiYgDQoodHhfbG9nc19hZGRyZXNzID09ICcweDY3YzU4MzA5ZjIwZDdEQmY0NTcxODQyY0ZhMTVEN2IzOTk4MGVkZTAnKSAmJiANCih0eF9sb2dzX3RvcGljMCA9PSAnMHhkZGYyNTJhZDFiZTJjODliNjljMmIwNjhmYzM3OGRhYTk1MmJhN2YxNjNjNGExMTYyOGY1NWE0ZGY1MjNiM2VmJyk=',
  network: 'ethereum-sepolia',
  destinationIds: ['0aa8de13-1629-441c-9947-74ac51322da1']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ '3Bb0d76cdb547c8Af5f25Bb90cfc111a93da40D1') && 
// (tx_logs_address == '0x67c58309f20d7DBf4571842cFa15D7b39980ede0') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')