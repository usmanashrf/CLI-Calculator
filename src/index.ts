import showBanner from "node-banner";
import chalk from "chalk";
import inquirer from "inquirer";
import Result from "./modules/Result.js";

(async () => {
    await showBanner('Usman Cal', 'CLI Calculator','green');
})();

let answers = await inquirer.prompt([{
    name: "firstValue",
    type: "number",
    message: "Enter first value:"},
    {
        type: 'rawlist',
        name: 'operation',
        message: 'What do you want to do?',
        choices: [
          '+',
          '-',
          'X',
          '/',
          '^'
        ]
      },
    {
        name: "secondValue",
        type: "number",
        message: "Enter second value:"}
]);
//console.log(typeof answers.num1,typeof answers.num2);
let total = Result(answers.firstValue,answers.secondValue,answers.operation);
console.log(total); 