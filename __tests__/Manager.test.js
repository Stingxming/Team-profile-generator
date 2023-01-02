// state variable containing require function for Node
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
// test for man
test("set up", () => {
  const value = ("githubUser", "id", "email");
  const man = new Manager("Joe", "1", "Joe@joe.com");

  expect(man.getGithub()).toBe(value);
});
