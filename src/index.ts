import showBanner from "node-banner";
import chalk from "chalk";
import inquirer from "inquirer";
import Result from "./modules/Result.js";

(async () => {
    await showBanner('Usman Cal', 'CLI Calculator','green');
})();
let repeat= true;
let history=[];

while(repeat){
let answers = await inquirer.prompt([{
    name: "firstValue",
    type: "number",
    message: "Enter first value:"},
    {
        type: 'rawlist',
        name: 'operation',
        message: '',
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
  history.push(`${answers.firstValue} ${answers.operation} ${answers.secondValue} = ${total}`)
  
  let rep = await inquirer.prompt([{
    type: 'rawlist',
    name: "repeat",
    message: "Want to do more Operation:",
    choices: [
      'Yes',
      'No',
      'History'
    ]}]);

    if(rep.repeat === "No"){
      repeat= false;
    }
    if(rep.repeat ==="History"){
      let hist = await inquirer.prompt([{
        type: 'rawlist',
        name: "history",
        message: "",
        choices: [
          'Show',
          'Clear'
        ]}]);
    if(hist.history === "Show"){
      history.forEach(x => console.log(x));
    }
    if(hist.history === "Clear"){
      history.length=0;
    }

    }
}
