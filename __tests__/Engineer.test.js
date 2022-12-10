// state variable containing require function for Node
const Engineer = require("../lib/Engineer");
// test for eng
test("set up", () => {
  const value = "githubUser";
  const eng = new Engineer("Joe", "1", "Joe@joe.com");

  expect(eng.getGithub()).toBe(value);
});
