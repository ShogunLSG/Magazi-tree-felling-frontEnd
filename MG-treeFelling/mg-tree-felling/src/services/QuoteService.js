import axios from "axios";

const QUOTE_REQUEST_URL = "http://localhost:8081/requestQuote";

class QuoteService {
  sendRequest(arg) {
    return axios.post(QUOTE_REQUEST_URL, arg).catch((err) => {
      console.log(err);
    });
  }
}

export default new QuoteService();
