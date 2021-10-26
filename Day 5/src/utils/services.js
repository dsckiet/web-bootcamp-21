import axios from "axios";

const BASE_URL = "https://dscbootcamp.herokuapp.com";
axios.defaults.baseURL = BASE_URL;

const config = {
  headers: {
    "api-key": "apna daalo mail",
  },
};

export async function addFlashCard(data) {
  try {
    const response = await axios.post("/flashcards", data, config);
    console.log(response);
    if (response.status === 200 && response.data.error === false) {
      return {
        res: response.data,
      };
    } else return response.data;
  } catch (err) {
    if (err.response) throw err.response.data;
    else throw err.message;
  }
}
