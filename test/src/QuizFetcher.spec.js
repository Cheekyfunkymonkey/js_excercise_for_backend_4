const assert = require("power-assert");
const QuizFetcher = require("../../src/QuizFetcher");

describe("QuizFetcher.js test", () => {
  it("should have results property", () => {
    return QuizFetcher.fetch().then(data => {
      assert.equal(data.hasOwnProperty("results"), true);
    });
  });
  it("should be an array that has 10 values", () => {
    return QuizFetcher.fetch()
      .then(data => data.results)
      .then(results => {
        assert.equal(results.length, 10);
      });
  });
  it("all the values in results array should be objects", () => {
    return QuizFetcher.fetch()
      .then(data => data.results)
      .then(results => {
        results.forEach(result => {
          assert.equal(typeof result, "object");
        });
      });
  });
  it("the objects in results array should have category, type, difficulty, question, correct_answer and incorrect_answers properties", () => {
    return QuizFetcher.fetch()
      .then(data => data.results)
      .then(results => {
        results.forEach(result => {
          assert.equal(result.hasOwnProperty("category"), true);
          assert.equal(result.hasOwnProperty("type"), true);
          assert.equal(result.hasOwnProperty("difficulty"), true);
          assert.equal(result.hasOwnProperty("question"), true);
          assert.equal(result.hasOwnProperty("correct_answer"), true);
          assert.equal(result.hasOwnProperty("incorrect_answers"), true);
        });
      });
  });
  it("category, type, difficulty, question and correct_answer properties should be string. incorrect_answers should be an array with three strings", () => {
    return QuizFetcher.fetch()
      .then(data => data.results)
      .then(results => {
        results.forEach(result => {
          assert.equal(typeof result.category, "string");
          assert.equal(typeof result.type, "string");
          assert.equal(typeof result.difficulty, "string");
          assert.equal(typeof result.question, "string");
          assert.equal(typeof result.correct_answer, "string");
          assert.equal(Array.isArray(result.incorrect_answers), true);
          result.incorrect_answers.forEach(incorrect_answer => {
            assert.equal(typeof incorrect_answer, "string");
          });
        });
      });
  });
});
