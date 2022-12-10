const Engineer = require("../lib/Engineer");

test("set up", () => {
  const value = "githubUser";
  const eng = new Engineer("name", 1, "Joe@joe.com");

  expect(eng.getGithub()).toBe(value);
});
