#!/usr/bin/env node
import inquirer from "inquirer";

const quiz: {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
} = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "How many world cups has Pakistan won in cricket?",
        choices: ["1", "2", "3", "4"],
    },
    {
        name: "question2",
        type: "list",
        message: "How many world cups has Pakistan won in hockey?",
        choices: ["1", "2", "3", "4"],
    },
    {
        name: "question3",
        type: "list",
        message: "How many T20 world cups has Pakistan won?",
        choices: ["1", "2", "3", "4"],
    },
    {
        name: "question4",
        type: "list",
        message: "Which country will host the next T20 world cup?",
        choices: ["westindies", "pakistan", "india", "england"],
    },
    {
        name: "question5",
        type: "list",
        message: "Who is the captain of the Pakistan T20 cricket team?",
        choices: ["babar azam", "shadab khan", "fakhar zaman", "shaheen afridi"],
    },
]);

let score: number = 0;

switch (quiz.question1) {
    case "1":
        console.log("1-correct");
        ++score;
        break;
    default:
        console.log("1-incorrect");
}

switch (quiz.question2) {
    case "4":
        console.log("2-correct");
        ++score;
        break;
    default:
        console.log("2-incorrect");
}

switch (quiz.question3) {
    case "1":
        console.log("3-correct");
        ++score;
        break;
    default:
        console.log("3-incorrect");
}

switch (quiz.question4) {
    case "westindies":
        console.log("4-correct");
        ++score;
        break;
    default:
        console.log("4-incorrect");
}

switch (quiz.question5) {
    case "babar azam":
        console.log("5-correct");
        ++score;
        break;
    default:
        console.log("5-incorrect");
}

console.log(`Score: ${score}`);
