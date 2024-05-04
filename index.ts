#! /usr/bin/env node
import inquirer from "inquirer";
import { listenerCount } from "process";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    let fuel = 100;
    this.fuel = fuel;
  }
}

class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

let player = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Please enter your name:",
  },
]);

let opponent = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: "Select your opponent",
    choices: ["Pirate", "Dragon", "Knight"],
  },
]);

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do {
  if (opponent.select == "Pirate") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "what would you like to do?",
        choices: ["Fight", "Drink portion", "Run"],
      },
    ]);
    if (ask.opt == "Fight") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("You Lost! Break a leg next time");
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("You Win!");
          process.exit();
        }
      }
      if (ask.opt == "Run") {
        p1.fuelIncrease();
        console.log(`You Drink Portion Your fuel is ${p1.fuel}`);
      }
      if (ask.opt == "Run") {
        console.log("You Lost! Break a leg next time");
        process.exit();
      }
    }
  }
  if (opponent.select == "Dragon") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "what would you like to do?",
        choices: ["Fight", "Drink portion", "Run"],
      },
    ]);
    if (ask.opt == "Fight") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("You Lost! Break a leg next time");
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("You Win!");
          process.exit();
        }
      }
      if (ask.opt == "Run") {
        p1.fuelIncrease();
        console.log(`You Drink Portion Your fuel is ${p1.fuel}`);
      }
      if (ask.opt == "Run") {
        console.log("You Lost! Break a leg next time");
        process.exit();
      }
    }
  }
  if (opponent.select == "Knight") {
    let ask = await inquirer.prompt([
      {
        name: "opt",
        type: "list",
        message: "what would you like to do?",
        choices: ["Fight", "Drink portion", "Run"],
      },
    ]);
    if (ask.opt == "Fight") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("You Lost! Break a leg next time");
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if (p1.fuel <= 0) {
          console.log("You Win!");
          process.exit();
        }
      }
      if (ask.opt == "Run") {
        p1.fuelIncrease();
        console.log(`You Drink Portion Your fuel is ${p1.fuel}`);
      }
      if (ask.opt == "Run") {
        console.log("You Lost! Break a leg next time");
        process.exit();
      }
    }
  }
} while (true);
