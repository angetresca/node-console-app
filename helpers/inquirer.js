const inquirer = require("inquirer");
require("colors");

const questions = [
    {
        type: "list",
        name: "option",
        message: "¿Qué desea hacer?",
        choices: [
            {
                value: "1",
                name: `${"1.".blue} ${"Crear tarea".yellow}`
            },
            {
                value: "2",
                name: `${"2.".blue} ${"Listar tareas".yellow}`
            },
            {
                value: "3",
                name: `${"3.".blue} ${"Listar tareas completadas".yellow}`
            },
            {
                value: "4",
                name: `${"4.".blue} ${"Listar tareas pendientes".yellow}`
            },
            {
                value: "5",
                name: `${"5.".blue} ${"Completar tarea(s)".yellow}`
            },
            {
                value: "6",
                name: `${"6.".blue} ${"Borrar tarea".yellow}`
            },
            {
                value: "0",
                name: `${"0.".blue} ${"Salir".yellow}`
            },
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("************************************".blue);
    console.log("****** MENÚ TAREAS POR HACER ******".yellow)
    console.log("************************************".blue);

    const { option } = await inquirer.prompt(questions);

    return option;
}

const readInput = async (message) => {
    const inputQuestion = [{
        type: "input",
        name: "description",
        message,
        validate(value) {
            if (value.length === 0) {
                return "Por favor ingrese un valor";
            }
            return true;
        }
    }]
    console.log("\n");
    const { description } = await inquirer.prompt(inputQuestion);
    return description;
}

const pauseMenu = async () => {
    const inputQuestion = [{
        type: "input",
        name: "enter",
        message: `${"Presione".yellow} ${ "ENTER".blue } ${"para continuar...".yellow}`,
    }]
    console.log("\n");
    await inquirer.prompt(inputQuestion);
}

module.exports = {
    inquirerMenu,
    pauseMenu,
    readInput
}
