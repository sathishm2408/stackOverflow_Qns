import axios from 'axios';

const getQuestions = async () => {
  let res = await axios.get('https://api.stackexchange.com//2.2/search/advanced?accepted=True&order=desc&sort=creation&site=stackoverflow')
    .then((result) => result.data)
    .catch(e => {
      throw new Error(e.response.data.message);
    });
  return res;
}

export { getQuestions };