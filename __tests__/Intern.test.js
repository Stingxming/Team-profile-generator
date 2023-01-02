// state variable containing require function for Node
const Intern = require("../lib/Intern");
// test for int
test("set up", () => {
  const value = ("githubUser", "id", "email");
  const int = new Intern("Joe", "1", "Joe@joe.com");

  expect(int.getGithub()).toBe(value);
});
