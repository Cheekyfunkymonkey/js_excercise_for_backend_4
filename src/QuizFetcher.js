const axios = require("axios");

class QuizFetcher {
  static async fetch() {
    const API_URL = "https://opentdb.com/api.php?amount=10&type=multiple";
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      return data;
    } catch (error) {
      console.log("データの取得に失敗しました。", error.message);
    }
  }
}

module.exports = QuizFetcher;
