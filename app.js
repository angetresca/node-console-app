require("colors");
const { inquirerMenu, pauseMenu, readInput, listTasksToDelete, confirm } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");


const main = async () => {
    let opt = "";
    const tasks = new Tasks();

    const tasksDB = readDB();

    if (tasksDB) {
        tasks.loadTasksFromArray(tasksDB);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case "1":
                const description = await readInput("Descripcion:");
                tasks.createTask(description);
                break;
            case "2":
                tasks.printCompleteList();
                break;
            case "3":
                tasks.listPendingOrCompleted(completed=true);
                break;
            case "4":
                tasks.listPendingOrCompleted(completed=false);
                break;
            case "5":

                break;
            case "6":
                const id = await listTasksToDelete( tasks.arrayList );

                const isSureToDelete = confirm("¿Estás seguro que deseas borrar esta tarea?");

                if (isSureToDelete) {
                    tasks.deleteTask(id);
                    console.log("Tarea borrada correctamente!");
                }
                break;
        }

        saveDB(tasks.arrayList);

        if (opt !== "0") await pauseMenu();

    } while (opt !== "0")

};

main();



