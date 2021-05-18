import axios from 'axios';

const getQuestions = async () => {
  let res = await axios.get('https://api.stackexchange.com//2.2/search/advanced?accepted=True&order=desc&sort=creation&site=stackoverflow',{
    headers:{'Access-Control-Allow-Origin': '*'}
  })
    .then((result) => result.data)
    .catch(e => {
      console.log("error in api",e);
      
      throw new Error(e.response.data.message);
    });
  return res;
}

export { getQuestions };

// const options = {
//   method: 'POST',
//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
//   data: qs.stringify(data),
//   url,
// };