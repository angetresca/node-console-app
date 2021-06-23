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
                name: "1. Crear tarea"
            },
            {
                value: "2",
                name: "2. Listar tareas"
            },
            {
                value: "3",
                name: "3. Listar tareas completadas"
            },
            {
                value: "4",
                name: "4. Listar tareas pendientes"
            },
            {
                value: "5",
                name: "5. Completar tarea(s)"
            },
            {
                value: "6",
                name: "6. Borrar tarea"
            },
            {
                value: "0",
                name: "0. Salir"
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

const pauseMenu = async () => {
    const inputQuestion = [{
        type: "input",
        name: "enter",
        message: `Presione ${ "ENTER".blue } para continuar...`,
    }]
    console.log("\n");
    await inquirer.prompt(inputQuestion);
}

module.exports = {
    inquirerMenu,
    pauseMenu
}
