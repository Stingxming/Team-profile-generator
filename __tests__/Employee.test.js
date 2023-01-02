// state variable containing require function for Node
const Employee = require("../lib/Employee");
// test for emp
test("set up", () => {
  const value = ("githubUser", "id", "email");
  const emp = new Employee("Joe", "1", "Joe@joe.com");

  expect(emp.getGithub()).toBe(value);
});
