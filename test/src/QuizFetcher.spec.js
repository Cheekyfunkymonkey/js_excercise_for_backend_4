const assert = require("power-assert");
const QuizFetcher = require("../../src/QuizFetcher");

describe("QuizFetcherのクラス", () => {
  describe("fetchメソッドの挙動確認", () => {
    it("fetchメソッドという名前のクラスメソッドをもつ", () => {
      assert.equal(QuizFetcher.hasOwnProperty("fetch"), true);
      assert.equal(typeof QuizFetcher.fetch, "function");
    });

    it("【async/await版】fetchメソッドの戻り値型チェック", async () => {
      const data = await QuizFetcher.fetch();
      const results = await data.results;

      //results プロパティを持つ
      assert.equal(data.hasOwnProperty("results"), true);
      //results プロパティはは10件データをもつ配列である
      assert.equal(results.length, 10);
      //results プロパティの配列の中身は全てオブジェクトで、次のプロパティを持つ
      results.forEach(result => {
        assert.equal(typeof result, "object");
        assert.equal(result.hasOwnProperty("category"), true);
        assert.equal(result.hasOwnProperty("type"), true);
        assert.equal(result.hasOwnProperty("difficulty"), true);
        assert.equal(result.hasOwnProperty("question"), true);
        assert.equal(result.hasOwnProperty("correct_answer"), true);
        assert.equal(result.hasOwnProperty("incorrect_answers"), true);
      });
      //typeof を使って、書くプロパティ値の型をテストする
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

    it("【Promise版】fetchメソッドの戻り値型チェック", () => {
      return QuizFetcher.fetch()
        .then(data => {
          //results プロパティを持つ
          assert.equal(data.hasOwnProperty("results"), true);
          return data.results;
        })
        .then(results => {
          //results プロパティはは10件データをもつ配列である
          assert.equal(results.length, 10);
          //results プロパティの配列の中身は全てオブジェクトで、次のプロパティを持つ
          results.forEach(result => {
            assert.equal(typeof result, "object");
            assert.equal(result.hasOwnProperty("category"), true);
            assert.equal(result.hasOwnProperty("type"), true);
            assert.equal(result.hasOwnProperty("difficulty"), true);
            assert.equal(result.hasOwnProperty("question"), true);
            assert.equal(result.hasOwnProperty("correct_answer"), true);
            assert.equal(result.hasOwnProperty("incorrect_answers"), true);
          });
          //typeof を使って、書くプロパティ値の型をテストする
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

    it("【コールバック(done)版】fetchメソッドの戻り値型チェック", done => {
      const data = QuizFetcher.fetch();
      const results = data.results;
      done();

      //results プロパティを持つ
      assert.equal(data.hasOwnProperty("results"), true);
      //results プロパティはは10件データをもつ配列である
      assert.equal(results.length, 10);
      //results プロパティの配列の中身は全てオブジェクトで、次のプロパティを持つ
      results.forEach(result => {
        assert.equal(typeof result, "object");
        assert.equal(result.hasOwnProperty("category"), true);
        assert.equal(result.hasOwnProperty("type"), true);
        assert.equal(result.hasOwnProperty("difficulty"), true);
        assert.equal(result.hasOwnProperty("question"), true);
        assert.equal(result.hasOwnProperty("correct_answer"), true);
        assert.equal(result.hasOwnProperty("incorrect_answers"), true);
      });
      //typeof を使って、書くプロパティ値の型をテストする
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
