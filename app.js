require("colors");
const { inquirerMenu, pauseMenu, readInput } = require("./helpers/inquirer");
const { saveDB } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");


const main = async () => {
    let opt = "";
    const tasks = new Tasks();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const description = await readInput("Descripcion:");
                tasks.createTask(description);
                break;
            case "2":
                console.log(tasks.arrayList);
                break;
            case "3":

                break;
            case "4":

                break;
            case "5":

                break;
            case "6":

                break;
        }

        saveDB(tasks.arrayList);

        await pauseMenu();

    } while (opt !== "0")

};

main();



