//logic for populating cards

// create const variables for all employee classes

// require inquirer

//path, fs

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/pagetemplate");

const teamMembers = [];

const idArray = [];

function appMenu() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is your Manager name?",
        },
      ])
      .then((answers) => {
        console.log(answers);

        const manager = new Manager(answers.managerName);
        teamMembers.push(manager);

        buildTeam();
      });
  }

  function buildTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberSelection",
          message: "Choose the employee",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ])
      .then((answers) => {
        const { memberSelection } = answers;

        switch (memberSelection) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            buildTeam();
            break;
        }
      });
  }

  function createEngineer() {
    console.log("creating engineer");
  }

  function createIntern() {
    console.log("creating intern");
  }

  createManager();
}

appMenu();
