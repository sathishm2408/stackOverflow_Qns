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
