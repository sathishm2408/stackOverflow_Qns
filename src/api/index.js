import axios from 'axios';

const getQuestions = async () => {
  try {
    let res = await axios.get('https://api.stackexchange.com//2.2/search/advanced?accepted=True&order=desc&sort=creation&site=stackoverflow')
    return res;
  } catch (e) {
    console.log("error in api", e);
    throw new Error(e.response.data.message);
  };
}

export { getQuestions };

// const options = {
//   method: 'POST',
//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
//   data: qs.stringify(data),
//   url,
// };

// headers: {
//   'Access-Control-Allow-Origin': '*',
//   'access-control-allow-methods': 'GET',
//   'content-type': 'application/json',
//   'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
// }